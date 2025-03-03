"use client";

import { useParams } from "next/navigation";
import { useEffect, useState } from "react";
import { ProductList } from "@/data/product";
import Product from "@/components/Product";

export default function ProductDetail() {
  const { id } = useParams();
  const [product, setProduct] = useState(null);

  useEffect(() => {
    if (id) {
      const selectedProduct = ProductList?.find((p) => p.id === id);
      setProduct(selectedProduct);
    }
  }, [id]);

  if (!product) return <p>Loading...</p>;

  return (
    <main>
      <section className="product-detail-section">
        <div className="product-img-side">
          <div className="display-img-wrapper">
            <img
              className="display-img"
              src={product.image}
              alt={product.name}
            />
          </div>
        </div>
        <div className="product-details-side">
          <h1 className="detail-heading">{product.name}</h1>
          <p>{product.description}</p>
          <p>
            <strong>Price:</strong> ${product.price}
          </p>
          <p className="subH">What can it power</p>
          <ul>
            <li>
              LED Bulbs: Typically 5-10 watts each. You could power several of
              these.
            </li>
            <li>Small Fans: Around 20-30 watts.</li>
            <li>Phone Chargers: Usually around 5-10 watts.</li>
            <li>Laptops: Around 30-50 watts, depending on the model.</li>
            <li>
              Television: Around 50-100 watts, depending on the size and type.
            </li>
            <li>Wi-Fi Router: Around 10-20 watts.</li>
            <li>
              Refrigerator: Around 100-200 watts (though it cycles on and off).
            </li>
            <li>Microwave: Around 800-1000 watts (for short periods).</li>
            <li>Electric Kettle: Around 1000-1500 watts </li>
            <li>
              Washing Machine: Around 500-1000 watts (depending on the cycle).
            </li>
            <li>
              Air Conditioner: Around 1000-2000 watts (depending on the size and
              efficiency).
            </li>
            <li>Electric Oven: Around 2000-3000 watts (for short periods).</li>
          </ul>
          <button
            className="btn-order snipcart-add-item"
            data-item-id={product.id}
            data-item-price={product.price}
            data-item-url={`/product/${product.id}`}
            data-item-description={product.description}
            data-item-image={product.image}
            data-item-name={product.name}
          >
            I Want This
          </button>
        </div>
      </section>
      <hr className="line" />
      <section className="section-below">
        <p className="sut">
          Experience energy independence with the Standard Level 4 Energydock.
          This advanced home energy solution combines a powerful 6kVA Victron
          inverter with a reliable 5.4kWh LiFePO4 battery to deliver
          uninterrupted power.
        </p>
        <p className="su">Key Features</p>
        <ul>
          <li>
            Smart Solar Integration: Dual MPPT trackers maximize solar energy
            harvest.
          </li>
          <li>
            Reliable Backup Power: Robust inverter ensures consistent power
            supply.
          </li>
          <li>
            Long-Lasting Battery: LiFePO4 technology for extended lifespan.
          </li>
          <li>Easy Installation: Hassle-free setup for quick deployment.</li>
          <li>Compact Design: Fits seamlessly into your home or business.</li>
        </ul>
        <p className="su">How it Works</p>
        <p>
          The Energydock Standard Level 4 seamlessly integrates optional solar
          panels into your energy mix, reducing reliance on the grid. When the
          grid goes down, the system automatically switches to battery power,
          providing uninterrupted electricity.
        </p>
        <p className="su">Unmatched Quality</p>
        <p>
          Crafted with precision by Specialized Solar Systems and using top-tier
          components, the Energydock Standard Level 4 delivers exceptional
          performance and durability.
        </p>
      </section>
      <section className="products-section extra-margin">
        <h2 className="featured-heading">Popular Home Products</h2>
        <div className="products-display">
          {ProductList.map((product, i) => (
            <Product product={product} key={i} />
          ))}
        </div>
      </section>
    </main>
  );
}
