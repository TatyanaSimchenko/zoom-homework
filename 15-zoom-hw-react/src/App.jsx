import React, { useState } from "react";
import "./App.css";
import Contacts from "./components/Contacts/Contacts";
import SearchInput from "./components/SearchInput/SearchInput";

const contactsList = [
  {
    firstName: "Барней",
    lastName: "Стинсовський",
    phone: "+380956319521",
    gender: "male",
  },
  {
    firstName: "Робін",
    lastName: "Щербатська",
    phone: "+380931460123",
    gender: "female",
  },
  {
    firstName: "Анонімний",
    lastName: "Анонімус",
    phone: "+380666666666",
  },
  {
    firstName: "Лілія",
    lastName: "Олдровна",
    phone: "+380504691254",
    gender: "female",
  },
  {
    firstName: "Маршен",
    lastName: "Еріксонян",
    phone: "+380739432123",
    gender: "male",
  },
  {
    firstName: "Теодор",
    lastName: "Мотсбес",
    phone: "+380956319521",
    gender: "male",
  },
];

function App() {
  const [items, setItems] = useState(contactsList);

  const [search, setSearch] = useState("");

  const handleInputChange = (searchValue) => {
    setSearch(searchValue);
  };

  const searchItem = (items, search) => {
    if (search.length === 0) {
      return items;
    }
    return items.filter((item) => {
      return (
        item.firstName.toLowerCase().indexOf(search.toLowerCase()) > -1 ||
        item.lastName.toLowerCase().indexOf(search.toLowerCase()) > -1
      );
    });
  };

  const visibleContact = searchItem(items, search).map((item) => {
    return (
      <li>
        <Contacts item={item} />
      </li>
    );
  });

  return (
    <div className="App">
      <div className="container">
        <SearchInput handleInputChange={handleInputChange} />
        <div className="contacts">
          <ul>{visibleContact}</ul>
        </div>
      </div>
    </div>
  );
}

export default App;
