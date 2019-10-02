import React, { Component } from 'react';
// import picfriends from '../img/picfriends.jpg';
import Secondrow1 from './Secondrow1';
import PicFriends from './PicFriends';

class Posts extends Component {
	constructor(props) {
		super(props);

		this.state = {
			title: 'Things fall apart',
			author: 'Chinue Achiebe',
			Content: 'Conventional village life'
		};
	}

	removeKey() {
		this.setState({
			title: '',
			author: '',
			Content: ''
		});
	}

	render() {
		return (
			<div>
				<h1>Post page.......</h1>
				<p className="para">Book title:{this.state.title}</p>
				<p className="para">Book author: {this.state.author}</p>
				<p className="para">Book content: {this.state.Content}</p>
				<button className="btn btn-danger btn-lg" onClick={this.removeKey.bind(this)}>
					Delete
				</button>
				<br />
				<div className="row secondrow">
					<div className="col-md-6 col-lg-6 col-sm-4 firstcol">
						<PicFriends />
					</div>
					<div className="col-md-4 col-lg-4 secondcolx">
						<Secondrow1 />
					</div>
				</div>
			</div>
		);
	}
}

export default Posts;
