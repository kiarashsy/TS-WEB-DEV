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
import Login from "./pages/admin/Login";
import Dashboard from "./pages/admin/Dashboard";
import "./styles/globals.css";

const AppContent = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [showAdmin, setShowAdmin] = useState(false);
  const { isDarkMode, colors } = useTheme();
  const { t } = useLanguageContext();
  const { currentUser } = useAuth();

  // اگر می‌خواهد پنل ادمین ببیند
  if (showAdmin) {
    if (currentUser) {
      return <Dashboard onBack={() => setShowAdmin(false)} />;
    }
    return <Login />;
  }
  
  // صفحه اصلی سایت
  return (
    <div
      style={{
        color: colors.text,
        minHeight: "100vh",
        transition: "color 0.3s ease, background 0.3s ease",
      }}
    >
      {/* پس‌زمینه متحرک */}
      <BackgroundAnimation />
      
      {/* نوبار با دکمه اخبار */}
      <Navbar onOpenNewsModal={() => setIsModalOpen(true)} />
      
      {/* نوار اعلان بالا */}
      <NotificationBar onOpenModal={() => setIsModalOpen(true)} />

      {/* بخش Hero */}
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
        {/* تایتل اصلی */}
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
          🎮 {t("hero.title")}
        </motion.h1>

        {/* زیرعنوان */}
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
          {t("hero.subtitle")}
        </motion.p>

        {/* توضیحات */}
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
          {t("hero.description")}
        </motion.p>

        {/* دکمه‌های Hero */}
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
          {/* دکمه اتصال به TeamSpeak */}
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
            🎙️ {t("hero.joinButton")}
          </motion.button>

          {/* دکمه بیشتر بدانید */}
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
            {t("hero.learnMore")}
          </motion.button>
        </motion.div>

        {/* Status Box */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1, duration: 0.8 }}
          style={{
            marginTop: "60px",
            padding: "25px 35px",
            background: colors.card,
            border: `1px solid ${colors.border}`,
            borderRadius: "20px",
            display: "flex",
            gap: "40px",
            flexWrap: "wrap",
            justifyContent: "center",
            boxShadow: `0 10px 30px ${isDarkMode ? "rgba(0,0,0,0.3)" : "rgba(0,0,0,0.1)"}`,
            backdropFilter: "blur(20px)",
          }}
        >
          {/* تم فعلی */}
          <div style={{ textAlign: "center" }}>
            <div
              style={{
                fontSize: "0.9rem",
                color: colors.textSecondary,
                marginBottom: "5px",
              }}
            >
              {t("currentTheme")}
            </div>
            <div
              style={{
                fontSize: "1.1rem",
                fontWeight: 700,
                color: colors.text,
              }}
            >
              {isDarkMode ? t("darkMode") : t("lightMode")}
            </div>
          </div>

          <div style={{ width: "1px", background: colors.border }} />

          {/* زبان فعلی */}
          <div style={{ textAlign: "center" }}>
            <div
              style={{
                fontSize: "0.9rem",
                color: colors.textSecondary,
                marginBottom: "5px",
              }}
            >
              {t("currentLang")}
            </div>
            <div
              style={{
                fontSize: "1.1rem",
                fontWeight: 700,
                color: colors.text,
              }}
            >
              {t("langName")}
            </div>
          </div>

          <div style={{ width: "1px", background: colors.border }} />

          {/* آدرس سرور */}
          <div style={{ textAlign: "center" }}>
            <div
              style={{
                fontSize: "0.9rem",
                color: colors.textSecondary,
                marginBottom: "5px",
              }}
            >
              🎙️ Server
            </div>
            <div
              style={{
                fontSize: "1.1rem",
                fontWeight: 700,
                color: colors.accent,
              }}
            >
              dayts.ir
            </div>
          </div>
        </motion.div>
      </div>

      {/* Features Section */}
      <div
        id="features"
        style={{
          padding: "80px 20px",
          maxWidth: "1200px",
          margin: "0 auto",
        }}
      >
        {/* تایتل بخش Features */}
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
          {t("features.title")}
        </motion.h2>

        {/* گرید کارت‌های Features */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
            gap: "30px",
            direction: "rtl",
          }}
        >
          {[
            "voiceChat",
            "customBots",
            "events",
            "support",
            "competitions",
            "customRoles",
          ].map((feature, index) => (
            <motion.div
              key={index}
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
              {/* آیکون */}
              <div style={{ fontSize: "3rem", marginBottom: "20px" }}>
                {feature === "voiceChat" && "🎙️"}
                {feature === "customBots" && "🤖"}
                {feature === "events" && "🎪"}
                {feature === "support" && "💬"}
                {feature === "competitions" && "🏆"}
                {feature === "customRoles" && "👑"}
              </div>
              {/* عنوان کارت */}
              <h3
                style={{
                  color: colors.accent,
                  marginBottom: "12px",
                  fontSize: "1.2rem",
                  fontWeight: 700,
                }}
              >
                {t(`features.${feature}`)}
              </h3>
              {/* توضیحات کارت */}
              <p
                style={{
                  color: colors.textSecondary,
                  fontSize: "0.95rem",
                  lineHeight: 1.6,
                }}
              >
                {t(`features.${feature}Desc`)}
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
        <p style={{ marginBottom: "5px" }}>{t("footer.text")}</p>
        <p style={{ fontSize: "0.9rem" }}>{t("footer.rights")}</p>
        
        {/* دکمه مخفی ورود به پنل ادمین */}
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

      {/* مودال اعلان‌ها */}
      <NotificationModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
      />
    </div>
  );
};

// فقط یک App داشته باشیم
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