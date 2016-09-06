import React from 'react';


export default class BlockContainSpecial extends React.Component {
	render() {
		return ( 
			<div className="product__block">
				<div className="block__flex">
					<img src={this.props.src}/>
					<div className="block__content">
						<p className="content__block_fullName">{this.props.fullName}</p>
						<p className="content__block_price">{this.props.price}</p>
						<p className="content__block_text">{this.props.text}</p>
						<p className="content__block_link">
							<a href="#">Details</a>
							<span>|</span>
							<a href="#">Add to Cart</a>
						</p>
					</div>
				</div>
			</div>
		)
	}
}