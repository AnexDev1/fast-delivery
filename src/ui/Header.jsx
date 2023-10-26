import { Link } from "react-router-dom";
import SearchOrder from "../features/order/SearchOrder";

function Header() {
  return (
    <header className="">
      <Link to="/" className="">
        Fast Delivery Co.
      </Link>
      <SearchOrder />
      <p>Anwar</p>
    </header>
  );
}

export default Header;
