export default function Footer() {
  return (
    <footer className="fd-footer">
      <div className="fd-footer-inner">
        <div className="fd-footer-brand">
          <h3 className="fd-footer-name">Ble's Cupcakes</h3>
          <p className="fd-footer-tagline">Where sugar meets magic</p>
        </div>

        <div className="fd-footer-links">
          <a
            href="https://www.facebook.com/people/Singz-pastries/100087107889979/#"
            target="_blank"
            rel="noreferrer"
            className="fd-social-btn"
          >
            Facebook
          </a>
          <a
            href="https://www.instagram.com/singzpastries"
            target="_blank"
            rel="noreferrer"
            className="fd-social-btn"
          >
            Instagram
          </a>
          <a
            href="https://maps.app.goo.gl/S6sPmSho21D64EoP6"
            target="_blank"
            rel="noreferrer"
            className="fd-social-btn"
          >
            Find us on Google
          </a>
        </div>
      </div>
      <div className="fd-footer-bottom">
        <p>Copyright 2026 Ble's Cupcakes. All rights reserved.</p>
      </div>
    </footer>
  );
}
