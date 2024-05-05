import { Outlet } from "react-router-dom";
import { Footer, Header } from "../features/layout";

const App: React.FC = () => {
  return (
    <>
      <Header />
      <main>
        <Outlet />
      </main>
      <Footer />
    </>
  );
};

export default App;
