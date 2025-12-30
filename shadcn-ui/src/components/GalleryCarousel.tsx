import { Card } from '@/components/ui/card';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel';

export default function GalleryCarousel() {
  const galleryImages = [
    {
      src: "/assets/gallery-1.png",
      title: "Medical Cargo Operations",
      description: "Our dedicated team ensures safe handling of medical supplies and biomedical equipment with specialized cargo loading procedures."
    },
    {
      src: "/assets/gallery-2.png",
      title: "Cargo Loading Services",
      description: "Professional cargo loading operations on the tarmac, showcasing our efficient ground handling capabilities for various freight types."
    },
    {
      src: "/assets/gallery-3.png",
      title: "Humanitarian Relief Transport",
      description: "Supporting humanitarian missions by transporting essential relief supplies to communities in need across South Sudan."
    },
    {
      src: "/assets/gallery-4.png",
      title: "Aircraft Fleet",
      description: "Our modern fleet of aircraft ready for passenger charter, cargo transport, and medical evacuation services."
    },
    {
      src: "/assets/gallery-5.png",
      title: "Ground Operations Excellence",
      description: "Experienced ground crew coordinating seamless operations, ensuring safety and efficiency in every flight."
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Operations in Action</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            See our professional team and modern fleet delivering exceptional aviation services across South Sudan
          </p>
        </div>

        <Carousel
          opts={{
            align: "start",
            loop: true,
          }}
          className="w-full"
        >
          <CarouselContent>
            {galleryImages.map((image, index) => (
              <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
                <div className="p-1">
                  <Card className="overflow-hidden">
                    <div className="relative h-64 overflow-hidden">
                      <img
                        src={image.src}
                        alt={image.title}
                        className="w-full h-full object-cover hover:scale-110 transition-transform duration-500"
                      />
                    </div>
                    <div className="p-6">
                      <h3 className="text-xl font-bold text-gray-900 mb-2">{image.title}</h3>
                      <p className="text-gray-600 text-sm">{image.description}</p>
                    </div>
                  </Card>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className="left-2" />
          <CarouselNext className="right-2" />
        </Carousel>
      </div>
    </section>
  );
}