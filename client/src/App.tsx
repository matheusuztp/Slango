// App.tsx
import { LanguageProvider } from './contexts/LanguageContext';
import { useLanguage } from './contexts/LanguageContext';
import { SlangCarousel } from './components/slang-carousel/SlangCarousel';
import { LanguageSelector } from './components/language-selector/LanguageSelector';
import './App.css';

function MainContent() {
  const { translation } = useLanguage();

  return (
    <div className="app-container">
      <header className="app-header">
        <div className="header-content">
          <h1 className="app-title">{translation.app.title}</h1>
          <div className="header-actions">
            <LanguageSelector />
            <button className="login-button">Login</button>
          </div>
        </div>
      </header>

      <main className="app-main">
        <div className="main-container">
          <div className="hero-section">
            <h2 className="hero-title">{translation.app.description}</h2>
            <p className="hero-subtitle">{translation.app.subtitle}</p>
          </div>

          <div className="translator-section">
            <textarea
              className="translator-input"
              rows={4}
              placeholder={translation.translator.inputPlaceholder}
            />
            <div className="translator-actions">
              <button className="translate-button">
                <span>{translation.translator.translateButton}</span>
                <svg className="arrow-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </button>
            </div>
          </div>

          <div className="slang-section">
            <h3 className="slang-title">{translation.translator.suggestedSlangs}</h3>
            <SlangCarousel />
          </div>
        </div>
      </main>

      <footer className="app-footer">
        <div className="footer-content">
          <p>© 2024 Slango. Todos os direitos reservados.</p>
        </div>
      </footer>
    </div>
  );
}

function App() {
  return (
    <LanguageProvider>
      <MainContent />
    </LanguageProvider>
  );
}

export default App;