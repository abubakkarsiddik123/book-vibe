import { useContext, useEffect, useState } from "react";
import { BookContext } from "../../BookContaxt/BookProvider";
import BookCart from "../Ui/BookCart";

const ListedWishList = ({sortingType}) => {
  const { wishList } = useContext(BookContext);

  const [filteredWishList,setFilteredWishList]=useState(wishList)
  
      useEffect(()=>{
          if(sortingType){
              if(sortingType === 'pages'){
                  const sortData=[...wishList].sort((a,b)=>a.totalPages - b.totalPages)
                  setFilteredWishList(sortData)
              }else if(sortingType === 'rating'){
                  const sortData=[...wishList].sort((a,b)=>a.rating - b.rating)
                  setFilteredWishList(sortData)
              }
          }
      },[sortingType,wishList])

    if(filteredWishList.length===0){
        return (
            <div className="h-[50vh] bg-gray-100 flex items-center justify-center rounded-lg">
            <h2 className="font-bold text-3xl">No wish list data found</h2>
        </div>
        );
    }
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
      {filteredWishList.map((book, ind) => (
        <BookCart key={ind} book={book} />
      ))}
    </div>
  );
};

export default ListedWishList;
