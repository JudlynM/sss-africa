import Product from "@/components/Product";
import { ProductList } from "@/data/product";

interface ProductType {
  id: string;
  name: string;
  price: number;
  image: string;
  description: string;
}

export default function Home() {
  return (
    <>
      <main>
        <section className="hero">
          <div className="side left">
            <div className="content-wrapper">
              <h1 className="hero-heading">
                Power Your Home with Reliable Energy
              </h1>
              <p>
                Explore affordable solar and battery systems custom-designed to
                provide your home with uninterrupted, eco-friendly power.
              </p>
              <button className="btn">Find a Home solution</button>
            </div>
          </div>
          <div className="side right">
            <div className="content-wrapper">
              <h1 className="hero-heading">
                Empower Your Business with Smart Energy
              </h1>
              <p>
                Future-proof your business with scalable solar and battery
                systems tailored to your commercial energy needs.
              </p>
              <button className="btn">Find a Home solution</button>
            </div>
          </div>
        </section>
        <section className="partner-section">
          <h2 className="section-heading">
            Join Our Network of Solar Resellers
          </h2>
          <p>
            Partner with Specialized Solar Solutions Africa and bring top-tier,
            reliable solar solutions to your customers.
          </p>
          <button className="btn-sn">partner with us</button>
        </section>
        <section className="affordable-section">
          <h2 className="section-heading1">
            Affordable Back-up Power Solutions for Your Home or Business
          </h2>
          <p className="text">
            At Specialised Solar Systems Africa, we provide affordable,
            custom-designed solar solutions that are easy to install and
            maintain. Whether you are looking for a cost-effective battery
            solution or a utility-style solar solution, our products empower
            homes and businesses with reliable, eco-friendly energy—all without
            breaking the bank.
          </p>
          <p className="text">
            As trusted leaders in renewable energy solutions, we guarantee
            top-tier quality, fast delivery, and competitive pricing. You do not
            have to choose between affordability and sustainability—you can have
            both, backed by our unmatched customer service.
          </p>
        </section>
        <section className="products-section">
          <h2 className="featured-heading">Featured Products</h2>
          <div className="products-display">
            {ProductList.map((product: ProductType, i: number) => (
              <Product product={product} key={i} />
            ))}
          </div>
        </section>
        <section className="smart-section">
          <h2 className="section-heading green">Smart Power, Simple Choices</h2>
          <p className="text">
            Finding your perfect power solution is straightforward, stress-free,
            and simple with Specialized Solar Systems Africa. Backed by decades
            of expertise, our customised smart solutions are designed to meet
            your unique needs—without the complicated documents and confusing
            options.
          </p>
          <p className="text">
            Looking for a backup power system for your home? A small battery
            solution for your office? A comprehensive commercial energy setup?
            Whatever your requirements, our experts are here to help you make
            the right choice and understand the benefits.
          </p>
          <button className="btn">See how you benefit</button>

          <div className="banner">
            <p className="banner-heading">Power Solutions To Empower You</p>
            <p>
              Discover how our advanced battery and energy management systems
              can lower your costs and provide easy access to reliable,
              uninterrupted power when you need it most. Our intuitive approach
              promises:
            </p>
            <ul className="ul">
              <li>Sustainable energy that reduces reliance on the grid</li>
              <li>Superior battery management for longer-lasting power</li>
              <li>Flexible financing options for businesses and homes</li>
            </ul>
            <button className="btn-sn">See Case Studies</button>
          </div>
          <div className="info-card">
            <div className="info-img-wrapper">
              <img
                className="img"
                src="/assets/info-img-1.png"
                alt="info image"
              />
            </div>
            <div className="info-text-wrapper">
              <p className="info-text-heading">Product Features & Benefits</p>
              <p className="text">
                Lorem ipsum dolor sit amet consectetur. Volutpat eget lacinia
                vitae odio. Ipsum donec ullamcorper eget elit viverra sed. Lorem
                ut in et facilisis ultrices mollis. Nisi tristique id integer
                cras et ultrices enim amet. Massa molestie nisi tincidunt tortor
                sed. Orci et vitae eu nisl.
              </p>
              <a className="info-link" href="#">
                Read More
              </a>
            </div>
          </div>
          <div className="info-card flip">
            <div className="info-img-wrapper">
              <img
                className="img"
                src="/assets/info-img-2.png"
                alt="info image"
              />
            </div>
            <div className="info-text-wrapper">
              <p className="info-text-heading">In The News</p>
              <p className="text">
                Lorem ipsum dolor sit amet consectetur. Volutpat eget lacinia
                vitae odio. Ipsum donec ullamcorper eget elit viverra sed. Lorem
                ut in et facilisis ultrices mollis. Nisi tristique id integer
                cras et ultrices enim amet. Massa molestie nisi tincidunt tortor
                sed. Orci et vitae eu nisl.
              </p>
              <a className="info-link" href="#">
                Read More
              </a>
            </div>
          </div>
          <div className="info-card">
            <div className="info-img-wrapper">
              <img
                className="img"
                src="/assets/info-img-3.png"
                alt="info image"
              />
            </div>
            <div className="info-text-wrapper">
              <p className="info-text-heading">Sun In The Fun</p>
              <p className="text">
                Lorem ipsum dolor sit amet consectetur. Volutpat eget lacinia
                vitae odio. Ipsum donec ullamcorper eget elit viverra sed. Lorem
                ut in et facilisis ultrices mollis. Nisi tristique id integer
                cras et ultrices enim amet. Massa molestie nisi tincidunt tortor
                sed. Orci et vitae eu nisl.
              </p>
              <a className="info-link" href="#">
                Read More
              </a>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
