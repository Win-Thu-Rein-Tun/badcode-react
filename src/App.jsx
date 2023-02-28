import { Navbar, Footer, Jobs, Search, Value } from "./components"

const App = () => (
  <div className="w-[85%] m-auto bg-white">
    <Navbar />
    <Search />
    <Jobs />
    <Value />
    <Footer />
  </div>
);

export default App
