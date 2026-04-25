import { createContext, useState } from "react";
import { toast } from "react-toastify";


export const BookContext = createContext();

const BookProvider = ({children}) => {

 const [storedBook,setStoredBook]=useState([]);
 const [wishList,setWishList]=useState([]);

  const handleMarkAsRead=(currentBook)=> {
    console.log(currentBook,"currentBook")

    const isExistBook = storedBook.find(book=>book.bookId === currentBook.bookId);

    if(isExistBook){
      toast.error("The book is already exist")
    }else{
      setStoredBook([...storedBook,currentBook]);
      toast.success(`${currentBook.bookName} is Added to read list`)
    }


  }
  const handlewishList=(currentBook)=> {

    const isExistInReadList = storedBook.find(book=>book.bookId===currentBook.bookId)
    if(isExistInReadList){
        toast.error("This book is already in Read List")
        return;
    }

    console.log(currentBook,"currentBook")

    const isExistBook = wishList.find(book=>book.bookId === currentBook.bookId);

    if(isExistBook){
      toast.error("The book is already exist")
    }else{
      setWishList([...wishList,currentBook]);
      toast.success(`${currentBook.bookName} is Added to wish list`)
    }


  }


    const data = {
        handleMarkAsRead,
        storedBook,
        setStoredBook,
        wishList,
        setWishList,
        handlewishList
    }
    return <BookContext.Provider value={data}>
        {children}
    </BookContext.Provider>
};

export default BookProvider;