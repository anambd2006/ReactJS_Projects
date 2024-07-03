import React, { Component } from 'react';
import { useState } from "react";
import './App.css';

//class component

export default class App  extends Component {
  state={
        firstName: "John",
        lastName: "Doe",
        phone: "+1 (719) 555-1212",
        email: "itsmyrealname@example.com",
        isFavorite: false
  }

  toggleFavorite=()=>{
    this.setState(prevContact=>({
      // ...prevContact,   //in class component there is no need to add remaining attributes (firstName, lastName, phone, email)
      isFavorite: !prevContact.isFavorite
    }))
  }

render() {

  let starIcon=this.state.isFavorite ? "star-filled.png" : "star-empty.png";
 
  return (
    <main>
    <div className="card">
      <img src="./images/user.png" className="card-image"/>
      <div className="card-info">
       <img src={`../images/${starIcon}`} className='card-favorite' onClick={this.toggleFavorite}
  />
       <h2>
        {this.state.firstName} {this.state.lastName}
       </h2>
       <p className='card-contact'>{this.state.phone}</p>
       <p className='card-contact'>{this.state.email}</p>
      </div>
    </div>
    </main>
  )
  

}

}


/* functional component

export default function App (){
  const [contact, setContact]=useState({
        firstName: "John",
        lastName: "Doe",
        phone: "+1 (719) 555-1212",
        email: "itsmyrealname@example.com",
        isFavorite: false
  })

  let starIcon=contact.isFavorite ? "star-filled.png" : "star-empty.png";

  function toggleFavorite(){
    setContact(prevContact=>({
      ...prevContact, isFavorite: !contact.isFavorite
    }))
  }

return (
  <div className="card">
    <img src="./images/user.png" className="card-image"/>
    <div className="card-info">
     <img src={`../images/${starIcon}`} className='card-favorite' onClick={toggleFavorite}
/>
     <h2>
      {contact.firstName} {contact.lastName}
     </h2>
     <p className='card-contact'>{contact.phone}</p>
     <p className='card-contact'>{contact.email}</p>
    </div>
  </div>
)

}
*/
