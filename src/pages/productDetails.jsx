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

  render() {
    const { productDetails } = this.state;
    return (
      <div>
        <section>
          <h2 data-testid="product-detail-name">{ productDetails.title }</h2>
          <img
            data-testid="product-detail-image"
            src={ productDetails.thumbnail }
            alt={ productDetails.title }
          />
          <p data-testid="product-detail-price">
            R$
            { ` ${productDetails.base_price}` }
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
            {`${productDetails.warranty}`}
          </p>
        </section>
      </div>
    );
  }
}

ProductyDetails.propTypes = {
  match: PropTypes.shape().isRequired,
};
