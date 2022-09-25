import React, {useState} from 'react';
import Table from './Table';
import Form from './Form';

// REPLACE THIS WITH HOOK SO WE CAN ALTER STATE IN OTHER COMPONENTS
// const characters = [
//     {
//       name: 'Charlie',
//       job: 'Janitor',
//     },
//     {
//       name: 'Mac',
//       job: 'Bouncer',
//     },
//     {
//       name: 'Dee',
//       job: 'Aspring actress',
//     },
//     {
//       name: 'Dennis',
//       job: 'Bartender',
//     },
// ];


// Our data is officially contained in the state owned by the MyApp component (rather contained as a constant in the render function).
function MyApp() {
  // const [characters, setCharacters] = useState([
  //     {
  //       name: 'Charlie',
  //       job: 'Janitor',
  //     },
  //     {
  //       name: 'Mac',
  //       job: 'Bouncer',
  //     },
  //     {
  //       name: 'Dee',
  //       job: 'Aspring actress',
  //     },
  //     {
  //       name: 'Dennis',
  //       job: 'Bartender',
  //     },
  //   ]);  
  const [characters, setCharacters] = useState([]);

function removeOneCharacter (index) {
  const updated = characters.filter((character, i) => {
      return i !== index
    });
    setCharacters(updated);
  }
  
function updateList(person) {
    setCharacters([...characters, person]);
  }

  return (
    <div className="container">
      <Table characterData={characters} removeCharacter={removeOneCharacter} />
      <Form handleSubmit={updateList} />
    </div>
  )

}

export default MyApp;