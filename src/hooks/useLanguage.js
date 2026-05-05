import { useState } from 'react';

export const useLanguage = () => {
  const [language, setLanguage] = useState('fa');

  const switchLanguage = (lang) => {
    setLanguage(lang);
  };

  const translations = {
    fa: {
      // Navigation
      'nav.home': '🏠 خانه',
      'nav.features': '⚡ امکانات',
      'nav.news': '📢 اخبار',
      'nav.team': '👥 تیم ما',
      
      // Hero
      'hero.title': 'به سرور دارک لایت خوش آمدید',
      'hero.subtitle': 'جامعه‌ای پر از انرژی و ماجراجویی',
      'hero.description': 'بهترین تجربه گیمینگ رو با ما داشته باشید',
      'hero.joinButton': 'عضویت در سرور',
      'hero.learnMore': 'بیشتر بدانید',
      
      // Status
      'currentTheme': '🎨 تم فعلی',
      'currentLang': '🌐 زبان فعلی',
      'langName': '🇮🇷 فارسی',
      'darkMode': '🌙 حالت تاریک',
      'lightMode': '☀️ حالت روشن',
      
      // Features
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
      
      // Notifications
      'notif.title': 'اطلاعیه‌ها و اخبار',
      'notif.viewAll': 'مشاهده همه',
      'notif.updateTitle': '🆕 آپدیت بزرگ سرور',
      'notif.updateMsg': 'سرور به نسخه 2.0 با قابلیت‌های جدید آپدیت شد',
      'notif.eventTitle': '🎉 ایونت ویژه آخر هفته',
      'notif.eventMsg': 'این هفته ایونت 2x XP داریم! از دست ندید',
      'notif.ruleTitle': '📋 بروزرسانی قوانین',
      'notif.ruleMsg': 'لطفاً قوانین جدید سرور را مطالعه کنید',
      
      // Footer
      'footer.text': 'ساخته شده با ❤️ برای سرور دارک لایت',
      'footer.rights': '© 2026. تمامی حقوق محفوظ است'
    },
    en: {
      // Navigation
      'nav.home': '🏠 Home',
      'nav.features': '⚡ Features',
      'nav.news': '📢 News',
      'nav.team': '👥 Our Team',
      
      // Hero
      'hero.title': 'Welcome to Dark Light Server',
      'hero.subtitle': 'A Community Full of Energy and Adventure',
      'hero.description': 'Experience the best gaming moments with us',
      'hero.joinButton': 'Join Server',
      'hero.learnMore': 'Learn More',
      
      // Status
      'currentTheme': '🎨 Current Theme',
      'currentLang': '🌐 Current Language',
      'langName': '🇬🇧 English',
      'darkMode': '🌙 Dark Mode',
      'lightMode': '☀️ Light Mode',
      
      // Features
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
      
      // Notifications
      'notif.title': 'Notifications & News',
      'notif.viewAll': 'View All',
      'notif.updateTitle': '🆕 Major Server Update',
      'notif.updateMsg': 'Server updated to version 2.0 with new features',
      'notif.eventTitle': '🎉 Special Weekend Event',
      'notif.eventMsg': 'We have 2x XP event this week! Don\'t miss it',
      'notif.ruleTitle': '📋 Rules Update',
      'notif.ruleMsg': 'Please review the new server rules',
      
      // Footer
      'footer.text': 'Made with ❤️ for Dark Light Server',
      'footer.rights': '© 2026 All Rights Reserved'
    }
  };

  const t = (key) => {
    return translations[language][key] || key;
  };

  return { language, switchLanguage, t };
};