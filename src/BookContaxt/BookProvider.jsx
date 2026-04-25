import { createContext, useState } from "react";


export const BookContext = createContext();

const BookProvider = ({children}) => {

 const [storedBook,setStoredBook]=useState([]);

  const handleMarkAsRead=(currentBook)=> {
    console.log(currentBook,"currentBook")

    const isExistBook = storedBook.find(book=>book.bookId === currentBook.bookId);

    if(isExistBook){
      alert("The book is already exist")
    }else{
      setStoredBook([...storedBook,currentBook]);
      alert(`${currentBook.bookName} is Added to list`)
    }


  }


    const data = {
        handleMarkAsRead,
        storedBook,
        setStoredBook,
    }
    return <BookContext.Provider value={data}>
        {children}
    </BookContext.Provider>
};

export default BookProvider;