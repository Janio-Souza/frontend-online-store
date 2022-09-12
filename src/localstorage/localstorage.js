const getSavedItemsList = () => localStorage.getItem(itens);

if (typeof module !== 'undefined') {
  module.exports = getSavedItemsList;
}

const saveItemsList = (itens, value) => {
  // localStorage.setItem(itens, JSON.stringify(value));
  console.log(itens);
  console.log(value);
};

if (typeof module !== 'undefined') {
  module.exports = saveItemsList;
}
