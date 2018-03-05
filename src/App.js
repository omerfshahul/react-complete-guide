import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person.js';
import Radium, {StyleRoot} from 'radium';

class App extends Component {
  

 
  state = {
    persons: [
      {id: '1', name: 'Max', age:'26'},
      {id: '2', name: 'Manu', age:'28'},
      {id: '3', name: 'Stephanie', age:'30'}
    ],
    showPersons: true

  };

 
  deletePersonHandler = (index) => {
    let prevPersons = [...this.state.persons]; //this.state.persons.slice()
    prevPersons.splice(index,1);
    this.setState(
      {persons: prevPersons}
    );

  };
  togglePersons = () => {

    const prevShowPersons = this.state.showPersons;
   
    this.setState(
      {showPersons: !prevShowPersons}
    );
  };
  switchNameHandler = (newName) => {


      this.setState({

        persons: [
          {name: newName, age:'26'},
          {name: 'Manu', age:'28'},
          {name: 'Stephanie', age:'35'}
        ]

      });


  }
  nameChangeHandler = (event, id) => {
    const personIndex = this.state.persons.findIndex(p => {
      return p.id === id;
    });

    const person = {
      ...this.state.persons[personIndex]
    };

    person.name = event.target.value

    const persons = [...this.state.persons];
    persons[personIndex] = person;
    this.setState( {
      persons: persons
    });
  }
  render() {
    const style = {
      backgroundColor: 'green',
      color:'white',
      font: 'inherit',
      border: '2x solid blue',
      padding: '8px',
      cursor: 'pointer',
      ':hover': {
        backgroundColor: 'lightgreen',
        color: 'black'
      }

    };
    let persons = null;
    if (this.state.showPersons){

      persons = (
        <div>
          {this.state.persons.map((person,index) => {
            return <Person name = {person.name}
                    age  = {person.age} 
                    click={() => this.deletePersonHandler(index)}
                    changed={(event) => this.nameChangeHandler(event, person.id)}
                    key={person.id}/>
          })}
       </div>
      );
      style.backgroundColor = 'red';
      style[':hover'] = {
        backgroundColor: 'yellow',
        color: 'black'
      }
    }
    let classes = [];

    if( this.state.persons.length <= 2) {
      classes.push('red');
    }
    if(this.state.persons.length <= 1) {
      classes.push('bold');
    }
  
    return (
      <StyleRoot>
        <div className="App">
          <h1>Hi! I am the react app! </h1>
          <p className={classes.join(' ')}>This is really working!</p>
          <button style={style} onClick={this.togglePersons}>Switch Name</button>
          {persons}
        
        
          
        </div>
      </StyleRoot>
    );
    // return React.createElement('div',{className:'App'},
    //          React.createElement('h1','', 'Does this work now'));
  }
}

export default Radium(App);
