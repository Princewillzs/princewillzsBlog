import React from 'react';
import styled from 'styled-components';

function Footer() {
	return (
		<FooterContainer className="main-footer">
			<div className="footer-middle">
				<div className="container">
					<div className="row">
						{/* columns */}
						<div className="col-md-6 col-sm-6">
							<h4 id="about">About Us</h4>
							<ul className="list-unstyled">
								<li>
									<i class="fas fa-envelope" /> Foundation Faith Church
								</li>
								<li>No: 24, Gregory Street Kosofe</li>
								<li>Lagos-Nigeria.</li>
							</ul>
						</div>
						<div className="col-md-6 col-sm-6">
							<h4>Achieves</h4>
							<ul className="list-unstyled">
								<li>
									<a href="/">Infor Tech.</a>
								</li>
								<li>
									<a href="/">Web Dev</a>
								</li>
								<li>
									<a href="/">Software Dev</a>
								</li>
							</ul>
						</div>
					</div>
					{/* Footer Bottom */}
					<div className="footer-bottom">
						<p className="text-xs-center">
							&copy;{new Date().getFullYear()} PrincewillzsBlog - All Rights Reserved
						</p>
					</div>
				</div>
			</div>
		</FooterContainer>
	);
}

export default Footer;

const FooterContainer = styled.footer`
	.footer-middle {
		background: var(--mainDark);
		padding-top: 3rem; /*1rem = 16px */
		color: var(--mainWhite);
	}

	.footer-bottom {
		padding-bottom: 2rem;
		padding-top: 3rem;
	}

	ul li a {
		color: var(--mainGrey);
	}

	ul li a:hover {
		color: var(--mainLightGrey);
	}
`;

// glyphicon did not respond.
