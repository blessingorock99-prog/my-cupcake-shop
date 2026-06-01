import BasketPanel from "../components/BasketPanel";
import HeroBanner from "../components/HeroBanner";
import HeroMarquee from "../components/HeroMarquee";
import LocationMap from "../components/LocationMap";
import ProductCard from "../components/ProductCard";
import { MARQUEE_ITEMS, PRODUCTS } from "../data/products";

export default function HomePage({
  basket,
  basketItems,
  onAddToBasket,
  onRemoveFromBasket,
  onCheckout,
}) {
  return (
    <>
      <HeroMarquee items={MARQUEE_ITEMS} />
      <HeroBanner />

      <main className="fd-layout">
        <section id="cupcakes">
          <p className="fd-section-eyebrow">Our Signature Collection</p>
          <h2 className="fd-section-title">Today's Cupcakes</h2>
          <p className="fd-section-desc">
            Seasonal flavours, baked fresh every morning with locally sourced
            ingredients and an unhealthy amount of sprinkles.
          </p>
          <div className="fd-products-grid">
            {PRODUCTS.map((product, index) => (
              <ProductCard
                key={product.id}
                product={product}
                animationDelay={`${index * 0.07}s`}
                qty={basket.get(product.id)?.qty ?? 0}
                onAdd={() => onAddToBasket(product)}
                onRemove={() => onRemoveFromBasket(product.id)}
              />
            ))}
          </div>
        </section>

        <BasketPanel items={basketItems} onCheckout={onCheckout} />
      </main>

      <LocationMap />
    </>
  );
}
