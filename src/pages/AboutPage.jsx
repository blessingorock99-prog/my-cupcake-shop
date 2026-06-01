export default function AboutPage() {
  return (
    <main className="fd-page">
      <section className="fd-page-hero fd-about-hero">
        <div className="fd-page-hero-overlay" />
        <div className="fd-page-hero-content">
          <p className="fd-section-eyebrow">About Our Bakery</p>
          <h2 className="fd-page-title">Small batches, big-hearted flavour.</h2>
          <p className="fd-page-lead">
            Ble's Cupcakes is inspired by the joyful craft of Singz Pastries:
            fresh cakes, playful flavours, and frosting that makes an ordinary
            day feel worth celebrating.
          </p>
        </div>
      </section>

      <section className="fd-about-grid">
        <article className="fd-info-card">
          <span className="fd-info-kicker">Daily</span>
          <h3>Fresh From The Oven</h3>
          <p>
            We bake in small batches so every cupcake keeps the soft crumb,
            rich aroma, and handmade finish customers come back for.
          </p>
        </article>
        <article className="fd-info-card">
          <span className="fd-info-kicker">Local</span>
          <h3>Made For Celebration</h3>
          <p>
            From quick treats to custom party boxes, our menu is built around
            the moments people want to share.
          </p>
        </article>
        <article className="fd-info-card">
          <span className="fd-info-kicker">Craft</span>
          <h3>Flavour With Personality</h3>
          <p>
            Each recipe balances familiar comfort with a little colour, texture,
            and surprise.
          </p>
        </article>
      </section>
    </main>
  );
}
