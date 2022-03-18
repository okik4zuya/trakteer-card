import Cards from "./components/Cards/Cards";
import { data } from "./data";

function App() {
  return (
    <div className="w-screen min-h-screen grid place-items-center">
      <div className="md:w-[1000px] w-screen   my-10 pt-10">
        <Cards data={data} />
      </div>
    </div>
  );
}

export default App;
