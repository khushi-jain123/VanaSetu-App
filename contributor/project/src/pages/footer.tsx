import React from "react";
import "./footer.css";

const Footer: React.FC = () => {
  return (
    <footer>
      <div className="footer-content">
        <div>
          <h3>TreeAdopt</h3>
          <p>
            Making the world greener, one tree at a time. Join our mission to
            create a sustainable future through tree adoption and conservation.
          </p>
        </div>
        <div>
          <h4>Quick Links</h4>
          <p>About Us</p>
          <p>How it Works</p>
          <p>Contact Us</p>
        </div>
        <div>
          <h4>Contact</h4>
          <p>Email: info@treeadopt.com</p>
          <p>Phone: (555) 123-4567</p>
          <p>Address: 123 Green Street, Eco City</p>
        </div>
      </div>
      <p className="copyright">© 2024 TreeAdopt. All rights reserved.</p>
    </footer>
  );
};

export default Footer;
