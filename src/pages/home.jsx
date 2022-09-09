import React from 'react';
import Categories from '../components/categories';
import { getCategories } from '../services/api';
import { Link } from 'react-router-dom';


export default class Home extends React.Component {
  state = {
    products: [],
    message: 'Digite algum termo de pesquisa ou escolha uma categoria.',
    categories: [],
  };

  async componentDidMount() {
    const categories = await getCategories();
    this.setState({ categories });
    console.log('log categorias', categories);
  }

  render() {
    const { products, message, categories } = this.state;
    return (
      <div>
        <div className="home">
          <input type="text" placeholder="Pesquisar Produto" />
          {
            products.length === 0
              ? <p data-testid="home-initial-message">{ message }</p> : null
          }
        </div>
        <p>Categorias</p>
        {
          categories.map((element) => (
            <Categories
              key={ element.id }
              id={ element.id }
              categories={ element.name }
            />
          ))
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
