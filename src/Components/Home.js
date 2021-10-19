import React, { useState } from 'react';
import { useAlert } from 'react-alert';
import axios from 'axios';
// COMPONENTS
import Header from './Header';
import Card from './Card';

// STYLES
import '../Styles/Home.css';

let list1 = ['Matt Johnson', 'Bart Paden', 'Ryan Doss', 'Jared Malcolm'];
const list2 = ['Matt Johnson', 'Bart Paden', 'Jordan Heigle', 'Tyler Viles'];

const Home = () => {
	const getData = () => {
		axios.get('http://localhost:5000/').then((res) => {
			console.log(res.data);
		});
	};
	getData();
	const [count, setCount] = useState(0);
	const [list, setList] = useState([]);

	const alert = useAlert();
	const renderList = () => {
		if (count === 0) {
			setCount(1);
			list1 = list1.filter((val) => !list2.includes(val));

			setList(list1.concat(list2));
			return;
		}
		alert.show("You've already clicked that!", { type: 'error',  });
	};

	return (
		<div className='home'>
			<Header title='contact' />
			<div className='home__main__content'>
				<Card imageName='Talkie' />
				<Card imageName='Rabbit' />
				<Card imageName='Shield' />
			</div>
			<section className='home__secondary__content'>
				<h1 className='home__secondary__content--heading'> One</h1>
				<p className='home__secondary__content--paragraph'>
					Remove the duplicates in 2 Javascript objects and output the
					list of distinct names in an unordered list when
					<span
						onClick={renderList}
						className='home__secondary__content--special_link'
					>
						this link
					</span>
					is clicked. If the operation has been completed already
					notify the user that this has already been done.
				</p>
				<ul className='home__secondary__content--distintNames--list'>
					{list.map((e) => (
						<li
							key={e}
							className='home__secondary__content--distintNames--listItem'
						>
							{e}
						</li>
					))}
				</ul>
			</section>
		</div>
	);
};

export default Home;
