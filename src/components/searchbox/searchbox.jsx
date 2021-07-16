import React from 'react';

import './searchbox.scss';

export const SearchBox = ({ placeholder, handleChange }) => (
   <input
      className='search'
      type='search'
      placeholder={placeholder}
      onChange={handleChange}
   />
);
