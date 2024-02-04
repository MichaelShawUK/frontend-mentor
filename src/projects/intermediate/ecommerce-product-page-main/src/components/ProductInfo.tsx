function ProductInfo() {
  return (
    <section className="product-info">
      <h4 className="brand">Sneaker Company</h4>
      <h2 className="name">Fall Limited Edition Sneakers</h2>
      <p className="summary">
        These low-profile sneakers are your perfect casual wear companion.
        Featuring a durable rubber outer sole, they'll withstand everything the
        weather can offer.
      </p>
      <div className="price">
        <p className="current">$125.00</p>
        <span className="discount">50%</span>
        <span className="previous">$250.00</span>
      </div>
    </section>
  );
}

export default ProductInfo;
