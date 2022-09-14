import React from 'react';
import '../style.css';

class ShoppingCart extends React.Component {
  state = {
    shoppingCart: [],
    message: 'Seu carrinho está vazio',
  };

  componentDidMount() {
    this.setState({ shoppingCart: JSON.parse(localStorage.getItem('itens')) });
  }

  componentDidUpdate() {
  }

  increaseClick = ({ target }) => {
    const { id } = target;
    const { shoppingCart } = this.state;
    shoppingCart.map((value) => (
      value[0].id === id ? value.splice(1, 1, value[1] + 1) : console.log('falso')));
    this.setState({ shoppingCart });
    localStorage.setItem('itens', JSON.stringify(shoppingCart));
  };

  decreaseClick = ({ target }) => {
    const { id } = target;
    const { shoppingCart } = this.state;
    shoppingCart.map((value) => (
      value[0].id === id ? value
        .splice(1, 1, value[1] <= 1 ? 1 : value[1] - 1) : console.log('falso')));
    this.setState({ shoppingCart });
    localStorage.setItem('itens', JSON.stringify(shoppingCart));
  };

  removeClick = ({ target }) => {
    const { id } = target;
    const { shoppingCart } = this.state;
    const removeProduct = shoppingCart.filter((value) => (
      value[0].id !== id ? value : null));
    this.setState({ shoppingCart: removeProduct });
    localStorage.setItem('itens', JSON.stringify(removeProduct));
  };

  render() {
    const { shoppingCart, message } = this.state;
    return (
      <div className="products">
        {
          shoppingCart === null || shoppingCart.length === 0
            ? <p data-testid="shopping-cart-empty-message">{message}</p>
            : (
              shoppingCart
                .map((item) => (
                  <div className="product" key={ item[0].id }>
                    <p
                      data-testid="shopping-cart-product-quantity"
                    >
                      Quatidade:
                      {` ${item[1]}`}
                    </p>
                    <p data-testid="shopping-cart-product-name">{ item[0].name }</p>
                    <img src={ item[0].image } alt={ item[0].name } />
                    <p>
                      R$
                      { ` ${item[0].price}`}
                    </p>
                    <button
                      type="button"
                      id={ item[0].id }
                      data-testid="product-increase-quantity"
                      onClick={ this.increaseClick }
                    >
                      +
                    </button>
                    <button
                      type="button"
                      id={ item[0].id }
                      data-testid="product-decrease-quantity"
                      onClick={ this.decreaseClick }
                    >
                      -
                    </button>
                    <button
                      type="button"
                      id={ item[0].id }
                      data-testid="remove-product"
                      onClick={ this.removeClick }
                    >
                      Remover
                    </button>
                  </div>
                ))
            )
        }

      </div>
    );
  }
}

export default ShoppingCart;
