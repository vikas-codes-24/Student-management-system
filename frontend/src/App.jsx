import { BrowserRouter } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { SidebarProvider } from "./contexts/SidebarContext";
import { AppRoutes } from "./routes/AppRoutes";
import { Toast } from "./components/ui/Toast";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      retry: 1,
      refetchOnWindowFocus: false,
      staleTime: 5 * 60 * 1000,
    },
  },
});

function App() {
  return (
    <BrowserRouter>
      <QueryClientProvider client={queryClient}>
        <SidebarProvider>
          <AppRoutes />
          <Toast />
        </SidebarProvider>
      </QueryClientProvider>
    </BrowserRouter>
  );
}

export default App;