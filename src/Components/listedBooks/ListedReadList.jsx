import { useContext, useEffect, useState } from "react";
import { BookContext } from "../../BookContaxt/BookProvider";
import BookCart from "../Ui/BookCart";


const ListedReadList = ({sortingType}) => {
     const { readList } = useContext(BookContext);
     const [filteredReadList,setFilteredReadList]=useState(readList)

    useEffect(()=>{
        if(sortingType){
            if(sortingType === 'pages'){
                const sortData=[...readList].sort((a,b)=>a.totalPages - b.totalPages)
                setFilteredReadList(sortData)
            }else if(sortingType === 'rating'){
                const sortData=[...readList].sort((a,b)=>a.rating - b.rating)
                setFilteredReadList(sortData)
            }
        }
    },[sortingType,readList])


       if(filteredReadList.length===0){
        return (
            <div className="h-[50vh] bg-gray-100 flex items-center justify-center rounded-lg">
            <h2 className="font-bold text-3xl">No read list data found</h2>
        </div>
        );
    }
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
            {
            filteredReadList.map((book,ind)=> <BookCart key={ind} book={book} /> )
           }
        </div>
    );
};

export default ListedReadList;