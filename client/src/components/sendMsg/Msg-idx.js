import React, { useEffect, useState, useContext } from "react";
import Error404 from '../error/404';
import '../../assets/styles/Msg.css';
import logo from '../../assets/images/logo.tq.png';
import { InitContext } from '../../global/context/InitContext';

export default function ({ match: { params }, ...rest }) {
  const { socket } = useContext(InitContext);
  params.username = params.username.toLowerCase();
  const [userExists, setUserExists] = useState(true);

  useEffect(() => {
    if(socket !== undefined){
      socket.emit('tq:exists', { username: params.username });
      socket.on('tq:exists', (data) => {
        if (data === null) {
          setUserExists(false);
        }
        if(null !== data && data.expired){
          setUserExists(false);
        }
      });
    }
  }, [socket, rest.socket, params.username]);

  return (
    <>
      {
        !userExists ?
          <Error404 /> :
          <Success
            username={params.username}
            socket={socket}
          />
      }
    </>
  );
}

function Success({ username, socket }) {
  const [msg, setMsg] = useState('');
  const [sent, setSent] = useState(false);

  useEffect(() => {
    if(socket !== undefined){
      socket.on('msg:send', data => {
        if(data.sent){
          setSent(true);
          setMsg('');
        }
      });
    }
  }, [socket]);

  const handleInputChange = async (e) => {
    const { value } = e.target;
    if(' ' === value)
      return 0;
    else
      await setMsg(value);
  }

  const handleFormSubmit = (e) => {
    e.preventDefault();
    const data = { username, msg }
    socket.emit('msg:send', data);
  }

  return (
    
    
 
    <div className="valign-wrapper" style={{ minHeight: '90vh' }}>
      
      
        <form onSubmit={handleFormSubmit}>
          
        <div styleName="contenedor">
        <div className="center" >
          <img
                                 
                        className="responsive-image"
                        styleName="logoCloud"
                        src={logo}
                        alt="logo"
                        draggable="false"
                    /></div>
             <div className="center" >
              <h3 className="center" styleName="user">{username}</h3>
              <h5 className="center" styleName="firstRowText" >te invitó a que le dejes un</h5>
                       <h5 className="center" styleName="secondRowText">Mensaje anonimo</h5>
           
          
            
          
            {
              sent ? 'Mensaje env\xEDado' : ''
            }
            <div  styleName="Desing" >
            <textarea 
            
            styleName="Input-msg"
              type="text" 
              name="msg" 
              value={msg}
              id="msg"
              placeholder="DIGITA TU MENSAJE"
              onChange={handleInputChange}
              autoComplete= "off"
            />
            </div>
          <button 
         type="button" 
         className="btn waves-effect waves-light"
         styleName="_btn-tq"
                        
          >
          Enviar;
          <i className="material-icons right">
                            
            </i>
          </button>
          </div>
         </div>
         
        </form>
    </div>
  )
}
