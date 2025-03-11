import "./App.css";
import { WorkingArea } from "./features";
import { AppProvider } from "./providers";

function App() {
  return (
    <AppProvider>
      <WorkingArea />
    </AppProvider>
  );
}

export default App;
