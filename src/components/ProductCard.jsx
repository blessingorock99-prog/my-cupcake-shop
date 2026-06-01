export default function ProductCard({ product, qty, animationDelay, onAdd, onRemove }) {
  const stars = Array.from({ length: 5 }, (_, index) => (
    <span key={index} style={{ color: index < product.rating ? "#e8629a" : "#ddd" }}>
      {"\u2605"}
    </span>
  ));

  return (
    <article className="fd-card" style={{ animationDelay }}>
      {product.badge && (
        <span className={`fd-badge ${product.badge === "New" ? "fd-badge-new" : "fd-badge-best"}`}>
          {product.badge}
        </span>
      )}
      <span className="fd-card-id">{product.emoji}</span>
      <div className="fd-card-img" style={{ background: product.gradient }}>
        <img src={product.image} alt={product.name} />
      </div>
      <div className="fd-card-info">
        <span className="fd-card-name">{product.name}</span>
        <span className="fd-card-price">XAF {product.price.toFixed(2)}</span>
      </div>
      <div className="fd-card-stars" aria-label={`${product.rating} out of 5 stars`}>
        {stars}
      </div>
      <span className="fd-card-flavour">{product.flavour}</span>
      <div className="fd-qty">
        <button className="fd-qty-btn minus" type="button" onClick={onRemove} aria-label={`Remove ${product.name}`}>
          -
        </button>
        <span className="fd-qty-val">{qty}</span>
        <button className="fd-qty-btn plus" type="button" onClick={onAdd} aria-label={`Add ${product.name}`}>
          +
        </button>
      </div>
    </article>
  );
}
