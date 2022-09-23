import React from 'react'
import Table from './Table'

const characters = [
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
];


function MyApp() {
    return (
      <div className="container">
        {/* React element property is characterData which we can pass this property to the parent child Table.js */}
        <Table characterData={characters} /> 
      </div>
    );  
}

export default MyApp;