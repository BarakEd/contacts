import propTypes from 'prop-types';
import './ContactDetails.css';

const ContactDetails = ({ contact, onClickHandler }) => {
  return (
    <div className="contactDetailsWrapper" >
        <img 
          className="imgWrapper" 
          src={contact?.picture?.large} 
          alt='contact-img'
          onClick={() => onClickHandler(contact)}/>
      <div className="detailsWrapper" onClick={() => onClickHandler(contact)}>
        <div>
          {
           `${contact?.name?.title} 
            ${contact?.name?.first} 
            ${contact?.name?.last}`
          }
        </div>
        <div>{`${contact?.email}`}</div>
        <div>
          {
           `${contact?.location?.street?.number} 
            ${contact?.location?.street?.name} 
            ${contact?.location?.city} 
            ${contact?.location?.country}`
          }
        </div>
      </div>
    </div>
      
  );
};

ContactDetails.propTypes = {
  onClickHandler: propTypes.func.isRequired,
  contact: propTypes.object.isRequired,
};

export default ContactDetails;