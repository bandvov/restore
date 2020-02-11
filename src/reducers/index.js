import updateBookList from './updateBookList'
import updateShoppingCart from './updateShoppingCart'

const reducer = (state, action) => {
  console.log(action.type);
  return {
    bookList: updateBookList(state, action),
    shoppingCart: updateShoppingCart(state, action)
  };
};

export default reducer;
