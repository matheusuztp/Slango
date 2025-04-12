import { useLanguage } from '../../contexts/LanguageContext';
import SlangCarouselCards from './slang-carousel-cards/SlangCarouselCards';
import './SlangCarousel.css';

export function SlangCarousel() {
  const { translation } = useLanguage();

  return (
    <div className="carousel-container">
      <div className={`carousel-track auto-scroll`}>
        {translation.slangs.map((slang) => (
          <SlangCarouselCards
            sLang={slang.slang}
            meaning={slang.meaning}
            region={slang.region}
          />
        ))}
        {translation.slangs.map((slang) => (
          <SlangCarouselCards
            sLang={slang.slang}
            meaning={slang.meaning}
            region={slang.region}
          />
        ))}
      </div>
    </div>
  );
}