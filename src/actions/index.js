const booksLoaded = newBook => {
  return {
    type: "FETCH_BOOKS_SUCCESS",
    payload: newBook
  };
};
const booksRequested = () => {
  return {
    type: "FETCH_BOOKS_REQUEST"
  };
};
const booksError = error => {
  return {
    type: "FETCH_BOOKS_FAILURE",
    payload: error
  };
};
const bookAddedToCart = bookId => {
  return {
    type: "BOOK_ADDED_TO_CART",
    payload: bookId
  };
};
const bookRemovedFromCart = bookId => {
  return {
    type: "BOOK_REMOVED_FROM_CART",
    payload: bookId
  };
};

// all this action creators are used only in  fetchBooks() function and there is no need to export them
// fetchBooks() is not action creator
const fetchBooksOld = (bookStoreService, dispatch) => () => {
  dispatch(booksRequested());
  bookStoreService
    .getBook()
    .then(data => dispatch(booksLoaded(data)))
    .catch(err => dispatch(booksError(err)));
};
const fetchBooks = (bookStoreService)=>()=>(dispatch)=> {
  dispatch(booksRequested());
  bookStoreService
    .getBook()
    .then(books => dispatch(booksLoaded(books)))
    .catch(err => booksError(err));
};

const allBooksRemovedFromCart = bookId => {
  return {
    type: "ALL_BOOKS_REMOVED_FROM_CART",
    payload: bookId
  };
};

export {
  fetchBooks,
  bookAddedToCart,
  allBooksRemovedFromCart,
  bookRemovedFromCart
};