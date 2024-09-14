import { Link } from "react-router-dom";

export default function TopNavigation(): React.ReactNode {
  return (
    <div className="navbar bg-base-100">
      <div className="flex-1">
        <a className="btn btn-ghost text-xl">allkeep</a>
      </div>
      <div className="flex-none">
        <ul className="menu menu-horizontal px-1">
          <li>
            <Link to="/">Main</Link>
          </li>
        </ul>
      </div>
    </div>
  );
}
