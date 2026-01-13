import { format } from "date-fns";
import "./App.css";

function App() {
  return (
    <p className="clock">
      {format(new Date(), "MMMM do, yyyy HH:mm:ss")}
    </p>
  );
}

export default App;
