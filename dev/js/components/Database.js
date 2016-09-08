import React from 'react';
import BlockContain from './BlockContain.js';
import {database} from '../Content.js';

export default class Database extends React.Component {
	render() {	
		return ( 
			<div className="category__content">
			{
				database[this.props.data].map((obj, index) => {
					return <BlockContain key={index} data={obj} />
				})
			}
			</div>
		)
	}
}