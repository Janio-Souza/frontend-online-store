import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { getProductById } from '../services/api';

export default class ProductyDetails extends React.Component {
  state = {
    productDetails: {},
  };

  async componentDidMount() {
    const { match: { params: { id } } } = this.props;
    const productDetails = await getProductById(id);
    this.setState({ productDetails });
  }

  addStorage = async () => {
    const { productDetails } = this.state;

    if (!JSON.parse(localStorage.getItem('itens'))) {
      localStorage.setItem('itens', JSON.stringify([]));
    }

    const checkLocalStorage = JSON.parse(localStorage.getItem('itens'));

    if (productDetails) {
      const { id, title: name, price, thumbnail: image } = productDetails;

      const product = { id, name, price, image };

      const productShopping = checkLocalStorage.find(
        (item) => item[0].id === productDetails.id,
      );

      if (productShopping === undefined) {
        localStorage.setItem('itens', JSON.stringify(
          [...checkLocalStorage, [product, 1]],
        ));
      } else {
        const index = checkLocalStorage
          .findIndex((search) => search[0] === productShopping[0]);
        checkLocalStorage[index][1] += 1;
        localStorage.setItem('itens', JSON.stringify(checkLocalStorage));
      }
    }
  };

  render() {
    const { productDetails } = this.state;
    return (
      <div>
        <section>
          <h2 data-testid="product-detail-name">{productDetails.title}</h2>
          <img
            data-testid="product-detail-image"
            src={ productDetails.thumbnail }
            alt={ productDetails.title }
          />
          <p data-testid="product-detail-price">
            R$
            {` ${productDetails.base_price}`}
          </p>
          <button
            type="button"
          >
            <Link to="/shoppingCart" data-testid="shopping-cart-button">Carrinho</Link>
          </button>
        </section>
        <section>
          <p>
            Condição:
            {` ${productDetails.condition}`}
          </p>
          <p>
            {productDetails.warranty}
          </p>

          <button
            type="button"
            onClick={ this.addStorage }
            data-testid="product-detail-add-to-cart"
          >
            Adicionar ao carrinho
          </button>

        </section>
      </div>
    );
  }
}

ProductyDetails.propTypes = {
  match: PropTypes.shape().isRequired,
};
