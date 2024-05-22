import React, { useState } from "react";

function AddContacts({ addContact }) {
  // now to capture our contact data we will use useState hook

  const [contactData, setContactData] = useState({ name: "", email: "" });
  // and whenever any user give input to name and email it store in this variables for that we use value attibute
  // contactData.name, contactData.email and a function for onChange i.e handle change

  function handleChange(e) {
    // we check the which input will assign to which object key i.e name and email
    // for name
    if (e.target.name === "name") {
      // and assign the value or set the value to name variable
      setContactData({ ...contactData, name: e.target.value });
    } else {
      // for email similar set to email here we are not checking because we have only one input left
      setContactData({ ...contactData, email: e.target.value });
    }
  }

  function handleAdd() {
    if (contactData.name === "" || contactData.email === "") {
      alert("Please add a contact details ");
    }
    // console.log(contactData);
    addContact(contactData);
  }
  return (
    <>
      <div className="add-conatct">
        {/*  need a heading of Add Contact  */}
        <div className="add-conatct-heading">Add Contacts</div>
        {/* form for inputs and buttons  */}
        <form>
          {/* input for name  */}
          <label>Name : </label> <br />
          <input
            type="text"
            placeholder="Enter name"
            name="name"
            value={contactData.name}
            onChange={handleChange}
          />{" "}
          <br />
          <label>Email : </label>
          <br />
          <input
            type="email"
            placeholder="Enter Email"
            name="email"
            value={contactData.email}
            onChange={handleChange}
          />
        </form>
        <button onClick={handleAdd}>Add contact</button>
      </div>
    </>
  );
}

export default AddContacts;
