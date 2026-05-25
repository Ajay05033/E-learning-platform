import React, { useState } from 'react';
import { FaPhone, FaEnvelope, FaMapMarkerAlt, FaChevronDown, FaChevronUp } from 'react-icons/fa';

const faqs = [
  { q: "Do I need prior AWS experience?", a: "No, our beginner courses are designed for students with zero cloud experience." },
  { q: "Are the courses self-paced?", a: "Yes, all courses are 100% online and self-paced to fit your schedule." },
  { q: "Do you provide certificates?", a: "Yes, upon successful completion, you will receive a verifiable certificate." }
];

const FaqItem = ({ faq }) => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="faq-card glass" style={{padding: '1.5rem', cursor: 'pointer', transition: 'all 0.3s ease'}} onClick={() => setIsOpen(!isOpen)}>
      <div className="flex justify-between items-center" style={{gap: '1rem'}}>
        <h4 className="font-bold text-lg">{faq.q}</h4>
        <span className="text-primary">{isOpen ? <FaChevronUp /> : <FaChevronDown />}</span>
      </div>
      {isOpen && <p className="text-secondary mt-4 animate-fade-in">{faq.a}</p>}
    </div>
  );
};

const Contact = () => {
  return (
    <div className="contact-page section-padding animate-fade-in">
      <div className="container">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold mb-4">Contact Us</h1>
          <p className="text-secondary max-w-2xl mx-auto">
            Have questions about our cloud computing courses? Want to inquire about enterprise training? We're here to help.
          </p>
        </div>

        <div className="contact-layout" style={{display: 'flex', gap: '4rem', flexWrap: 'wrap'}}>
          <div className="contact-info" style={{flex: '1 1 300px'}}>
            <h2 className="text-2xl font-bold mb-6">Get In Touch</h2>
            
            <div className="info-card glass mb-4" style={{padding: '1.5rem', display: 'flex', alignItems: 'center', gap: '1rem'}}>
              <div className="icon-wrapper" style={{background: 'var(--accent-primary)', color: 'white', padding: '1rem', borderRadius: '50%'}}>
                <FaPhone />
              </div>
              <div>
                <h4 className="font-bold">Phone</h4>
                <p className="text-secondary">+91 9177318692</p>
              </div>
            </div>

            <div className="info-card glass mb-4" style={{padding: '1.5rem', display: 'flex', alignItems: 'center', gap: '1rem'}}>
              <div className="icon-wrapper" style={{background: 'var(--accent-primary)', color: 'white', padding: '1rem', borderRadius: '50%'}}>
                <FaEnvelope />
              </div>
              <div>
                <h4 className="font-bold">Email</h4>
                <p className="text-secondary">support@cloudlearn.edu</p>
              </div>
            </div>

            <div className="info-card glass mb-4" style={{padding: '1.5rem', display: 'flex', alignItems: 'center', gap: '1rem'}}>
              <div className="icon-wrapper" style={{background: 'var(--accent-primary)', color: 'white', padding: '1rem', borderRadius: '50%'}}>
                <FaMapMarkerAlt />
              </div>
              <div>
                <h4 className="font-bold">Location</h4>
                <p className="text-secondary">Andhra Pradesh</p>
              </div>
            </div>
          </div>

          <div className="contact-form-wrapper glass" style={{flex: '2 1 500px', padding: '3rem', borderRadius: '24px'}}>
            <h2 className="text-2xl font-bold mb-6">Send us a Message</h2>
            <form className="contact-form flex-col gap-4">
              <div className="flex gap-4 mb-4" style={{flexWrap: 'wrap'}}>
                <div style={{flex: 1}}>
                  <label className="block text-sm font-semibold mb-2">First Name</label>
                  <input type="text" className="input-field" placeholder="John" required />
                </div>
                <div style={{flex: 1}}>
                  <label className="block text-sm font-semibold mb-2">Last Name</label>
                  <input type="text" className="input-field" placeholder="Doe" required />
                </div>
              </div>
              
              <div className="mb-4">
                <label className="block text-sm font-semibold mb-2">Email Address</label>
                <input type="email" className="input-field" placeholder="john@example.com" required />
              </div>
              
              <div className="mb-6">
                <label className="block text-sm font-semibold mb-2">Message</label>
                <textarea className="input-field" rows="5" placeholder="How can we help you?" required></textarea>
              </div>
              
              <button type="submit" className="btn btn-primary w-full">Send Message</button>
            </form>
          </div>
        </div>

        {/* FAQ Section */}
        <div className="faq-section mt-16 text-center">
          <h2 className="text-3xl font-bold mb-8">Frequently Asked Questions</h2>
          <div className="faq-grid" style={{display: 'flex', flexDirection: 'column', gap: '1rem', maxWidth: '800px', margin: '0 auto', textAlign: 'left'}}>
            {faqs.map((faq, index) => (
              <FaqItem key={index} faq={faq} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
