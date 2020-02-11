import React from "react";
import "./BookList.scss";
import BookListItem from "../book-list-item";
import { connect } from "react-redux";
import withBookService from "../hoc";
import { fetchBooks,bookAddedToCart} from "../../actions";
import compose from "../../utils";
import { Spinner } from "../spinner";
import ErrorIndicator from "../error-indicator";
import { bindActionCreators } from "redux";


const BookList = ({ books, onAddedToCart}) => {
  console.log('booklist',onAddedToCart);
  
  return (
    <ul className="book-list">
      {books.map(book => {
        return (
          <li key={book.id}>
            <BookListItem
              book={book}
              onAddedToCart={() => {
                onAddedToCart(book.id);
              }} 
            />
          </li>
        );
      })}
    </ul>
  );
};

class BookListContainer extends React.Component {
  componentDidMount() {
    this.props.fetchBooks();
  }

  render() {
    const {books, loading, error, onAddedToCart } = this.props;
    if (loading) {
      return <Spinner />;
    }
    if (error) {
      return <ErrorIndicator />;
    }
    return <BookList books={books} onAddedToCart={onAddedToCart}/>;
  }
}
const mapStateToProps = state => {
  return {
    books: state.bookList.books,
    loading: state.bookList.loading,
    error: state.bookList.error
  };
};
const mapDispatchToProps = (dispatch, { bookstoreService }) => {
return bindActionCreators({
  fetchBooks:fetchBooks(bookstoreService),
    onAddedToCart:bookAddedToCart,
    
  },dispatch)
}


// BookList is wrapped two times
// export default withBookService()(connect(mapStateToProps,{bookLoaded})(BookList));
// or with compose
export default compose(
  withBookService(),
  connect(mapStateToProps, mapDispatchToProps)
)(BookListContainer);

