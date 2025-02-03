import { useState } from 'react';
import './NavMenu.scss';
import { ReactComponent as CartIcon } from '../../assets/images/svg/cart.svg';

function NavMenu() {
  const [isTransitioning, setIsTransitioning] = useState(false);

  function handleToggle(e) {
    document.body.style.overflow = e.target.checked ? 'hidden' : '';
    setIsTransitioning(true);

    setTimeout(() => {
      setIsTransitioning(false);
    }, 300);
  };

  return (
    <nav className="nav-menu">
      <input
        type="checkbox"
        className="nav-menu__checkbox"
        id="nav-toggle"
        onChange={handleToggle}
      />
      <label className="nav-menu__label" htmlFor="nav-toggle">
        <span></span>
        <span></span>
        <span></span>
      </label>
      <ul
        className={`nav-menu__list ${isTransitioning ? 'nav-menu__list--transitioning' : ''}`}
      >
        <li>
          <a href="/">Home</a>
        </li>
        <li>
          <a href="/">Products</a>
        </li>
        <li className="nav-menu__icon-link">
          <a href="/" aria-label="Go to shopping cart">
            <CartIcon />
            <span className="visually-hidden" id="cartDesc">
              Shopping Cart Icon
            </span>
          </a>
        </li>
      </ul>
    </nav>
  );
}

export default NavMenu;
