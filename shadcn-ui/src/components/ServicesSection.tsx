import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Users, Package, Heart, Plane } from 'lucide-react';

export default function ServicesSection() {
  const services = [
    {
      icon: <Users className="h-12 w-12 text-blue-600" />,
      title: "Passenger Charter",
      description: "Comfortable and safe passenger transport for domestic and international routes. Experience premium aviation services with our experienced crew.",
      image: "/assets/passenger-charter.png",
      features: ["Experienced Pilots", "Comfortable Seating", "Safety First", "Flexible Scheduling"]
    },
    {
      icon: <Package className="h-12 w-12 text-orange-500" />,
      title: "Cargo Services",
      description: "Reliable cargo transport solutions for businesses and organizations. Secure handling of your valuable goods with timely delivery.",
      image: "/assets/cargo-services.png",
      features: ["Secure Transport", "Timely Delivery", "Various Cargo Types", "Tracking Available"]
    },
    {
      icon: <Heart className="h-12 w-12 text-red-500" />,
      title: "Medical Transport",
      description: "Emergency medical evacuation and transport services. Equipped aircraft for medical emergencies with professional medical support.",
      image: "/images/photo1767090359.jpg",
      features: ["Emergency Response", "Medical Equipment", "Trained Staff", "24/7 Availability"]
    },
    {
      icon: <Plane className="h-12 w-12 text-green-600" />,
      title: "Consultation Services",
      description: "Aviation consulting and advisory services. Expert guidance for aviation operations, safety protocols, and regulatory compliance.",
      image: "/images/photo1767090357.jpg",
      features: ["Expert Advice", "Safety Protocols", "Regulatory Compliance", "Operational Support"]
    }
  ];

  const scrollToBooking = () => {
    document.getElementById('booking')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="services" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Aviation Services</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Comprehensive aviation solutions tailored to meet your transportation needs 
            across South Sudan and beyond.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8 mb-12">
          {services.map((service, index) => (
            <Card key={index} className="overflow-hidden hover:shadow-xl transition-shadow duration-300">
              <div className="relative h-48 overflow-hidden">
                <img 
                  src={service.image} 
                  alt={service.title}
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute top-4 left-4 bg-white p-2 rounded-full shadow-lg">
                  {service.icon}
                </div>
              </div>
              
              <CardHeader>
                <CardTitle className="text-2xl text-gray-900">{service.title}</CardTitle>
                <CardDescription className="text-gray-600 text-base">
                  {service.description}
                </CardDescription>
              </CardHeader>
              
              <CardContent>
                <div className="grid grid-cols-2 gap-2 mb-6">
                  {service.features.map((feature, idx) => (
                    <div key={idx} className="flex items-center space-x-2">
                      <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
                      <span className="text-sm text-gray-700">{feature}</span>
                    </div>
                  ))}
                </div>
                
                <Button 
                  className="w-full bg-blue-600 hover:bg-blue-700 text-white"
                  onClick={scrollToBooking}
                >
                  Book {service.title}
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Why Choose Section with New Background */}
        <div className="relative rounded-2xl overflow-hidden shadow-2xl">
          <div 
            className="w-full h-64 md:h-96 bg-cover bg-center"
            style={{
              backgroundImage: `url('/assets/why-choose-background.png')`,
              backgroundPosition: 'center 35%'
            }}
          />
          <div className="absolute inset-0 bg-gradient-to-r from-blue-900/80 to-transparent flex items-center">
            <div className="max-w-2xl mx-auto px-8 text-white">
              <h3 className="text-3xl font-bold mb-4">Why Choose AIRTRACK AVIATION?</h3>
              <p className="text-lg mb-6">
                With years of experience in South Sudan's aviation industry, we provide 
                reliable, safe, and professional services that you can trust.
              </p>
              <Button 
                size="lg" 
                className="bg-orange-500 hover:bg-orange-600 text-white"
                onClick={scrollToBooking}
              >
                Get Started Today
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}