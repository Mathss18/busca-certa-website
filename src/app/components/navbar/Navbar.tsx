import Image from "next/image";
import Link from "next/link";
import { FaBell } from "react-icons/fa";

function Navbar() {
  return (
    <div className="navbar bg-base-100">
      <div className="navbar-start">
        <Link href="/">
          <Image
            src="/assets/images/logos/logo.png"
            alt="logo"
            width={168}
            height={35}
          />
        </Link>
      </div>
      <div className="navbar-center"></div>
      <div className="navbar-end">
        <button className="btn btn-ghost btn-circle">
          <div className="indicator">
            <FaBell />
            <span className="badge badge-xs badge-primary indicator-item"></span>
          </div>
        </button>
      </div>
    </div>
  );
}

export default Navbar;
