import React from 'react';
import "./Filter.scss"
class Filters extends React.Component {
	constructor(props) {
		super(props)
		
		this.onSortButton = props.onSortButton
		this.onChangeInput = props.onChangeInput


	this.state = {
		clickButton: null,
	  }
	}


	orderButton = (event, type) => {
		if (this.state.clickButton !== null) {
		  this.state.clickButton.classList.remove("is-selected")
		}
		event.target.classList.add("is-selected")
		this.onSortButton(type)
		this.setState({
		  clickButton: event.target,
		})
	  }

	render() {
		return ( 
		<div className="container" data-testid="filters">
		<section className="filters">
		  <div className="filters__search">
			<input type="text" className="filters__search__input" placeholder="Pesquisar" onChange={(e) => this.onChangeInput(e.target.value)} />

			<button className="filters__search__icon">  
			  <i className="fa fa-search"/>
			</button>
		  </div>

		  <button className="filters__item is-selected" onClick={(event) => this.orderButton(event, "name")} >
			Nome <i className="fas fa-sort-down" />
		  </button>

		  <button className="filters__item" onClick={(event) => this.orderButton(event, "country")} >
			País <i className="fas fa-sort-down"  />
		  </button>

		  <button className="filters__item"  onClick={(event) => this.orderButton(event, "company")}>
			Empresa <i className="fas fa-sort-down" />
		  </button>

		  <button className="filters__item"  onClick={(event) => this.orderButton(event, "country")}>
			Departamento <i className="fas fa-sort-down" />
		  </button>

		  <button className="filters__item" onClick={(event) => this.orderButton(event, "company")}>
			Data de admissão <i className="fas fa-sort-down" />
		  </button>
		</section>
	  </div>);
	}
}

export default Filters;
