import { Link, useLocation } from 'react-router-dom';
import { useState } from 'react';
import classes from './Navigation.module.css';

function Navigation() {
  const [bookStyle, setBookStyle] = useState({
    color: 'black', textDecoration: 'underline',
  });
  const [categoriesStyle, setcategoriesStyle] = useState({});
  const location = useLocation();
  const onClick = () => {
    if (location.pathname === '/') {
      setBookStyle({
        color: 'black', textDecoration: 'underline',
      });
      setcategoriesStyle({});
    } else if (location.pathname === '/Categories') {
      setcategoriesStyle({
        color: 'black', textDecoration: 'underline',
      });
      setBookStyle({});
    }
  };
  return (
    <div>
      <ul className={classes.ul}>
        <Link to="/" style={bookStyle} onClick={onClick}>Books</Link>
        <Link to="/Categories" style={categoriesStyle} onClick={onClick}>Categories</Link>
      </ul>
    </div>
  );
}

export default Navigation;
