import { useState, useEffect, useRef } from "react";
import { ArrowRight, Phone, Mail, MapPin, Clock, Search, X, Briefcase, Globe, ArrowUp } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import Footer from "@/components/Footer";
import StandardHeader from "@/components/StandardHeader";

export default function ContactUs() {
  const contactInfoRefs = useRef<(HTMLDivElement | null)[]>([]);

  const contactInfo = [
    {
      icon: <MapPin className="h-8 w-8" />,
      title: "Address",
      content: "4TH KINGDOM RD, OSHIYIE, ACCRA\nP.O.BOX ML 980, MALLAM",
      link: "https://maps.google.com",
      color: "from-blue-500 to-blue-600",
      bgColor: "bg-blue-50",
      iconBg: "bg-blue-500"
    },
    {
      icon: <Phone className="h-8 w-8" />,
      title: "Phone",
      content: "TEL: +233 303 943 842\nMobile: +233 550 434 576\nWhatsApp: 0 303 943 842",
      link: "tel:+233303943842",
      color: "from-green-500 to-green-600",
      bgColor: "bg-green-50",
      iconBg: "bg-green-500"
    },
    {
      icon: <Mail className="h-8 w-8" />,
      title: "Email",
      content: "amanexcomltd@gmail.com",
      link: "mailto:amanexcomltd@gmail.com",
      color: "from-purple-500 to-purple-600",
      bgColor: "bg-purple-50",
      iconBg: "bg-purple-500"
    },
    {
      icon: <Clock className="h-8 w-8" />,
      title: "Business Hours",
      content: "Mon - Fri: 8:00 AM - 6:00 PM\nSaturday: 9:00 AM - 3:00 PM\nSunday: Closed",
      color: "from-orange-500 to-orange-600",
      bgColor: "bg-orange-50",
      iconBg: "bg-orange-500"
    }
  ];

  const departments = [
    {
      name: "Sales & Marketing",
      email: "amanexcomltd@gmail.com",
      phone: "+233 303 943 842"
    },
    {
      name: "Customer Service",
      email: "amanexcomltd@gmail.com",
      phone: "+233 303 943 842"
    },
    
    {
      name: "General Inquiries",
      email: "amanexcomltd@gmail.com",
      phone: "0303 943 842"
    }
  ];

  // Scroll-triggered animations for contact cards
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry, index) => {
          if (entry.isIntersecting) {
            setTimeout(() => {
              entry.target.classList.add('animate-in', 'slide-in-from-bottom-4', 'duration-700');
              entry.target.classList.remove('opacity-0', 'translate-y-8');
            }, index * 200); // Stagger the animations
          }
        });
      },
      { threshold: 0.1 }
    );

    contactInfoRefs.current.forEach((ref) => {
      if (ref) observer.observe(ref);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <div className="min-h-screen">
      <StandardHeader />

      {/* Hero Section */}
      <section 
        className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20"
        style={{
          background: 'linear-gradient(135deg, #fef3c7 0%, #fde68a 50%, #f59e0b 100%)'
        }}
      >
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center min-h-screen">
          <div className="text-center lg:text-left">
            <h1 className="text-5xl lg:text-7xl font-bold text-coty-navy leading-tight mb-8">
              CONTACT<br />
              <span className="text-coty-navy">US</span>
            </h1>
            
            <p className="text-xl text-coty-gray mb-8 max-w-3xl mx-auto lg:mx-0">
              Get in touch with us. We're here to help with any questions about our products, 
              services, or business opportunities.
            </p>

            <div className="mt-12 text-coty-gray font-medium flex items-center justify-center lg:justify-start">
              <div className="w-8 h-px bg-coty-gray mr-3"></div>
              <span className="text-sm tracking-wide">GET IN TOUCH</span>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Information Section */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-coty-navy mb-4 animate-in slide-in-from-bottom-4 duration-700">
              Get In Touch
            </h2>
            <p className="text-lg text-coty-gray max-w-3xl mx-auto animate-in slide-in-from-bottom-4 duration-700 delay-200">
              We'd love to hear from you. Reach out to us through any of the following channels.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
            {contactInfo.map((info, index) => (
              <div
                key={index}
                ref={(el) => (contactInfoRefs.current[index] = el)}
                className="opacity-0 translate-y-8 transition-all duration-700"
              >
                <Card className="group relative bg-white rounded-xl p-6 text-center hover:shadow-lg transition-all duration-300 transform hover:scale-[1.02] cursor-pointer border border-gray-100 h-full flex flex-col justify-between">
                  {/* Subtle background gradient on hover */}
                  <div className={`absolute inset-0 bg-gradient-to-br ${info.color} opacity-0 group-hover:opacity-5 transition-opacity duration-300 rounded-xl`}></div>
                  
                  {/* Icon with subtle animation */}
                  <div className="relative mb-4 flex justify-center">
                    <div className={`w-12 h-12 rounded-full ${info.iconBg} flex items-center justify-center text-white group-hover:scale-105 transition-transform duration-300 shadow-md`}>
                      {info.icon}
                    </div>
                  </div>

                  {/* Content */}
                  <div className="flex-1 flex flex-col justify-center">
                    <h3 className="text-lg font-bold text-coty-navy mb-3 group-hover:text-coty-gold transition-colors duration-300">
                      {info.title}
                    </h3>
                    
                    <div className="text-sm text-coty-gray whitespace-pre-line group-hover:text-coty-navy transition-colors duration-300">
                      {info.link ? (
                        <a href={info.link} className="hover:text-coty-gold transition-colors duration-200">
                          {info.content}
                        </a>
                      ) : (
                        info.content
                      )}
                    </div>
                  </div>

                  {/* Subtle bottom border */}
                  <div className={`absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r ${info.color} transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 rounded-b-xl`}></div>
                </Card>
              </div>
            ))}
          </div>

          {/* Response time indicator */}
          <div className="mt-12 text-center">
            <div className="inline-flex items-center space-x-3 bg-white rounded-full px-6 py-3 shadow-md animate-in slide-in-from-bottom-4 duration-700 delay-1000">
              <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
              <span className="text-sm text-coty-navy font-medium">We typically respond within 24 hours</span>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="py-20 bg-coty-gray-light">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16">
            {/* Contact Form */}
            <div>
              <h2 className="text-4xl font-bold text-coty-navy mb-6">Send Us a Message</h2>
              <p className="text-lg text-coty-gray mb-8">
                Fill out the form below and we'll get back to you as soon as possible.
              </p>

              <form className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-coty-navy mb-2">First Name</label>
                    <Input 
                      type="text" 
                      placeholder="Enter your first name"
                      className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-coty-navy focus:border-transparent"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-coty-navy mb-2">Last Name</label>
                    <Input 
                      type="text" 
                      placeholder="Enter your last name"
                      className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-coty-navy focus:border-transparent"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-coty-navy mb-2">Email</label>
                  <Input 
                    type="email" 
                    placeholder="Enter your email address"
                    className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-coty-navy focus:border-transparent"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-coty-navy mb-2">Phone</label>
                  <Input 
                    type="tel" 
                    placeholder="Enter your phone number"
                    className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-coty-navy focus:border-transparent"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-coty-navy mb-2">Subject</label>
                  <select className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-coty-navy focus:border-transparent">
                    <option>Select a subject</option>
                    <option>General Inquiry</option>
                    <option>Product Information</option>
                    <option>Business Partnership</option>
                    <option>Customer Support</option>
                    <option>Career Opportunities</option>
                    <option>Other</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium text-coty-navy mb-2">Message</label>
                  <Textarea 
                    placeholder="Enter your message"
                    className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-coty-navy focus:border-transparent min-h-[120px]"
                  />
                </div>

                <Button className="w-fit flex items-center gap-4 px-8 py-4 bg-coty-navy text-white text-md font-medium rounded-br-3xl hover:bg-transparent hover:text-coty-navy border border-coty-navy transition-colors duration-300">
                  SEND MESSAGE
                  <ArrowRight className="text-2xl" />
                </Button>
              </form>
            </div>

            {/* Department Contacts */}
            <div>
              <h2 className="text-4xl font-bold text-coty-navy mb-6">Department Contacts</h2>
              <p className="text-lg text-coty-gray mb-8">
                Need to reach a specific department? Here are our direct contact details.
              </p>

              <div className="space-y-6">
                {departments.map((dept, index) => (
                  <Card key={index} className="bg-white rounded-xl p-6 hover:shadow-lg transition-shadow duration-300">
                    <h3 className="text-lg font-bold text-coty-navy mb-3">{dept.name}</h3>
                    <div className="space-y-2 text-coty-gray">
                      <div className="flex items-center">
                        <Mail className="h-4 w-4 mr-2" />
                        <a href={`mailto:${dept.email}`} className="hover:text-coty-navy transition-colors duration-200">
                          {dept.email}
                        </a>
                      </div>
                      <div className="flex items-center">
                        <Phone className="h-4 w-4 mr-2" />
                        <a href={`tel:${dept.phone}`} className="hover:text-coty-navy transition-colors duration-200">
                          {dept.phone}
                        </a>
                      </div>
                    </div>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-coty-navy mb-4">Visit Our Facility</h2>
            <p className="text-lg text-coty-gray max-w-3xl mx-auto">
              Located in the heart of Greater Accra, our state-of-the-art facility is where quality meets innovation.
            </p>
          </div>

          <div className="rounded-xl overflow-hidden shadow-lg">
            <iframe 
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3531.8726508989075!2d-0.3585482256147705!3d5.504856034163131!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xfdfbda6b69c130d%3A0x270fcef4d3415dc0!2sAmanex%20company%20limited!5e1!3m2!1sen!2sgh!4v1754059740018!5m2!1sen!2sgh" 
              width="100%" 
              height="450" 
              style={{border:0}} 
              allowFullScreen 
              loading="lazy" 
              referrerPolicy="no-referrer-when-downgrade"
              title="Amanex Company Limited Location"
              className="w-full"
            ></iframe>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-coty-navy text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold mb-6">Ready to Get Started?</h2>
          <p className="text-xl mb-8 max-w-3xl mx-auto">
            Whether you're looking for our products, interested in partnerships, or have questions, 
            we're here to help you succeed.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="/our-brands" className="w-fit flex items-center gap-4 px-8 py-4 bg-white text-coty-navy text-md font-medium rounded-br-3xl hover:bg-transparent hover:text-white border border-white transition-colors duration-300">
              EXPLORE PRODUCTS
              <ArrowRight className="text-2xl" />
            </a>
            <a href="/our-story" className="w-fit flex items-center gap-4 px-8 py-4 bg-transparent text-white text-md font-medium rounded-br-3xl hover:bg-white hover:text-coty-navy border border-white transition-colors duration-300">
              LEARN MORE
              <ArrowRight className="text-2xl" />
            </a>
          </div>
        </div>
      </section>

      {/* Back to Top Button */}
      <section className="py-12 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-end">
          <Button 
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            className="w-fit flex items-center gap-4 px-8 py-4 bg-coty-navy text-white text-md font-medium rounded-br-3xl hover:bg-transparent hover:text-coty-navy border border-coty-navy transition-colors duration-300"
          >
            BACK TO TOP
            <ArrowUp className="text-2xl" />
          </Button>
        </div>
      </section>

      <Footer />
    </div>
  );
} 