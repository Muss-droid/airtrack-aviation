import { Button } from '@/components/ui/button';
import { Plane, MapPin, Clock } from 'lucide-react';

export default function HeroSection() {
  const scrollToBooking = () => {
    document.getElementById('booking')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url('/assets/Airtrack background.png')`
        }}
      />
      
      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
        <div className="max-w-4xl mx-auto">
          <div className="flex items-center justify-center mb-6">
            <Plane className="h-16 w-16 text-orange-500 mr-4" />
            <div>
              <h1 className="text-5xl md:text-7xl bg-[#00000000] mt-[0px] mr-[0px] mb-[16px] ml-[0px] pt-[0px] pr-[0px] pb-[0px] pl-[0px] font-bold text-center opacity-100 text-[#FFFFFF]">
                <span className="text-orange-500">Air</span>Track Aviation
              </h1>
              <p className="text-xl md:text-2xl text-blue-200 font-light">
                Your Trusted Aviation Partner in South Sudan
              </p>
            </div>
          </div>

          <p className="text-lg md:text-xl mb-8 max-w-3xl mx-auto leading-relaxed">
            Domestic & International aircraft charters to various destinations. 
            We prioritize safety, comfort, and punctuality, offering a seamless travel experience 
            for passengers and reliable cargo transport services.
          </p>

          {/* Key Features */}
          <div className="grid md:grid-cols-3 gap-6 mb-10 max-w-2xl mx-auto">
            <div className="flex items-center justify-center space-x-2">
              <MapPin className="h-6 w-6 text-orange-500" />
              <span className="text-lg">Domestic & International</span>
            </div>
            <div className="flex items-center justify-center space-x-2">
              <Clock className="h-6 w-6 text-orange-500" />
              <span className="text-lg">24/7 Service</span>
            </div>
            <div className="flex items-center justify-center space-x-2">
              <Plane className="h-6 w-6 text-orange-500" />
              <span className="text-lg">Safety First</span>
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button 
              size="lg" 
              className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-4 text-lg font-semibold"
              onClick={scrollToBooking}
            >
              Book Your Flight
            </Button>
            <Button 
              size="lg" 
              variant="outline" 
              className="border-white text-white hover:bg-white hover:text-blue-900 px-8 py-4 text-lg font-semibold"
              onClick={scrollToBooking}
            >
              Cargo Services
            </Button>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-white rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white rounded-full mt-2"></div>
        </div>
      </div>
    </section>
  );
}
