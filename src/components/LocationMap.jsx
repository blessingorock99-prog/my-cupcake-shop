export default function LocationMap() {
  return (
    <div className="fd-map">
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3979.313677934579!2d9.269007973491583!3d4.158598946121623!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x106133043a901f21%3A0x43d9daddba6e8648!2sSingz%20pastries!5e0!3m2!1sen!2scm!4v1780052523278!5m2!1sen!2scm"
        width="100%"
        height="450"
        style={{ border: 0, borderRadius: "16px" }}
        allowFullScreen=""
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        title="Shop location"
      />
    </div>
  );
}
