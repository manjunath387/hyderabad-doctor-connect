
import React from 'react';
import { Phone, Mail, MapPin } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-secondary text-white">
      <div className="container mx-auto py-12 px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-primary text-xl font-bold mb-4">MbL Technologies</h3>
            <p className="text-gray-300 mb-6">
              Specialized digital marketing solutions for healthcare professionals in Hyderabad.
            </p>
            <div className="flex items-center mb-3">
              <Phone className="h-4 w-4 text-primary mr-2" />
              <span>+91 XXXXX XXXXX</span>
            </div>
            <div className="flex items-center mb-3">
              <Mail className="h-4 w-4 text-primary mr-2" />
              <span>contact@mbltechnologies.com</span>
            </div>
            <div className="flex items-center">
              <MapPin className="h-4 w-4 text-primary mr-2" />
              <span>Hyderabad, Telangana, India</span>
            </div>
          </div>
          
          <div>
            <h3 className="font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><a href="#services" className="hover:text-primary transition-colors">Our Services</a></li>
              <li><a href="#benefits" className="hover:text-primary transition-colors">Benefits</a></li>
              <li><a href="#testimonials" className="hover:text-primary transition-colors">Success Stories</a></li>
              <li><a href="#contact" className="hover:text-primary transition-colors">Contact Us</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-bold mb-4">Our Services</h3>
            <ul className="space-y-2">
              <li><a href="#" className="hover:text-primary transition-colors">SEO for Doctors</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Social Media Management</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">PPC Advertising</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Content Marketing</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Online Reputation Management</a></li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-700 mt-12 pt-6 text-center text-gray-400 text-sm">
          <p>© {new Date().getFullYear()} MbL Technologies. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
