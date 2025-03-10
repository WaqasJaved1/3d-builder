import { Provider } from "react-redux";
import "./App.css";
import { WorkingArea } from "./features";
import { store } from "./store";
import { ThreeDModelProvider } from "./providers/model-provider";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

function App() {
  const queryClient = new QueryClient({
    defaultOptions: {
      queries: {
        retry: 3,
      },
    },
  });

  return (
    <Provider store={store}>
      <QueryClientProvider client={queryClient}>
        <ThreeDModelProvider>
          <WorkingArea />
        </ThreeDModelProvider>
      </QueryClientProvider>
    </Provider>
  );
}

export default App;
