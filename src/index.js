import React from 'react';
import ReactDOM from 'react-dom';
import { transitions, positions, Provider as AlertProvider } from 'react-alert';
import App from './Components/App';

// STYLES
import './index.css';

const options = {
	position: positions.TOP_CENTER,
	timeout: 5000,
	offset: '30px',
	transition: transitions.SCALE,
};

const AlertTemplate = ({ style, options, message, close }) => (
	<div className='alert' style={style}>
		<h4 className={`alertMessage ${options.type}`}>
			{options.type === 'info'}
			{options.type === 'success' && 'SUCCESS 🎉 : '}
			{options.type === 'error' && 'ERROR 💥 : '}
			{message}
		</h4>
		<button className='alertButton' onClick={close}>
			X
		</button>
	</div>
);

ReactDOM.render(
	<AlertProvider template={AlertTemplate} {...options}>
		<App />
	</AlertProvider>,
	document.getElementById('root'),
);
