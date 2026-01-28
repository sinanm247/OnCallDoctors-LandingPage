import "./ServicesSection.scss";
import { FaWhatsapp } from "react-icons/fa";
import service1 from "../../../assets/Services/image-1.png";
import service2 from "../../../assets/Services/image-2.png";
import service3 from "../../../assets/Services/image-3.png";
import service4 from "../../../assets/Services/image-4.png";
import service5 from "../../../assets/Services/image-5.png";
import service6 from "../../../assets/Services/image-6.png";
import service7 from "../../../assets/Services/image-7.png";
import service8 from "../../../assets/Services/image-8.png";
import service9 from "../../../assets/Services/image-9.png";
import service10 from "../../../assets/Services/image-10.png";

const services = [
  {
    id: 1,
    image: service1,
    title: "Fever & Flu",
    description: "Infection assessment and treatment"
  },
  {
    id: 2,
    image: service4,
    title: "Cough & Congestion",
    description: "Respiratory symptoms evaluation"
  },
  {
    id: 3,
    image: service6,
    title: "UTI Symptoms",
    description: "Urine infection diagnosis"
  },
  {
    id: 4,
    image: service7,
    title: "Headache & Migraine",
    description: "Migraine assessment and care"
  },
  {
    id: 5,
    image: service2,
    title: "Food Poisoning & Diarrhea",
    description: "Digestive infection management"
  },
  {
    id: 6,
    image: service9,
    title: "Rash & Allergies",
    description: "Skin reaction diagnosis"
  },
  {
    id: 7,
    image: service5,
    title: "Kids Fever & Vomiting",
    description: "Pediatric illness evaluation"
  },
  {
    id: 8,
    image: service8,
    title: "Period Pain & PMS",
    description: "Hormonal pain management"
  },
  {
    id: 9,
    image: service10,
    title: "Ear Pain & Wax",
    description: "Ear check and wax care"
  },
  {
    id: 10,
    image: service3,
    title: "Nausea & Vomiting",
    description: "Persistent nausea evaluation"
  }
];

const ServicesSection = () => {
  return (
    <section id="services" className="services-section">
      <div className="services-wrapper">
        <h1 className="section-title">Medical Team, Delivered<br/> To Your Doorstep</h1>
        <p className="section-description">
          From diagnosis and lab tests to instant medication—our fully equipped mobile team handles everything at your bedside, so you can start recovering immediately.
        </p>
        
        <div className="services-grid">
          {services.map((service, index) => {
            const isLeftColumn = index % 2 === 0; // 0, 2, 4, 6, 8 are left column
            return (
              <div 
                key={service.id} 
                className={`service-card ${isLeftColumn ? 'left-column' : 'right-column'}`}
              >
                <div className="service-image-wrapper">
                  <img src={service.image} alt={service.title} className="service-image" />
                </div>
                <div className="service-content">
                  <h3 className="service-title">{service.title}</h3>
                  <p className="service-description">{service.description}</p>
                </div>
              </div>
            );
          })}
        </div>

        <div className="whatsapp-booking-wrapper">
          <a href="https://wa.me/971987654321" className="btn whatsapp-btn" target="_blank" rel="noopener noreferrer">
            <FaWhatsapp className="btn-icon" />
            Book instantly via WhatsApp
          </a>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
