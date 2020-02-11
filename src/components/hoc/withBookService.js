import React from "react";
import { BookStoreServiceConsumer } from "../bookstore-service-context";

const withBookService = () => Wrapped => {
  return props => {
    return (
      <BookStoreServiceConsumer>
        {/* we pass here rendrer function  which accepts service frough context and returns wrapped cpmponent */}
        {bookstoreService => {
          return <Wrapped {...props} bookstoreService={bookstoreService} />;
        }}
      </BookStoreServiceConsumer>
    );
  };
};

export default withBookService;
