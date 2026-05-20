import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useTheme } from '../context/ThemeContext';
import { useLanguageContext } from '../context/LanguageContext';
import BackgroundAnimation from '../components/BackgroundAnimation';
import Navbar from '../components/Navbar';
import './Team.css';

const Team = () => {
  const [selectedMember, setSelectedMember] = useState(null);
  const { colors, isDarkMode } = useTheme();
  const { language } = useLanguageContext();
  const isFa = language === 'fa';

  const teamMembers = [
    {
      id: 1,
      name: 'TS',
      nameFa: 'تی‌اس',
      role: 'Founder & Lead Developer',
      roleFa: 'مؤسس و توسعه‌دهنده ارشد',
      avatar: '👑',
      color: '#FFD700',
      bio: 'Full-stack developer with 5+ years experience in React, Node.js, and team management.',
      bioFa: 'توسعه‌دهنده فول‌استک با بیش از ۵ سال تجربه در React، Node.js و مدیریت تیم.',
      skills: ['React', 'Node.js', 'TeamSpeak', 'Linux'],
      social: {
        github: '#',
        discord: '#',
        teamspeak: 'ts3server://dayts.ir',
      },
      type: 'founder',
    },
    {
      id: 2,
      name: 'Kiarash',
      nameFa: 'کیارش',
      role: 'Web Developer',
      roleFa: 'توسعه‌دهنده وب',
      avatar: '💻',
      color: '#2196F3',
      bio: 'Frontend developer specialized in React, Framer Motion, and creating stunning UIs.',
      bioFa: 'توسعه‌دهنده فرانت‌اند متخصص در React، Framer Motion و طراحی رابط کاربری خیره‌کننده.',
      skills: ['React', 'CSS', 'Framer Motion', 'UI/UX'],
      social: {
        github: 'https://github.com/kiarashsy',
        discord: '#',
      },
      type: 'developer',
    },
    {
      id: 3,
      name: 'Screen Dev',
      nameFa: 'توسعه‌دهنده شیراسکرین',
      role: 'Screen Share Developer',
      roleFa: 'توسعه‌دهنده شیر اسکرین',
      avatar: '🖥️',
      color: '#4CAF50',
      bio: 'Specialized in WebRTC, screen sharing technologies, and real-time communication.',
      bioFa: 'متخصص در WebRTC، فناوری‌های اشتراک‌گذاری صفحه و ارتباطات بلادرنگ.',
      skills: ['WebRTC', 'Jitsi', 'WebSocket', 'Node.js'],
      social: {
        github: '#',
        discord: '#',
      },
      type: 'developer',
    },
    {
      id: 4,
      name: 'Moderator Team',
      nameFa: 'تیم مدیریت',
      role: 'Server Moderators',
      roleFa: 'مدیران سرور',
      avatar: '🛡️',
      color: '#FF9800',
      bio: 'Dedicated team keeping the server safe, organized, and fun for everyone.',
      bioFa: 'تیم متعهد برای حفظ امنیت، نظم و سرگرمی سرور برای همه.',
      skills: ['TeamSpeak', 'Moderation', 'Community'],
      social: {
        teamspeak: 'ts3server://dayts.ir',
      },
      type: 'moderator',
    },
  ];

  const handleOpenModal = (member) => {
    setSelectedMember(member);
  };

  const handleCloseModal = () => {
    setSelectedMember(null);
  };

  return (
    <div style={{ position: 'relative', minHeight: '100vh', color: colors.text }}>
      <BackgroundAnimation />
      <Navbar />

      <div style={{ paddingTop: '120px', paddingBottom: '60px', position: 'relative', zIndex: 1 }}>
        <div className="container">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            style={{ textAlign: 'center', marginBottom: '60px' }}
          >
            <h1 className="gradient-text" style={{
              fontSize: 'clamp(2rem, 5vw, 3rem)',
              fontWeight: 900,
              marginBottom: '10px',
            }}>
              {isFa ? '👥 تیم ما' : '👥 Our Team'}
            </h1>
            <p style={{ color: colors.textSecondary, fontSize: '1.1rem' }}>
              {isFa 
                ? 'با تیم قدرتمند دارک لایت آشنا شوید'
                : 'Meet the powerful team behind DarkLight'}
            </p>
          </motion.div>

          {/* Team Grid */}
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
            gap: '25px',
            direction: 'rtl',
          }}>
            {teamMembers.map((member, index) => (
              <motion.div
                key={member.id}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -8, scale: 1.02 }}
                onClick={() => handleOpenModal(member)}
                style={{
                  background: `${colors.card}ee`,
                  backdropFilter: 'blur(20px)',
                  border: `1px solid ${colors.border}`,
                  borderRadius: '20px',
                  padding: '30px',
                  textAlign: 'center',
                  cursor: 'pointer',
                  transition: 'all 0.3s ease',
                  boxShadow: `0 10px 30px ${isDarkMode ? 'rgba(0,0,0,0.3)' : 'rgba(0,0,0,0.1)'}`,
                }}
              >
                {/* Avatar */}
                <div style={{
                  width: '80px',
                  height: '80px',
                  borderRadius: '50%',
                  background: `linear-gradient(135deg, ${member.color}30, ${member.color}10)`,
                  border: `3px solid ${member.color}`,
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontSize: '2.5rem',
                  margin: '0 auto 20px',
                  boxShadow: `0 0 30px ${member.color}30`,
                }}>
                  {member.avatar}
                </div>

                {/* Type Badge */}
                <span style={{
                  padding: '4px 12px',
                  background: `${member.color}20`,
                  color: member.color,
                  borderRadius: '20px',
                  fontSize: '0.75rem',
                  fontWeight: 600,
                  marginBottom: '12px',
                  display: 'inline-block',
                }}>
                  {member.type === 'founder' ? (isFa ? '👑 مؤسس' : '👑 Founder') :
                   member.type === 'developer' ? (isFa ? '💻 توسعه‌دهنده' : '💻 Developer') :
                   (isFa ? '🛡️ مدیریت' : '🛡️ Moderator')}
                </span>

                {/* Name */}
                <h3 style={{ color: colors.text, fontSize: '1.2rem', fontWeight: 700, marginBottom: '5px' }}>
                  {isFa ? member.nameFa : member.name}
                </h3>

                {/* Role */}
                <p style={{ color: colors.accent, fontSize: '0.9rem', fontWeight: 500 }}>
                  {isFa ? member.roleFa : member.role}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* Modal */}
      <AnimatePresence>
        {selectedMember && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={handleCloseModal}
            style={{
              position: 'fixed',
              top: 0, left: 0, right: 0, bottom: 0,
              background: 'rgba(0,0,0,0.8)',
              backdropFilter: 'blur(8px)',
              zIndex: 2000,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              padding: '20px',
            }}
          >
            <motion.div
              initial={{ scale: 0.8, opacity: 0, y: 50 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.8, opacity: 0, y: 50 }}
              onClick={(e) => e.stopPropagation()}
              style={{
                background: colors.primary,
                border: `1px solid ${colors.border}`,
                borderRadius: '24px',
                padding: '40px',
                maxWidth: '500px',
                width: '100%',
                textAlign: 'center',
                direction: 'rtl',
                boxShadow: `0 20px 60px ${isDarkMode ? 'rgba(0,0,0,0.5)' : 'rgba(0,0,0,0.2)'}`,
              }}
            >
              {/* Close Button */}
              <motion.button
                whileHover={{ scale: 1.1, rotate: 90 }}
                whileTap={{ scale: 0.9 }}
                onClick={handleCloseModal}
                style={{
                  position: 'absolute',
                  top: '15px',
                  right: '20px',
                  background: 'transparent',
                  border: 'none',
                  color: colors.textSecondary,
                  fontSize: '1.5rem',
                  cursor: 'pointer',
                }}
              >
                ✕
              </motion.button>

              {/* Avatar Large */}
              <div style={{
                width: '100px',
                height: '100px',
                borderRadius: '50%',
                background: `linear-gradient(135deg, ${selectedMember.color}30, ${selectedMember.color}10)`,
                border: `4px solid ${selectedMember.color}`,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontSize: '3rem',
                margin: '0 auto 20px',
                boxShadow: `0 0 50px ${selectedMember.color}40`,
              }}>
                {selectedMember.avatar}
              </div>

              {/* Name */}
              <h2 style={{ color: colors.text, fontSize: '1.8rem', fontWeight: 800, marginBottom: '5px' }}>
                {isFa ? selectedMember.nameFa : selectedMember.name}
              </h2>

              {/* Role */}
              <p style={{ color: selectedMember.color, fontSize: '1rem', fontWeight: 600, marginBottom: '15px' }}>
                {isFa ? selectedMember.roleFa : selectedMember.role}
              </p>

              {/* Bio */}
              <p style={{ color: colors.textSecondary, fontSize: '0.95rem', lineHeight: 1.8, marginBottom: '20px' }}>
                {isFa ? selectedMember.bioFa : selectedMember.bio}
              </p>

              {/* Skills */}
              <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap', justifyContent: 'center', marginBottom: '20px' }}>
                {selectedMember.skills.map((skill, i) => (
                  <span key={i} style={{
                    padding: '5px 12px',
                    background: `${selectedMember.color}15`,
                    color: selectedMember.color,
                    borderRadius: '15px',
                    fontSize: '0.8rem',
                    fontWeight: 500,
                    border: `1px solid ${selectedMember.color}30`,
                  }}>
                    {skill}
                  </span>
                ))}
              </div>

              {/* Social Links */}
              <div style={{ display: 'flex', gap: '15px', justifyContent: 'center' }}>
                {selectedMember.social.github && (
                  <a href={selectedMember.social.github} target="_blank" rel="noreferrer"
                    style={{ color: colors.text, fontSize: '1.5rem', textDecoration: 'none' }}>
                    🐙
                  </a>
                )}
                {selectedMember.social.discord && (
                  <a href={selectedMember.social.discord} target="_blank" rel="noreferrer"
                    style={{ color: colors.text, fontSize: '1.5rem', textDecoration: 'none' }}>
                    💬
                  </a>
                )}
                {selectedMember.social.teamspeak && (
                  <a href={selectedMember.social.teamspeak}
                    style={{ color: colors.text, fontSize: '1.5rem', textDecoration: 'none' }}>
                    🎙️
                  </a>
                )}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Team;