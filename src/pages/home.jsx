import React from 'react';
import { Link } from 'react-router-dom';

export default class Home extends React.Component {
  state = {
    products: [],
    message: 'Digite algum termo de pesquisa ou escolha uma categoria.',
  };

  render() {
    const { products, message } = this.state;
    return (
      <div>
        <input type="text" placeholder="Pesquisar Produto" />
        {
          products.length === 0
            ? <p data-testid="home-initial-message">{ message }</p> : null
        }
        <button
          type="submit"
        >
          <Link to="shoppingCart" data-testid="shopping-cart-button">Carrinho</Link>
        </button>
      </div>
    );
  }
}
