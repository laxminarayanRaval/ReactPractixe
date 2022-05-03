import React from 'react';

import mealsImage from '../../assets/meals.jpg';
import css from './Header.module.css';
import HeaderCartButton from './HeaderCartButton';

const Header = (props) => {
  return (
    <React.Fragment>
        <header className={css.header}>
            <h1>Lx Meals</h1>
            <HeaderCartButton onShow={props.onShowCart} />
        </header>
        <div className={css['main-image']}>
            <img src={mealsImage} alt="A table full of Delicious food!" />
        </div>
    </React.Fragment>
  )
}

export default Header
