import React from 'react';
import ReactDOM from 'react-dom';
import ContentBlock from './ContentBlock.js';

class MainComponent extends React.Component {
	render() {
		return (
			<div>
				<ContentBlock />
			</div>
		)
	}
}

ReactDOM.render (
	<MainComponent/>, document.getElementById('category__content')
)