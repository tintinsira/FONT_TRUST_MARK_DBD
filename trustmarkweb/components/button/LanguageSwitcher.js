import { useTranslation } from "react-i18next";
import { useRouter } from "next/router";

export default function LanguageSwitcher() {
  const { i18n } = useTranslation();
  const router = useRouter();

  const toggleLanguage = () => {
    const newLanguage = i18n.language === "th" ? "en" : "th";
    i18n.changeLanguage(newLanguage);
    router.push(router.pathname, router.asPath, { locale: newLanguage });
  };

  return (
    <button
      onClick={toggleLanguage}
      className="w-full px-4 py-2 rounded-md text-white bg-blue-500 hover:bg-blue-700"
    >
      {i18n.language === "th" ? "EN" : "TH"}
    </button>
  );
}
