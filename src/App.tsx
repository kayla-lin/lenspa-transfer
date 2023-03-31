import Response from "@/features/chat/components/Response";
import AppProvider from "@/providers";
function App() {
  return (
    <AppProvider>
      <Response />
    </AppProvider>
  );
}

export default App;
