export default function Sidebar() {
  return (
    <div className="drawer-side">
      <label htmlFor="drawer-toggle" className="drawer-overlay"></label>
      <ul className="menu p-4 w-64 min-h-full bg-base-200">
        <li><a>Dashboard</a></li>
        <li><a>Contests</a></li>
        <li><a>Problems</a></li>
        <li><a>Ratings</a></li>
      </ul>
    </div>
  );
}
