import { createContext, useState } from "react";
import { toast } from "react-toastify";


export const BookContext = createContext();

const BookProvider = ({children}) => {

 const [readList,setReadList]=useState([]);
 const [wishList,setWishList]=useState([]);

  const handleMarkAsRead=(currentBook)=> {
    console.log(currentBook,"currentBook")

    const isExistBook = readList.find(book=>book.bookId === currentBook.bookId);

    if(isExistBook){
      toast.error("The book is already exist")
    }else{
      setReadList([...readList,currentBook]);
      toast.success(`${currentBook.bookName} is Added to read list`)
    }


  }
  const handlewishList=(currentBook)=> {

    const isExistInReadList = readList.find(book=>book.bookId===currentBook.bookId)
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
        readList,
        setReadList,
        wishList,
        setWishList,
        handlewishList
    }
    return <BookContext.Provider value={data}>
        {children}
    </BookContext.Provider>
};

export default BookProvider;