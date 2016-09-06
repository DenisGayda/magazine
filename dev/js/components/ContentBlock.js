import React from 'react';
import ReactMixin from 'react-mixin';
import ReactFireMixin from 'reactfire';
import BlockContainSpecial from './BlockContainSpecial.js';
import BlockContainHome from './BlockContainHome.js';

export default class ContentBlock extends React.Component {
	constructor() {
		super();

		this.state = {
			featured: []
		}
	}

	componentDidMount() {
		this.bindAsArray(firebase.database().ref().child('featured'), 'featured');
	}
	
	render() {
		return (
			<div>
			{
				this.state.featured.map((obj, index) => {
					if (this.props.page == "special") {
						return <BlockContainSpecial key={index} src={obj.src} fullName={obj.fullName} price={obj.price} text={obj.text} />
					} else {
						return <BlockContainHome key={index} src={obj.src} fullName={obj.fullName} price={obj.price} />
					}
				})
			}
			</div>
		)
	}
}

ReactMixin(ContentBlock.prototype, ReactFireMixin);