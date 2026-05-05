import React from 'react';
import { useLanguage } from '../hooks/useLanguage';
import Button from '../components/UI/Button';
import NewsCard from '../components/News/NewsCard';
import { FiArrowLeft, FiArrowRight, FiTarget, FiTrendingUp, FiAward } from 'react-icons/fi';
import './Home.css';

const Home = () => {
  const { t, language } = useLanguage();

  const features = [
    {
      icon: <FiTarget />,
      title: t('home.features.professional'),
      description: t('home.features.professionalDesc')
    },
    {
      icon: <FiTrendingUp />,
      title: t('home.features.strategy'),
      description: t('home.features.strategyDesc')
    },
    {
      icon: <FiAward />,
      title: t('home.features.victory'),
      description: t('home.features.victoryDesc')
    }
  ];

  const news = [
    {
      id: 1,
      title: 'قهرمانی تیم دارک لایت در مسابقات بین‌المللی',
      titleEn: 'DarkLight Team Champions in International Tournament',
      excerpt: 'تیم دارک لایت با عملکردی درخشان موفق به کسب مقام اول در مسابقات بین‌المللی شد.',
      excerptEn: 'DarkLight team delivered an outstanding performance, securing first place in the international tournament.',
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
      excerptEn: 'DarkLight team has started an intensive training program to prepare for the upcoming season.',
      date: '2024-12-10',
      image: 'https://picsum.photos/600/400?random=3',
      category: 'Training'
    }
  ];

  return (
    <div className="home">
      {/* Hero Section */}
      <section className="hero">
        <div className="hero__content">
          <div className="hero__badge">
            <span className="hero__badge-dot"></span>
            DarkLight Team
          </div>
          <h1 className="hero__title">
            <span className="gradient-text">{t('home.heroTitle')}</span>
          </h1>
          <p className="hero__subtitle">{t('home.heroSubtitle')}</p>
          <p className="hero__description">{t('home.heroDescription')}</p>
          <div className="hero__actions">
            <Button variant="primary" size="lg">
              {t('home.ctaButton')}
              {language === 'fa' ? <FiArrowLeft /> : <FiArrowRight />}
            </Button>
          </div>
        </div>
        
        <div className="hero__visual">
          <div className="hero__glow"></div>
          <div className="hero__floating-elements">
            <div className="floating-element floating-element--1"></div>
            <div className="floating-element floating-element--2"></div>
            <div className="floating-element floating-element--3"></div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="features">
        <div className="container">
          <h2 className="features__title gradient-text">
            {t('home.features.title')}
          </h2>
          <div className="features__grid">
            {features.map((feature, index) => (
              <div key={index} className="feature-card glass">
                <div className="feature-card__icon">
                  {feature.icon}
                </div>
                <h3 className="feature-card__title">{feature.title}</h3>
                <p className="feature-card__description">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* News Section */}
      <section className="news-section">
        <div className="container">
          <div className="news-section__header">
            <h2 className="news-section__title gradient-text">
              {t('home.newsTitle')}
            </h2>
            <p className="news-section__subtitle">
              {t('home.newsSubtitle')}
            </p>
          </div>
          <div className="news-section__grid stagger-children">
            {news.map((item) => (
              <NewsCard key={item.id} news={item} />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;