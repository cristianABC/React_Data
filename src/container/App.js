import React, { Component } from 'react';
import classes from './App.css';
import Persons from '../components/Persons/Persons';



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
    let buttonClass= '';


    if(this.state.showPersons){
      persons = ( 
        <div>
         <Persons persons={this.state.persons}
         clicked={this.deletePersonHandler}
         changed={this.cambiarNombre}/>
         </div>);

          buttonClass= classes.Red;
    
    }

    const Aclasses = [];
    if(this.state.persons.length <= 2){
      Aclasses.push(classes.red)
    }
    if(this.state.persons.length <= 1){
      Aclasses.push(classes.bold);
    }
    return (
    
      <div className={classes.App}>
        <p className={Aclasses.join(' ')}>
          <button className={buttonClass} 
          onClick={this.togglePersonHandler}>Switch name </button>
         </p>
            {persons}
      </div>
    
      
      
        
    );
  }
}

export default App;
