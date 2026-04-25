import { useContext } from "react";
import { BookContext } from "../../BookContaxt/BookProvider";


const Books = () => {
      const {storedBook,wishList}=useContext(BookContext)
      console.log(storedBook,'reatList');
      console.log(wishList,'wishList');
    return (
        <div>
            listed bookspage
        </div>
    );
};

export default Books;