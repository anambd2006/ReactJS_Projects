import { Component, useState } from 'react'
import './App.css'

// functional Component

/*export default function App() {
  const [value, changeValue] = useState("Yes")

  function toggleGoOut(){
   
    changeValue(prevState=> {return prevState==="Yes" ? "No" : "Yes"}) 

  }

  return (
    <>
      <div className="state">
            <h1 className="state--title">Should I go out tonight?</h1>
            <div className="state--value" onClick={toggleGoOut}>
               <h3> {value}</h3>
            </div>
        </div>
    </>
  )
}
*/

/* now convert above functional component to class component*/
//---------------------------------------------------

export default class App extends Component {
  
state={
  value: "Yes"
}

  toggleGoOut=()=>{
   
     this.setState(prevState=> {
      return {value: prevState.value==="Yes" ? "No" : "Yes"}
    }) 

  }

render(){
  return (
    <>
      <div className="state">
            <h1 className="state--title">Should I go out tonight?</h1>
            <div className="state--value" onClick={this.toggleGoOut}>
               <h3> {this.state.value}</h3>
            </div>
        </div>
    </>
  )
}

}
