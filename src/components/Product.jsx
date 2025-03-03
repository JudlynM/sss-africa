"use client";

import { useRouter } from "next/navigation";

export default function Product({ product }) {
  const { push } = useRouter();
  const handleViewMore = () => {
    push(`/product/${product.id}`);
  };
  return (
    <div className="product-card">
      <div className="img-wrapper">
        <img className="img" src={product.image} />
      </div>
      <p className="card-text">{product.name}</p>
      <button className="btn-pd" onClick={handleViewMore}>
        View more
      </button>
    </div>
  );
}
