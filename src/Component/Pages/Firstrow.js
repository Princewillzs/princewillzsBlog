import React, { Component } from 'react';
import piccar from '../img/piccar.jpg';
import WithCounter from './WithCounter';

class Firstrow extends Component {
	render() {
		const { count, incrementCount } = this.props;

		return (
			<div>
				<img src={piccar} alt="pix" width="350" height="auto" />
				<p>
					There are plenty of people who look like good friends – but are not; and therefore many of us who
					don’t feel we should be lonely – but deep down very much are. When it comes to friendship, it is
					desperately easy to confuse the genuine with the ersatz article; both the real and the fake friend
					may show up for dinner, both may seem outwardly kind, both will claim to be loyal – but only one
					will live up to the true calling of the word ‘friend’ and so stand any chance of sparing us the
					ravages of loneliness.
					{/* <button onClick={incrementCount}>Like {count}</button> */}
				</p>
			</div>
		);
	}
}

export default Firstrow;
