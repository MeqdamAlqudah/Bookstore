import { Link, useLocation } from 'react-router-dom';
import { useState, useEffect } from 'react';
import classes from './Navigation.module.css';

function Navigation() {
  const [bookStyle, setBookStyle] = useState({});
  const location = useLocation();
  const [categoriesStyle, setcategoriesStyle] = useState({});
  useEffect(() => {
    setBookStyle({ color: 'black', textDecoration: 'underline' });
    if (location.pathname === '/Categories') {
      setcategoriesStyle({
        color: 'black', textDecoration: 'underline',
      });
      setBookStyle({});
    }
  }, []);
  const onClick = () => {
    if ((categoriesStyle.color === 'black')) {
      setBookStyle({
        color: 'black', textDecoration: 'underline',
      });
      setcategoriesStyle({});
    } else {
      setcategoriesStyle({
        color: 'black', textDecoration: 'underline',
      });
      setBookStyle({});
    }
  };
  const logoClickHandle = () => {
    setBookStyle({
      color: 'black', textDecoration: 'underline',
    });
    setcategoriesStyle({});
  };
  return (
    <div>
      <ul className={classes.ul}>
        <Link to="/" onClick={logoClickHandle}><h2 className={classes.h2}>Bookstore CMS</h2></Link>
        <Link to="/" style={bookStyle} onClick={onClick}>Books</Link>
        <Link to="/Categories" style={categoriesStyle} onClick={onClick}>Categories</Link>
      </ul>
    </div>
  );
}

export default Navigation;
