import React from 'react';
import { Link } from 'react-router-dom';
import { getCategories, getProductsFromCategoryAndQuery } from '../services/api';
import Categories from '../components/categories';
import CardProducts from '../components/productsCard';

export default class Home extends React.Component {
  state = {
    message: 'Digite algum termo de pesquisa ou escolha uma categoria.',
    categories: [],
    allProducts: [],
    inputText: '',
  };

  async componentDidMount() {
    const categories = await getCategories();
    this.setState({ categories });
  }

  handleClick = async (categoryId) => {
    const { inputText } = this.state;
    const allProducts = await getProductsFromCategoryAndQuery(inputText, categoryId);
    this.setState({ allProducts: allProducts.results });
  };

  handleChange = ({ target }) => {
    const { value } = target;
    this.setState({ inputText: value });
  };

  render() {
    const { message, categories, allProducts } = this.state;
    return (
      <div>
        <input
          type="text"
          placeholder="Pesquisar Produto"
          data-testid="query-input"
          onChange={ this.handleChange }
        />

        <button
          type="button"
          value="Pesquisar"
          data-testid="query-button"
          onClick={ this.handleClick }
        >
          Pesquisar
        </button>

        <button
          type="button"
        >
          <Link to="shoppingCart" data-testid="shopping-cart-button">Carrinho</Link>
        </button>

        {
          allProducts.length === 0
            ? <p data-testid="home-initial-message">{ message }</p> : null
        }
        {
          allProducts.length === 0 ? <p>Nenhum produto foi encontrado</p>
            : allProducts.map((item) => (
              <CardProducts
                key={ item.id }
                name={ item.title }
                image={ item.thumbnail }
                price={ item.price }
              />
            ))
        }

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
      </div>
    );
  }
}
