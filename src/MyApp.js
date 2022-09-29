import React, {useState, useEffect} from 'react';
import axios from 'axios';
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

//BACKEND
async function fetchAll(){
  try {
     const response = await axios.get('http://localhost:5000/users');
     return response.data.users_list;     
  }
  catch (error){
     //We're not handling errors. Just logging into the console.
     console.log(error); 
     return false;         
  }
}

useEffect(() => {
  fetchAll().then( result => {
     if (result)
        setCharacters(result);
   });
}, [] );

async function makePostCall(person){
  try {
     const response = await axios.post('http://localhost:5000/users', person);
    //  console.log(201)
     person["name"]= response.data["name"]
     person["job"] = response.data["job"]
     person["id"] = response.data["id"]
     return response;
  }
  catch (error) {
     console.log(error);
     return false;
  }
}


//FRONT END
function removeOneCharacter (index) {
  const updated = characters.filter((character, i) => {
      return i !== index
    });
    setCharacters(updated);
  }
  
// function updateList(person) {
//     setCharacters([...characters, person]);
//   }

function updateList(person) { 
  makePostCall(person).then( result => {
  if (result && result.status === 200)
     console.log(person)
     setCharacters([...characters, person] );
  });
}

  return (
    <div className="container">
      <Table characterData={characters} removeCharacter={removeOneCharacter} />
      <Form handleSubmit={updateList} />
    </div>
  )

}

export default MyApp;