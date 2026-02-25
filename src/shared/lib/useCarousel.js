import "@fancyapps/ui/dist/carousel/carousel.arrows.css";
import "@fancyapps/ui/dist/carousel/carousel.css";

import { Carousel } from "@fancyapps/ui/dist/carousel/";
import { Arrows } from "@fancyapps/ui/dist/carousel/carousel.arrows.js";
import { Lazyload } from "@fancyapps/ui/dist/carousel/carousel.lazyload.js";
import { canUseDOM } from "@fancyapps/ui/dist/utils/canUseDOM.js";
import { isEqual } from "@fancyapps/ui/dist/utils/isEqual.js";
import { useCallback, useEffect, useRef, useState } from "react";

export function useCarousel(options = {}) {
  const storedOptions = useRef(options);

  const [container, setContainer] = useState(null);
  const [carouselInstance, setCarouselInstance] = useState(undefined);

  const reInit = useCallback(() => {
    if (carouselInstance) {
      carouselInstance.destroy().init();
    }
  }, [carouselInstance]);

  useEffect(() => {
    if (!isEqual(options, storedOptions.current)) {
      storedOptions.current = options;
      reInit();
    }
  }, [options, reInit]);

  useEffect(() => {
    if (canUseDOM() && container) {
      const newCarouselInstance = Carousel(container, storedOptions.current, {
        Arrows,
        Lazyload,
      }).init();

      setCarouselInstance(newCarouselInstance);

      return () => {
        newCarouselInstance.destroy();
      };
    } else {
      setCarouselInstance(undefined);
    }
  }, [container]);

  return [setContainer, carouselInstance];
}
