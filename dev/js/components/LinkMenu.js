import React from 'react';
import ReactMixin from 'react-mixin';
import ReactFireMixin from 'reactfire';
import BlockContain from './BlockContain.js';



export default class ContentBlock extends React.Component {
	constructor() {
		super();

		this.state = {
			data: []
		}
	}

	getItems(){
		this.bindAsArray(firebase.database().ref().child(this.props.data), 'data');
	}

	componentDidMount() {
		this.getItems();
	}
	
	render() {
		return <div className="category__content">
			{
				this.state.data.map((obj, index) => {
					return <BlockContain key={index} page={this.props.page} data={obj} />
				})
			}
		</div>
	}
}

ReactMixin(ContentBlock.prototype, ReactFireMixin);
