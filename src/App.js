import { useState } from "react";
import Contact from "./Contact";
import "../src/App.css";

const contacts = [
  {
    firstName: "Барней",
    lastName: "Стинсовський",
    phone: "+380956319521",
    gender: "male"
  },
  {
    firstName: "Робін",
    lastName: "Щербатська",
    phone: "+380931460123",
    gender: "female"
  },
  {
    firstName: "Анонімний",
    lastName: "Анонімус",
    phone: "+380666666666"
  },
  {
    firstName: "Лілія",
    lastName: "Олдровна",
    phone: "+380504691254",
    gender: "female"
  },
  {
    firstName: "Маршен",
    lastName: "Еріксонян",
    phone: "+380739432123",
    gender: "male"
  },
  {
    firstName: "Теодор",
    lastName: "Мотсбес",
    phone: "+380956319521",
    gender: "male"
  }
];

export default function App() {
  // state для контактів
  const [contactsState] = useState(contacts);
  // state для пошуку
  const [searchValue, setSearchValue] = useState("");

  // функція для обробки значення з інпута пошуку
  const handleChange = (e) => {
    setSearchValue(e.target.value);
  };

  const getRenderedList = () => {
    if (!contactsState.length) {
      return "Список контактів порожній";
    }

    const filteredList = contactsState.filter((contact) =>
      contact.lastName.toLowerCase().includes(searchValue.toLowerCase())
    );

    if (!filteredList.length) {
      return "Контакт з таким прізвищем не знайдено";
    }

    return (
      <div>
        {filteredList.map((contact) => (
          <Contact contact={contact} />
        ))}
      </div>
    );
  };

  const renderedList = getRenderedList();

  return (
    <div className="App">
      <input value={searchValue} onChange={handleChange} />
      <hr />
      {renderedList}
    </div>
  );
}
