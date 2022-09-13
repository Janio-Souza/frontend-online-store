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

  render() {
    const { shoppingCart, message } = this.state;
    return (
      <div className="products">
        {
          shoppingCart.length === 0
            ? <p data-testid="shopping-cart-empty-message">{message}</p>
            : (
              shoppingCart
                .map((item) => (
                  <div className="product" key={ item[0].id }>
                    <p data-testid="shopping-cart-product-name">{ item[0].name }</p>
                    <img src={ item[0].image } alt={ item[0].name } />
                    <p>
                      R$
                      { ` ${item[0].price}`}
                    </p>
                  </div>
                ))
            )
        }

      </div>
    );
  }
}

export default ShoppingCart;
