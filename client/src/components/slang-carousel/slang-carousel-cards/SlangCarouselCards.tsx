interface SlangCardProps {
  sLang: string;
  meaning: string;
  region: string;
}

export default function SlangCarouselCards({ sLang, meaning, region }: SlangCardProps) {
  return (
    <div className="slang-card">
        <h4 className="slang-term">{sLang}</h4>
        <p className="slang-meaning">{meaning}</p>
        <span className="slang-region">{region}</span>
    </div>
  );
}

