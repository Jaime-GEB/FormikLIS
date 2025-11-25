import { useTranslation } from 'react-i18next';
import { useEffect } from 'react';

const Comp1=({ lang }: { lang: string })=> {
  const { t, i18n } = useTranslation();

  useEffect(() => {
    i18n.changeLanguage(lang); // Cambia el idioma cuando la prop lang cambie
  }, [lang, i18n]);
  
  return (
    <div className="App">
      <p>{t('title')}</p>
      <p>{t('description.part1')}</p>
      <p>{t('description.part2')}</p>
    </div>
  );
}

export default Comp1;