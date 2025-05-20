
import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import { Check } from 'lucide-react';

const ContactForm = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    specialty: '',
    message: ''
  });
  const [loading, setLoading] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    
    try {
      // Format the email body
      const emailBody = `
        New consultation request from your website:
        
        Name: ${formData.name}
        Email: ${formData.email}
        Phone: ${formData.phone}
        Specialty: ${formData.specialty}
        
        Message:
        ${formData.message}
      `;
      
      // Use EmailJS service to send the email without requiring backend
      const response = await fetch('https://api.emailjs.com/api/v1.0/email/send', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          service_id: 'service_mbltechnologies', // Replace with your EmailJS service ID
          template_id: 'template_consultation', // Replace with your EmailJS template ID
          user_id: 'YOUR_USER_ID', // Replace with your EmailJS user ID
          template_params: {
            to_email: 'info@mbltechnologies.in',
            from_name: formData.name,
            from_email: formData.email,
            phone: formData.phone,
            specialty: formData.specialty,
            message: formData.message,
          }
        })
      });
      
      if (response.ok) {
        toast({
          title: "Form submitted successfully!",
          description: "Our team will contact you within 24 hours.",
          duration: 5000,
        });
        
        // Reset form
        setFormData({
          name: '',
          email: '',
          phone: '',
          specialty: '',
          message: ''
        });
      } else {
        throw new Error('Failed to send email');
      }
    } catch (error) {
      console.error('Error submitting form:', error);
      toast({
        title: "Form submission failed",
        description: "There was an error sending your request. Please try again or contact us directly.",
        variant: "destructive",
        duration: 5000,
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="contact" className="section-padding bg-gray-50">
      <div className="container mx-auto">
        <div className="max-w-4xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-5 gap-8">
            <div className="md:col-span-2">
              <h2 className="text-2xl md:text-3xl font-bold text-gradient mb-6">Contact Us</h2>
              <p className="text-gray-600 mb-6">
                Let us help you create a digital marketing strategy tailored to your medical practice's unique needs.
              </p>
              
              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="bg-primary/20 p-2 rounded-full mr-4">
                    <div className="bg-primary p-1 rounded-full">
                      <Check className="h-4 w-4 text-secondary" />
                    </div>
                  </div>
                  <div>
                    <h3 className="font-semibold">Specialized for Healthcare</h3>
                    <p className="text-sm text-gray-600">Marketing strategies designed specifically for medical practices</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="bg-primary/20 p-2 rounded-full mr-4">
                    <div className="bg-primary p-1 rounded-full">
                      <Check className="h-4 w-4 text-secondary" />
                    </div>
                  </div>
                  <div>
                    <h3 className="font-semibold">Local Targeting</h3>
                    <p className="text-sm text-gray-600">Focus on Hyderabad region to attract nearby patients</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="bg-primary/20 p-2 rounded-full mr-4">
                    <div className="bg-primary p-1 rounded-full">
                      <Check className="h-4 w-4 text-secondary" />
                    </div>
                  </div>
                  <div>
                    <h3 className="font-semibold">Measurable Results</h3>
                    <p className="text-sm text-gray-600">Clear reporting on campaign performance and ROI</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="md:col-span-3 bg-white p-6 rounded-lg shadow-md border border-gray-100">
              <h3 className="text-xl font-bold mb-4">Get Your Free Consultation</h3>
              <form onSubmit={handleSubmit}>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">Name</label>
                    <Input 
                      id="name" 
                      name="name" 
                      value={formData.name} 
                      onChange={handleChange} 
                      required 
                      placeholder="Dr. Full Name"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">Email</label>
                    <Input 
                      id="email" 
                      name="email" 
                      type="email" 
                      value={formData.email} 
                      onChange={handleChange} 
                      required 
                      placeholder="doctor@example.com"
                    />
                  </div>
                </div>
                
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">Phone</label>
                    <Input 
                      id="phone" 
                      name="phone" 
                      value={formData.phone} 
                      onChange={handleChange} 
                      required 
                      placeholder="+91 XXXXXXXXXX"
                    />
                  </div>
                  <div>
                    <label htmlFor="specialty" className="block text-sm font-medium text-gray-700 mb-1">Specialty</label>
                    <Input 
                      id="specialty" 
                      name="specialty" 
                      value={formData.specialty} 
                      onChange={handleChange} 
                      placeholder="E.g., Cardiology, Pediatrics"
                    />
                  </div>
                </div>
                
                <div className="mb-6">
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">How can we help you?</label>
                  <Textarea 
                    id="message" 
                    name="message" 
                    rows={4} 
                    value={formData.message} 
                    onChange={handleChange} 
                    placeholder="Tell us about your practice and current marketing challenges..."
                  />
                </div>
                
                <Button 
                  type="submit" 
                  className="w-full bg-secondary text-white hover:bg-secondary/90" 
                  size="lg"
                  disabled={loading}
                >
                  {loading ? 'Submitting...' : 'Request Free Consultation'}
                </Button>
                
                <p className="text-xs text-gray-500 mt-3 text-center">
                  By submitting this form, you agree to our privacy policy and terms of service.
                </p>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;
