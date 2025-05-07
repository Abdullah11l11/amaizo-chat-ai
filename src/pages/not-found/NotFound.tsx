import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <div className="flex min-h-screen flex-col items-center bg-charcoal justify-center text-center p-6">
      <h1 className="text-9xl font-bold text-white">404</h1>
      <h2 className="mt-4 text-2xl font-semibold text-white">Page Not Found</h2>
      <p className="mt-2 text-white">
        It seems that you have lost the way. The page you are looking for is not
        available.
      </p>
      <Link
        to="/home"
        className="mt-6 underline inline-block text-coral rounded-lg transition"
      >
        Return to the home page
      </Link>
    </div>
  );
};

export default NotFound;
