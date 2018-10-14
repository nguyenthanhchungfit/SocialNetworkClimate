import React from 'react';
import './styles.css'

const Header = () => {
  return(
    <header className='header'>
      <div className='navbar'>
        <h3 className=''>Hello react</h3>

      <div>
        <input type='text' placeholder='Tìm kiếm' />
      </div>
      </div>
    </header>
  );
};
export default Header;