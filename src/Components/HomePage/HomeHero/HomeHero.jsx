import "./HomeHero.scss";
import bannerImage from "../../../assets/Banners/banner-1.jpg";
import mobileBannerImage from "../../../assets/Banners/banner-2.jpg";
import { IoMdCall, IoMdStar } from "react-icons/io";
import { FaWhatsapp } from "react-icons/fa";
import icon11 from "../../../assets/Icons/icon-11.png";
import icon12 from "../../../assets/Icons/icon-12.png";
import icon13 from "../../../assets/Icons/icon-13.png";
import useIsMobile from "../../../Utils/useIsMobile";

export default function HomeHero() {
  const isMobile = useIsMobile(600);

  return (
    <>
      <div className="home-hero">
        <div className="banner-background">
          <img
            className="banner-image"
            src={isMobile ? mobileBannerImage : bannerImage}
            alt="Doctor At Your Doorstep"
          />
        </div>
        <div className="hero-content">
          <h1 className="hero-title">Medical Team, Delivered to Your Doorstep</h1>

          <p className="hero-description">
          Urgent, non-emergency medical care at your home, hotel, or office, with fast doctor arrival and a complete treatment plan, when you need it most.
          </p>

          <div className="hero-features-section">
            <div className="feature-bar">
              <span className="feature-text">DHA-Certified Medical Team</span>
            </div>
            <div className="feature-bar">
              <span className="feature-text">Trusted by 10,000+ Families</span>
            </div>
            <div className="feature-bar">
              <span className="feature-text">24/7 Doctors at Your Doorstep</span>
            </div>
          </div>

          <div className="hero-stats">
            <div className="stat-button">
              <div className="stat-value">50K+</div>
              <div className="stat-label">Patients Covered</div>
            </div>
            <div className="stat-divider"></div>
            <div className="stat-button">
              <div className="stat-value">100+</div>
              <div className="stat-label">Medical Staffs</div>
            </div>
            <div className="stat-divider"></div>
            <div className="stat-button">
              <div className="stat-value">4.9 
                {/* <IoMdStar className="star-icon" /> */}
                </div>
              <div className="stat-label">1,200+ G-Reviews</div>
            </div>
          </div>

          <div className="hero-buttons">
            <a href="https://wa.me/971987654321" className="btn whatsapp-btn" target="_blank" rel="noopener noreferrer">
              <FaWhatsapp className="btn-icon" />
              WhatsApp
            </a>
            <a href="tel:+971551548684" target="_blank" rel="noopener noreferrer" className="btn white-btn">
              <IoMdCall className="btn-icon" />
              Call Now
            </a>
          </div>
        </div>
      </div>
    </>
  );
}
