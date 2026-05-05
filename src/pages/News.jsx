import React from 'react';
import { useLanguage } from '../hooks/useLanguage';
import NewsCard from '../components/News/NewsCard';
import './NewsPage.css';

const News = () => {
  const { t } = useLanguage();

  const newsItems = [
    {
      id: 1,
      title: 'قهرمانی تیم دارک لایت در مسابقات بین‌المللی',
      titleEn: 'DarkLight Team Champions in International Tournament',
      excerpt: 'تیم دارک لایت با عملکردی درخشان موفق به کسب مقام اول در مسابقات بین‌المللی شد.',
      excerptEn: 'DarkLight team delivered an outstanding performance, securing first place.',
      date: '2024-12-20',
      image: 'https://picsum.photos/600/400?random=1',
      category: 'Tournament'
    },
    {
      id: 2,
      title: 'معرفی بازیکنان جدید تیم دارک لایت',
      titleEn: 'Introducing New DarkLight Team Players',
      excerpt: 'با بازیکنان جدیدی که به خانواده دارک لایت پیوسته‌اند آشنا شوید.',
      excerptEn: 'Meet the new players who have joined the DarkLight family.',
      date: '2024-12-15',
      image: 'https://picsum.photos/600/400?random=2',
      category: 'Team'
    },
    {
      id: 3,
      title: 'برنامه تمرینی جدید تیم برای فصل آینده',
      titleEn: 'New Training Schedule for Next Season',
      excerpt: 'تیم دارک لایت برنامه تمرینی فشرده‌ای را برای آمادگی در فصل آینده آغاز کرده است.',
      excerptEn: 'DarkLight team has started an intensive training program.',
      date: '2024-12-10',
      image: 'https://picsum.photos/600/400?random=3',
      category: 'Training'
    },
    {
      id: 4,
      title: 'قرارداد همکاری با اسپانسر جدید',
      titleEn: 'New Sponsor Partnership Agreement',
      excerpt: 'تیم دارک لایت قرارداد همکاری با یکی از بزرگترین برندهای گیمینگ جهان امضا کرد.',
      excerptEn: 'DarkLight team signed a partnership agreement with one of the biggest gaming brands.',
      date: '2024-12-05',
      image: 'https://picsum.photos/600/400?random=4',
      category: 'Sponsor'
    }
  ];

  return (
    <div className="page news-page">
      <div className="container">
        <div className="news-page__header">
          <h1 className="news-page__title gradient-text">{t('news.title')}</h1>
        </div>
        <div className="news-page__grid stagger-children">
          {newsItems.map((item) => (
            <NewsCard key={item.id} news={item} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default News;