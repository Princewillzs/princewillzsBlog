import React from 'react';
import styled from 'styled-components';
import piccar from '../img/piccar.jpg';
import piclaptop from '../img/piclaptop.jpg';
import picoffice from '../img/picoffice.jpg';
import picfriends from '../img/picfriends.jpg';
import humanity from '../img/humanity.jpg';

function Posts() {
	return (
		<PostContainer className="main-post">
			<div className="container">
				<div className="row firstrow">
					<div className="col-md-4 col-lg-4 firstcol">
						<img src={piccar} alt="pix" width="300" height="350" />
						<p>
							There are plenty of people who look like good friends – but are not; and therefore many of
							us who don’t feel we should be lonely – but deep down very much are. When it comes to
							friendship, it is desperately easy to confuse the genuine with the ersatz article; both the
							real and the fake friend may show up for dinner, both may seem outwardly kind, both will
							claim to be loyal – but only one will live up to the true calling of the word ‘friend’ and
							so stand any chance of sparing us the ravages of loneliness.
						</p>
					</div>
					<div className="col-md-4 col-lg-4 secondcol">
						<img src={piclaptop} alt="pix" width="300" height="350" />
						<p>
							A laptop computer (also shortened to just laptop; or called a notebook computer) is a small,
							portable personal computer (PC) with a "clamshell" form factor, typically having a thin LCD
							or LED computer screen mounted on the inside of the upper lid of the clamshell and an
							alphanumeric keyboard on the inside of the lower{' '}
						</p>
					</div>
					<div className="col-md-4 col-lg-4 thirdcol">
						<img src={picoffice} alt="pix" width="300" height="350" />
						<p>
							Rules of Open-Office Etiquette. Respect another's need to work. Just because others are
							sitting nearby doesn't mean they are available for conversation at all times. Be aware of
							smells. Keep noise and distractions to a minimum. Be tidy. Respect another's space. Don't
							come to work sick. Be considerate. Be tolerant.
						</p>
					</div>
				</div>
				<div className="row secondrow">
					<h2>What Happens When Old Friends Meet Again After Some Years!</h2>
					<div className="col-md-8 col-lg-8 col-sm-4 firstcol">
						<img src={picfriends} alt="pix" width="730" height="550" />
					</div>
					<div className="col-md-4 col-lg-4 secondcol">
						<p>
							There are people we are friends with for one major but often maligned or overlooked reason:
							because we were friends with them some time back. At one stage, it might be decades ago now,
							we had a lot in common: we were both good at maths but bad at French at school and had a
							shared liking for table tennis; or we had adjacent rooms at college and used to help each
							other with assignments and commiserate in the bar about failed dates or maddening parents;
							or maybe we were interns in the same big firm with the same (as we thought at the time)
							bizarre and intemperate boss.{' '}
						</p>
					</div>
				</div>
				<div className="row thirdrow">
					{/* <h2> SERVICE TO HUMANITY</h2> */}

					<br />
					<div className="col-md-4 col-lg-4 secondcol">
						<h2> SERVICE TO HUMANITY</h2>
						<p>
							As you can see, styled-components lets you write actual CSS in your JavaScript. This means
							you can use all the features of CSS you use and love, including (but by far not limited to)
							media queries, all pseudo-selectors, nesting, etc. The last step is that we need to define
							what a primary button looks like. To do that we also import css from styled-components and
							interpolate a function into our template literal, which gets passed the props of our
							component:
						</p>
					</div>
					<div className="col-md-8 col-lg-8 col-sm-4 firstcol">
						<img className="thirdimg" src={humanity} alt="pix" width="730" height="450" />
					</div>
				</div>
			</div>
		</PostContainer>
	);
}

export default Posts;

const PostContainer = styled.div`
	p {
		padding-top: 2rem;
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
		color: #470b0b;
	}

	.thirdimg {
		padding-top: 1rem;
		margin-right: 0;
	}
`;
