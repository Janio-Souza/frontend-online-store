import React from 'react';
import PropTypes from 'prop-types';

export default class Categories extends React.Component {
  render() {
    const { categories, id } = this.props;
    return (
      <aside className="categories">
        <input type="radio" name="categories" id={ id } data-testid="category" />
        <label htmlFor={ id } name="categories">
          { categories }
        </label>
      </aside>
    );
  }
}

Categories.propTypes = {
  categories: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
};
