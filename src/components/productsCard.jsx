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
    const { name, image, price } = this.props;
    const { id } = this.props;
    this.setState({ idProduct: id, infoStorage: name, price, image });
  }

  handleKeyDown() {

  }

  addStorage = () => {
    const { idProduct } = this.state;
    if (!JSON.parse(localStorage.getItem('itens'))) {
      localStorage.setItem('itens', JSON.stringify([]));
    }
    const checkLocalStorage = JSON.parse(localStorage.getItem('itens'));
    localStorage.setItem('itens', JSON.stringify([...checkLocalStorage, idProduct]));
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
