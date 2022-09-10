export async function getCategories() {
  const urlCategory = 'https://api.mercadolibre.com/sites/MLB/categories';
  const requestCategory = await fetch(urlCategory);
  const responseCategory = await requestCategory.json();
  return responseCategory;
}

export async function getProductsFromCategoryAndQuery(query, categoryId) {
  const urlProduct = `https://api.mercadolibre.com/sites/MLB/search?q=${query}&category=${categoryId}`;
  const requestProduct = await fetch(urlProduct);
  const responseProduct = await requestProduct.json();
  return responseProduct;
}

export async function getProductById() {
  const urlId = 'https://api.mercadolibre.com/items/$PRODUCT_ID';
  const requestId = await fetch(urlId);
  const responseId = await requestId.json();
  return responseId;
}
