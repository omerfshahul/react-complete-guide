import React from 'react';
import styles from './cockpit.css'

const cockpit = (props) => {

    const style = {
        backgroundColor: 'green',
        color:'white',
        font: 'inherit',
        border: '2x solid blue',
        padding: '8px',
        cursor: 'pointer',
        
  
    };
    let classes = [];

    let btnClass = ' '

    if( props.persons.length <= 2) {
      classes.push(styles.red);
    }
    if(props.persons.length <= 1) {
      classes.push(styles.bold);
    }
  
    if(props.showPersons)
    {
       btnClass = styles.red;
    }
    return(

        <div className={styles.cockpit}>
         <h1>{props.appTitle} </h1>
         <p className={classes.join(' ')}>This is really working!</p>
        <button className={btnClass}  onClick={props.clicked}>Switch Name</button>
        
      
      
        
      </div>
    
        
        

    );
};

export default cockpit;