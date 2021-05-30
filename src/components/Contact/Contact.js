import React from 'react';
import propTypes from 'prop-types';
import { useFetchContact } from '../../hooks'
import './Contact.css';

const Contact = ({onClickHandler}) => {
  const contact = useFetchContact();
  
  return !!contact && (
    <div className='Contact' onClick={() => onClickHandler(contact)}>
      <img className="contactImg" src={contact?.picture?.large} alt='contact-img'/>
      <div className="nameWrapper">
        {`${contact?.name?.title} ${contact?.name?.first} ${contact?.name?.last}`}
      </div>
    </div>
  )
};


Contact.propTypes = {
  onClickHandler: propTypes.func.isRequired,
};

export default Contact;