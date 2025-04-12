import { useLanguage } from '../../contexts/LanguageContext';
import { LanguageKey } from '../../assets/i18n';

export function LanguageSelector() {
  const { language, setLanguage } = useLanguage();

  return (
    <select
      value={language}
      onChange={(e) => setLanguage(e.target.value as LanguageKey)}
      className="bg-gray-800 text-white border border-gray-700 rounded-lg px-3 py-1
                 focus:outline-none focus:ring-2 focus:ring-blue-500"
    >
      <option value="pt-BR">PT-BR</option>
      <option value="en-US">EN-US</option>
    </select>
  );
}