import Link from "next/link";
import Image from "next/image";
import Logo from "../../public/logo.svg";
import Logow from "../../public/logo-w.svg";
function Navbar() {
  return (
    <nav className="flex justify-between items-center py-4 px-8 bg-gray-800 text-white w-full">
      <Link href="/">
        <Image
          src={Logow}
          width={32}
          height={32}
          color="white"
          alt="logo"
          className=""
        />
      </Link>
      <p>Sign In</p>
    </nav>
  );
}

export default Navbar;
