import { useCarousel } from "@shared/lib";
import { useFancybox } from "@shared/lib";

export const ProductGallery = ({ images = [], title = "" }) => {
  const [carouselRef] = useCarousel({
    infinite: true,
    Dots: true,
  });

  const [fancyboxRef] = useFancybox({
    Thumbs: true,
  });

  return (
    <div ref={fancyboxRef}>
      <div ref={carouselRef} className="f-carousel">
        {images.map((src, index) => (
          <div key={index} className="f-carousel__slide">
            <a href={src} data-fancybox="gallery" data-caption={title}>
              <img data-lazy-src={src} width={320} height={320} alt={title} />
            </a>
          </div>
        ))}
      </div>
    </div>
  );
};
