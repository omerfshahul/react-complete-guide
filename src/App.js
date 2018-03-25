import React, { Component } from 'react';
import styles from './App.css';
import Person from './components/Person/Person';
import ErrorBoundary from './components/ErrorBoundary/ErrorBoundary'
import Persons from './components/Persons/Persons'
import Cockpit from './components/cockpit/cockpit'

class App extends Component {
  
  constructor(props){
    super(props);
    console.log('[App.js] Inside Constructor', props);
    this.state = {
      persons: [
        {id: '1', name: 'Max', age:'26'},
        {id: '2', name: 'Manu', age:'28'},
        {id: '3', name: 'Stephanie', age:'30'}
      ],
      showPersons: true
  
    };


}

componentWillMount(){

    console.log('[App.js] Inside componentWillMount');
}

componentDidMount(){
    console.log('[App.js] Inside componentDidMount');
}

componentWillReceiveProps(nextProps){
  console.log('[App.js] Inside componentWillReceiveProps', nextProps);
}
shouldComponentUpdate(nextProps, nextState){
  console.log("[App.js] Inside shouldComponentUpdate", nextProps, nextState);
  return true;
}
componentWillUpdate(nextProps, nextState){
  console.log("[App.js] Inside componentWillUpdate", nextProps, nextState);
}
componentDidUpdate(){
  console.log("[App.js] Inside componentDidUpdate");
} 


 
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
    console.log('[App.js] Inside render()');
    let persons = null;
    if (this.state.showPersons){

      persons = (
        <div>
          <Persons 
             persons={this.state.persons}
             clicked={this.deletePersonHandler}
             changed={this.nameChangeHandler}
          />
            
       </div>
      );
     
     
    }
    
    return (
     
        <div className={styles.App}>
          <button onClick={()=>{this.setState({showPersons:true})}}></button>
          <Cockpit 
           appTitle={this.props.title}
           persons={this.state.persons}
           clicked={this.togglePersons}
           showPersons={this.state.showPersons}
          />
          {persons}
        
        
          
        </div>
      
    );
    // return React.createElement('div',{className:'App'},
    //          React.createElement('h1','', 'Does this work now'));
  }
}

export default App;
