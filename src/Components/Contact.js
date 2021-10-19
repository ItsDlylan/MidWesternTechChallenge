import React, { useState } from 'react';
import axios from 'axios';
import { useAlert, positions } from 'react-alert';
// COMPONENTS
import Header from './Header';
// STYLES
import '../Styles/Contact.css';

const Contact = () => {
	const [firstName, setFirstName] = useState('');
	const [lastName, setLastName] = useState('');
	const [title, setTitle] = useState('');
	const [email, setEmail] = useState('');
	const [message, setMessage] = useState('');
	const alert = useAlert();
	const handleSubmit = async (e) => {
		e.preventDefault();
		// do something with form data
		let FormData = { firstName, lastName, title, email, message };
		const res = await axios.post(
			'http://localhost:5000/contact-form',
			FormData,
		);
		console.log(res.data.message);

		// Reset form data.
		setFirstName('');
		setLastName('');
		setTitle('');
		setEmail('');
		setMessage('');
		alert.show(res.data.message, {
			type: 'success',
			position: positions.BOTTOM_LEFT,
		});
	};

	return (
		<div className='contact'>
			<Header title='home' position='absolute' />
			<div className='contact__left__container'>
				<div className='contact__left__content'>
					<h1 className='contact__left__content--heading'> One</h1>
					<p className='contact__left__content--paragraph'>
						Lorem ipsum dolor sit amet, consecetur adispiscing elit,
						sed do dos eiusmod tempor incididunt ut labore et trace
						dolore magna aliqua.
						<br />
						<br />
						Proin sagittis nisl rhoncus mattis rhoncus. At augue
						eget arcu dictum varius duis at consectetur lorem
					</p>
				</div>
			</div>
			<div className='contact__right__container'>
				<div className='contact__right__content'>
					<h1 className='contact__right__content--header'>
						Heading Two
					</h1>
					<form className='contact__form' onSubmit={handleSubmit}>
						<input
							type='text'
							placeholder={'First Name'}
							value={firstName}
							onChange={(e) => setFirstName(e.target.value)}
						/>
						<input
							className='contact__form__input--lastName'
							type='text'
							placeholder={'Last Name'}
							value={lastName}
							onChange={(e) => setLastName(e.target.value)}
						/>
						<input
							type='text'
							placeholder={'Title'}
							value={title}
							onChange={(e) => setTitle(e.target.value)}
						/>
						<div className='email__form__group'>
							<label className='email__required' htmlFor='email'>
								Required
							</label>
							<input
								className='email__form__input'
								type='email'
								id='email'
								placeholder={'Email'}
								required
								name='email'
								value={email}
								onChange={(e) => setEmail(e.target.value)}
							/>
						</div>

						<textarea
							placeholder={'Message'}
							value={message}
							onChange={(e) => setMessage(e.target.value)}
						/>

						<button className='form__submit' type='submit'>
							Submit
						</button>
					</form>
				</div>
			</div>
		</div>
	);
};

export default Contact;
