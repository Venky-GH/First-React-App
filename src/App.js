import React, {Component} from 'react';
import './App.css';
import Person from './Person/Person';

class App extends Component {
  state = {
    Persons: [
      {id: "id_1", name: "Venky", age: 21},
      {id: "id_2", name: "Pudi", age: 22},
      {id: "id_3", name: "Mansi", age: 25}
    ]
  };

  changeHandler = (event, id) => {
    let persons = [...this.state.Persons];
    let index = persons.findIndex(person => {
      return person.id === id
    });
    persons[index].name = event.target.value;
    this.setState({
      Persons: persons
    });
  };

  deleteHandler = (index) => {
    let persons = [...this.state.Persons];
    persons.splice(index, 1);
    this.setState({
      Persons: persons
    });
  };

  togglePersonsHandler = () => {
    this.setState({
      showPersons: !this.state.showPersons
    });
  };

  render() {
    const btn_style = {
      backgroundColor: "green",
    };
    let persons = null;
    if (this.state.showPersons) {
      persons = (
        <div>
          {
            this.state.Persons.map((person, index) => {
              return <Person
                name={person.name}
                age={person.age}
                key={person.id}
                click={this.deleteHandler.bind(this, index)}
                change={(event) => this.changeHandler(event, person.id)}
              />
            })
          }
        </div>
      );
      btn_style.backgroundColor = "red";
    }
    return (
      <div className="App">
        <h1>Hi, This is Venky's first React App!!</h1>
        <button className="btn" style={btn_style} onClick={this.togglePersonsHandler}>Toggle Persons</button>
        { persons }
      </div>
    );
  }
}

export default App;
