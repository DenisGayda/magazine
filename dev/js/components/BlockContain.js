import React from 'react';


export default class BlockContain extends React.Component {
	render() {
		let textOlolo;
		if (this.props.data.text) {
			textOlolo = <div>
					<p className="content__block_text">{this.props.data.text}</p>
					<p className="content__block_link">
						<a href="#">Details</a>
						<span>|</span>
						<a href="#">Add to Cart</a>
					</p>
				</div>
		}
		return ( 
			<div className="product__block">
				<div className="block__flex">
					<img src={this.props.data.src}/>
					<div className="block__content">
						<p className="content__block_fullName">{this.props.data.fullName}</p>
						<p className="content__block_price">{this.props.data.price}</p>
						{textOlolo}
					</div>
				</div>
			</div>
		)
	}
}