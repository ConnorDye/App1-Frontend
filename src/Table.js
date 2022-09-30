import React from 'react'

//A class component must include render(), and the return can only return one parent element.
    // **Where is render come into play in here()?**
// **Is it better to break components into parts like this, or one large component like we did in the table element?**

function TableBody(props) {
    // is it better to define our data within the same file or pass the data through like this?
    // is this a lambda?
    const rows = props.characterData.map((row, index) => {
      return (
        // <tr key={index}>
        //   <td>{row.name}</td>         
        //   <td>{row.job}</td>
        // </tr>
        <tr key={index}>
          <td>{row.name}</td>
          <td>{row.job}</td>
          <td>{row.id}</td>
          <td>
             {/* index is the index of the person */}
             {/* send the row.id back to delete */}
            <button onClick={() => props.removeCharacter(index)}>Delete</button> 
          </td>
        </tr>
      );
     }
    );
    return (
        <tbody>
          {rows}
         </tbody>
     );
  }
function TableHeader() {
  return (
    <thead>
    <tr>
      <th>Name</th>
      <th>Job</th>
      <th>ID</th>
      <th>Remove</th>
    </tr>
  </thead> )

    
}

//**So the export allows us to import in our main MyApp.js for React to render?**
    //i.e export default Table;

// **What's the benefit of using props to pass data to the child components compared to returning? Is this so we can modify the state and make it interactive for later?

// {/* is this where we are passing props to tablebody? */}
// function Table(props) {
//     return (
//       <table>
//         <TableHeader />
        
//         <TableBody characterData={props.characterData} />
//       </table>
//     );
// } 

function Table (props) {
  return (
    <table>
      <TableHeader />
      <TableBody characterData={props.characterData} removeCharacter={props.removeCharacter} />
    </table>
  );
}

export default Table;