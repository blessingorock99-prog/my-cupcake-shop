export default function HeroMarquee({ items }) {
  const marqueeText = [...items, ...items].join("   .   ");

  return (
    <div className="fd-hero-strip">
      <div className="fd-hero-track">
        <span>{marqueeText}</span>
        <span aria-hidden="true">{marqueeText}</span>
      </div>
    </div>
  );
}
