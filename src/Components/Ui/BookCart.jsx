import { CiStar } from "react-icons/ci";
import { Link } from "react-router";

const BookCart = ({book}) => {
    return (
        <Link to={`bookDetails/${book.bookId}`} className="card bg-base-100  shadow-sm">
            <div className="p-6 ">
              <figure className="p-8 bg-[#F3F3F3] rounded-2xl">
              <img src={book.image} alt={book.bookName} className="rounded-lg h-[250px]" />
            </figure>
            </div>
            <div className="card-body">
              <div className="flex items-center gap-2">
                {
                 book.tags.map((tag,ind)=> <div key={ind} className="badge text-[#23BE0A] bg-[#23BE0A/5] font-bold  rounded-full py-4 px-2">{tag}</div> ) 
                }
              </div>
              <h2 className="card-title text-2xl">{book.bookName}</h2>
              <p className="font-semibold text-lg">{book.author}</p>           
              <div className="card-actions text-lg justify-between border-t border-dashed border-gray-300 pt-4">
                <div className="font-medium text-[#131313/80]">{book.category}</div>
                <div className="flex items-center gap-2 ">{book.rating} <CiStar /></div>
              </div>
            </div>
          </Link>
    );
};

export default BookCart; 