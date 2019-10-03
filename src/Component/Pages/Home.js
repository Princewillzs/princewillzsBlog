import React from 'react';
import styled from 'styled-components';
import Firstrow from './Firstrow';
import Secondcol from './Secondcol';
import Secondrow1 from './Secondrow1';
import Thirdcol from './Thirdcol';
import Thirdrow1 from './Thirdrow1';
import PicFriends from './PicFriends';
import Humanity from './Humanity';

function Posts() {
	return (
		<PostContainer className="main-post">
			<div className="container">
				<div className="row firstrow">
					<div className="col-md-4 col-lg-4 firstcol">
						<Firstrow />
					</div>
					<div className="col-md-4 col-lg-4 secondcol">
						<Secondcol />
					</div>
					<div className="col-md-4 col-lg-4 thirdcol">
						<Thirdcol />
					</div>
				</div>
				<div className="row secondrow">
					<h2 style={heading}>What Happens When Old Friends Meet Again After Some Years!</h2>
					<div className="col-md-8 col-lg-8 firstcol">
						<PicFriends />
					</div>
					<div className="col-md-4 col-lg-4 secondcol">
						<Secondrow1 />
					</div>
				</div>
				<div className="row thirdrow">
					{/* <h2> SERVICE TO HUMANITY</h2> */}

					<br />
					<div className="col-md-4 col-lg-4 thirdfirst">
						<Thirdrow1 />
					</div>
					<div className="col-md-8 col-lg-8 col-sm-4 thirdsecond">
						<Humanity />
					</div>
				</div>
			</div>
		</PostContainer>
	);
}

export default Posts;

const PostContainer = styled.div`
	.container {
		background: purple;
		color: white;
		font-size: 1.2rem;
	}

	.firstrow {
		padding-top: 2rem;
	}
	p {
		padding-top: 2rem;
		padding-left: 10px;
		padding-right: 10px;
		text-align: justify;
	}

	.secondrow h2 {
		margin: auto;
		padding-top: 2rem;
		padding-bottom: 1rem;
		color: #470b0b;
		text-transform: uppercase;
	}

	h2 {
		text-align: center;
		padding-top: 2rem;
		padding-bottom: 1rem;
		color: #007bff;
	}

	// .thirdimg {
	// 	padding-top: 1rem;
	// 	margin-right: 0;
	// 	width: auto;
	// }

	.thirdrow {
		padding-bottom: 2rem;
	}
`;

const heading = {
	color: '#007bff'
};
