function Footer() {
  return (
    <>
      <footer className="bg-gray-900 text-gray-400 py-4">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap justify-between items-center">
            <p className="text-sm">Copyright © 2023</p>
            <ul className="text-sm">
              <li className="inline-block mx-2">
                <a href="#">Terms of Use</a>
              </li>
              <li className="inline-block mx-2">
                <a href="#">Privacy Policy</a>
              </li>
            </ul>
          </div>
        </div>
      </footer>
    </>
  );
}

export default Footer;
