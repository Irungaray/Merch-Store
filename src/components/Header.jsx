import React, { useContext } from 'react';
import { Link } from 'react-router-dom';

import AppContext from '../context/AppContext';

import '../styles/components/Header.css';

const Header = () => {
  const { state } = useContext(AppContext);
  const { cart } = state;

  return (
    <div className="Header">
      <h1 className="Header-title">
        <Link to="/">Merch Store</Link>
      </h1>

      <div className="Header-checkout">
        {cart.length > 0 && (
          <div className="Header-alert">
            <h1>{cart.length}</h1>
          </div>
        )}

        <Link to="/checkout">
          <i className="fas fa-shopping-basket fa-2x" />
        </Link>
      </div>
    </div>
  );
};

export default Header;
