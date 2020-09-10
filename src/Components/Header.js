import React from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { faHamburger } from '@fortawesome/free-solid-svg-icons'

const Header = ({ title }) => {
  return (
    <header>
      <span className="burger">
        <FontAwesomeIcon icon={faHamburger} />
      </span>
      { title }
    </header>
  )
}

export default Header;