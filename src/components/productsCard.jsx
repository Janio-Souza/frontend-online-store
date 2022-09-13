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
    this.setState({ idProduct: id, infoStorage: [{ id, name, price, image }, 1] });
  }

  handleKeyDown() {

  }

  addStorage = async () => {
    const { product, id } = this.props;
    const { infoStorage } = this.state;
    if (!JSON.parse(localStorage.getItem('itens'))) {
      localStorage.setItem('itens', JSON.stringify([]));
    }
    const checkLocalStorage = JSON.parse(localStorage.getItem('itens'));
    if (product) {
      const productShopping = checkLocalStorage.find((item) => item[0].id === id);
      if (productShopping === undefined) {
        localStorage.setItem('itens', JSON.stringify(
          [...checkLocalStorage, infoStorage],
        ));
      } else {
        const index = checkLocalStorage
          .findIndex((search) => search[0] === productShopping[0]);
        checkLocalStorage[index][1] += 1;
        localStorage.setItem('itens', JSON.stringify(checkLocalStorage));
      }
    }
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
          <img width="90" height="90" src={ image } alt={ name } />
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
