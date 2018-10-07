import React from 'react';
import classes from './Cockpit.css';

const cockpit = (props) => {
    
    const Aclasses = [];
    let buttonClass= '';
    if(props.showPersons){
      buttonClass= classes.Red;
    }
    if(props.persons.length <= 2){
      Aclasses.push(classes.red)
    }
    if(props.persons.length <= 1){
      Aclasses.push(classes.bold);
    }
    return (
    <div className="classes.Cockpit">
        <p className={Aclasses.join(' ')}>
          <button className={buttonClass} 
          onClick={props.clicked}>Switch name </button>
         </p>
    </div>
    );
};

export default cockpit;