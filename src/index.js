import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { Route, Routes, BrowserRouter } from 'react-router-dom';
import Books from './components/books/Books';
import Categories from './components/categories/Categories';

ReactDOM.render(
  <BrowserRouter>
    <Routes>
      <Route
        path="/"
        exact
        element={
          <Books />
        }
      />
      <Route
        path="/Categories"
        exact
        element={
          <Categories />
        }
      />
    </Routes>
  </BrowserRouter>,
  document.getElementById('root'),
);
