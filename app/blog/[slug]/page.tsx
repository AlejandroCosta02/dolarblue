type Props = {
  title: string;
  imgSrc: string;
  description: string;
  slug: string;
};
function Post({ title, imgSrc, description, slug }: Props) {
  return (
    <>
      <div className="bg-gray-800 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="sm:text-center lg:text-left">
            <h1 className="text-4xl tracking-tight font-extrabold text-white sm:text-5xl md:text-6xl">
              <span className="block xl:inline text-center">{title}</span>{" "}
            </h1>
          </div>
        </div>
      </div>
      <div className="flex flex-col lg:flex-row bg-white rounded-lg shadow-lg overflow-hidden">
        <div className="w-full lg:w-1/3 p-4">
          <img
            src="https://picsum.photos/400/400"
            alt="Post Image"
            className="object-cover rounded-lg h-full w-full"
          />
        </div>
        <div className="w-full lg:w-2/3 p-4">
          <h2 className="text-2xl font-bold mb-4">{title}</h2>
          <p className="mb-4">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed blandit
            velit sit amet arcu venenatis ultricies. Nullam eget pharetra quam.
            Donec faucibus odio vel velit euismod bibendum. Sed at ante eget
            turpis consequat euismod. Pellentesque habitant morbi tristique
            senectus et netus et malesuada fames ac turpis egestas.
          </p>
        </div>
      </div>
    </>
  );
}

export default Post;
