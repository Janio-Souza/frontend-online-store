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
                .map((item, indice, array) => (
                  // console.log(indice)
                  // item.id !== array[indice].id ? console.log('Igual') : console.log('Não igual')
                  <div className="product" key={ item.id }>
                    <p ata-testid="shopping-cart-product-name">{ item.name }</p>
                    <img src={ item.image } alt={ item.name } />
                    <p>
                      R$
                      { ` ${item.price}`}
                    </p>
                  </div>

                  // <div className="product" key={ item.id }>
                  //   <p ata-testid="shopping-cart-product-name">{ item.name }</p>
                  //   <img src={ item.image } alt={ item.name } />
                  //   <p>
                  //     R$
                  //     { ` ${item.price}`}
                  //   </p>
                  // </div>
                  ))
            )
        }

      </div>
    );
  }
}

export default ShoppingCart;
