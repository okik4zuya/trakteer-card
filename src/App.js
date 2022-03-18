import Cards from "./components/Cards/Cards";
import { data } from "./data";

function App() {
  return (
    <div className="w-screen min-h-screen">
      <div className="md:w-[1000px] sm:w-screen bg-gray-100 mx-auto rounded-xl my-10 pt-10">
        <div className="text-center font-bold text-2xl">Trakteer Card</div>
        <div className=" mx-auto min-h-[400px] p-4 mt-10 ">
          <Cards data={data} />
        </div>
      </div>
    </div>
  );
}

export default App;
