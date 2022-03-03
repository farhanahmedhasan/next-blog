import Link from "next/link";
import Image from "next/image";

const Header = () => {
  return (
    <header className="bg-gradient-primary-radial px-8  flex items-center justify-between">
      {/* Logo */}
      <Link href="/">
        <a className="flex items-center gap-x-4 cursor-pointer">
          <Image src="/images/site/logo.png" height={60} width={60} objectFit="cover" alt="logo" />
          <h2 className="font-bold text-xl text-primary-pink">Newslasia</h2>
        </a>
      </Link>

      {/* Navigation */}
      <nav className="self-stretch flex items-center">
        <ul className="self-stretch flex items-center">
          <li className="self-stretch flex items-center">
            <Link href="/posts">
              <a className="self-stretch flex items-center cursor-pointer font-semibold p-6 hover:bg-primary-pink hover:text-white transition-all">
                Posts
              </a>
            </Link>
          </li>

          <li className="self-stretch flex items-center">
            <Link href="/contact">
              <a className="self-stretch flex items-center cursor-pointer font-semibold p-6 hover:bg-primary-pink hover:text-white transition-all">
                Contact
              </a>
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
