
import { Link } from "react-router-dom";

const ErrorPage = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 px-4">
      <div className="text-center max-w-md">
        {/* Error Code */}
        <h1 className="text-8xl font-bold text-[#23BE0A]">404</h1>

        {/* Title */}
        <h2 className="mt-4 text-2xl font-semibold text-gray-800">
          Page Not Found
        </h2>

        {/* Description */}
        <p className="mt-2 text-gray-500">
          Sorry, the page you are looking for doesn't exist or has been moved.
        </p>

        {/* Button */}
        <Link
          to="/"
          className="inline-block mt-6 px-6 py-3 bg-[#23BE0A] text-white rounded-lg shadow hover:bg-[#23BE0A]  transition"
        >
          Go Home
        </Link>
      </div>
    </div>
  );
};

export default ErrorPage;
