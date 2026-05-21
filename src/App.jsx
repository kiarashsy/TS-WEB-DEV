import React, { useState } from "react";
import { motion } from "framer-motion";
import { ThemeProvider, useTheme } from "./context/ThemeContext";
import {
  LanguageProvider,
  useLanguageContext,
} from "./context/LanguageContext";
import { AuthProvider, useAuth } from "./context/AuthContext";
import { NewsProvider } from "./context/NewsContext";
import Navbar from "./components/Navbar";
import BackgroundAnimation from "./components/BackgroundAnimation";
import NotificationBar from "./components/NotificationBar";
import NotificationModal from "./components/NotificationModal";
import NewsSlider from "./components/News/NewsSlider";
import Team from "./pages/Team";
import Login from "./pages/admin/Login";
import Dashboard from "./pages/admin/Dashboard";
import "./styles/globals.css";

const featuresData = [
  {
    key: "voiceChat",
    icon: "🎙️",
    titleFa: "چت صوتی با کیفیت بالا",
    titleEn: "High Quality Voice Chat",
    descFa: "از چت صوتی کریستالی و بدون تاخیر لذت ببرید",
    descEn: "Enjoy crystal clear voice chat with no delay",
  },
  {
    key: "customBots",
    icon: "🤖",
    titleFa: "بات‌های اختصاصی",
    titleEn: "Custom Bots",
    descFa: "بات‌های مخصوص با قابلیت‌های منحصر به فرد",
    descEn: "Special bots with unique capabilities",
  },
  {
    key: "events",
    icon: "🎪",
    titleFa: "ایونت‌های هفتگی",
    titleEn: "Weekly Events",
    descFa: "هر هفته ایونت‌های جدید و هیجان‌انگیز",
    descEn: "New and exciting events every week",
  },
  {
    key: "support",
    icon: "💬",
    titleFa: "پشتیبانی ۲۴/۷",
    titleEn: "24/7 Support",
    descFa: "تیم پشتیبانی همیشه آنلاین و آماده کمک",
    descEn: "Support team always online and ready to help",
  },
  {
    key: "competitions",
    icon: "🏆",
    titleFa: "مسابقات با جوایز",
    titleEn: "Prize Competitions",
    descFa: "در مسابقات شرکت کنید و جوایز ببرید",
    descEn: "Join competitions and win prizes",
  },
  {
    key: "customRoles",
    icon: "👑",
    titleFa: "رول‌های اختصاصی",
    titleEn: "Custom Roles",
    descFa: "رول‌های شخصی‌سازی شده برای اعضا",
    descEn: "Personalized roles for members",
  },
];

const AppContent = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [showAdmin, setShowAdmin] = useState(false);
  const { isDarkMode, colors } = useTheme();
  const { language } = useLanguageContext();
  const { currentUser } = useAuth();

  const isFa = language === "fa";

  if (showAdmin) {
    if (currentUser) {
      return <Dashboard onBack={() => setShowAdmin(false)} />;
    }
    return <Login />;
  }

  return (
    <div
      style={{
        color: colors.text,
        minHeight: "100vh",
        transition: "color 0.3s ease, background 0.3s ease",
      }}
    >
      <BackgroundAnimation />
      <Navbar onOpenNewsModal={() => setIsModalOpen(true)} />
      <NotificationBar onOpenModal={() => setIsModalOpen(true)} />

      {/* Hero Section */}
      <div
        style={{
          paddingTop: "120px",
          textAlign: "center",
          minHeight: "100vh",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          direction: "rtl",
        }}
      >
        <motion.h1
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          style={{
            fontSize: "clamp(2rem, 5vw, 3.5rem)",
            marginBottom: "20px",
            fontWeight: 900,
            color: isDarkMode ? "#ffffff" : "#000000",
            textShadow: `0 0 30px ${colors.accent}30`,
          }}
        >
          🎮 {isFa ? "به دنیای دارک لایت خوش آمدید" : "Welcome to DarkLight World"}
        </motion.h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.8 }}
          style={{
            fontSize: "clamp(1rem, 3vw, 1.5rem)",
            color: colors.textSecondary,
            marginBottom: "10px",
            fontWeight: 500,
          }}
        >
          {isFa ? "جامعه‌ای پر از انرژی و ماجراجویی" : "A Community Full of Energy and Adventure"}
        </motion.p>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 0.8 }}
          style={{
            fontSize: "clamp(0.9rem, 2vw, 1.2rem)",
            color: colors.textSecondary,
            marginBottom: "40px",
            opacity: 0.8,
          }}
        >
          {isFa ? "بهترین تجربه گیمینگ رو با ما داشته باشید" : "Experience the best gaming moments with us"}
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7, duration: 0.8 }}
          style={{
            display: "flex",
            gap: "20px",
            flexWrap: "wrap",
            justifyContent: "center",
          }}
        >
          <motion.button
            whileHover={{
              scale: 1.05,
              boxShadow: `0 10px 30px ${colors.accent}50`,
            }}
            whileTap={{ scale: 0.95 }}
            onClick={() => window.open("ts3server://dayts.ir", "_blank")}
            style={{
              padding: "15px 35px",
              background: `linear-gradient(135deg, ${colors.accent}, ${isDarkMode ? "#1565c0" : "#1976d2"})`,
              color: "#fff",
              border: "none",
              borderRadius: "12px",
              fontSize: "1.1rem",
              fontWeight: 600,
              cursor: "pointer",
              transition: "all 0.3s ease",
              boxShadow: `0 5px 15px ${colors.accent}30`,
            }}
          >
            🎙️ {isFa ? "عضویت در سرور" : "Join Server"}
          </motion.button>

          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => {
              document
                .getElementById("features")
                .scrollIntoView({ behavior: "smooth" });
            }}
            style={{
              padding: "15px 35px",
              background: "transparent",
              color: colors.text,
              border: `2px solid ${colors.accent}`,
              borderRadius: "12px",
              fontSize: "1.1rem",
              fontWeight: 600,
              cursor: "pointer",
              transition: "all 0.3s ease",
            }}
          >
            {isFa ? "بیشتر بدانید" : "Learn More"}
          </motion.button>
        </motion.div>
      </div>

      {/* News Slider */}
      <NewsSlider />

      {/* Features Section */}
      <div
        id="features"
        style={{
          padding: "80px 20px",
          maxWidth: "1200px",
          margin: "0 auto",
        }}
      >
        <motion.h2
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          style={{
            textAlign: "center",
            fontSize: "clamp(1.8rem, 4vw, 2.5rem)",
            marginBottom: "50px",
            color: colors.text,
            fontWeight: 700,
          }}
        >
          {isFa ? "✨ امکانات ویژه سرور" : "✨ Special Server Features"}
        </motion.h2>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
            gap: "30px",
            direction: "rtl",
          }}
        >
          {featuresData.map((feature, index) => (
            <motion.div
              key={feature.key}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              whileHover={{
                y: -5,
                boxShadow: `0 15px 30px ${isDarkMode ? "rgba(0,0,0,0.3)" : "rgba(0,0,0,0.1)"}`,
              }}
              style={{
                padding: "35px 25px",
                background: colors.card,
                border: `1px solid ${colors.border}`,
                borderRadius: "20px",
                textAlign: "center",
                transition: "all 0.3s ease",
                cursor: "default",
              }}
            >
              <div style={{ fontSize: "3rem", marginBottom: "20px" }}>
                {feature.icon}
              </div>
              <h3
                style={{
                  color: colors.accent,
                  marginBottom: "12px",
                  fontSize: "1.2rem",
                  fontWeight: 700,
                }}
              >
                {isFa ? feature.titleFa : feature.titleEn}
              </h3>
              <p
                style={{
                  color: colors.textSecondary,
                  fontSize: "0.95rem",
                  lineHeight: 1.6,
                }}
              >
                {isFa ? feature.descFa : feature.descEn}
              </p>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Footer */}
      <footer
        style={{
          padding: "30px 20px",
          textAlign: "center",
          borderTop: `1px solid ${colors.border}`,
          color: colors.textSecondary,
          marginTop: "50px",
        }}
      >
        <p style={{ marginBottom: "5px" }}>
          {isFa ? "ساخته شده با ❤️ برای سرور دارک لایت" : "Made with ❤️ for Dark Light Server"}
        </p>
        <p style={{ fontSize: "0.9rem" }}>
          {isFa ? "© 2026. تمامی حقوق محفوظ است" : "© 2026 All Rights Reserved"}
        </p>

        <p
          onClick={() => setShowAdmin(true)}
          style={{
            cursor: "pointer",
            opacity: 0.3,
            fontSize: "0.7rem",
            marginTop: "10px",
            userSelect: "none",
            transition: "opacity 0.3s ease",
          }}
          onMouseEnter={(e) => (e.target.style.opacity = "1")}
          onMouseLeave={(e) => (e.target.style.opacity = "0.3")}
          title="Admin Panel"
        >
          🔑 Admin Panel
        </p>
      </footer>

      <NotificationModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
      />
    </div>
  );
};

const App = () => {
  return (
    <ThemeProvider>
      <LanguageProvider>
        <AuthProvider>
          <NewsProvider>
            <AppContent />
          </NewsProvider>
        </AuthProvider>
      </LanguageProvider>
    </ThemeProvider>
  );
};

export default App;