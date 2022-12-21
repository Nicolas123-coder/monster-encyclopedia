import { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import CardList from './components/Card-List/CardList';
import SearchBox from './components/Search-Box/SearchBox';

class App extends Component {
  constructor() {
    super()

    this.state = {
      monsters: [],
      searchField: ''
    }
  }

  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then((response) => response.json())
      .then((users) => this.setState(
        () => {
        return {monsters: users}
        }
      ))
  }

  onSearchChange = (event) => {
    const searchField = event.target.value.toLocaleLowerCase()

    this.setState(() => {
        return { searchField }
      }
    )
  }

  render() {
    const { monsters, searchField } = this.state
    const { onSearchChange } = this

    const filteredMonsters = monsters.filter(
      (elem) => {
        return elem.name.toLocaleLowerCase().includes(searchField)
      }
    )

    return (
      <div className="App">
        <SearchBox onChangeHandler={onSearchChange} placeholder='search monsters' className='monsters-search-box'/>
        <CardList monsters = { filteredMonsters } />
      </div>
    );
  }
}

export default App;
