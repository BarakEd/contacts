import { render, screen } from '@testing-library/react';
import Contact from '../components/Contact/Contact';
import * as hooks from '../hooks/hooks';
import { contactMock } from './mocks';

describe('Test Contact component', () => {
  const onClickMock = jest.fn();
  const fetchContactsSpy = jest.spyOn(hooks, 'useFetchContact');
  
  fetchContactsSpy.mockReturnValue(contactMock)
  
  render(
    <Contact         
      contact={ contactMock }
      onClickHandler={onClickMock}/> 
  );
  
  test('should render all contact details', () => {
    const { first, last, title } = contactMock.name;
    const nameElement = screen.getByText(`${title} ${first} ${last}`);
    const imgElement = screen.getByAltText('contact-img');
    
    expect(nameElement).toBeInTheDocument();
    expect(imgElement).toBeInTheDocument();
  });
});
