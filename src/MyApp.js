import React, {useState} from 'react';
import Table from './Table';

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
  const [characters, setCharacters] = useState([
      {
        name: 'Charlie',
        job: 'Janitor',
      },
      {
        name: 'Mac',
        job: 'Bouncer',
      },
      {
        name: 'Dee',
        job: 'Aspring actress',
      },
      {
        name: 'Dennis',
        job: 'Bartender',
      },
    ]);  

function removeOneCharacter (index) {
  const updated = characters.filter((character, i) => {
      return i !== index
    });
    setCharacters(updated);
  }

  return (
    <div className="container">
      <Table characterData={characters} removeCharacter={removeOneCharacter} />
    </div>
  )

}

export default MyApp;