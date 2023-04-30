import { useState, useEffect } from "react";
import CardList from "./components/card-list/card-list.component";
import SearchBox from "./components/search-box/search-box.component";
// import logo from "./logo.svg";
import "./App.css";

const App = () => {
  const [searchfield, setSearchField] = useState("");
  const [monsters, setMonsters] = useState([]);
  const [filteredmonstrers, setFilteredMonstrers] = useState(monsters);
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((users) => setMonsters(users));
  }, []);

  useEffect(() => {
    const newfilteredmonstrers = monsters.filter((monster) => {
      return monster.name.toLocaleLowerCase().includes(searchfield);
    });
    setFilteredMonstrers(newfilteredmonstrers);
  }, [monsters, searchfield]);

  const searchchange = (event) => {
    const searchFieldString = event.target.value.toLocaleLowerCase();
    setSearchField(searchFieldString);
  };

  return (
    <div className="App">
      <h1 className="app-title">ShahJahan's Rolodex</h1>
      <SearchBox
        className="monsters-search-box"
        placeholder="search monsters"
        onChangeHandler={searchchange}
      />

      <CardList monsters={filteredmonstrers} />
    </div>
  );
};

// class App extends Component {
//   constructor() {
//     super();
//     this.state = {
//       monsters: [],
//       searchfield: "",
//     };
//   }
//   componentDidMount() {
//     fetch("https://jsonplaceholder.typicode.com/users")
//       .then((response) => response.json())
//       .then((users) =>
//         this.setState(() => {
//           return { monsters: users };
//         })
//       );
//   }
//   searchchange = (event) => {
//     const searchfield = event.target.value.toLocaleLowerCase();

//     this.setState(() => {
//       return { searchfield };
//     });
//   };
//   render() {
//     const { monsters, searchfield } = this.state;
//     const { searchchange } = this;
//     const filteredmonstrers = monsters.filter((monster) => {
//       return monster.name.toLocaleLowerCase().includes(searchfield);
//     });
//     return (
//       <div className="App">
//         <h1 className="app-title">ShahJahan's Rolodex</h1>
//         <SearchBox
//           className="monsters-search-box"
//           placeholder="search monsters"
//           onChangeHandler={searchchange}
//         />
//         <CardList monsters={filteredmonstrers} />
//       </div>
//     );
//   }
// }

export default App;
