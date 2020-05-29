import React from 'react';
import Topbar from './components/Topbar'
import Filter from './components/Filters'
import Contacts from './components/Contacts'
import './App.scss';
import Contact from './components/Contact';
import { URL } from "./constants";

class App extends React.Component {
  constructor(props) {
		super(props)
		this.state = {
		  contact: [],
		  original:[]
		}
		
	  }
	  componentDidMount() {
	
		fetch(URL)
		  .then((resp) => resp.json())
		  .then(data => {
			this.setState({
			  contact: data,
			  original:data

	
			})
			
		  }).catch((error) => {
			console.log("Error!" + error)
		  })

	  }  
	  searchName=(word)=>{
		const serachWord =this.state.original.filter((wordSearch)=>
			wordSearch.name.toLowerCase().includes(word.toLowerCase())
		)
		this.setState({
			contact: serachWord
		})
	  }

	  sortButton =(numColumn)=>{
		  console.log("clicou")
		  const  contactsSorted = this.state.original.sort((a,b)=>{
			  if(a[numColumn]>b[numColumn]){
				  return 1;
			  }else{
				  return -1;
			  }
			  
			
		  })
		  this.setState({
			  contact: contactsSorted
		  })

	  }

  render() {
    return (
     
      <React.Fragment >
		  <div data-testid="app" className="app">

        <Topbar/>
        <Filter onChangeInput={this.searchName} onSortButton={this.sortButton}/>


        <Contacts>
         
            {this.state.contact.map((contact)=>{
				return(
				 <Contact key ={contact.id} data= {contact}/>
				)

			})
             
			}
          
          
        </Contacts>
      </div>
      </React.Fragment>
      
    )
	
	

	
  }
}

export default App;
