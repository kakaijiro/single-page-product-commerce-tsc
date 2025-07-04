import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.tsx";
import { Provider } from "react-redux";
import { store } from "./store.ts";
import { Toaster } from "sonner";

createRoot(document.getElementById("root")!).render(
  <Provider store={store}>
    <Toaster
      toastOptions={{
        style: {
          background: "#d3f9d8",
        },
      }}
    />
    <App />
  </Provider>,
);
