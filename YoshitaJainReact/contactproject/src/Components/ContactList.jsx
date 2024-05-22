import React from "react";
// import DeleteIcon from "@mui/icons-material/Delete";

function ContactList(props) {
  const { contact, removeContact } = props;
  // we have seen that it is working fine
  // console.log(conatct, "from contact list ");
  // now we need to render the list here

  const allList = contact.map((value) => {
    return (
      <div key={value.id} className="contacts">
        <div>{value.data.name}</div>
        <div>{value.data.email}</div>
        <button onClick={() => removeContact(value.id)}>Del</button>
      </div>
    );
  });

  return (
    <>
      <div className="contact-list">Contact list</div>
      <div>{allList}</div>
    </>
  );
}

export default ContactList;
