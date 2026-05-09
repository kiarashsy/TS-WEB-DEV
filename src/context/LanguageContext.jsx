import React, { createContext, useContext, useState, useEffect } from "react";

const LanguageContext = createContext();

export const useLanguageContext = () => {
  return useContext(LanguageContext);
};

export const LanguageProvider = ({ children }) => {
  const [language, setLanguage] = useState(() => {
    return localStorage.getItem("darklight-lang") || "fa";
  });

  const translations = {
    fa: {
      'nav.home': '🏠 خانه',
      'nav.features': '⚡ امکانات',
      'nav.news': '📢 اخبار',
      'nav.team': '👥 تیم ما',
      'hero.title': 'به سرور دارک لایت خوش آمدید',
      'hero.subtitle': 'جامعه‌ای پر از انرژی و ماجراجویی',
      'hero.description': 'بهترین تجربه گیمینگ رو با ما داشته باشید',
      'hero.joinButton': 'عضویت در سرور',
      'hero.learnMore': 'بیشتر بدانید',
      'currentTheme': '🎨 تم فعلی',
      'currentLang': '🌐 زبان فعلی',
      'langName': '🇮🇷 فارسی',
      'darkMode': '🌙 حالت تاریک',
      'lightMode': '☀️ حالت روشن',
      'features.title': '✨ امکانات ویژه سرور',
      'features.voiceChat': 'چت صوتی با کیفیت بالا',
      'features.voiceChatDesc': 'از چت صوتی کریستالی و بدون تاخیر لذت ببرید',
      'features.customBots': 'بات‌های اختصاصی',
      'features.customBotsDesc': 'بات‌های مخصوص با قابلیت‌های منحصر به فرد',
      'features.events': 'ایونت‌های هفتگی',
      'features.eventsDesc': 'هر هفته ایونت‌های جدید و هیجان‌انگیز',
      'features.support': 'پشتیبانی ۲۴/۷',
      'features.supportDesc': 'تیم پشتیبانی همیشه آنلاین و آماده کمک',
      'features.competitions': 'مسابقات با جوایز',
      'features.competitionsDesc': 'در مسابقات شرکت کنید و جوایز ببرید',
      'features.customRoles': 'رول‌های اختصاصی',
      'features.customRolesDesc': 'رول‌های شخصی‌سازی شده برای اعضا',
      'footer.text': 'ساخته شده با ❤️ برای سرور دارک لایت',
      'footer.rights': '© 2026. تمامی حقوق محفوظ است'
    },
    en: {
      'nav.home': '🏠 Home',
      'nav.features': '⚡ Features',
      'nav.news': '📢 News',
      'nav.team': '👥 Our Team',
      'hero.title': 'Welcome to Dark Light Server',
      'hero.subtitle': 'A Community Full of Energy and Adventure',
      'hero.description': 'Experience the best gaming moments with us',
      'hero.joinButton': 'Join Server',
      'hero.learnMore': 'Learn More',
      'currentTheme': '🎨 Current Theme',
      'currentLang': '🌐 Current Language',
      'langName': '🇬🇧 English',
      'darkMode': '🌙 Dark Mode',
      'lightMode': '☀️ Light Mode',
      'features.title': '✨ Special Server Features',
      'features.voiceChat': 'High Quality Voice Chat',
      'features.voiceChatDesc': 'Enjoy crystal clear voice chat with no delay',
      'features.customBots': 'Custom Bots',
      'features.customBotsDesc': 'Special bots with unique capabilities',
      'features.events': 'Weekly Events',
      'features.eventsDesc': 'New and exciting events every week',
      'features.support': '24/7 Support',
      'features.supportDesc': 'Support team always online and ready to help',
      'features.competitions': 'Prize Competitions',
      'features.competitionsDesc': 'Join competitions and win prizes',
      'features.customRoles': 'Custom Roles',
      'features.customRolesDesc': 'Personalized roles for members',
      'footer.text': 'Made with ❤️ for Dark Light Server',
      'footer.rights': '© 2026 All Rights Reserved'
    }
  };

  useEffect(() => {
    localStorage.setItem("darklight-lang", language);
  }, [language]);

  const t = (key) => {
    return translations[language]?.[key] || key;
  };

  const toggleLanguage = () => {
    setLanguage((prev) => (prev === "fa" ? "en" : "fa"));
  };

  return (
    <LanguageContext.Provider value={{ language, t, toggleLanguage }}>
      {children}
    </LanguageContext.Provider>
  );
};

export { LanguageContext };