import React from 'react';

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
      </div>
    );
  }
}
