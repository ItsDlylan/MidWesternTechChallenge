import React from 'react';

// STYLES
import '../Styles/Card.css'




const Card = ({ imageName }) => {
	return (
		<div className="card__container">
			<div className="card__img__container">
                <img src={`images/${imageName}.png`} alt={`${imageName} SVG`} />
            </div>
            <h2 className="card__heading">Heading Two</h2>
            <p className="card__primary--text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum saepe quidem quas cum quia atque!</p>
            <button className="card__cta">Learn More</button>
		</div>
	);
};

export default Card;
