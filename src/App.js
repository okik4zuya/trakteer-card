import Cards from "./components/Cards/Cards";
import { data } from "./data";

function App() {
  console.log(data);
  return (
    <div className="w-screen min-h-screen">
      <div className="text-center font-bold text-2xl mt-20">Trakteer Card</div>
      <div className="w-screen mx-auto min-h-[400px] bg-yellow-200 p-4 mt-10 ">
        <Cards data={data} />
      </div>
    </div>
  );
}

export default App;
