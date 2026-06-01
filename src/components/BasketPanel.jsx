export default function BasketPanel({ items, onCheckout }) {
  const total = items.reduce((sum, item) => sum + item.price * item.qty, 0);

  return (
    <aside className="fd-basket-panel">
      <div className="fd-basket-head">
        <h3 className="fd-basket-title">Your Basket</h3>
        <p className="fd-basket-sub">sweetly selected items</p>
      </div>
      <div className="fd-basket-body">
        {items.length === 0 ? (
          <p className="fd-basket-empty">Your basket is still empty.</p>
        ) : (
          <ul className="fd-basket-list">
            {items.map((item) => (
              <li key={item.id} className="fd-basket-item">
                <div>
                  <div className="fd-basket-item-name">
                    {item.emoji} {item.name}
                  </div>
                  <div className="fd-basket-item-qty">x {item.qty}</div>
                </div>
                <span className="fd-basket-item-price">XAF {(item.price * item.qty).toFixed(2)}</span>
              </li>
            ))}
          </ul>
        )}
      </div>
      <div className="fd-basket-footer">
        <div className="fd-total-row">
          <span>Total</span>
          <span className="fd-total-amount">XAF {total.toFixed(2)}</span>
        </div>
        <button className="fd-checkout-btn" type="button" onClick={onCheckout}>
          Continue to Checkout
        </button>
      </div>
    </aside>
  );
}
