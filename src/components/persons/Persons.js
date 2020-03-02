import React from "react";

const Persons = (props) => {
  return(

    <div className="persons">
      <p>I'm {props.name} and my age is {props.age} years old.</p>
    </div>

  );
}

export default Persons;