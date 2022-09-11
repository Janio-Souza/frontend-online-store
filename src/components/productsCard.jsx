import React from 'react';
import PropTypes from 'prop-types';
// import { Link, BrowserRouter, Redirect, Route, Switch } from 'react-router-dom';
import '../style.css';

class CardProducts extends React.Component {
  // state = {
  //   redirect: true,
  // };

  handleKeyDown() {

  }

  redirect = () => {
    console.log('redirecionou');

  // <Redirect to="/shoppingCart" />
  };

  render() {
    const { name, image, price } = this.props;
    return (
      <div
        data-testid="product"
        className="product"
      >
        <div
          role="presentation"
          onKeyDown={ this.handleKeyDown }
          onClick={ this.redirect }
        >
          <p>{ name }</p>
          <img src={ image } alt={ name } />
          <p>{ price }</p>
        </div>
        <button type="button">Adiconar ao carrinho</button>
      </div>
    );
  }
}

CardProducts.propTypes = {
  name: PropTypes.string,
  image: PropTypes.string,
  price: PropTypes.string,
}.isRequired;

export default CardProducts;
