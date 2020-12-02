import React, { Component } from 'react';
import './App.css';
import Header from '../Header/Header.js'

const defaultDog = {
  name: '',
  owner: '',
  cuteness: 0
}

class App extends Component {

  state = {
    newDog: defaultDog,
    dogList: []
  }

  handleChangeFor = (event, propertyName) => {
    this.setState({
      newDog: {
        ...this.state.newDog,
        [propertyName]: event.target.value
      }
    })
  }

  handleSubmit = (event) => {
    console.log('submitted form, new dog is', this.state.newDog);
    event.preventDefault();
    //clear input fields
    this.setState({
      //we clear the inputs by setting newDog back to the defaultDog
      newDog: defaultDog,
      dogList: [...this.state.dogList, this.state.newDog]
    })
  }
  render() {

    console.log('rendering state', this.state);
    return (
      <div >

        <Header />
        <main>
          <form onSubmit={this.handleSubmit}>
            <label>Name:</label>
            <input value={this.state.newDog.name} type="text" onChange={(event) => this.handleChangeFor(event, 'name')}></input>
            <label>Owner:</label>
            <input value={this.state.newDog.owner} type="text" onChange={(event) => this.handleChangeFor(event, 'owner')}></input>
            <label>Cuteness:</label>
            <input value={this.state.newDog.cuteness} type="number" min="0" max="10" onChange={(event) => this.handleChangeFor(event, 'cuteness')}></input>
            <button type="submit">Save</button>
          </form>

          <div>
            {/* get our array of dogs on the dom */}
            <ul>
              {
                this.state.dogList.map((item, pos) =>
                  <li key={pos}>{item.name} {item.owner} {item.cuteness}</li>
                )
              }
            </ul>
          </div>

        </main>
      </div>
    );
  }
}

export default App;
