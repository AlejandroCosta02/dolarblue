function EachPost({
  title,
  imgSrc,
  description,
}: {
  title: string;
  imgSrc: string;
  description: string;
}) {
  return (
    <div className="">
      <div className="bg-white rounded-lg shadow-md p-4">
        <img
          src={imgSrc}
          className=" mb-2 w-full h-full object-fit-cover"
          alt="img"
        />
        <h2 className="text-xl font-bold mb-2">{title}</h2>
        <p className="text-gray-600 pb-4">{description}</p>
        <a
          href="#"
          className="mt-4 bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded"
        >
          Leer mas
        </a>
      </div>
    </div>
  );
}

export default EachPost;
