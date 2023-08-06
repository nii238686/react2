import React, { useState } from "react";
import "./form.css"
function Form() {
  const [name, setName] = useState("");
  const [age, setAge] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleFormSubmit = (e) => {
    e.preventDefault();

    const nameValue = e.target.elements.name.value.trim();
    const ageValue = e.target.elements.age.value.trim();

    if (nameValue === "") {
      alert("Please enter a name");
      return;
    }


    if (ageValue === "") {
      alert("Please enter an age");
      return;
    }

    if (isNaN(ageValue) || ageValue < 1) {
      alert("Age must be a positive number");
      return;
    }

    // Set the form data and update the submission flag
    setName(nameValue);
    setAge(ageValue);
    setIsSubmitted(true);
  };

  const ageMessage = age < 18 ? "Your age is under 18" : "Your age is over 18";

  let formData = null;
  if (isSubmitted) {
    formData = (
      <div className="submitted-data">
 
        <p>Your name is {name} and</p>
        <p>{ageMessage}</p>
      </div>
    );
  }

  return (
    <div className="form-container">
      <form onSubmit={handleFormSubmit}>
        <input type="text" placeholder="Enter your name" name="name" />
        <input type="number" placeholder="Enter your age" name="age" />
        <button type="submit">Submit</button>
      </form>

      {formData}
    </div>
  );
}

export default Form;