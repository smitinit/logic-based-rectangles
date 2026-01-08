import { useParams } from "react-router-dom";
import RenderRectangle from "./components/RenderRectangles";

function App() {
  const { count } = useParams();
  if (!count) return;
  const toNumber = +count;
  return (
    <RenderRectangle
      width={800}
      height={800}
      negateHeight={+toNumber * 0}
      negateWidth={+toNumber * 0}
      count={+toNumber}
    />
  );
}

export default App;
