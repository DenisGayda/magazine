import React from 'react';
import ContentBlock from './ContentBlock.js';
import firebase from 'firebase';

var config = {
	apiKey: 'peCLbIx2pq5nBxlKYXFoHst7gCuIh6OLh9SyeJlm',
	databaseURL: 'https://magazine-17dcb.firebaseio.com'
}

firebase.initializeApp(config);


export default class MainComponent extends React.Component {
	render() {
		return (
			<div>
				<ContentBlock page={this.props.page} />
			</div>
		)
	}
}