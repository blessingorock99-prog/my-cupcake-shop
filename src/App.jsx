import { useState } from "react";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Toast from "./components/Toast";
import useToast from "./hooks/useToast";
import AboutPage from "./pages/AboutPage";
import ContactPage from "./pages/ContactPage";
import HomePage from "./pages/HomePage";
import "./styles/app.css";

export default function App() {
  const [activePage, setActivePage] = useState("home");
  const [darkMode, setDarkMode] = useState(false);
  const [basket, setBasket] = useState(new Map());
  const { toast, showToast } = useToast();

  const addToBasket = (product) => {
    setBasket((prev) => {
      const next = new Map(prev);
      const existing = next.get(product.id);
      next.set(
        product.id,
        existing ? { ...existing, qty: existing.qty + 1 } : { ...product, qty: 1 }
      );
      return next;
    });
    showToast(`${product.emoji} Added ${product.name}!`);
  };

  const removeFromBasket = (id) => {
    setBasket((prev) => {
      const next = new Map(prev);
      const existing = next.get(id);

      if (!existing) {
        return prev;
      }

      if (existing.qty > 1) {
        next.set(id, { ...existing, qty: existing.qty - 1 });
      } else {
        next.delete(id);
      }

      return next;
    });
  };

  const handleCheckout = () => {
    if (basket.size === 0) {
      showToast("Your basket is empty!");
      return;
    }

    showToast("Order placed! Sweet dreams ahead.");
    setBasket(new Map());
  };

  const totalCount = Array.from(basket.values()).reduce((sum, item) => sum + item.qty, 0);
  const basketItems = Array.from(basket.values());
  const pages = {
    home: (
      <HomePage
        basket={basket}
        basketItems={basketItems}
        onAddToBasket={addToBasket}
        onRemoveFromBasket={removeFromBasket}
        onCheckout={handleCheckout}
      />
    ),
    about: <AboutPage />,
    contact: <ContactPage onSubmit={() => showToast("Thanks! We will get back to you soon.")} />,
  };

  return (
    <div className={darkMode ? "fd-app dark" : "fd-app"}>
      <Header
        activePage={activePage}
        basketCount={totalCount}
        darkMode={darkMode}
        onNavigate={setActivePage}
        onToggleTheme={() => setDarkMode((current) => !current)}
      />

      {pages[activePage]}

      <Toast toast={toast} />
      <Footer />
    </div>
  );
}
