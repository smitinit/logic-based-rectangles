import { useParams } from "react-router-dom";
import RenderRectangle from "./components/RenderRectangles";

function App() {
  const { count } = useParams();

  if (!count) return null;
  const toNumber = +count;

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
