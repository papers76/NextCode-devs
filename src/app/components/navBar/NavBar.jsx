import Link from 'next/link';

const NavBar = () => {
  return (
    <nav>
      <ul>
        <li>
          <Link href="#section-1">
            Seccion 1
          </Link>
        </li>
        <li>
          <Link href="#section-2">
            Seccion 2
          </Link>
        </li>
        <li>
          <Link href="#section-3">
            Seccion 3
          </Link>
        </li>
        <li>
          <Link href="#section-4">
            Seccion 4
          </Link>
        </li>
        <li>
          <Link href="#section-5">
            Seccion 5
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default NavBar;