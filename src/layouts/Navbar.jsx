export default function Navbar({ toggleTheme, theme }) {
  return (
    <div className="navbar bg-base-100 border-b border-base-300 sticky top-0 z-50">
      <div className="flex-none">
        <label htmlFor="drawer-toggle" className="btn btn-square btn-ghost">
          ☰
        </label>
      </div>

      <div className="flex-1">
        <a className="text-xl font-bold text-primary">
          CF Dashboard
        </a>
      </div>

      <div className="flex-none gap-2 flex items-center">

        <input
          type="text"
          placeholder="Enter handle"
          className="input input-bordered input-sm"
        />

        {/* Fancy toggle switch */}
        <label className="swap swap-rotate">

          <input
            type="checkbox"
            onChange={toggleTheme}
            checked={theme === "cfLight"}
          />

          {/* Sun icon */}
          <svg
            className="swap-on fill-current w-6 h-6"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
          >
            <path d="M5.64 17.657l-1.414 1.414M4.222 4.222L5.64 5.64M12 2v2m0 16v2m8-10h2M2 12H0m16.95 4.95l1.414 1.414M17.657 5.64l1.414-1.414M12 6a6 6 0 100 12 6 6 0 000-12z"/>
          </svg>

          {/* Moon icon */}
          <svg
            className="swap-off fill-current w-6 h-6"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
          >
            <path d="M21.64 13.64A9 9 0 1110.36 2.36 7 7 0 0021.64 13.64z"/>
          </svg>

        </label>
      </div>
    </div>
  );
}
