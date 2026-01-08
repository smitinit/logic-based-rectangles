import { useParams } from "react-router-dom";
import RenderRectangle from "./components/RenderRectangles";

function App() {
  const { count } = useParams();

  const toNumber = Number(count);
  if (Number.isNaN(toNumber) || toNumber < 0) return <p>Invalid count</p>;
  if (toNumber > 7) return <p>Try for small value, less than 7</p>;
  return (
    <RenderRectangle
      bgColor={"white"}
      width={1000}
      height={800}
      count={toNumber}
    />
  );
}

export default App;
