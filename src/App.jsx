/* eslint-disable react/no-unescaped-entities */
import { useState, useEffect } from "react";
import Header from "./components/header/Header";
import SearchBox from "./components/search_box/SearchBox";
import CardList from "./components/card_list/CardList";

import "./App.css";

function App() {
  const [searchField, setSearchField] = useState("");
  const [monsters, setMonsters] = useState([]);
  const [filteredMonsters, setFilteredMonsters] = useState(monsters);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => {
        return response.json();
      })
      .then((users) => {
        return setMonsters(users);
      });
  }, []);

  useEffect(() => {
    const newFilteredMonsters = monsters.filter((monster) => {
      return monster.name.toLowerCase().includes(searchField);
    });

    setFilteredMonsters(newFilteredMonsters);
  }, [monsters, searchField]);

  const onSearchChange = (event) => {
    const searchFieldString = event.target.value.toLowerCase();

    setSearchField(searchFieldString);
  };

  return (
    <div className="app">
      <Header />
      <main>
        <SearchBox
          onChangeHandler={onSearchChange}
          placeholder="Search Companion"
          className="search-box--monsters"
        />
        <CardList monsters={filteredMonsters} />
      </main>
    </div>
  );
}

export default App;
