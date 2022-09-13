import React from 'react';
import PropTypes from 'prop-types';
import { Redirect } from 'react-router-dom';
import '../style.css';

class CardProducts extends React.Component {
  state = {
    redirect: false,
    idProduct: '',
    infoStorage: {},
  };

  componentDidMount() {
    const { id, name, image, price } = this.props;
    this.setState({ idProduct: id, infoStorage: { id, name, price, image } });
  }

  handleKeyDown() {

  }

  addStorage = () => {
    const { infoStorage } = this.state;
    this.setState({ infoStorage: { amount: 1 } }); // Realizar um previstate para somar mais um cada vez
    if (!JSON.parse(localStorage.getItem('itens'))) {
      localStorage.setItem('itens', JSON.stringify([]));
    }
    const checkLocalStorage = JSON.parse(localStorage.getItem('itens'));
    localStorage.setItem('itens', JSON.stringify([...checkLocalStorage, infoStorage]));
  };

  redirect = () => {
    this.setState({ redirect: true });
  };

  render() {
    const { name, image, price } = this.props;
    const { redirect, idProduct } = this.state;
    return (
      <div
        data-testid="product"
        className="product"
      >
        <div
          role="presentation"
          onKeyDown={ this.handleKeyDown }
          data-testid="product-detail-link"
          onClick={ this.redirect }
        >
          <p>{ name }</p>
          <img src={ image } alt={ name } />
          <p>
            R$
            { price }
          </p>
        </div>
        <button
          type="button"
          onClick={ this.addStorage }
          data-testid="product-add-to-cart"
        >
          Adiconar ao carrinho
        </button>
        { redirect ? <Redirect to={ `/productyDetails/${idProduct}` } /> : null }
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
