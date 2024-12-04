import { useRouteError } from "react-router-dom";

const Error = () => {
  const err = useRouteError();
  console.log(err);

  return (
    <div className="flex flex-col justify-center items-center min-h-screen bg-gray-100 px-4">
      <h1 className="text-4xl md:text-6xl font-bold text-red-500 mb-4 text-center">Oops❗</h1>
      <h2 className="text-2xl md:text-4xl text-gray-700 mb-2 text-center">
        Something went wrong❗
      </h2>
      <h3 className="text-lg md:text-xl text-gray-600 text-center">
        {err.status}: {err.statusText}
      </h3>
    </div>
  );
};

export default Error;
