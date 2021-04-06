import React from 'react';

import Categories from './categories.js';
import Products from './products.js';
import CurrentCategory from './current-category.js';

export default function Storefront() {

  return (
    <>
      <Categories />
      {/* <CurrentCategory /> */}
      <Products />
    </>
  )
}