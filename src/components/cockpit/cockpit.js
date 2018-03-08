import React from 'react';
import styles from './cockpit.css'

const cockpit = (props) => {
    return(

        <div className={styles.cockpit}>
         <h1>Hi! I am the react app! </h1>
         <p className={classes.join(' ')}>This is really working!</p>
        <button  onClick={props.clicked}>Switch Name</button>
        
      
      
        
      </div>
    
        
        

    );
};

export default cockpit;