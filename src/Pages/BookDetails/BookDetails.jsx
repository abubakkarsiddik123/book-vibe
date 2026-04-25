import { useContext,} from "react";
import { useLoaderData, useParams } from "react-router";
import { BookContext } from "../../BookContaxt/BookProvider";

const BookDetails = () => {
  const { booksId } = useParams();
  const books = useLoaderData();
  const expectedBooks = books.find((book) => book.bookId === Number(booksId));

  const {
    bookName,
    author,
    image,
    review,
    totalPages,
    rating,
    category,
    tags,
    publisher,
    yearOfPublishing,
  } = expectedBooks;

  const {handleMarkAsRead,handlewishList}=useContext(BookContext)
  console.log(handleMarkAsRead,handlewishList,'bookContaxt');


 



  return (
    <div className="grid  grid-cols-1 md:grid-cols-2 bg-base-100 shadow-sm container mx-auto my-8 rounded-lg">
     <figure className="flex justify-center items-center bg-gray-100 rounded-lg ">
        <img src={image} alt={bookName} className=" h-[500px] rounded-lg" />
      </figure>
      <div className="card-body space-y-3">
        <h2 className="card-title text-2xl">{bookName}</h2>
        <h2 className="card-title">By : {author}</h2>
        <p className="py-2 border-y">{category}</p>
        <p className="">Review : {review}</p>
        <div className="flex items-center gap-2">
          {tags.map((tag, ind) => (
            <div
              key={ind}
              className="badge text-[#23BE0A] bg-[#23BE0A/5] font-bold  rounded-full py-4 px-2"
            >
              {tag}
            </div>
          ))}
        </div>
        <div className=" border-t space-y-3">
          <div className="flex justify-between items-center gap-2 mt-4">
            <span>Number of Pages:</span> <span>{totalPages}</span>
          </div>
          <div className="flex justify-between items-center gap-2">
            <span>Publisher:</span> <span>{publisher}</span>
          </div>
          <div className="flex justify-between items-center gap-2">
            <span>Year of Publishing:</span> <span>{yearOfPublishing}</span>
          </div>
          <div className="flex justify-between items-center gap-2">
            <span>Rating:</span> <span>{rating}</span>
          </div>
          <div className="flex gap-2">
            <button className="btn btn-outline" onClick={()=>handleMarkAsRead(expectedBooks)}>Mark as Read</button>
            <button className="btn bg-[#59C6D2] text-white" onClick={()=>handlewishList(expectedBooks)}>Add to Wishlist</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BookDetails;
