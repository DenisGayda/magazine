import React from 'react';
import ReactMixin from 'react-mixin';
import ReactFireMixin from 'reactfire';
import BlockContain from './BlockContain.js';
import Database from './Database.js';


export default class ContentBlock extends React.Component {

	constructor() {
		super();

		this.state = {
			data: [],
			item: this.setItemsDefault
		}
	}

	getItems(){
		if (this.props.page == "special") {
			this.bindAsArray(firebase.database().ref().child('featured'), 'data');
		} else {
			this.bindAsArray(firebase.database().ref().child('home'), 'data');
		}
	}
	setItems(arg){
		this.setState({
			item: <Database data={arg} />
		})
	}
	onclickItems(arr) {
		this.setItems(arr)
	}
	setItemsDefault(arr, arg) {
		return <div className="category__content">
			{
				arr.map((obj, index) => {
					return <BlockContain key={index} data={obj} />
				})
			}
		</div>
	}

	componentDidMount() {
		this.getItems()
	}
	

	render() {
		let links = [
			{'name' : 'Sound devices', 'data' : 'soundDevices'},
			{'name' : 'Video game consoles', 'data' : 'gameConsoles'},
			{'name' : 'Cell/mobile/wireless phones', 'data' : 'mobilePhones'},
			{'name' : 'Home security systems', 'data' : 'securitySystem'},
			{'name' : 'Cameras', 'data' : 'cameras'},
			{'name' : 'Home theater systems', 'data' : 'theaterSystem'},
			{'name' : 'TVs', 'data' : 'tvs'},
			{'name' : 'Computers', 'data' : 'computers'},
			{'name' : 'Games/movies/music', 'data' : 'gamesMusic'},
			{'name' : 'Accessories', 'data' : 'accesories'},
			{'name' : 'Office', 'data' : 'office'},
			{'name' : 'House wears', 'data' : 'wears'}
		];
		return (
			<div className="section__category">
				<div className="category__menu">
					<div className="title">Categories</div>
					<ul className="menu__list">
					{
						links.map((obj, index) => {
							return <li key={index} className='menu__list_item' onClick={this.onclickItems.bind(this, obj.data)}>{obj.name}</li>
						})
					}
					</ul>	
				</div>
				{
					((typeof this.state.item) == 'function') ? this.state.item(this.state.data, this.props.page) : this.state.item
				}
			</div>
		)
	}
}

ReactMixin(ContentBlock.prototype, ReactFireMixin);