import React, {useState} from 'react';

function Form(props) {
  const [person, setPerson] = useState(
     {
        name: "",
        job: "",
     }
  );
  
  // event.target gives you the element that triggered the event. 
  // why is it not event.target.value isn't event.target the click???
  function handleChange(event) {
    const { name, value } = event.target;
    if (name === "job")
      setPerson(
         {name: person['name'], job: value}
      );
    else     
       setPerson(
         {name: value, job: person['job']}   
       );
  }

  function submitForm() {
    props.handleSubmit(person);
    setPerson({name: '', job: ''});
  }

  

  return (
    <form>
      <label htmlFor="name">Name</label>
      <input
        type="text"
        name="name"
        id="name"
        value={person.name}
        onChange={handleChange} />
        <input type="button" value="Submit" onClick={submitForm} />
      <label htmlFor="job">Job</label>
      <input
        type="text"
        name="job"
        id="job"
        value={person.job}
        onChange={handleChange} />
        <input type="button" value="Submit" onClick={submitForm} />
    </form>
);

}
export default Form;