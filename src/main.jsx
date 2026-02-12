import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";

function Root() {
  const [theme, setTheme] = React.useState(
    localStorage.getItem("theme") || "cfDark"
  );

  React.useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
    localStorage.setItem("theme", theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme(prev =>
      prev === "cfDark" ? "cfLight" : "cfDark"
    );
  };

  return <App toggleTheme={toggleTheme} theme={theme} />;
}

ReactDOM.createRoot(document.getElementById("root")).render(<Root />);
