import { useEffect, useState } from 'react';
import { FETCH_URL } from '../constants/url';

export const useFetchContact = () => {
  const [cont, setCont] = useState();

  useEffect(() => {
    const fetchContacts = async () => {
      const response = await fetch(FETCH_URL).then(res => res.json());

      setCont(response?.results?.[0]);
    };
    
    fetchContacts();
  },[]);
  
  return cont;
}