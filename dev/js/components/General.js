import React from 'react';
import ReactDOM from 'react-dom';
import Main from './Main.js';


class GeneralComponent extends React.Component {
	render() {
		let location = window.location.pathname
		let page = (location == "/specials.html") ? "special" : "home";
		return (
			<div>
				<Main page={page} />
			</div>
		)
	}
}

ReactDOM.render (
	<GeneralComponent />, document.getElementById('react__component')
)