import React, { useState } from 'react';
import ContactDetails from '../ContactDetails';
import Contact from '../Contact'
import './ContactsManager.css';

const ContactsManager = () => {
  const [selectedContact, setSelectedContact] = useState();
  

  const handleContactClick = (contact) => {
    if(selectedContact?.login?.uuid === contact?.login?.uuid) {
      setSelectedContact(null);
    } else {
      setSelectedContact(contact);
    }
  }

  const renderContacts = () => {
    return (
    <>
      <div className={"contactsWrapper"}>
        <Contact onClickHandler={ handleContactClick }/>
        <Contact onClickHandler={ handleContactClick } />
        <Contact onClickHandler={ handleContactClick } />
        <Contact onClickHandler={ handleContactClick } />
        <Contact onClickHandler={ handleContactClick } />
      </div>
      <div className={"contactsWrapper"}>
        <Contact onClickHandler={ handleContactClick} />
        <Contact onClickHandler={ handleContactClick} />
        <Contact onClickHandler={ handleContactClick} />
        <Contact onClickHandler={ handleContactClick} />
        <Contact onClickHandler={ handleContactClick} />
      </div>
  </>
  )};

  return (
    <div className="ContactsManager">
      {!!selectedContact 
        ? <ContactDetails 
        contact={ selectedContact }
        onClickHandler={ handleContactClick }/> 
        : renderContacts()}
      
    </div>
  );
};


export default ContactsManager;