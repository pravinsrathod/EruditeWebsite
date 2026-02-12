import React from 'react';
import { motion } from 'framer-motion';
import { BookOpen, Users, Star, Trophy, ArrowRight, Mail, Phone, MapPin, Instagram, Facebook, Menu, X, Bell, Smartphone, Calendar, CheckCircle, Moon, Sun, Quote } from 'lucide-react';
import './index.css';
import logo from './assets/logo.jpg';
import appMockup from './assets/edupro_mockup.png';
import visionMissionImg from './assets/vision-mission.jpg';
import trackChartImg from './assets/track-chart.jpg';
import grad1 from './assets/grad-1.jpg';
import grad2 from './assets/grad-2.jpg';
import grad3 from './assets/grad-3.jpg';
import grad4 from './assets/grad-4.jpg';

const StaggeredText = ({ text, style, delay = 0 }) => {
  const words = text.split(' ');
  return (
    <h1 style={style}>
      {words.map((word, i) => (
        <motion.span
          key={i}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{
            duration: 0.8,
            delay: delay + i * 0.1,
            ease: [0.2, 0.65, 0.3, 0.9]
          }}
          style={{ display: 'inline-block', marginRight: '0.3em' }}
        >
          {word}
        </motion.span>
      ))}
    </h1>
  );
};

const LeadershipMessages = () => {
  const messages = [
    {
      role: "Founder",
      header: "Message from the Founder",
      name: "Founder of Erudite",
      text: [
        "Welcome to Erudite International. Dear Students, Parents, and Well-Wishers,",
        "It is with great pride and joy that I welcome you to ERUDITE. Our institution was founded with a vision to nurture young minds, inspire curiosity, and cultivate a lifelong love for learning.",
        "At ERUDITE, we believe that education extends beyond textbooks—it is about developing character, resilience, and the ability to think critically. Our dedicated faculty and staff are committed to providing a supportive and enriching environment where every child can reach their full potential.",
        "As we continue to grow, our mission remains the same: to create a dynamic learning space that fosters creativity, innovation, and excellence. Together, let us shape the future, one student at a time."
      ]
    },
    {
      role: "KL Branch",
      header: "Message from KL Branch Principal",
      name: "Remala Nagaratnam",
      title: "Principal, KL Branch",
      text: [
        "Warm greetings to all students, parents, and visitors.",
        "At our school, we believe education is not only about academic excellence but also about shaping good character, discipline, and respect for one another. Every child entrusted to us is special, and it is our responsibility to guide them towards becoming confident, responsible, and compassionate individuals.",
        "We value the strong partnership between parents and teachers, as together we build the foundation for lifelong learning and success. I kindly remind all students and parents that punctuality, regular attendance, and respect for school rules are essential for a smooth and positive learning environment.",
        "Let us continue to work hand in hand to create a nurturing yet disciplined atmosphere where every child can grow, explore, and achieve their best."
      ]
    },
    {
      role: "Cyberjaya Branch",
      header: "Message from Cyberjaya Branch Principal",
      name: "Vithiya Shankari A/P Jayagobi",
      title: "Principal, Daace Academy",
      text: [
        "Warm greetings to our dear students, parents, and well-wishers.",
        "At Daace Academy, we see every child as a shining light — full of dreams, curiosity, and potential. It is our heartfelt mission to guide each child with love, patience, and care, helping them discover their strengths and build confidence in who they are.",
        "Education at Daace Academy goes beyond books and exams. We teach our children to be kind, respectful, and responsible — values that shape not only a bright student, but also a beautiful human being. We believe that discipline and compassion must walk hand in hand to create true success.",
        "To our parents, thank you for trusting us with your children’s growth. Your support and cooperation mean everything. Together, we can nurture young hearts and minds to dream big, work hard, and always do good."
      ]
    },
    {
      role: "Brickfields TELS",
      header: "Message from Brickfields TELS Principal",
      name: "Principal",
      title: "Tadika Erudite Little Stars",
      text: [
        "Dear Parents and Little Ones, Warm greetings to all of you.",
        "At Tadika Erudite Little Stars, every child who walks through our doors becomes a part of our family. As a principal, and as a mother at heart, I see each child as a precious little soul — unique, innocent, and full of dreams. It brings me so much joy to see their smiles each morning, their laughter filling our classrooms, and their eyes sparkle as they learn something new.",
        "We believe that education in the early years is about love, care, and guidance. Our teachers nurture every child gently, helping them grow in confidence, kindness, and curiosity. We hold their little hands not only to teach, but to comfort, encourage, and celebrate every small achievement.",
        "To our dear parents — thank you for trusting us with your children. Your love and support make our work meaningful. Together, we will continue to create a safe, joyful, and caring environment where every child feels loved, valued, and free to be themselves."
      ]
    }
  ];

  const [activeTab, setActiveTab] = React.useState(0);

  return (
    <section id="leadership" style={{ padding: '6rem 0', background: 'var(--bg-subtle)' }}>
      <div className="container">
        <div className="section-title">
          <h2>Voices of Leadership</h2>
          <p>Inspiring words from the visionaries guiding our students.</p>
        </div>

        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '3rem' }}>
          {/* Tabs */}
          <div style={{
            display: 'flex',
            flexWrap: 'wrap',
            justifyContent: 'center',
            gap: '1rem',
            background: 'var(--glass)',
            padding: '0.5rem',
            borderRadius: '50px',
            border: '1px solid var(--glass-border)'
          }}>
            {messages.map((msg, idx) => (
              <button
                key={idx}
                onClick={() => setActiveTab(idx)}
                style={{
                  padding: '0.75rem 1.5rem',
                  borderRadius: '30px',
                  border: 'none',
                  background: activeTab === idx ? 'var(--primary)' : 'transparent',
                  color: activeTab === idx ? 'white' : 'var(--text-light)',
                  fontWeight: activeTab === idx ? '600' : '500',
                  cursor: 'pointer',
                  transition: 'all 0.3s ease',
                  fontSize: '0.95rem'
                }}
              >
                {msg.role}
              </button>
            ))}
          </div>

          {/* Content Card */}
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.4 }}
            className="glass-card"
            style={{
              padding: '3rem',
              width: '100%',
              maxWidth: '900px',
              display: 'flex',
              flexDirection: 'column',
              gap: '2rem',
              position: 'relative',
              overflow: 'hidden'
            }}
          >
            {/* Background Decoration */}
            <div style={{
              position: 'absolute',
              top: '-10%',
              right: '-5%',
              opacity: 0.03,
              transform: 'rotate(15deg)',
              pointerEvents: 'none'
            }}>
              <img src={logo} alt="Watermark" style={{ width: '300px', filter: 'grayscale(1)' }} />
            </div>

            <div style={{ display: 'flex', gap: '2rem', alignItems: 'flex-start', flexWrap: 'wrap' }}>
              <div style={{ flex: 1, minWidth: '300px' }}>
                <Quote size={48} style={{ color: 'var(--secondary)', marginBottom: '1.5rem', opacity: 0.5 }} />
                <h3 style={{ fontSize: '1.8rem', color: 'var(--primary)', marginBottom: '1.5rem' }}>{messages[activeTab].header}</h3>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                  {messages[activeTab].text.map((paragraph, i) => (
                    <p key={i} style={{ color: 'var(--text-dark)', lineHeight: '1.8', fontSize: '1.05rem' }}>
                      {paragraph}
                    </p>
                  ))}
                </div>
                <div style={{ marginTop: '2.5rem', borderTop: '1px solid var(--glass-border)', paddingTop: '1.5rem' }}>
                  <h4 style={{ fontSize: '1.2rem', color: 'var(--primary)', fontWeight: '700' }}>{messages[activeTab].name}</h4>
                  {messages[activeTab].title && (
                    <p style={{ color: 'var(--text-light)', fontSize: '0.9rem', fontStyle: 'italic' }}>{messages[activeTab].title}</p>
                  )}
                </div>
              </div>

              {/* Optional Right Side Image/Brand Element for Desktop */}
              <div style={{
                flexShrink: 0,
                width: '200px',
                height: '200px',
                borderRadius: '50%',
                overflow: 'hidden',
                border: '4px solid var(--glass-border)',
                background: 'white',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                boxShadow: '0 10px 30px rgba(0,0,0,0.1)'
              }}>
                <img src={logo} alt="Erudite Crest" style={{ width: '80%', height: 'auto' }} />
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

const VisionMission = () => {
  return (
    <section id="vision-mission" style={{ padding: '8rem 0', background: 'var(--bg-cream)', position: 'relative', overflow: 'hidden' }}>
      <div className="container">
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '4rem', alignItems: 'center' }}>
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            style={{ position: 'relative' }}
          >
            <div style={{
              position: 'absolute',
              top: '-20px',
              left: '-20px',
              width: '100%',
              height: '100%',
              border: '2px solid var(--primary)',
              borderRadius: '30px',
              zIndex: 0
            }}></div>
            <div style={{ borderRadius: '30px', overflow: 'hidden', position: 'relative', zIndex: 1, boxShadow: '0 20px 40px rgba(0,0,0,0.1)' }}>
              <img
                src={visionMissionImg}
                alt="Students at Erudite"
                style={{ width: '100%', height: 'auto', display: 'block' }}
              />
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div className="section-title" style={{ textAlign: 'left', marginBottom: '2rem' }}>
              <h2>Vision & Mission</h2>
              <p>Guiding principles that shape our future leaders.</p>
            </div>

            <div style={{ marginBottom: '2.5rem' }}>
              <h3 style={{ color: 'var(--secondary)', fontSize: '1.8rem', marginBottom: '1rem', display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                <span style={{ width: '40px', height: '2px', background: 'var(--primary)', display: 'block' }}></span>
                Vision
              </h3>
              <p style={{ color: 'var(--text-dark)', lineHeight: '1.8', fontSize: '1.05rem', textAlign: 'justify' }}>
                Our program is designed to foster social interaction and critical thinking. We aspire to be the leading intellectual and creative hub for meaningful engagement in a world that increasingly demands well-designed objects, communication, systems, technology, and organizations to address social needs effectively.
              </p>
            </div>

            <div>
              <h3 style={{ color: 'var(--secondary)', fontSize: '1.8rem', marginBottom: '1rem', display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                <span style={{ width: '40px', height: '2px', background: 'var(--primary)', display: 'block' }}></span>
                Mission
              </h3>
              <p style={{ color: 'var(--text-dark)', lineHeight: '1.8', fontSize: '1.05rem', textAlign: 'justify' }}>
                Our School prepares students to understand, contribute to, and thrive in a rapidly evolving society, fostering a more just and equitable world. We are committed to equipping our students with both the foundational skills of a strong education and the critical competencies necessary for success and leadership in the emerging creative economy. Additionally, we will lead in the creation of practical and theoretical knowledge, empowering individuals to better understand the world and enhance conditions for both local and global communities.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

const TrackRecord = () => {
  return (
    <section id="track-record" style={{ padding: '8rem 0', background: 'linear-gradient(to bottom, var(--bg-cream), var(--bg-gradient-end))' }}>
      <div className="container">
        <div className="section-title">
          <h2>Examination Track Record</h2>
          <p>"Success doesn't happen overnight, keep your eye on the prize & don't look back"</p>
        </div>

        {/* Chart Image */}
        <div style={{ display: 'flex', justifyContent: 'center', marginBottom: '4rem' }}>
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            style={{ borderRadius: '20px', overflow: 'hidden', boxShadow: '0 20px 40px rgba(0,0,0,0.1)' }}
          >
            <img src={trackChartImg} alt="Success Rate Chart" style={{ maxWidth: '100%', width: '600px', display: 'block' }} />
          </motion.div>
        </div>

        {/* Stats Grid */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '1.5rem', marginBottom: '5rem' }}>
          {[
            { label: "Success Rate A/A*", value: "81%", color: "#FFD700", bg: "rgba(255, 215, 0, 0.1)" },
            { label: "Success Rate B", value: "11%", color: "#C0C0C0", bg: "rgba(192, 192, 192, 0.1)" },
            { label: "Success Rate C", value: "8%", color: "#CD7F32", bg: "rgba(205, 127, 50, 0.1)" },
            { label: "Cambridge IGCSE 2021", value: "Top in World", color: "#4facfe", bg: "rgba(79, 172, 254, 0.1)" },
            { label: "Cambridge Exam 2022", value: "Top in Malaysia", color: "#00f2fe", bg: "rgba(0, 242, 254, 0.1)" }
          ].map((stat, i) => (
            <motion.div
              key={i}
              initial={{ scale: 0.9, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              whileHover={{ y: -10 }}
              className="glass-card"
              style={{
                padding: '2rem',
                textAlign: 'center',
                borderTop: `4px solid ${stat.color}`,
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                alignItems: 'center'
              }}
            >
              <h3 style={{ fontSize: '2.5rem', fontWeight: '800', color: stat.color, marginBottom: '0.5rem', lineHeight: 1.2 }}>{stat.value}</h3>
              <p style={{ color: 'var(--text-light)', fontSize: '0.85rem', fontWeight: '700', textTransform: 'uppercase', letterSpacing: '0.5px' }}>{stat.label}</p>
            </motion.div>
          ))}
        </div>

        {/* Content & Context */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '3rem' }}>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            style={{ maxWidth: '800px', margin: '0 auto', textAlign: 'center' }}
          >
            <h3 style={{ fontSize: '2.2rem', color: 'var(--primary)', marginBottom: '1.5rem', fontWeight: '700' }}>Familiarising with Excellence</h3>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem', color: 'var(--text-dark)', lineHeight: '1.8', fontSize: '1.05rem', textAlign: 'justify' }}>
              <p>When it comes to performing well in our exams, studying and revising are the first things that come to mind. Familiarising ourselves with the examination system is also a key factor in achieving great results.</p>
              <p>At Erudite Academy, we, as students, can experience the environment and system before the actual IGCSE examination. Tables are separated and arranged in rows during the term or mock examinations. Each student would have their specific seat allocated in the hall.</p>
              <p>Examination rules, such as arriving early and no communication between candidates, are set. Invigilators are assigned to each paper. Besides written exams, oral and listening exams for the language subjects, and practical exams for subjects such as ICT are also held.</p>
              <div style={{ background: 'var(--bg-feature-blue)', padding: '1.5rem', borderRadius: '16px', borderLeft: '4px solid var(--secondary)', marginTop: '1rem', textAlign: 'left' }}>
                <p style={{ margin: 0, fontStyle: 'italic', fontWeight: '500', color: 'var(--primary)' }}>"The purpose of these actions is to allow students to become familiarised with the environment and system of the IGCSE examination. Here, students can be fully prepared in all areas, preventing us from getting caught off guard."</p>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '2rem' }}
          >
            {[grad1, grad2, grad3, grad4].map((img, i) => (
              <motion.div
                key={i}
                whileHover={{ scale: 1.02 }}
                style={{ borderRadius: '20px', overflow: 'hidden', aspectRatio: '3/2', width: '100%', boxShadow: '0 15px 30px rgba(0,0,0,0.1)' }}
              >
                <img src={img} alt="Graduation" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

const BentoCard = ({ children, className, span, ...props }) => {
  const cardRef = React.useRef(null);

  const handleMouseMove = (e) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    cardRef.current.style.setProperty('--mouse-x', `${x}px`);
    cardRef.current.style.setProperty('--mouse-y', `${y}px`);
  };

  return (
    <motion.div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      className={`bento-card bento-${span} ${className || ''}`}
      {...props}
    >
      <div className="spotlight"></div>
      {children}
    </motion.div>
  );
};

const Navbar = ({ theme, toggleTheme }) => {
  const [isOpen, setIsOpen] = React.useState(false);
  const [scrolled, setScrolled] = React.useState(false);

  React.useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollTo = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsOpen(false);
  };

  const navLinks = [
    { id: 'home', label: 'Home' },
    { id: 'about', label: 'About' },
    { id: 'programs', label: 'Programs' },
    { id: 'activity', label: 'Activity' },
    { id: 'gallery', label: 'Gallery' },
    { id: 'app', label: 'EduPro App' },
    { id: 'branches', label: 'Branches' },
    { id: 'contact', label: 'Contact' },
  ];

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      style={{
        position: 'fixed',
        top: scrolled ? '1rem' : '1.5rem',
        left: '2rem',
        right: '2rem',
        zIndex: 1000,
        padding: scrolled ? '0.75rem 2rem' : '1rem 2.5rem',
        background: 'var(--glass)',
        backdropFilter: 'blur(20px)',
        border: '1px solid var(--glass-border)',
        borderRadius: '50px',
        boxShadow: scrolled ? '0 10px 40px rgba(0,0,0,0.1)' : '0 5px 20px rgba(0,0,0,0.05)',
        transition: 'all 0.3s ease',
        border: '1px solid rgba(255,255,255,0.3)'
      }}
    >
      <div className="nav-container" style={{ display: 'flex', alignItems: 'center', width: '100%', position: 'relative' }}>
        {/* Logo Section */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', cursor: 'pointer', flexShrink: 1, minWidth: 0 }} onClick={() => scrollTo('home')}>
          <img src={logo} alt="Erudite Logo" style={{ height: scrolled ? '42px' : '52px', width: 'auto', mixBlendMode: theme === 'dark' ? 'screen' : 'multiply', filter: theme === 'dark' ? 'invert(1) brightness(1.5)' : 'none', transition: 'all 0.3s ease', flexShrink: 0 }} />
          <div style={{ display: 'flex', flexDirection: 'column', lineHeight: '1', transition: 'all 0.3s ease' }}>
            <h1 className="nav-brand-text" style={{ fontSize: scrolled ? '1.1rem' : '1.35rem', margin: 0, fontWeight: '800', letterSpacing: '0.5px', color: 'var(--primary)', textTransform: 'uppercase' }}>Erudite</h1>
            <span className="nav-sub-text" style={{ fontSize: scrolled ? '0.55rem' : '0.65rem', fontWeight: '600', letterSpacing: scrolled ? '1.5px' : '2px', color: 'var(--secondary)', textTransform: 'uppercase', marginTop: '2px' }}>International</span>
          </div>
        </div>

        {/* Desktop Nav Links - centered */}
        <div className="desktop-nav" style={{ display: 'flex', gap: '2rem', fontWeight: '600', flex: '1', justifyContent: 'center', overflow: 'hidden' }}>
          {navLinks.map(link => (
            <span
              key={link.id}
              onClick={() => scrollTo(link.id)}
              className={link.id === 'app' ? 'glitter-text' : ''}
              style={{
                color: 'var(--primary)',
                textDecoration: 'none',
                cursor: 'pointer',
                fontSize: '1rem',
                transition: 'all 0.2s',
                opacity: link.id === 'app' ? 1 : 0.8,
                whiteSpace: 'nowrap',
                letterSpacing: '0.01em'
              }}
              onMouseEnter={(e) => { if (link.id !== 'app') e.target.style.opacity = 1; e.target.style.transform = 'translateY(-1px)'; }}
              onMouseLeave={(e) => { if (link.id !== 'app') e.target.style.opacity = 0.8; e.target.style.transform = 'translateY(0)'; }}
            >
              {link.label}
            </span>
          ))}
        </div>

        {/* Always Visible Button on Desktop - Absolutely Positioned */}
        {/* Right Side Actions */}
        <div className="desktop-nav" style={{ position: 'absolute', right: scrolled ? '2rem' : '2.5rem', display: 'flex', alignItems: 'center', gap: '1rem' }}>
          <button
            onClick={toggleTheme}
            style={{
              background: 'var(--bg-subtle)',
              border: '1px solid var(--primary)',
              color: 'var(--primary)',
              cursor: 'pointer',
              padding: '0.5rem',
              borderRadius: '50%',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              transition: 'all 0.3s ease'
            }}
          >
            {theme === 'light' ? <Moon size={20} /> : <Sun size={20} />}
          </button>
          <button className="btn btn-primary" style={{ padding: '0.75rem 1.5rem', fontSize: '1rem', whiteSpace: 'nowrap', letterSpacing: '0.02em' }} onClick={() => scrollTo('contact')}>Enroll Now</button>
        </div>

        {/* Mobile Menu Button */}
        <button className="mobile-menu-btn" onClick={() => setIsOpen(!isOpen)} style={{ position: 'absolute', right: scrolled ? '2rem' : '2.5rem' }}>
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>

        {/* Mobile Nav Overlay */}
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, x: '100%' }}
            animate={{ opacity: 1, x: 0 }}
            className="mobile-nav"
          >
            <button style={{ position: 'absolute', top: '1.5rem', right: '1.5rem', background: 'none', border: 'none', color: 'var(--primary)' }} onClick={() => setIsOpen(false)}>
              <X size={32} />
            </button>
            {navLinks.map(link => (
              <span key={link.id} onClick={() => (scrollTo(link.id), setIsOpen(false))} className={link.id === 'app' ? 'glitter-text' : ''}>{link.label}</span>
            ))}
            <button className="btn btn-primary" onClick={() => scrollTo('contact')}>Enroll Now</button>
            <button
              onClick={toggleTheme}
              style={{
                background: 'none',
                border: '1px solid var(--primary)',
                color: 'var(--primary)',
                cursor: 'pointer',
                padding: '0.75rem',
                borderRadius: '50px',
                display: 'flex',
                alignItems: 'center',
                gap: '0.5rem',
                fontSize: '1rem',
                fontWeight: '600'
              }}
            >
              {theme === 'light' ? <><Moon size={20} /> Dark Mode</> : <><Sun size={20} /> Light Mode</>}
            </button>
          </motion.div>
        )}
      </div>
    </motion.nav>
  );
};

const Hero = () => {
  const [scrollY, setScrollY] = React.useState(0);

  React.useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <section id="home" style={{ minHeight: '100vh', display: 'flex', alignItems: 'center', background: 'linear-gradient(135deg, var(--bg-gradient-start) 0%, var(--bg-gradient-end) 100%)', position: 'relative', overflow: 'hidden', padding: '8rem 0 4rem 0' }}>
      <div className="container hero-grid" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '4rem', alignItems: 'center' }}>
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <span style={{ color: 'var(--secondary)', fontWeight: 'bold', textTransform: 'uppercase', letterSpacing: '2px' }}>Welcome to Erudite International</span>
          <StaggeredText
            text="Empowering Minds Through Quality Education"
            style={{ fontSize: '4.5rem', lineHeight: '1.1', margin: '1rem 0 2rem 0' }}
          />
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.8, duration: 0.8 }}
            style={{ fontSize: '1.1rem', color: 'var(--text-light)', marginBottom: '3rem' }}
          >
            We foster a nurturing environment where children discover their potential through critical thinking, social interaction, and character building.
          </motion.p>
          <div style={{ display: 'flex', gap: '1rem', justifyContent: 'inherit', flexWrap: 'wrap' }}>
            <button className="btn btn-primary" onClick={() => document.getElementById('contact').scrollIntoView({ behavior: 'smooth' })}>Book a Virtual Tour</button>
            <button className="btn btn-secondary" style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }} onClick={() => document.getElementById('programs').scrollIntoView({ behavior: 'smooth' })}>
              Our Programs <ArrowRight size={20} />
            </button>
          </div>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1 }}
          style={{ position: 'relative', transform: `translateY(${scrollY * 0.15}px)` }}
        >
          <div style={{ width: '100%', height: '500px', background: 'url("https://erudite.edu.my/wp-content/uploads/2022/04/3338b0cf-ff94-4ae1-9f36-857320632075.jpg")', backgroundSize: 'cover', backgroundPosition: 'center', borderRadius: '30px', boxShadow: '0 20px 40px rgba(0,0,0,0.1)' }}></div>
          <div className="glass-card" style={{ position: 'absolute', bottom: '-20px', left: '-20px', padding: '1.5rem' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
              <div style={{ background: 'var(--secondary)', color: 'white', padding: '0.75rem', borderRadius: '50%' }}>
                <Trophy size={24} />
              </div>
              <div>
                <h4 style={{ margin: 0 }}>Top Rated</h4>
                <p style={{ margin: 0, fontSize: '0.8rem', color: 'var(--text-light)' }}>International Standard</p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

const Features = () => (
  <section id="about" style={{ background: 'var(--bg-cream)' }}>
    <div className="container">
      <div className="section-title">
        <h2>Expertise in Excellence</h2>
        <p>Providing the best foundation for your child's future.</p>
      </div>
      <div className="grid-3">
        {[
          { icon: <BookOpen />, title: "Holistic Learning", desc: "A balanced approach to academic, social, and emotional development.", color: "var(--vibrant-blue)", bg: "var(--bg-feature-blue)" },
          { icon: <Users />, title: "Expert Educators", desc: "Qualified staff dedicated to nurturing young minds with care.", color: "var(--vibrant-orange)", bg: "var(--bg-feature-orange)" },
          { icon: <Star />, title: "Character Building", desc: "Focusing on resilience, empathy, and strong moral values.", color: "var(--vibrant-purple)", bg: "var(--bg-feature-purple)" }
        ].map((f, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.2 }}
            whileHover={{ y: -10, boxShadow: `0 20px 40px -10px ${f.color}40` }}
            className="glass-card"
            style={{ textAlign: 'center', borderTop: `4px solid ${f.color}` }}
          >
            <div style={{
              color: f.color,
              background: f.bg,
              marginBottom: '1.5rem',
              display: 'inline-flex',
              padding: '1.5rem',
              borderRadius: '50%',
              justifyContent: 'center',
              boxShadow: `0 10px 20px ${f.color}30`
            }}>
              {React.cloneElement(f.icon, { size: 40 })}
            </div>
            <h3 style={{ marginBottom: '1rem', color: 'var(--primary)' }}>{f.title}</h3>
            <p style={{ color: 'var(--text-light)' }}>{f.desc}</p>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

const Programs = () => {
  const programs = [
    { title: "Pre-Primary", desc: "Hands-on learning and social discovery for our youngest stars.", image: "https://erudite.edu.my/wp-content/uploads/2023/09/PHOTO-2023-07-21-11-42-47.jpg", color: "linear-gradient(135deg, #4facfe, #00f2fe)" },
    { title: "Lower Primary", desc: "Building strong foundations in literacy, numeracy, and creative thinking.", image: "https://erudite.edu.my/wp-content/uploads/2022/04/228172ac-0642-4ac2-8a7b-33386aa1ad73.jpg", color: "linear-gradient(135deg, #f6d365, #fda085)" },
    { title: "Upper Primary", desc: "Progressive curriculum designed to nurture leadership and deeper inquiry.", image: "https://erudite.edu.my/wp-content/uploads/2022/04/3c8db26a-2ccb-4055-ba42-53c17d8e7340.jpg", color: "linear-gradient(135deg, #84fab0, #8fd3f4)" },
    { title: "Secondary / IGCSE", desc: "Global standards preparing students for international success and beyond.", image: "https://erudite.edu.my/wp-content/uploads/2024/02/PHOTO-2024-02-25-22-03-38-300x200.jpg", color: "linear-gradient(135deg, #a18cd1, #fbc2eb)" }
  ];

  return (
    <section id="programs" style={{ position: 'relative', overflow: 'hidden', padding: '8rem 0' }}>
      {/* Dynamic Background */}
      <div style={{
        position: 'absolute',
        inset: 0,
        backgroundImage: 'url("https://erudite.edu.my/wp-content/themes/smarty/assets/img/tmp/bg-404-kin.jpg")',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        opacity: 0.05,
        zIndex: 0
      }}></div>

      <div className="container" style={{ position: 'relative', zIndex: 1 }}>
        <div className="section-title">
          <h2>Academic Pathways</h2>
          <p>Nurturing excellence from early years to international graduation.</p>
        </div>
        <div className="grid-2">
          {programs.map((p, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              whileHover={{ y: -10, scale: 1.02 }}
              style={{ overflow: 'hidden', borderRadius: '32px', position: 'relative', height: '350px', boxShadow: '0 20px 40px rgba(0,0,0,0.1)', border: '4px solid white' }}
            >
              <div style={{ position: 'absolute', inset: 0, padding: '4px', background: p.color, zIndex: -1 }}></div>
              <img src={p.image} alt={p.title} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
              <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to top, rgba(26,54,93,0.9), transparent)', display: 'flex', flexDirection: 'column', justifyContent: 'flex-end', padding: '2.5rem' }}>
                <h3 style={{ color: 'white', marginBottom: '0.75rem', fontSize: '1.8rem' }}>{p.title}</h3>
                <p style={{ color: 'rgba(255,255,255,0.8)', marginBottom: '1.5rem', fontSize: '1rem', maxWidth: '400px' }}>{p.desc}</p>
                <button className="btn btn-secondary" style={{ alignSelf: 'flex-start', padding: '0.75rem 1.5rem' }} onClick={() => document.getElementById('track-record').scrollIntoView({ behavior: 'smooth' })}>Track Record</button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const Activity = () => {
  const activities = [
    { title: "Futsal", icon: "⚽", image: "https://img1.wsimg.com/isteam/ip/ecdb1fa4-4a6f-46ed-8a8c-e4b22e0a5edf/4b73b0a4-e214-45c5-95f3-38ad9cfb9f37.JPG" },
    { title: "Pool", icon: "🎱", image: "https://img1.wsimg.com/isteam/ip/ecdb1fa4-4a6f-46ed-8a8c-e4b22e0a5edf/IMG_7479.jpg" }, // Note: This might be Badminton based on previous logical deduction, but using extracted data.
    { title: "Carrom", icon: "🎯", image: "https://img1.wsimg.com/isteam/ip/ecdb1fa4-4a6f-46ed-8a8c-e4b22e0a5edf/1ee51611-861f-4912-b382-86def8ad707d.JPG" },
    { title: "Chess", icon: "♟️", image: "https://img1.wsimg.com/isteam/ip/ecdb1fa4-4a6f-46ed-8a8c-e4b22e0a5edf/b38cfce9-2c66-4ebc-b29f-a58fdb75da95.JPG" },
    { title: "Team Building", icon: "🤝", image: "https://img1.wsimg.com/isteam/ip/ecdb1fa4-4a6f-46ed-8a8c-e4b22e0a5edf/478264c9-994b-467c-86a0-723f1e751cc7.JPG" },
    { title: "Zumba", icon: "💃", image: "https://img1.wsimg.com/isteam/ip/ecdb1fa4-4a6f-46ed-8a8c-e4b22e0a5edf/6c8140df-6add-47b2-9bb7-7f9960cd5530.JPG" },
    { title: "Music Studio", icon: "🎤", image: "https://img1.wsimg.com/isteam/ip/ecdb1fa4-4a6f-46ed-8a8c-e4b22e0a5edf/DSC00034.JPG" },
    { title: "Public Speaking", icon: "🗣️", image: "https://img1.wsimg.com/isteam/ip/ecdb1fa4-4a6f-46ed-8a8c-e4b22e0a5edf/331A0192.JPG" },
    { title: "Dance", icon: "🩰", image: "https://img1.wsimg.com/isteam/ip/ecdb1fa4-4a6f-46ed-8a8c-e4b22e0a5edf/IMG_4693.jpg" },
    { title: "Djembe Training", icon: "🥁", image: "https://img1.wsimg.com/isteam/ip/ecdb1fa4-4a6f-46ed-8a8c-e4b22e0a5edf/dejembe-drum-natural-500x500.webp" },
    { title: "Culture Drama", icon: "🎭", image: "https://img1.wsimg.com/isteam/ip/ecdb1fa4-4a6f-46ed-8a8c-e4b22e0a5edf/DSC00028.JPG" },
    { title: "Yoga Meditation", icon: "🧘", image: "https://img1.wsimg.com/isteam/ip/ecdb1fa4-4a6f-46ed-8a8c-e4b22e0a5edf/9ea491ef-41e1-4bff-8f74-65490249e6b0.JPG" },
    { title: "Bowling", icon: "🎳", image: "https://img1.wsimg.com/isteam/ip/ecdb1fa4-4a6f-46ed-8a8c-e4b22e0a5edf/60-10-24250940.webp" },
    { title: "Art & Craft", icon: "🎨", image: "https://img1.wsimg.com/isteam/ip/ecdb1fa4-4a6f-46ed-8a8c-e4b22e0a5edf/0ea411a8-c1fa-4ac5-9ed9-31ac9ee9d08b.JPG" },
    { title: "Personal Care", icon: "🚿", image: "https://img1.wsimg.com/isteam/ip/ecdb1fa4-4a6f-46ed-8a8c-e4b22e0a5edf/8a548e83-01c5-4bf7-aba0-5d63f8ac9dda.JPG" },
    { title: "Competitions", icon: "🏆", image: "https://img1.wsimg.com/isteam/ip/ecdb1fa4-4a6f-46ed-8a8c-e4b22e0a5edf/8a548e83-01c5-4bf7-aba0-5d63f8ac9dda.JPG" }
  ];

  return (
    <section id="activity" style={{ background: 'var(--bg-subtle)' }}>
      <div className="container">
        <div className="section-title">
          <h2>Holistic Activities</h2>
          <p>Beyond the classroom - fostering physical and creative growth.</p>
        </div>
        <div className="bento-grid">
          {activities.map((act, i) => (
            <BentoCard
              key={i}
              span="small"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.05 }}
            >
              <div style={{ height: '100%', overflow: 'hidden', position: 'relative' }}>
                <img src={act.image} alt={act.title} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                <div style={{
                  position: 'absolute',
                  inset: 0,
                  background: 'linear-gradient(to top, rgba(15,23,42,0.95), transparent 60%)',
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'flex-end',
                  padding: '1.5rem',
                  gap: '0.5rem'
                }}>
                  <div style={{
                    width: '40px',
                    height: '40px',
                    borderRadius: '12px',
                    background: 'rgba(255,255,255,0.1)',
                    backdropFilter: 'blur(4px)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    fontSize: '1.2rem',
                    marginBottom: '0.25rem'
                  }}>
                    {act.icon}
                  </div>
                  <div>
                    <h3 style={{ color: 'white', margin: 0, fontSize: '1.1rem', fontWeight: '600' }}>{act.title}</h3>
                  </div>
                </div>
              </div>
            </BentoCard>
          ))}
        </div>
      </div>
    </section>
  );
};

const Gallery = () => {
  const images = [
    "https://img1.wsimg.com/isteam/ip/ecdb1fa4-4a6f-46ed-8a8c-e4b22e0a5edf/no%205.jpg",
    "https://img1.wsimg.com/isteam/ip/ecdb1fa4-4a6f-46ed-8a8c-e4b22e0a5edf/no6.jpg",
    "https://img1.wsimg.com/isteam/ip/ecdb1fa4-4a6f-46ed-8a8c-e4b22e0a5edf/804daac5-81f9-4570-8093-496c6ca58942.JPG",
    "https://img1.wsimg.com/isteam/ip/ecdb1fa4-4a6f-46ed-8a8c-e4b22e0a5edf/5df84bde-2cfc-40f8-bfde-514e65fc51ca.JPG",
    "https://img1.wsimg.com/isteam/ip/ecdb1fa4-4a6f-46ed-8a8c-e4b22e0a5edf/862d61be-2dee-4b59-8324-18d6910a4ac8.JPG",
    "https://img1.wsimg.com/isteam/ip/ecdb1fa4-4a6f-46ed-8a8c-e4b22e0a5edf/25879109-70e9-44b6-84f5-f4358d731f55.JPG",
    "https://img1.wsimg.com/isteam/ip/ecdb1fa4-4a6f-46ed-8a8c-e4b22e0a5edf/7191b0ed-5a50-4365-a91b-2b2b05244f41.JPG",
    "https://img1.wsimg.com/isteam/ip/ecdb1fa4-4a6f-46ed-8a8c-e4b22e0a5edf/09.jpg"
  ];

  return (
    <section id="gallery">
      <div className="container">
        <div className="section-title">
          <h2>Campus Life Gallery</h2>
          <p>Capturing the joy and discoveries of our little stars.</p>
        </div>
        <div className="grid-3">
          {images.map((img, i) => (
            <motion.div
              key={i}
              whileHover={{ scale: 1.02 }}
              style={{ height: '280px', borderRadius: '16px', overflow: 'hidden' }}
            >
              <img src={img} alt="Gallery" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const EduProApp = () => (
  <section id="app" style={{ background: 'var(--bg-subtle)', overflow: 'hidden' }}>
    <div className="container">
      <div className="grid-2" style={{ alignItems: 'center', gap: '4rem' }}>
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
        >
          <div style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem', padding: '0.5rem 1rem', background: 'rgba(212, 175, 55, 0.1)', color: 'var(--secondary)', borderRadius: '100px', fontSize: '0.85rem', fontWeight: '700', marginBottom: '1.5rem', textTransform: 'uppercase' }}>
            <Smartphone size={16} /> <span>Now Available</span>
          </div>
          <h2 style={{ fontSize: '3rem', color: 'var(--primary)', marginBottom: '1.5rem', lineHeight: '1.1' }}>Stay Connected with <span style={{ color: 'var(--secondary)' }}>EduPro</span></h2>
          <p style={{ fontSize: '1.1rem', color: 'var(--text-light)', marginBottom: '2.5rem' }}>Our multi-tenant parent portal brings your child's educational journey to your fingertips. Download our mobile app on Android and iOS for seamless monitoring.</p>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
            {[
              { icon: <Bell style={{ color: 'var(--secondary)' }} />, title: "Real-time Notifications", text: "Instant alerts for school announcements, circulars, and events." },
              { icon: <Calendar style={{ color: 'var(--secondary)' }} />, title: "Attendance & Schedule", text: "Monitor your child's daily attendance and stay updated on school timetables." },
              { icon: <CheckCircle style={{ color: 'var(--secondary)' }} />, title: "Homework Monitoring", text: "View and track daily assignments and homework progress directly." }
            ].map((item, i) => (
              <div key={i} style={{ display: 'flex', gap: '1.25rem', alignItems: 'flex-start' }}>
                <div style={{ background: 'white', padding: '0.75rem', borderRadius: '12px', boxShadow: '0 4px 12px rgba(0,0,0,0.05)' }}>{item.icon}</div>
                <div>
                  <h4 style={{ color: 'var(--primary)', marginBottom: '0.25rem' }}>{item.title}</h4>
                  <p style={{ color: 'var(--text-light)', fontSize: '0.95rem' }}>{item.text}</p>
                </div>
              </div>
            ))}
          </div>

          <div style={{ display: 'flex', gap: '1rem', marginTop: '3rem', flexWrap: 'wrap' }}>
            <a href="https://apps.apple.com/app/edupro-ai-study-assistant/id6758233239" target="_blank" rel="noopener noreferrer" style={{ padding: '0.5rem', background: '#000', borderRadius: '8px', cursor: 'pointer', display: 'flex', alignItems: 'center', gap: '0.75rem', width: '160px', transition: 'transform 0.2s' }} onMouseEnter={(e) => e.currentTarget.style.transform = 'scale(1.05)'} onMouseLeave={(e) => e.currentTarget.style.transform = 'scale(1)'}>
              <img src="https://upload.wikimedia.org/wikipedia/commons/3/3c/Download_on_the_App_Store_Badge.svg" alt="App Store" style={{ width: '100%' }} />
            </a>
            <a href="https://play.google.com/apps/internaltest/4701022941992181520" target="_blank" rel="noopener noreferrer" style={{ padding: '0.5rem', background: '#000', borderRadius: '8px', cursor: 'pointer', display: 'flex', alignItems: 'center', gap: '0.75rem', width: '180px', transition: 'transform 0.2s' }} onMouseEnter={(e) => e.currentTarget.style.transform = 'scale(1.05)'} onMouseLeave={(e) => e.currentTarget.style.transform = 'scale(1)'}>
              <img src="https://upload.wikimedia.org/wikipedia/commons/7/78/Google_Play_Store_badge_EN.svg" alt="Play Store" style={{ width: '100%' }} />
            </a>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9, rotate: 5 }}
          whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
          viewport={{ once: true }}
          style={{ position: 'relative' }}
        >
          <div style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', width: '120%', height: '120%', background: 'radial-gradient(circle, rgba(212, 175, 55, 0.1) 0%, rgba(212, 175, 55, 0) 70%)', zIndex: -1 }}></div>
          <img
            src={appMockup}
            alt="EduPro App Mockup"
            style={{ width: '100%', maxWidth: '500px', height: 'auto', borderRadius: '32px', boxShadow: '0 30px 60px rgba(0,0,0,0.15)' }}
          />
        </motion.div>
      </div>
    </div>
  </section>
);

const Branches = () => {
  const branches = [
    {
      name: "Tadika Erudite Little Star, Brickfield",
      address: "80, Jalan Thamby Abdullah, Brickfields, 50470 Kuala Lumpur",
      motto: "The Power of Knowledge, Shining Bright!",
      mapUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3983.844111324838!2d101.68027837588636!3d3.1285950535384666!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31cc4999ea999999%3A0x7d9f7d9f7d9f7d9f!2sTadika%20Erudite%20Little%20Star!5e0!3m2!1sen!2smy!4v1700000000000!5m2!1sen!2smy"
    },
    {
      name: "Erudite Academy, Jalan Puchong",
      address: "G15, Tiara Mutiara 2, Jalan Puchong Bt6, 58200 Kuala Lumpur",
      motto: "Success takes time, we will rise, strong and wise!",
      mapUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3984.0!2d101.6!3d3.0!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31cc49bdc7793d5f%3A0xc3f7a1f81b1d1234!2sErudite%20Academy!5e0!3m2!1sen!2smy!4v1700000000000!5m2!1sen!2smy"
    },
    {
      name: "Erudite Academy, Cyberjaya",
      address: "Erudite academy, Cyberjaya, 63000 Cyberjaya, Selangor",
      motto: "DAACE: Shaping Minds, Building Futures.",
      mapUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3984.6!2d101.6!3d2.9!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31cdb9b1d1234567%3A0x1d1d1d1d1d1d1d1d!2sDAACE%20Academy!5e0!3m2!1sen!2smy!4v1700000000000!5m2!1sen!2smy"
    }
  ];

  return (
    <section id="branches" style={{ background: 'var(--white)' }}>
      <div className="container">
        <div className="section-title">
          <h2>Our Branches</h2>
          <p>Excellence delivered across multiple locations.</p>
        </div>
        <div className="grid-3">
          {branches.map((b, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              style={{ background: 'var(--bg-subtle)', borderRadius: '24px', overflow: 'hidden', boxShadow: '0 4px 6px rgba(0,0,0,0.05)' }}
            >
              <div style={{ height: '250px', background: '#e2e8f0' }}>
                <iframe
                  src={b.mapUrl}
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen=""
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
              </div>
              <div style={{ padding: '2rem' }}>
                <h3 style={{ fontSize: '1.25rem', marginBottom: '1rem', color: 'var(--primary)' }}>{b.name}</h3>
                <p style={{ fontSize: '0.9rem', color: 'var(--text-light)', marginBottom: '1rem', fontStyle: 'italic' }}>"{b.motto}"</p>
                <div style={{ display: 'flex', gap: '0.75rem', alignItems: 'flex-start' }}>
                  <MapPin size={18} style={{ color: 'var(--secondary)', flexShrink: 0, marginTop: '2px' }} />
                  <p style={{ fontSize: '0.9rem', color: 'var(--text-light)', margin: 0 }}>{b.address}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const Contact = () => {
  const [submitted, setSubmitted] = React.useState(false);
  const [formData, setFormData] = React.useState({
    name: '',
    email: '',
    program: 'Select Program',
    message: ''
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Construct WhatsApp message
    const whatsappNumber = "60103655942";
    const text = `*New Inquiry via Website*%0A%0A*Name:* ${formData.name}%0A*Email:* ${formData.email}%0A*Program:* ${formData.program}%0A*Message:* ${formData.message}`;
    const whatsappUrl = `https://api.whatsapp.com/send/?phone=${whatsappNumber}&text=${text}&type=phone_number&app_absent=0`;

    window.open(whatsappUrl, '_blank');

    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 5000);
  };

  return (
    <section id="contact" style={{ background: 'var(--bg-subtle)' }}>
      <div className="container">
        <div className="contact-grid" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '5rem' }}>
          <div>
            <h2 style={{ color: 'var(--primary)', fontSize: '2.5rem', marginBottom: '1.5rem' }}>Visit Our Campus</h2>
            <p style={{ fontSize: '1.1rem', color: 'var(--text-light)', marginBottom: '3rem' }}>We'd love to show you around and discuss how we can support your child's journey.</p>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
              <div style={{ display: 'flex', gap: '1.5rem', alignItems: 'center' }}>
                <div style={{ background: 'var(--bg-feature-blue)', padding: '0.75rem', borderRadius: '12px' }}><MapPin style={{ color: 'var(--primary)' }} /></div>
                <div>
                  <h4 style={{ color: 'var(--text-dark)' }}>Location</h4>
                  <p style={{ color: 'var(--text-light)', fontSize: '0.9rem' }}>80, Jalan Thamby Abdullah, Brickfields, KL</p>
                </div>
              </div>
              <div style={{ display: 'flex', gap: '1.5rem', alignItems: 'center' }}>
                <div style={{ background: 'var(--bg-feature-orange)', padding: '0.75rem', borderRadius: '12px' }}><Phone style={{ color: 'var(--secondary)' }} /></div>
                <div>
                  <h4 style={{ color: 'var(--text-dark)' }}>Call Us</h4>
                  <p style={{ color: 'var(--text-light)', fontSize: '0.9rem' }}>+60 3-1234 5678</p>
                </div>
              </div>
              <div style={{ display: 'flex', gap: '1.5rem', alignItems: 'center' }}>
                <div style={{ background: 'var(--bg-feature-purple)', padding: '0.75rem', borderRadius: '12px' }}><Mail style={{ color: 'var(--vibrant-purple)' }} /></div>
                <div>
                  <h4 style={{ color: 'var(--text-dark)' }}>Email</h4>
                  <p style={{ color: 'var(--text-light)', fontSize: '0.9rem' }}>hello@eruditeinternational.com</p>
                </div>
              </div>
            </div>
          </div>
          <div className="glass-card" style={{ background: 'var(--glass)', borderColor: 'var(--glass-border)', padding: '2rem' }}>
            <h3 style={{ color: 'var(--text-dark)', marginBottom: '2rem' }}>Request Information</h3>
            {submitted ? (
              <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} style={{ textAlign: 'center', padding: '3rem 0' }}>
                <Trophy size={64} style={{ color: 'var(--secondary)', marginBottom: '1.5rem' }} />
                <h3 style={{ color: 'var(--text-dark)' }}>Thank You!</h3>
                <p style={{ color: 'var(--text-light)' }}>Your inquiry has been sent. We'll contact you shortly.</p>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
                <input required name="name" value={formData.name} onChange={handleChange} type="text" placeholder="Full Name" style={{ background: 'var(--bg-cream)', border: '1px solid var(--glass-border)', padding: '1rem', borderRadius: '10px', color: 'var(--text-dark)' }} />
                <input required name="email" value={formData.email} onChange={handleChange} type="email" placeholder="Email Address" style={{ background: 'var(--bg-cream)', border: '1px solid var(--glass-border)', padding: '1rem', borderRadius: '10px', color: 'var(--text-dark)' }} />
                <select name="program" value={formData.program} onChange={handleChange} style={{ background: 'var(--bg-cream)', border: '1px solid var(--glass-border)', padding: '1rem', borderRadius: '10px', color: 'var(--text-dark)' }}>
                  <option value="Select Program">Select Program</option>
                  <option value="Pre-Primary">Pre-Primary</option>
                  <option value="Lower Primary">Lower Primary</option>
                  <option value="Upper Primary">Upper Primary</option>
                  <option value="Secondary / IGCSE">Secondary / IGCSE</option>
                </select>
                <textarea name="message" value={formData.message} onChange={handleChange} placeholder="Message" rows="4" style={{ background: 'var(--bg-cream)', border: '1px solid var(--glass-border)', padding: '1rem', borderRadius: '10px', color: 'var(--text-dark)' }}></textarea>
                <button type="submit" className="btn btn-secondary">Send Message</button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

const Footer = () => (
  <footer style={{ padding: '4rem 0', background: 'var(--footer-bg)', color: 'white' }}>
    <div className="container">
      <div className="flex-between" style={{ borderBottom: '1px solid rgba(255,255,255,0.1)', paddingBottom: '3rem', marginBottom: '3rem', flexWrap: 'wrap', gap: '2rem' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
          <div style={{ background: 'white', padding: '0.5rem', borderRadius: '12px', display: 'flex', alignItems: 'center', justifyContent: 'center', boxShadow: '0 4px 12px rgba(0,0,0,0.2)' }}>
            <img src={logo} alt="Erudite Logo" style={{ height: '40px', width: 'auto' }} />
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', lineHeight: '1' }}>
            <h1 style={{ color: 'white', fontSize: '1.6rem', margin: 0, fontWeight: '800', letterSpacing: '0.5px', textTransform: 'uppercase' }}>Erudite</h1>
            <span style={{ color: 'var(--secondary)', fontSize: '0.75rem', fontWeight: '600', letterSpacing: '3px', textTransform: 'uppercase', marginTop: '3px' }}>International</span>
          </div>
        </div>
        <div style={{ display: 'flex', gap: '1.5rem' }}>
          <Instagram style={{ cursor: 'pointer', opacity: 0.7 }} />
          <Facebook style={{ cursor: 'pointer', opacity: 0.7 }} />
        </div>
      </div>
      <div style={{ textAlign: 'center', color: 'rgba(255,255,255,0.5)', fontSize: '0.8rem' }}>
        <p>&copy; 2026 Erudite International (Tadika Erudite Little Star). All rights reserved.</p>
        <p style={{ marginTop: '0.5rem' }}>
          Powered by <a href="https://prowintech.in/" target="_blank" rel="noopener noreferrer" style={{ color: 'var(--secondary)', textDecoration: 'none', fontWeight: '600' }}>ProWinTech</a>
        </p>
      </div>
    </div>
  </footer>
);

const WhatsAppButton = () => (
  <motion.a
    href="https://api.whatsapp.com/send/?phone=60103655942&text&type=phone_number&app_absent=0"
    target="_blank"
    rel="noopener noreferrer"
    initial={{ scale: 0, opacity: 0 }}
    animate={{ scale: 1, opacity: 1 }}
    whileHover={{ scale: 1.1 }}
    style={{
      position: 'fixed',
      bottom: '2rem',
      right: '2rem',
      background: '#25D366',
      color: 'white',
      width: '60px',
      height: '60px',
      borderRadius: '50%',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      boxShadow: '0 10px 25px rgba(37, 211, 102, 0.3)',
      zIndex: 2000,
      textDecoration: 'none'
    }}
  >
    <svg viewBox="0 0 24 24" width="35" height="35" fill="currentColor">
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L0 24l6.335-1.662c1.72.937 3.659 1.431 5.63 1.432h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
    </svg>
  </motion.a>
);

export default function App() {
  const [theme, setTheme] = React.useState('dark');

  React.useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
  }, [theme]);

  const toggleTheme = () => setTheme(prev => prev === 'light' ? 'dark' : 'light');

  return (
    <div>
      <Navbar theme={theme} toggleTheme={toggleTheme} />
      <Hero />
      <TrackRecord />
      <VisionMission />
      <Features />
      <Programs />
      <LeadershipMessages />
      <EduProApp />
      <Activity />
      <Gallery />
      <Branches />
      <Contact />
      <Footer />
      <WhatsAppButton />
    </div>
  );
}
