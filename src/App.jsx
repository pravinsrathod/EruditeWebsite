import React from 'react';
import { motion } from 'framer-motion';
import { BookOpen, Users, Star, Trophy, ArrowRight, Mail, Phone, MapPin, Instagram, Facebook, Menu, X } from 'lucide-react';
import './index.css';
import logo from './assets/logo.jpg';

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

const Navbar = () => {
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
        background: 'rgba(253, 252, 240, 0.9)',
        backdropFilter: 'blur(20px)',
        borderRadius: '50px',
        boxShadow: scrolled ? '0 10px 40px rgba(0,0,0,0.1)' : '0 5px 20px rgba(0,0,0,0.05)',
        transition: 'all 0.3s ease',
        border: '1px solid rgba(255,255,255,0.3)'
      }}
    >
      <div style={{ display: 'flex', alignItems: 'center', width: '100%', position: 'relative' }}>
        {/* Logo Section */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', cursor: 'pointer', flexShrink: 0 }} onClick={() => scrollTo('home')}>
          <img src={logo} alt="Erudite Logo" style={{ height: scrolled ? '40px' : '50px', width: 'auto', mixBlendMode: 'multiply', transition: 'all 0.3s ease' }} />
          <h1 style={{ fontSize: scrolled ? '1.1rem' : '1.25rem', margin: 0, fontWeight: '700', letterSpacing: '1px', transition: 'all 0.3s ease' }}>Erudite International</h1>
        </div>

        {/* Desktop Nav Links - centered */}
        <div className="desktop-nav" style={{ display: 'flex', gap: '2rem', fontWeight: '600', flex: '1', justifyContent: 'center', overflow: 'hidden' }}>
          {navLinks.map(link => (
            <span key={link.id} onClick={() => scrollTo(link.id)} style={{ color: 'var(--primary)', textDecoration: 'none', cursor: 'pointer', fontSize: '1rem', transition: 'all 0.2s', opacity: 0.8, whiteSpace: 'nowrap', letterSpacing: '0.01em' }} onMouseEnter={(e) => { e.target.style.opacity = 1; e.target.style.transform = 'translateY(-1px)'; }} onMouseLeave={(e) => { e.target.style.opacity = 0.8; e.target.style.transform = 'translateY(0)'; }}>{link.label}</span>
          ))}
        </div>

        {/* Always Visible Button on Desktop - Absolutely Positioned */}
        <button className="btn btn-primary desktop-nav" style={{ position: 'absolute', right: scrolled ? '2rem' : '2.5rem', padding: '0.75rem 1.5rem', fontSize: '1rem', whiteSpace: 'nowrap', letterSpacing: '0.02em' }} onClick={() => scrollTo('contact')}>Enroll Now</button>

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
              <span key={link.id} onClick={() => scrollTo(link.id)}>{link.label}</span>
            ))}
            <button className="btn btn-primary" onClick={() => scrollTo('contact')}>Enroll Now</button>
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
    <section id="home" style={{ minHeight: '100vh', display: 'flex', alignItems: 'center', background: 'linear-gradient(135deg, #FDFCF0 0%, #E2E8F0 100%)', position: 'relative', overflow: 'hidden', padding: '8rem 0 4rem 0' }}>
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
  <section id="about" style={{ background: 'var(--white)' }}>
    <div className="container">
      <div className="section-title">
        <h2>Expertise in Excellence</h2>
        <p>Providing the best foundation for your child's future.</p>
      </div>
      <div className="grid-3">
        {[
          { icon: <BookOpen />, title: "Holistic Learning", desc: "A balanced approach to academic, social, and emotional development." },
          { icon: <Users />, title: "Expert Educators", desc: "Qualified staff dedicated to nurturing young minds with care." },
          { icon: <Star />, title: "Character Building", desc: "Focusing on resilience, empathy, and strong moral values." }
        ].map((f, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.2 }}
            whileHover={{ y: -10 }}
            className="glass-card"
            style={{ textAlign: 'center' }}
          >
            <div style={{ color: 'var(--primary)', marginBottom: '1.5rem', display: 'flex', justifyContent: 'center' }}>
              {React.cloneElement(f.icon, { size: 48 })}
            </div>
            <h3 style={{ marginBottom: '1rem' }}>{f.title}</h3>
            <p style={{ color: 'var(--text-light)' }}>{f.desc}</p>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

const Programs = () => {
  const programs = [
    { title: "Pre-Primary", desc: "Hands-on learning and social discovery for our youngest stars.", image: "https://erudite.edu.my/wp-content/uploads/2023/09/PHOTO-2023-07-21-11-42-47.jpg" },
    { title: "Lower Primary", desc: "Building strong foundations in literacy, numeracy, and creative thinking.", image: "https://erudite.edu.my/wp-content/uploads/2022/04/228172ac-0642-4ac2-8a7b-33386aa1ad73.jpg" },
    { title: "Upper Primary", desc: "Progressive curriculum designed to nurture leadership and deeper inquiry.", image: "https://erudite.edu.my/wp-content/uploads/2022/04/3c8db26a-2ccb-4055-ba42-53c17d8e7340.jpg" },
    { title: "Secondary / IGCSE", desc: "Global standards preparing students for international success and beyond.", image: "https://erudite.edu.my/wp-content/uploads/2024/02/PHOTO-2024-02-25-22-03-38-300x200.jpg" }
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
              style={{ overflow: 'hidden', borderRadius: '32px', position: 'relative', height: '350px', boxShadow: '0 20px 40px rgba(0,0,0,0.1)' }}
            >
              <img src={p.image} alt={p.title} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
              <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to top, rgba(26,54,93,0.9), transparent)', display: 'flex', flexDirection: 'column', justifyContent: 'flex-end', padding: '2.5rem' }}>
                <h3 style={{ color: 'white', marginBottom: '0.75rem', fontSize: '1.8rem' }}>{p.title}</h3>
                <p style={{ color: 'rgba(255,255,255,0.8)', marginBottom: '1.5rem', fontSize: '1rem', maxWidth: '400px' }}>{p.desc}</p>
                <button className="btn btn-secondary" style={{ alignSelf: 'flex-start', padding: '0.75rem 1.5rem' }} onClick={() => document.getElementById('contact').scrollIntoView({ behavior: 'smooth' })}>Track Record</button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const Activity = () => (
  <section id="activity" style={{ background: '#f8fafc' }}>
    <div className="container">
      <div className="section-title">
        <h2>Holistic Activities</h2>
        <p>Beyond the classroom - fostering physical and creative growth.</p>
      </div>
      <div className="bento-grid">
        {[
          { title: "Futsal", desc: "Developing teamwork and coordination on the field.", icon: "⚽", image: "https://img1.wsimg.com/isteam/ip/ecdb1fa4-4a6f-46ed-8a8c-e4b22e0a5edf/862d61be-2dee-4b59-8324-18d6910a4ac8.JPG", span: "large" },
          { title: "Badminton", desc: "Precision and agility through active play.", icon: "🏸", image: "https://img1.wsimg.com/isteam/ip/ecdb1fa4-4a6f-46ed-8a8c-e4b22e0a5edf/5df84bde-2cfc-40f8-bfde-514e65fc51ca.JPG", span: "medium" },
          { title: "Pool", desc: "Focus and strategic thinking in every shot.", icon: "🎱", image: "https://img1.wsimg.com/isteam/ip/ecdb1fa4-4a6f-46ed-8a8c-e4b22e0a5edf/804daac5-81f9-4570-8093-496c6ca58942.JPG", span: "small" },
          { title: "Creative Arts", desc: "Expressing imagination through various media.", icon: "🎨", image: "https://img1.wsimg.com/isteam/ip/ecdb1fa4-4a6f-46ed-8a8c-e4b22e0a5edf/1ee51611-861f-4912-b382-86def8ad707d.JPG", span: "medium" },
          { title: "Music & Movement", desc: "Exploring rhythm and self-expression.", icon: "🎵", image: "https://img1.wsimg.com/isteam/ip/ecdb1fa4-4a6f-46ed-8a8c-e4b22e0a5edf/dejembe-drum-natural-500x500.webp", span: "small" },
          { title: "Special Support", desc: "Personalized care and developmental health.", icon: "❤️", image: "https://img1.wsimg.com/isteam/ip/ecdb1fa4-4a6f-46ed-8a8c-e4b22e0a5edf/PHOTO-2024-10-11-10-44-20.jpg", span: "medium" }
        ].map((act, i) => (
          <BentoCard
            key={i}
            span={act.span}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1 }}
          >
            <div style={{ height: '100%', overflow: 'hidden', position: 'relative' }}>
              <img src={act.image} alt={act.title} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
              <div style={{
                position: 'absolute',
                inset: 0,
                background: 'linear-gradient(to top, rgba(26,54,93,0.95), transparent 60%)',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'flex-end',
                padding: act.span === 'large' ? '2.5rem' : '1.5rem'
              }}>
                <div style={{ fontSize: act.span === 'large' ? '3rem' : '2rem', marginBottom: '0.5rem' }}>{act.icon}</div>
                <h3 style={{
                  color: 'white',
                  marginBottom: '0.5rem',
                  fontSize: act.span === 'large' ? '2rem' : '1.2rem'
                }}>{act.title}</h3>
                {act.span !== 'small' && (
                  <p style={{ color: 'rgba(255,255,255,0.8)', fontSize: '0.9rem', margin: 0 }}>{act.desc}</p>
                )}
              </div>
            </div>
          </BentoCard>
        ))}
      </div>
    </div>
  </section>
);

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
              style={{ background: '#f8fafc', borderRadius: '24px', overflow: 'hidden', boxShadow: '0 4px 6px rgba(0,0,0,0.05)' }}
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
    const whatsappNumber = "60102809681";
    const text = `*New Inquiry via Website*%0A%0A*Name:* ${formData.name}%0A*Email:* ${formData.email}%0A*Program:* ${formData.program}%0A*Message:* ${formData.message}`;
    const whatsappUrl = `https://api.whatsapp.com/send/?phone=${whatsappNumber}&text=${text}&type=phone_number&app_absent=0`;

    window.open(whatsappUrl, '_blank');

    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 5000);
  };

  return (
    <section id="contact" style={{ background: 'var(--primary)', color: 'white' }}>
      <div className="container">
        <div className="contact-grid" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '5rem' }}>
          <div>
            <h2 style={{ color: 'white', fontSize: '2.5rem', marginBottom: '1.5rem' }}>Visit Our Campus</h2>
            <p style={{ fontSize: '1.1rem', color: 'rgba(255,255,255,0.7)', marginBottom: '3rem' }}>We'd love to show you around and discuss how we can support your child's journey.</p>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
              <div style={{ display: 'flex', gap: '1.5rem', alignItems: 'center' }}>
                <div style={{ background: 'rgba(255,255,255,0.1)', padding: '0.75rem', borderRadius: '12px' }}><MapPin /></div>
                <div>
                  <h4 style={{ color: 'white' }}>Location</h4>
                  <p style={{ color: 'rgba(255,255,255,0.7)', fontSize: '0.9rem' }}>80, Jalan Thamby Abdullah, Brickfields, KL</p>
                </div>
              </div>
              <div style={{ display: 'flex', gap: '1.5rem', alignItems: 'center' }}>
                <div style={{ background: 'rgba(255,255,255,0.1)', padding: '0.75rem', borderRadius: '12px' }}><Phone /></div>
                <div>
                  <h4 style={{ color: 'white' }}>Call Us</h4>
                  <p style={{ color: 'rgba(255,255,255,0.7)', fontSize: '0.9rem' }}>+60 3-1234 5678</p>
                </div>
              </div>
              <div style={{ display: 'flex', gap: '1.5rem', alignItems: 'center' }}>
                <div style={{ background: 'rgba(255,255,255,0.1)', padding: '0.75rem', borderRadius: '12px' }}><Mail /></div>
                <div>
                  <h4 style={{ color: 'white' }}>Email</h4>
                  <p style={{ color: 'rgba(255,255,255,0.7)', fontSize: '0.9rem' }}>hello@eruditeinternational.com</p>
                </div>
              </div>
            </div>
          </div>
          <div className="glass-card" style={{ background: 'rgba(255,255,255,0.05)', borderColor: 'rgba(255,255,255,0.1)' }}>
            <h3 style={{ color: 'white', marginBottom: '2rem' }}>Request Information</h3>
            {submitted ? (
              <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} style={{ textAlign: 'center', padding: '3rem 0' }}>
                <Trophy size={64} style={{ color: 'var(--secondary)', marginBottom: '1.5rem' }} />
                <h3>Thank You!</h3>
                <p>Your inquiry has been sent. We'll contact you shortly.</p>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
                <input required name="name" value={formData.name} onChange={handleChange} type="text" placeholder="Full Name" style={{ background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.1)', padding: '1rem', borderRadius: '10px', color: 'white' }} />
                <input required name="email" value={formData.email} onChange={handleChange} type="email" placeholder="Email Address" style={{ background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.1)', padding: '1rem', borderRadius: '10px', color: 'white' }} />
                <select name="program" value={formData.program} onChange={handleChange} style={{ background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.1)', padding: '1rem', borderRadius: '10px', color: 'white' }}>
                  <option value="Select Program">Select Program</option>
                  <option value="Pre-Primary">Pre-Primary</option>
                  <option value="Lower Primary">Lower Primary</option>
                  <option value="Upper Primary">Upper Primary</option>
                  <option value="Secondary / IGCSE">Secondary / IGCSE</option>
                </select>
                <textarea name="message" value={formData.message} onChange={handleChange} placeholder="Message" rows="4" style={{ background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.1)', padding: '1rem', borderRadius: '10px', color: 'white' }}></textarea>
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
  <footer style={{ padding: '4rem 0', background: '#0D1B2A', color: 'white' }}>
    <div className="container">
      <div className="flex-between" style={{ borderBottom: '1px solid rgba(255,255,255,0.1)', paddingBottom: '3rem', marginBottom: '3rem', flexWrap: 'wrap', gap: '2rem' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
          <div style={{ background: 'white', padding: '0.5rem', borderRadius: '12px', display: 'flex', alignItems: 'center', justifyContent: 'center', boxShadow: '0 4px 12px rgba(0,0,0,0.2)' }}>
            <img src={logo} alt="Erudite Logo" style={{ height: '40px', width: 'auto' }} />
          </div>
          <h1 style={{ color: 'white', fontSize: '1.5rem', margin: 0, fontWeight: '700', letterSpacing: '1px' }}>Erudite International</h1>
        </div>
        <div style={{ display: 'flex', gap: '1.5rem' }}>
          <Instagram style={{ cursor: 'pointer', opacity: 0.7 }} />
          <Facebook style={{ cursor: 'pointer', opacity: 0.7 }} />
        </div>
      </div>
      <div style={{ textAlign: 'center', color: 'rgba(255,255,255,0.5)', fontSize: '0.8rem' }}>
        <p>&copy; 2026 Erudite International (Tadika Erudite Little Star). All rights reserved.</p>
      </div>
    </div>
  </footer>
);

const WhatsAppButton = () => (
  <motion.a
    href="https://api.whatsapp.com/send/?phone=60102809681&text&type=phone_number&app_absent=0"
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
  return (
    <div>
      <Navbar />
      <Hero />
      <Features />
      <Programs />
      <Activity />
      <Gallery />
      <Branches />
      <Contact />
      <Footer />
      <WhatsAppButton />
    </div>
  );
}
