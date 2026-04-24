
import BookImg from "../../assets/banner.png"

const Banner = () => {
    return (
        <div className="hero bg-base-200 min-h-[70vh] rounded-2xl my-8 container mx-auto">
  <div className="hero-content flex-col lg:flex-row-reverse w-full justify-between  ">
    <img
      src={BookImg}
      className="max-w-sm rounded-lg shadow-2xl"
    />
    <div>
      <h1 className="text-[56px] font-bold mb-12 leading-14">Books to freshen up <br /> your bookshelf</h1>
      <button className="btn bg-[#23BE0A] text-white rounded-lg">View The List</button>
    </div>
  </div>
</div>
    );
};

export default Banner;