import React from 'react';
import PropTypes from 'prop-types';

export default class Categories extends React.Component {
  render() {
    const { categories, id, click } = this.props;
    return (
      <aside className="category">
        <input
          type="radio"
          name="category"
          id={ id }
          data-testid="category"
          onChange={ click }
        />
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
  click: PropTypes.func.isRequired,
};
