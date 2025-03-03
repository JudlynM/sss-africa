export default function Footer() {
  return (
    <>
      <footer className="footer">
        <div className="footer-top">
          <div className="footer-logo-wrapper">
            <img className="img" src="/assets/footer-logo.png" />
          </div>
          <div className="links-section">
            <p className="link-section-head">Solutions</p>
            <a href="" className="footer-link">
              Home Solutions
            </a>
            <a href="" className="footer-link">
              Business Solutions
            </a>
            <a href="" className="footer-link">
              Become a Reseller
            </a>
            <a href="" className="footer-link">
              Get Finance
            </a>
          </div>
          <div className="links-section">
            <p className="link-section-head">About Us</p>
            <a href="" className="footer-link">
              About Us
            </a>
            <a href="" className="footer-link">
              FAQs
            </a>
            <a href="" className="footer-link">
              Terms & Conditions
            </a>
          </div>
          <div className="links-section">
            <p className="link-section-head">Get In Touch</p>
            <a href="" className="footer-link flex">
              <div className="icon-wrapper ">
                <img src="/assets/message.png" alt="message icon" />
              </div>
              Message Our Team
            </a>
            <a href="" className="footer-link flex">
              <div className="icon-wrapper">
                <img src="/assets/location.png" alt="location icon" />
              </div>
              123 Street Name,City Names, Province, South Africa
            </a>
            <a href="" className="footer-link flex">
              <div className="icon-wrapper">
                <img src="/assets/phone.png" alt="phone icon" />
              </div>
              +27 123 456 7890
            </a>
            <a href="" className="footer-link flex">
              <div className="icon-wrapper">
                <img className="img" src="/assets/mail.png" alt="mail icon" />
              </div>
              howzit@sssafrica.co.za
            </a>
          </div>
        </div>
        <div className="footer-bottom">
          <p>
            &copy; Specialized Solar Solutions Africa. 2024. All Rights Reserved
          </p>
          <a>| Terms Of Use |</a>
          <a> Privacy Policy </a>
        </div>
      </footer>
    </>
  );
}
