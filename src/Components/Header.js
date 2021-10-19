import React from 'react';
import { Link } from 'react-router-dom';

// STYLES
import '../Styles/Header.css';
const Header = ({ title, position }) => {
	return (
		<div className={`header ${position ? 'absolute' : ''}`}>
			<div className='header__img--container'>
				<img
					src={`images/Logo.png`}
					alt='Midwestern Interactive Logo'
				/>
			</div>
			<div className='header__nav'>
				<Link
					to={title === 'home' ? '/' : '/contact'}
					className='header__nav--link'
				>
					{title}
				</Link>
			</div>
		</div>
	);
};

export default Header;
