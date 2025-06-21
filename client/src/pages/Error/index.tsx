import MainHeader from "../../components/Common/main-header"
const Error = () => {
  return (
    <div className="bg-grandient-to-br from yellow-50 via-amber-100 to-orange-50 min-h-screen flex flex-col">
      <MainHeader />
      
      <div className=" w-full flex justify-center items-center">
        <img className="w-60 md:w-90" src='/under-construction.png' alt="#UnderConstruction"/>
      </div>

      {/* <h1 className="text-8xl font-bold text-center text-amber-600 pb-4">404</h1> */}
      <p className="text-3xl font-semibold text-center text-gray-800 mb-2">
        Under Construction
      </p>
      <p className="text-base text-gray-600 mb-6 text-center">
        Sorry, the page you are looking for doesn't exist or in Under Construction.
      </p>
    </div>
  );
};

export default Error