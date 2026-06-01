const NAV_ITEMS = [
  { id: "home", label: "Home" },
  { id: "about", label: "About" },
  { id: "contact", label: "Contact Us" },
];

export default function Header({ activePage, basketCount, darkMode, onNavigate, onToggleTheme }) {
  return (
    <header className="fd-header">
      <div className="fd-header-inner">
        <div className="fd-brand-block">
          <span className="fd-brand-sub">Every bite a little masterpiece</span>
          <h1 className="fd-brand-name">
            <button className="fd-brand-button" type="button" onClick={() => onNavigate("home")}>
              Ble's Cupcakes
            </button>
          </h1>
        </div>
        <nav className="fd-nav" aria-label="Primary navigation">
          {NAV_ITEMS.map((item) => (
            <button
              key={item.id}
              className={activePage === item.id ? "fd-nav-link active" : "fd-nav-link"}
              type="button"
              onClick={() => onNavigate(item.id)}
            >
              {item.label}
            </button>
          ))}
        </nav>
        <div className="fd-header-actions">
          <button
            className="fd-dark-toggle"
            type="button"
            onClick={onToggleTheme}
            aria-label="Toggle colour theme"
          >
            {darkMode ? "\u2600\uFE0F" : "\u{1F319}"}
          </button>
          <div className="fd-basket-wrap">
            <span className="fd-basket-label">Basket</span>
            <button className="fd-basket-btn" type="button" aria-label={`${basketCount} items in basket`}>
              {basketCount}
            </button>
          </div>
        </div>
      </div>
    </header>
  );
}
