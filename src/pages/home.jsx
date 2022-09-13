import React from 'react';
import { Link } from 'react-router-dom';
import { getCategories, getProductsFromCategoryAndQuery } from '../services/api';
import Categories from '../components/categories';
import CardProducts from '../components/productsCard';
import '../style.css';

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
    const { target: { id } } = categoryId;
    const { inputText } = this.state;
    const allProducts = await getProductsFromCategoryAndQuery(inputText, id);
    this.setState({ allProducts: allProducts.results });
  };

  handleChange = ({ target }) => {
    const { value } = target;
    this.setState({ inputText: value });
  };

  render() {
    const { message, categories, allProducts } = this.state;
    return (
      <main>
        <header className="header">
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
            <Link to="/shoppingCart" data-testid="shopping-cart-button">Carrinho</Link>
          </button>
        </header>
        <section className="products">
          {
            allProducts.length === 0
              ? <p data-testid="home-initial-message">{ message }</p> : null
          }
          {
            allProducts.length === 0 ? <p>Nenhum produto foi encontrado</p>
              : allProducts.map((item) => (
                <CardProducts
                  key={ item.id }
                  id={ item.id }
                  name={ item.title }
                  image={ item.thumbnail }
                  price={ item.price }
                  product={ item }
                />
              ))
          }
        </section>
        <nav className="categories">
          <p className="text_alig_center">Categorias</p>
          {
            categories.map((element) => (
              <Categories
                key={ element.id }
                id={ element.id }
                categories={ element.name }
                click={ this.handleClick }
              />
            ))
          }
        </nav>
      </main>
    );
  }
}
