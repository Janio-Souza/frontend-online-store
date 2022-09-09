import React from 'react';

class ShoppingCart extends React.Component {
  state = {
    shoppingCart: [],
    message: 'Seu carrinho está vazio',
  };

  render() {
    const { shoppingCart, message } = this.state;
    return (
      <div>
        {
          shoppingCart.length === 0
            ? <p data-testid="shopping-cart-empty-message">{message}</p>
            : null
        }

      </div>
    );
  }
}

export default ShoppingCart;
