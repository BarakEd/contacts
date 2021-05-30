import { render, screen } from '@testing-library/react';
import ContactDetails from '../components/ContactDetails/ContactDetails';
import { contactMock } from './mocks';

describe('Test ContactDetails component', () => {
  const onClickMock = jest.fn();
  
  render(
    <ContactDetails         
      contact={ contactMock }
      onClickHandler={onClickMock}/> 
  );
  
  test('should render all contact details', () => {
    const { email, location, name } = contactMock
    const { first, last, title } = name;
    const { city, street, country } = location;

    const nameElement = screen.getByText(`${title} ${first} ${last}`);
    const locationElement = screen.getByText(`${street.number} ${street.name} ${city} ${country}`);
    const imgElement = screen.getByAltText('contact-img');
    const mailElement = screen.getByText(email);

    expect(mailElement).toBeInTheDocument();
    expect(locationElement).toBeInTheDocument();
    expect(nameElement).toBeInTheDocument();
    expect(imgElement).toBeInTheDocument();
  });
});
