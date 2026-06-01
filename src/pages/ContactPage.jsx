import LocationMap from "../components/LocationMap";

export default function ContactPage({ onSubmit }) {
  const handleSubmit = (event) => {
    event.preventDefault();
    event.currentTarget.reset();
    onSubmit();
  };

  return (
    <main className="fd-page">
      <section className="fd-contact-layout">
        <div className="fd-contact-copy">
          <p className="fd-section-eyebrow">Contact Us</p>
          <h2 className="fd-page-title">Tell us what sweet thing you need.</h2>
          <p className="fd-page-lead">
            Send a message for cupcake boxes, event orders, flavour questions,
            or directions to the shop.
          </p>
          <div className="fd-contact-details">
            <p><strong>Location:</strong> Singz Pastries, Limbe</p>
            <p><strong>Instagram:</strong> @singzpastries</p>
            <p><strong>Orders:</strong> Fresh batches available daily</p>
          </div>
        </div>

        <form className="fd-contact-form" onSubmit={handleSubmit}>
          <label>
            Name
            <input name="name" type="text" required />
          </label>
          <label>
            Email
            <input name="email" type="email" required />
          </label>
          <label>
            Message
            <textarea name="message" rows="5" required />
          </label>
          <button className="fd-checkout-btn" type="submit">
            Send Message
          </button>
        </form>
      </section>

      <LocationMap />
    </main>
  );
}
