import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";

function App() {
  return (
    <div>
      <Navbar />

      <div className="flex">
        <Sidebar />
        {/*Video render ... */}
      </div>
    </div>
  );
}

export default App;
