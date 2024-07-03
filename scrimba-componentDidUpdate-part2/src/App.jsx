import React from "react"
import './Style.css'

export default class App extends React.Component {
    state = {
        count: 1,
        character: {}
    }
    
    add = () => {
        this.setState(prevState => ({count: prevState.count + 1}))
    }
    
    subtract = () => {
        this.setState(prevState => ({count: prevState.count - 1}))
    }
    
    getStarWarsCharacter = (id) => {
        fetch(`https://swapi.dev/api/people/${id}`)
            .then(res => res.json())
            .then(data => this.setState({character: data}))
    }
    
    componentDidMount() {
        this.getStarWarsCharacter(this.state.count)
    }

    componentDidUpdate(prevProps, prevState){
      console.log("updated")
      if(prevState.count!==this.state.count)
        {
        this.getStarWarsCharacter(this.state.count)
        }
    }
    
    render() {
        return (
            <>
                <div className="counter">
                    <button className="counter--minus" onClick={this.subtract}>–</button>
                    <div className="counter--count">
                        <h1>{this.state.count}</h1>
                    </div>
                    <button className="counter--plus" onClick={this.add}>+</button>
                </div>
                <h1>{this.state.character.name || "Loading..."}</h1>
            </>
        )
    }
}


/*import React from "react"
import { Component } from "react"
import './App.css'

class App extends Component {
    state = {
        firstName: "", 
        lastName: "", 
        email: "", 
        comments: "", 
        isFriendly: true,
        employment: "",
        favColor: ""
    }
    
    
    
handleChange=(event)=>{
  const {name, value, type, checked}=event.target
  type==="checkbox" ? this.setState({[name]:checked}) : this.setState({[name]:value})
}

componentDidMount(){
  console.log("mount")  
  this.setState(JSON.parse(localStorage.getItem("formData")))
}

componentDidUpdate(){
  console.log("update")  
  localStorage.setItem("formData", JSON.stringify(this.state))
}

    render() {
    console.log("render")  
        return (
            <form>
                <input
                    type="text"
                    placeholder="First Name"
                    onChange={this.handleChange}
                    name="firstName"
                    value={this.state.firstName}
                />

                <input
                    type="text"
                    placeholder="Last Name"
                    onChange={this.handleChange}
                    name="lastName"
                    value={this.state.lastName}
                />
                <input
                    type="email"
                    placeholder="Email"
                    onChange={this.handleChange}
                    name="email"
                    value={this.state.email}
                />
                <textarea 
                    value={this.state.comments}
                    placeholder="Comments"
                    onChange={this.handleChange}
                    name="comments"
                />
                <input type="checkbox" 
                       id="isFriendly"
                       name="isFriendly"
                       checked={this.state.isFriendly}
                       onChange={this.handleChange}
                />


                <label htmlFor="isFriendly">Are you friendly?</label>
                <br />
                <br />
                <fieldset>
                  <legend>Current employment status</legend>
                  <input type="radio"
                         id="unemployed"
                         name="employment"
                         checked={this.state.employment==="unemployed"}
                         onChange={this.handleChange} 
                             />
                  <label htmlFor="unemployed">Unemployment</label>
                  <br />
                  <input type="radio"
                         id="part-time"
                         name="employment"
                         checked={this.state.employment==="part-time"}
                         onChange={this.handleChange} 
                            />
                  <label htmlFor="part-time">Part-Time</label>
                  <br />

                  <input type="radio"
                         id="full-time"
                         name="employment"
                         checked={this.state.employment==="full-time"}
                         onChange={this.handleChange} 
                            />
                  <label htmlFor="full-time">Full-Time</label>
                  <br />
                  <label className="favColor" htmlFor="favColor">What is your favorite color?</label>
                <br /> 
                <select
                id="favColor"
                name="favColor"
                value={this.state.favColor}
                onChange={this.handleChange}
                >
                <option value="red">Red</option>
                <option value="orange">Orange</option>
                <option value="yellow">Yellow</option>
                <option value="green">Green</option>
                <option value="blue">Blue</option>  
                <option value="indigo">Indigo</option>
                <option value="violet">Violet</option>

                </select>
                </fieldset>

                            </form>
        )
    }
}

export default App

*/