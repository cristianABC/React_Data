import React, { Component } from 'react';
import classes from './App.css';

import Persons from '../components/Persons/Persons';
import Cockpit from '../components/Cockpit/Cockpit';


class App extends Component {
  state = {
    persons:[
      {id:"1", name:"Carlos",age:12},
      {id:"2", name:"peter",age:32},
      {id:"3", name:"Carla",age:21}
    ],
    showPersons: false
  }
  togglePersonHandler = () =>{

    const nowstate =  this.state.showPersons;
    this.setState({showPersons: !nowstate});
  }
  
  deletePersonHandler = (personIndex) => {
   // const persons = this.state.persons.slice();
   const persons = [...this.state.persons];
    persons.splice(personIndex,1);
    this.setState({persons: persons});
  }

  cambiarNombre =  (event, id) => {
      const personIndex = this.state.persons.findIndex(p =>{
        return p.id===id;
      }) ;

     const person = {
       ...this.state.persons[personIndex]
     };

     person.name = event.target.value;

     const persons =[...this.state.persons];
     persons[personIndex] = person;
    this.setState({persons:persons});
  }
  render() {
    let persons = null;



    if(this.state.showPersons){
      persons = ( 
        <div>
         <Persons persons={this.state.persons}
         clicked={this.deletePersonHandler}
         changed={this.cambiarNombre}/>
         </div>);

    
    }

    return (
    
      <div className={classes.App}>
            <Cockpit 
            showPersons={this.state.showPersons}
            persons={this.state.persons}
            clicked={this.togglePersonHandler}/>
            {persons}
      </div>
        
    
      
      
        
    );
  }
}

export default App;
