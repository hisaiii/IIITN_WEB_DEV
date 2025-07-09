 const Box = ({ imageSrc, heading, description, link, className }) => {
    return (
      <a href={link} className={`relative group overflow-hidden  shadow-md hover:shadow-lg ${className}`}>
        <img
          src={imageSrc}
          alt={heading}
          className="w-full h-full object-cover transition-transform duration-300 group-hover:opacity-80"
        />
        <div className="absolute inset-0 bg-opacity-0 group-hover:bg-opacity-30 transition-all duration-300"></div>
        <div className="absolute bottom-0 p-4 bg-white bg-opacity-90 w-full text-start">
          <h3 className="text-2xl font-semibold mb-1">{heading +" Program"}</h3>
          <p className="text-lg text-gray-700 mb-1">{description}</p>
          {/* <a href={link} className="text-blue-600 hover:underline text-md font-medium">{heading}</a> */}
        </div>
      </a>
    );
  };
  
  export default Box;

