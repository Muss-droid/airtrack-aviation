import { Plane, Phone, Mail, MapPin, Facebook, Twitter, Instagram } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="md:col-span-2">
            <div className="flex items-center space-x-3 mb-4">
              <img 
                src="https://mgx-backend-cdn.metadl.com/generate/images/582749/2025-12-30/b483215c-3871-44ad-91b2-c8cb69b03db3.png" 
                alt="AIRTRACK AVIATION" 
                className="h-12 w-auto"
              />
              <div>
                <h3 className="text-2xl font-bold text-orange-500">AIRTRACK AVIATION</h3>
                <p className="text-gray-400">South Sudan</p>
              </div>
            </div>
            <p className="text-gray-300 mb-6 max-w-md">
              Your trusted aviation partner providing safe, reliable, and professional 
              aircraft charter services for passengers and cargo throughout South Sudan and beyond.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-orange-500 transition-colors">
                <Facebook className="h-6 w-6" />
              </a>
              <a href="#" className="text-gray-400 hover:text-orange-500 transition-colors">
                <Twitter className="h-6 w-6" />
              </a>
              <a href="#" className="text-gray-400 hover:text-orange-500 transition-colors">
                <Instagram className="h-6 w-6" />
              </a>
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Our Services</h4>
            <ul className="space-y-2 text-gray-300">
              <li><a href="#services" className="hover:text-orange-500 transition-colors">Passenger Charter</a></li>
              <li><a href="#services" className="hover:text-orange-500 transition-colors">Cargo Services</a></li>
              <li><a href="#services" className="hover:text-orange-500 transition-colors">Medical Transport</a></li>
              <li><a href="#services" className="hover:text-orange-500 transition-colors">Aviation Consulting</a></li>
              <li><a href="#booking" className="hover:text-orange-500 transition-colors">Emergency Services</a></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Contact Us</h4>
            <div className="space-y-3 text-gray-300">
              <div className="flex items-start space-x-2">
                <Phone className="h-4 w-4 text-orange-500 mt-1" />
                <div>
                  <p>+211 910 004 005</p>
                  <p>+211 929 667 788</p>
                </div>
              </div>
              <div className="flex items-center space-x-2">
                <Mail className="h-4 w-4 text-orange-500" />
                <span>airtrackaviation@gmail.com</span>
              </div>
              <div className="flex items-center space-x-2">
                <MapPin className="h-4 w-4 text-orange-500" />
                <span>Juba International Airport<br />Juba, South Sudan</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 mt-8 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm">
              © 2024 AIRTRACK AVIATION Limited. All rights reserved.
            </p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <a href="#" className="text-gray-400 hover:text-orange-500 text-sm transition-colors">Privacy Policy</a>
              <a href="#" className="text-gray-400 hover:text-orange-500 text-sm transition-colors">Terms of Service</a>
              <a href="#" className="text-gray-400 hover:text-orange-500 text-sm transition-colors">Safety Information</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}