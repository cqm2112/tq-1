import React, { useRef, useEffect, useState, useContext } from 'react';
import { Link } from 'react-router-dom';
import { useSelector, RootStateOrAny } from 'react-redux';
import { InitContext } from '../../global/context/InitContext';
import Slider from 'components/link/Slider';
import Modal from 'components/link/Modal';
import './Link-idx.css';
import copy from 'assets/images/icons/icons-inbox/icon-link.svg';
import tqIcon from 'assets/images/msg/profile-tq.png';

export default function LinkIdx() {
	const inputLink = useRef<HTMLInputElement>(null);
	const { user } = useSelector((store: RootStateOrAny) => store.auth);
	const [name, setName] = useState('');
	const [link, setLink] = useState('');
	const [showPlaceholder, setShowPlaceholder] = useState(false);
	const [showCopiedLinkMsg, setShowCopiedLinkMsg] = useState(false);
	const [showModal, setShowModal] = useState(false);
	const btnLink = useRef(null);

	const {
		state: {
			lang: { Link: lang },
		},
	} = useContext(InitContext);

	useEffect(() => {
		if (showPlaceholder) {
			console.log('rendered');
		}
	}, [showPlaceholder]);

	useEffect(() => {
		(async () => {
			if (user) {
				await setName(user.enteredname);
			}
		})();
	}, [user]);

	const copyLink = async () => {
		await setLink(`${window.location.origin}/${name}`);
		inputLink.current!.select();
		inputLink.current!.setSelectionRange(0, 99);
		document.execCommand('copy');
		setShowCopiedLinkMsg(true);
		setTimeout(() => setShowCopiedLinkMsg(false), 7000);
	};

	return (
		<div styleName="container">
			<div>
				<Slider setShowPlaceholder={setShowPlaceholder} />
			</div>
			<div>
				<div styleName="col">
					<div styleName="col-inner-container">
						<button
							type="button"
							styleName="btn-waves-effect-waves-light"
							ref={btnLink}
							onClick={copyLink}
						>
							{showCopiedLinkMsg ? (
								<>{lang['BtnLinkCopiedToClipboard']}</>
							) : (
								<>
									<span> {lang['BtnCopyLink']} </span>
									<img src={copy} alt="copy" />
								</>
							)}
						</button>
						<button
							styleName="btn-copied-link-help"
							onClick={() => setShowModal(true)}
							style={{
								visibility: !showModal ? 'visible' : 'hidden',
							}}
						>
							?
						</button>
						<Modal
							modalTxt={`${lang['AlertLinkCopied']}.`}
							showModal={showModal}
							setShowModal={setShowModal}
						/>
					</div>
					<input
						type="text"
						value={link}
						styleName="_tq-link-user"
						aria-hidden="true"
						ref={inputLink}
						readOnly={true}
					/>
				</div>
				<div styleName="col">
					<Link to="/messages" styleName="a_btn-tq">
						<button type="button" styleName="_btn-tq">
							<span>{lang['BtnInbox']}</span>
							<img src={tqIcon} alt="logo" />
						</button>
					</Link>
				</div>
			</div>
		</div>
	);
}