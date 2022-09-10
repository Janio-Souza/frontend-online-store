import React from 'react';
import PropTypes from 'prop-types';
import '../style.css';

class cardProducts extends React.Component {
  render() {
    const { name, image, price } = this.props;
    return (
      <div data-testid="product" className="product">
        <p>{ name }</p>
        <img src={ image } alt={ name } />
        <p>{ price }</p>
        <button type="button">Adiconar ao carrinho</button>
      </div>
    );
  }
}

cardProducts.propTypes = {
  name: PropTypes.string,
  image: PropTypes.string,
  price: PropTypes.string,
}.isRequired;

export default cardProducts;
