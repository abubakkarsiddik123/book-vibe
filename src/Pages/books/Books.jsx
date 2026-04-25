import { useContext } from "react";
import { BookContext } from "../../BookContaxt/BookProvider";


const Books = () => {
      const {storedBook}=useContext(BookContext)
      console.log(storedBook,'bookContaxt');
    return (
        <div>
            listed bookspage
        </div>
    );
};

export default Books;