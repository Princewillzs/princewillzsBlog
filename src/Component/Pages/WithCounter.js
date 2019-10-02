import React, { Component } from 'react';

const withCounter = (wrappedComponent) => {
	class WithCounter extends Component {
		state = {
			count: 0
		};

		incrementCount = () => {
			this.setState((prevState) => {
				return { count: prevState + 1 };
			});
		};

		render() {
			return <wrappedComponent count={this.state.count} incrementCount={this.incrementCount} />;
		}
	}
	return WithCounter;
};

export default withCounter;
