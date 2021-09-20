import React from 'react';
import InputFilterByName from './InputFilterByName';
import planetIMG from '../../images/world.png';

const Header = () => (
  <div className="main-header">

    <img src={ planetIMG } alt="star-wars world" width="100" height="100" />

    <div className="header-searcher">
      <h3 className="header-searcher-title"> STAR WARS PLANET SEARCH</h3>
      <InputFilterByName />
    </div>

  </div>
);
export default Header;
