import './Header.scss';
import NavMenu from '../NavMenu';
import logo from '../../assets/images/svg/logo.svg';

function Header() {
  return (
    <header className="header">
      <div className="container">
        <div className="header__wrapper">
          <a href="#" className="header__logo">
            <img src={logo} alt="logo" width={71} height={24} />
          </a>
          <NavMenu />
        </div>
      </div>
    </header>
  );
}

export default Header;
