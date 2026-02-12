import Layout from "./layouts/Layout";
import Dashboard from "./pages/Dashboard";

export default function App({ toggleTheme }) {
  return (
    <Layout toggleTheme={toggleTheme}>
      <Dashboard />
    </Layout>
  );
}
