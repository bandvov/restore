
const updateCartItems = (cartItems, item, idx) => {
    if (item.count === 0) {
      return [...cartItems.slice(0, idx), ...cartItems.slice(idx + 1)];
    }
  
    if (idx < 0) {
      return [...cartItems, item];
    } else {
      return [...cartItems.slice(0, idx), item, ...cartItems.slice(idx + 1)];
    }
  };
  const updateCartItem = (book, item = {}, quantity = 1) => {
    const {
      id = book.id,
      idx = book.idx,
      title = book.title,
      count = 0,
      price=book.price,
      total = 0
    } = item;
  
    return {
      id,
      idx,
      title,
      price,
      count: count + quantity,
      total: total + quantity * book.price
    };
  };
  const updateOrder = (state, action, quantity) => {
    const book = state.bookList.books.find(item => item.id === action.payload);
    let itemIndex = state.shoppingCart.cartItems.findIndex(
      item => item.id === action.payload
    );
    let item = state.shoppingCart.cartItems[itemIndex]
  
    const stNewItem = updateCartItem(book, item, quantity);
    console.log("stNewItem", stNewItem);
  
    return {
      ...state,
      cartItems: updateCartItems(
        state.shoppingCart.cartItems,
        stNewItem,
        itemIndex
      ),
      orderTotal: state.shoppingCart.orderTotal + quantity * book.price,
      countTotal: state.shoppingCart.countTotal + quantity * book.count
    };
  };
const updateShopingCart = (state, action) => {
    if (state === undefined) {
      state = {
        shoppingCart: {
          cartItems: [],
          orderTotal: 0,
          countTotal: 0
        }
      };
    }
    switch (action.type) {
      case "ALL_BOOKS_REMOVED_FROM_CART":
        let removedItem = state.shoppingCart.cartItems.find((item)=>item.id===action.payload)
        console.log(removedItem.count);
        
        const newCartItems = state.shoppingCart.cartItems.filter(
          item => item.id !== action.payload
        );
        console.log(' ============================')
        console.log(newCartItems);
    
        return  updateOrder(state,action,-removedItem.count)
        
      
      
      case "BOOK_ADDED_TO_CART":
        return updateOrder(state, action, 1);
      case "BOOK_REMOVED_FROM_CART":
        return updateOrder(state, action, -1);
      default:
        return state.shoppingCart;
    }
  };
  export default updateShopingCart;