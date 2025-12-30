import Header from '@/components/Header';
import HeroSection from '@/components/HeroSection';
import ServicesSection from '@/components/ServicesSection';
import GalleryCarousel from '@/components/GalleryCarousel';
import BookingForm from '@/components/BookingForm';
import Footer from '@/components/Footer';

export default function Index() {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <HeroSection />
        <ServicesSection />
        <GalleryCarousel />
        <BookingForm />
      </main>
      <Footer />
    </div>
  );
}