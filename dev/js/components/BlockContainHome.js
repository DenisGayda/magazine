import React from 'react';


export default class BlockContainHome extends React.Component {
	render() {
		return ( 
			<div className="product__block">
				<div className="block__flex">
					<img src={this.props.src} />
					<div className="block__content">
						<p className="content__block_fullName">{this.props.fullName}</p>
						<p className="content__block_price">{this.props.price}</p>
					</div>
				</div>
			</div>
		)
	}
}