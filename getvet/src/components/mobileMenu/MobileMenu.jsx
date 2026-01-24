import style from './MobileMenu.module.css';
import {Link} from 'react-router-dom'
function MobileMenu({open , toggleMenu}) {

  return (
    <div>
      {/* Mobile Menu */}
      <div
        className={`${style.mobileMenuOverlay} ${open ? style.active : ''}`}
        onClick={toggleMenu}
      ></div>

      <nav className={`${style.mobileNav} ${open ? style.active : ''}`}>
        <div className={style.mobileNavHeader}>
          <div className={style.logo}>
            <i className="fas fa-heartbeat"></i>
            <span>AnimalHealth</span>
          </div>
          <button
            className={style.mobileCloseBtn}
            onClick={toggleMenu}
            aria-label="Close menu"
          >
            <i className="fas fa-times"></i>
          </button>
        </div>

        <div className={style.mobileNavLinks}>
          <a href="#hero" className={style.mobileNavLink} onClick={toggleMenu}>
            <i className="fas fa-home"></i> Home
          </a>
          <a href="#features" className={style.mobileNavLink} onClick={toggleMenu}>
            <i className="fas fa-star"></i> Features
          </a>
          <a href="#howItWorks" className={style.mobileNavLink} onClick={toggleMenu}>
            <i className="fas fa-cogs"></i> How It Works
          </a>
          <a href="#testimonials" className={style.mobileNavLink} onClick={toggleMenu}>
            <i className="fas fa-comment-dots"></i> Testimonials
          </a>
          <Link to={'/roleselect'} className={style.mobileNavLink}> 
            <i className="fas fa-sign-in-alt"></i> Login
          </Link>
          <Link to={'/roleselect'} className={`${style.mobileNavLink} ${style.highlight}`}> 
            <i className="fas fa-user-plus"></i> Join Now
          </Link>
        </div>

        <div className={style.mobileLanguage}>
          <select id="mobileLanguageSelector" onChange={(e) => console.log(e.target.value)}>
            <option value="en">🇬🇧 English</option>
            <option value="am">🇪🇹 አማርኛ</option>
            <option value="or">🇪🇹 Afaan Oromoo</option>
          </select>
        </div>
      </nav>
    </div>
  );
}

export default MobileMenu;