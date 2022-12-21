import { useState, useEffect } from 'react';
import logo from './logo.svg';
import './App.css';
import CardList from './components/Card-List/CardList';
import SearchBox from './components/Search-Box/SearchBox';

const App = () => {
  const [searchField, setSearchField] = useState('')
  const [monsters, setMonsters] = useState([])
  const [filteredMonsters, setFilterMonsters] = useState(monsters)

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then((response) => response.json())
      .then((users) => setMonsters(users))
  }, []) 
  // the second parameter is the dependencies that when changed the function (1st param) will run again
  // this useEffect is to avoid the infinite rendering

  useEffect(() => {
    const newFilteredMonsters = monsters.filter(
      (elem) => {
        return elem.name.toLocaleLowerCase().includes(searchField)
      }
    )

    setFilterMonsters(newFilteredMonsters)
  }, [monsters, searchField])

  const onSearchChange = (event) => {
    const searchFieldString = event.target.value.toLocaleLowerCase()

    setSearchField(searchFieldString)    
  }

  return (
    <div className="App">
        <h1 className='app-title'>Monsters Encyclopedia</h1>
        <SearchBox 
          onChangeHandler={onSearchChange} 
          placeholder='search monsters' 
          className='monsters-search-box'
        />
        <CardList monsters = { filteredMonsters } />
      </div>
  )
}

// class App extends Component {
//   constructor() {
//     super()

//     this.state = {
//       monsters: [],
//       searchField: ''
//     }
//   }

  // componentDidMount() {
  //   fetch('https://jsonplaceholder.typicode.com/users')
  //     .then((response) => response.json())
  //     .then((users) => this.setState(
  //       () => {
  //       return {monsters: users}
  //       }
  //     ))
  // }

//   onSearchChange = (event) => {
//     const searchField = event.target.value.toLocaleLowerCase()

//     this.setState(() => {
//         return { searchField }
//       }
//     )
//   }

//   render() {
//     const { monsters, searchField } = this.state
//     const { onSearchChange } = this

//     const filteredMonsters = monsters.filter(
//       (elem) => {
//         return elem.name.toLocaleLowerCase().includes(searchField)
//       }
//     )

//     return (
//       <div className="App">
//         <h1 className='app-title'>Monsters Encyclopedia</h1>
//         <SearchBox onChangeHandler={onSearchChange} placeholder='search monsters' className='monsters-search-box'/>
//         <CardList monsters = { filteredMonsters } />
//       </div>
//     );
//   }
// }

export default App;
