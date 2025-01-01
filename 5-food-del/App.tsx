import React from "react";
import ReactDOM from "react-dom/client";
import FoodDeliveryPage from "./pages/FoodDeliveryPage";

const App: React.FC = () => {
  return (
    <div>
      <FoodDeliveryPage />
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root") as HTMLElement);

root.render(<App />);
