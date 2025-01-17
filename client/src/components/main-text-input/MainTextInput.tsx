import React, {
	useRef,
	useContext,
	FocusEvent,
	KeyboardEvent,
	ChangeEvent,
	useState
} from 'react';
import axios from 'axios';
import { useDispatch } from 'react-redux';

import { InitContext } from 'global/context/InitContext';
import { getAuthInfoAction } from 'global/ducks/authDucks';

import arrow from 'assets/images/icons/icons-main/icon-arrow.svg';
import { Form, Textarea, MainBtn } from './MainTextInput.style';

type DataType = {
	_id: string;
	key: string;
};

export default function MainTextInput<
	T extends {
		username: string;
		setUsername: React.Dispatch<React.SetStateAction<string>>;
		formCustomStyle?: CustomStyles;
	}
>({ username, setUsername, formCustomStyle }: T) {
	const tqField = useRef<HTMLTextAreaElement>(null);
	const isFieldDisabled = useRef(false);
	const [inputMode, setInputMode] = useState(false);
	const [showSubmitBtn, setShowSubmitBtn] = useState(false);
	const tqForm = useRef<HTMLFormElement>(null);
	const dispatch = useDispatch();

	const {
		state: {
			socket,
			lang: { Main: lang }
		}
	} = useContext(InitContext);

	const formatVal = (val: string): string => {
		let l = val.length;
		return val!.slice(0, l - (l - 20)) as string;
	};

	const handleFormSubmit = (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault();
		const userVal = username;
		socket.emit('tq:exists', { username: userVal });
		socket.once('tq:exists', function (data: DataType) {
			if (data == null) {
				socket.emit('tq:register', { tquser: userVal });
				socket.on('save:LS', function (data: DataType) {
					localStorage.setItem(data._id, data.key);
					socket.emit('tq:login', data);
				});
			} else {
				data.key = localStorage.getItem(data._id) as string;
				socket.emit('tq:login', data);
			}
			socket.once('tq:login', async function <
				T extends {
					key: string;
					expired: boolean;
				}
			>(res: T) {
				if (res.expired) {
					return 0;
				}
				const keyVal = res.key != null ? res.key : 'err';
				let settings = {
					headers: { 'Content-Type': 'application/json' }
				};
				const resp = await axios.post(
					`/user/auth?tquser=${userVal}&tqpwd=${keyVal}`,
					settings
				);
				const data = await resp.data;
				if (data.authenticated) {
					dispatch(getAuthInfoAction());
				}
			});
		});
	};

	const handleFieldChange = (
		e: ChangeEvent<HTMLTextAreaElement> & KeyboardEvent<HTMLTextAreaElement>
	) => {
		const curr = tqForm.current!;
		const targetElement = e.target as HTMLTextAreaElement;
		console.log(e.key);
		if (e.key === 'Enter') {
			curr.dispatchEvent(new Event('submit', { cancelable: true }));
			curr.disabled = true;
			isFieldDisabled.current = true;
		}
		if (!isFieldDisabled.current) {
			let { value: val } = targetElement;
			val = val.match(/^[a-zA-Z0-9-\s]*$/) ? val : username;
			val = val.replace(
				/\s/g,
				val[0] !== ' ' &&
					val[targetElement.selectionStart] !== '-' &&
					val[targetElement.selectionStart - 2] !== '-'
					? '-'
					: ''
			);
			setUsername(formatVal(val));
			setShowSubmitBtn(val.length >= 3);
		}
	};

	const handleFieldFocus = (e: FocusEvent<HTMLTextAreaElement>) => {
		setInputMode(!(e.type === 'blur' && username.length === 0));
		if (e.type === 'focus') tqField.current!.focus();
	};

	return (
		<Form
			isInputMode={inputMode}
			tabIndex={-1}
			data-show-submitbtn={showSubmitBtn}
			onSubmit={handleFormSubmit}
			formCustomStyle={formCustomStyle}
			ref={tqForm}
		>
			<Textarea
				value={username}
				id="usrTQ"
				data-name="tquser"
				isInputMode={inputMode}
				data-type={inputMode ? 'text' : 'button'}
				onChange={handleFieldChange}
				onFocus={handleFieldFocus}
				onBlur={handleFieldFocus}
				onKeyPress={handleFieldChange}
				ref={tqField}
				spellCheck="false"
				autoComplete="off"
				maxLength={20}
				placeholder={!inputMode ? lang['InputPlaceholder'] : ''}
				data-testid="username-field"
			></Textarea>
			{showSubmitBtn && (
				<MainBtn type="submit" data-testid="btn-submit">
					<img src={arrow} alt="arrow" />
				</MainBtn>
			)}
		</Form>
	);
}
