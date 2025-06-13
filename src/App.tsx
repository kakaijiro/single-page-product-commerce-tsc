import { Button } from "@/components/ui/button";

function App() {
  return (
    <div>
      <div className="flex flex-col items-center jusityfi-center">
        <h1 className="text-7xl font-bold mb-12 ">App</h1>
        <Button
          variant="destructive"
          className="bg-blue-500 text-blue-50"
          size="lg"
          onClick={() => console.log("it worked!!!")}
        >
          Click Me
        </Button>
      </div>
    </div>
  );
}
export default App;
