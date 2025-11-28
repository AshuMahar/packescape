
import React, { useState, useEffect } from 'react';
import { 
  Phone, Star, Facebook, Globe, User, Plane, Menu, X, 
  MapPin, Calendar, CheckCircle, ArrowRight,
  Instagram, Twitter, Mail, Lock, Edit2, Plus, Trash2, Save, LogOut, Image
} from 'lucide-react';

// --- CONSTANTS & DATA ---
const PAGES = {
  HOME: 'home',
  TOURS: 'tours',
  ABOUT: 'about',
  CONTACT: 'contact'
};

const TRIPS = [
  { id: 't1', title: 'Himalayan Trek', price: '12000', location: 'Manali', days: 5, image: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?q=80&w=1400', rating: '4.9' },
  { id: 't2', title: 'Goa Beach Escape', price: '8000', location: 'Goa', days: 3, image: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?q=80&w=1400', rating: '4.8' },
  { id: 't3', title: 'Desert Camping', price: '15000', location: 'Rajasthan', days: 4, image: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?q=80&w=1400', rating: '4.7' },
  { id: 't4', title: 'Kerala Backwaters', price: '10000', location: 'Kerala', days: 4, image: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?q=80&w=1400', rating: '4.9' },
  { id: 't5', title: 'Darjeeling Tea Tour', price: '9000', location: 'Darjeeling', days: 3, image: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?q=80&w=1400', rating: '4.8' },
  { id: 't6', title: 'Andaman Islands', price: '18000', location: 'Andaman', days: 5, image: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?q=80&w=1400', rating: '4.9' }
];

const CONTENT = {
  heroTitle: "Discover the Unseen World",
  heroSubtitle: "Curated journeys for the modern wanderer.",
  contactPhone: "+91-9876543210",
  contactEmail: "explore@packescape.com"
};

// --- COMPONENT: LOGO ---
const Logo = ({ dark = false }) => (
  <div className={`flex items-center gap-2 select-none ${dark ? 'opacity-90' : ''}`}>
    <div className="bg-[#fdbf46] p-2 rounded-lg shadow-lg">
      <Plane className="w-6 h-6 text-slate-900 -rotate-45 stroke-[2.5]" />
    </div>
    <div className="flex flex-col leading-none">
      <span className={`font-black text-xl tracking-tighter ${dark ? 'text-slate-100' : 'text-slate-900'}`}>
        PACK<span className="text-[#fdbf46]">ESCAPE</span>
      </span>
      <span className={`text-[10px] font-bold tracking-widest uppercase ${dark ? 'text-slate-400' : 'text-slate-500'}`}>
        Travel Community
      </span>
    </div>
  </div>
);

// --- COMPONENT: EDITABLE TEXT ---
const EditableText = ({ text, className = "" }) => (
  <span className={className}>{text}</span>
);

// --- COMPONENT: NAVBAR ---
const Navbar = ({ currentPage, setPage, mobileMenuOpen, setMobileMenuOpen, contactPhone }) => {
  const NavLink = ({ page, label }) => (
    <button 
      onClick={() => { setPage(page); setMobileMenuOpen(false); }}
      className={`text-sm font-bold tracking-wide transition-all px-4 py-2 rounded-full ${
        currentPage === page 
          ? 'bg-[#fdbf46] text-slate-900 shadow-md' 
          : 'text-slate-600 hover:bg-slate-100 hover:text-slate-900'
      }`}
    >
      {label}
    </button>
  );

  return (
    <nav className="bg-white/90 backdrop-blur-md sticky top-0 z-50 border-b border-slate-100 shadow-sm">
      <div className="container mx-auto px-4 lg:px-8 h-20 flex items-center justify-between">
        <div className="cursor-pointer" onClick={() => setPage(PAGES.HOME)}>
            <Logo />
        </div>

        {/* Desktop Nav */}
        <div className="hidden lg:flex items-center gap-2 bg-slate-50 p-1.5 rounded-full border border-slate-200">
          <NavLink page={PAGES.HOME} label="Home" />
          <NavLink page={PAGES.TOURS} label="All Tours" />
          <NavLink page={PAGES.ABOUT} label="About Us" />
          <NavLink page={PAGES.CONTACT} label="Contact" />
        </div>

        {/* CTA & Mobile Toggle */}
        <div className="flex items-center gap-4">
          <a href={`tel:${contactPhone}`} className="hidden lg:flex items-center gap-2 text-sm font-bold text-slate-900 hover:text-[#fdbf46] transition-colors">
            <Phone className="w-4 h-4 fill-slate-900" />
            {contactPhone}
          </a>
          <button 
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)} 
            className="lg:hidden p-2 text-slate-900 hover:bg-slate-100 rounded-lg"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-white border-t border-slate-100 p-4 absolute w-full shadow-xl flex flex-col gap-2">
          <NavLink page={PAGES.HOME} label="Home" />
          <NavLink page={PAGES.TOURS} label="All Tours" />
          <NavLink page={PAGES.ABOUT} label="About Us" />
          <NavLink page={PAGES.CONTACT} label="Contact" />
          <div className="h-px bg-slate-100 my-2"></div>
          <a href={`tel:${contactPhone}`} className="flex items-center justify-center gap-2 bg-slate-900 text-white py-3 rounded-lg font-bold">
            <Phone className="w-4 h-4" /> Call {contactPhone}
          </a>
        </div>
      )}
    </nav>
  );
};

// --- COMPONENT: ADMIN LOGIN MODAL ---
const AdminLoginModal = ({ onLogin, onClose }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleLogin = (e) => {
    e.preventDefault();
    if (username === 'ashumahar' && password === 'sky6677') {
      onLogin();
      setError('');
    } else {
      setError('Invalid username or password');
      setUsername('');
      setPassword('');
    }
  };

  return (
    <div className="fixed inset-0 z-[100] bg-slate-900/90 backdrop-blur-sm flex items-center justify-center p-4">
      <div className="bg-white rounded-2xl shadow-2xl w-full max-w-md p-8">
        <h2 className="text-3xl font-black text-slate-900 mb-2">Admin Login</h2>
        <p className="text-slate-500 mb-6">Enter your credentials to access the admin panel</p>
        
        <form onSubmit={handleLogin} className="space-y-4">
          <div>
            <label className="block text-sm font-bold text-slate-700 mb-2">Username</label>
            <input 
              type="text" 
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              placeholder="ashumahar"
              className="w-full border border-slate-200 rounded-lg p-3 focus:border-[#fdbf46] outline-none"
            />
          </div>
          <div>
            <label className="block text-sm font-bold text-slate-700 mb-2">Password</label>
            <input 
              type="password" 
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="••••••••"
              className="w-full border border-slate-200 rounded-lg p-3 focus:border-[#fdbf46] outline-none"
            />
          </div>
          {error && <p className="text-red-500 text-sm font-bold">{error}</p>}
          
          <button type="submit" className="w-full bg-[#fdbf46] text-slate-900 font-bold py-3 rounded-lg hover:bg-yellow-400 transition-all">
            Login
          </button>
        </form>
        
        <button onClick={onClose} className="w-full mt-4 text-slate-500 hover:text-slate-900 font-bold py-2">
          Cancel
        </button>
      </div>
    </div>
  );
};

// --- COMPONENT: ADMIN PANEL ---
const AdminPanel = ({ trips, setTrips, content, setContent, onLogout }) => {
  const [editingTrip, setEditingTrip] = useState(null);
  const [newTrip, setNewTrip] = useState({ title: '', price: '', location: '', days: '', image: '', rating: '4.8' });

  const handleAddTrip = () => {
    if (newTrip.title && newTrip.price && newTrip.location && newTrip.image) {
      const trip = { ...newTrip, id: 't' + Date.now() };
      const updated = [trip, ...trips];
      setTrips(updated);
      localStorage.setItem('packescape_trips', JSON.stringify(updated));
      setNewTrip({ title: '', price: '', location: '', days: '', image: '', rating: '4.8' });
      alert('Tour added successfully!');
    }
  };

  const handleDeleteTrip = (id) => {
    if (confirm('Delete this tour?')) {
      const updated = trips.filter(t => t.id !== id);
      setTrips(updated);
      localStorage.setItem('packescape_trips', JSON.stringify(updated));
    }
  };

  const handleUpdateTrip = (id, field, value) => {
    const updated = trips.map(t => t.id === id ? { ...t, [field]: value } : t);
    setTrips(updated);
    localStorage.setItem('packescape_trips', JSON.stringify(updated));
  };

  const handleUpdateContent = (field, value) => {
    const updated = { ...content, [field]: value };
    setContent(updated);
    localStorage.setItem('packescape_content', JSON.stringify(updated));
  };

  return (
    <div className="fixed inset-0 z-[100] bg-slate-900/90 backdrop-blur-sm overflow-y-auto">
      <div className="min-h-screen py-8">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="bg-white rounded-2xl shadow-2xl overflow-hidden">
            {/* Header */}
            <div className="bg-gradient-to-r from-slate-900 to-slate-800 text-white p-8 flex justify-between items-center">
              <div>
                <h2 className="text-4xl font-black mb-2">Admin Dashboard</h2>
                <p className="text-slate-300">Manage your website content</p>
              </div>
              <button onClick={onLogout} className="flex items-center gap-2 bg-red-500 hover:bg-red-600 px-6 py-3 rounded-lg font-bold transition-all">
                <LogOut className="w-5 h-5"/> Logout
              </button>
            </div>

            <div className="p-8 space-y-12">
              {/* Hero Content Section */}
              <div className="border-b border-slate-200 pb-12">
                <h3 className="text-2xl font-bold text-slate-900 mb-6 flex items-center gap-2"><Edit2 className="w-6 h-6"/> Edit Homepage Hero</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-bold text-slate-700 mb-2">Hero Title</label>
                    <textarea 
                      value={content.heroTitle} 
                      onChange={(e) => handleUpdateContent('heroTitle', e.target.value)}
                      rows={3}
                      className="w-full border border-slate-200 rounded-lg p-4 focus:border-[#fdbf46] outline-none text-lg font-bold"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-bold text-slate-700 mb-2">Hero Subtitle</label>
                    <textarea 
                      value={content.heroSubtitle} 
                      onChange={(e) => handleUpdateContent('heroSubtitle', e.target.value)}
                      rows={3}
                      className="w-full border border-slate-200 rounded-lg p-4 focus:border-[#fdbf46] outline-none"
                    />
                  </div>
                </div>
              </div>

              {/* Contact Info Section */}
              <div className="border-b border-slate-200 pb-12">
                <h3 className="text-2xl font-bold text-slate-900 mb-6 flex items-center gap-2"><Phone className="w-6 h-6"/> Contact Information</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-bold text-slate-700 mb-2">Phone Number</label>
                    <input 
                      type="text" 
                      value={content.contactPhone} 
                      onChange={(e) => handleUpdateContent('contactPhone', e.target.value)}
                      className="w-full border border-slate-200 rounded-lg p-3 focus:border-[#fdbf46] outline-none"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-bold text-slate-700 mb-2">Email Address</label>
                    <input 
                      type="email" 
                      value={content.contactEmail} 
                      onChange={(e) => handleUpdateContent('contactEmail', e.target.value)}
                      className="w-full border border-slate-200 rounded-lg p-3 focus:border-[#fdbf46] outline-none"
                    />
                  </div>
                </div>
              </div>

              {/* Tours Management Section */}
              <div>
                <h3 className="text-2xl font-bold text-slate-900 mb-6 flex items-center gap-2"><Plane className="w-6 h-6"/> Manage Tours</h3>

                {/* Add New Tour */}
                <div className="bg-green-50 border-2 border-green-200 rounded-xl p-8 mb-12">
                  <h4 className="text-lg font-bold text-slate-900 mb-6 flex items-center gap-2"><Plus className="w-5 h-5"/> Add New Tour Package</h4>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                    <div>
                      <label className="block text-sm font-bold text-slate-700 mb-2">Tour Title</label>
                      <input placeholder="e.g., Himalayan Trek" value={newTrip.title} onChange={(e) => setNewTrip({...newTrip, title: e.target.value})} className="w-full border border-slate-200 rounded-lg p-3 focus:border-[#fdbf46] outline-none" />
                    </div>
                    <div>
                      <label className="block text-sm font-bold text-slate-700 mb-2">Location</label>
                      <input placeholder="e.g., Manali" value={newTrip.location} onChange={(e) => setNewTrip({...newTrip, location: e.target.value})} className="w-full border border-slate-200 rounded-lg p-3 focus:border-[#fdbf46] outline-none" />
                    </div>
                    <div>
                      <label className="block text-sm font-bold text-slate-700 mb-2">Price (₹)</label>
                      <input type="number" placeholder="e.g., 12000" value={newTrip.price} onChange={(e) => setNewTrip({...newTrip, price: e.target.value})} className="w-full border border-slate-200 rounded-lg p-3 focus:border-[#fdbf46] outline-none" />
                    </div>
                    <div>
                      <label className="block text-sm font-bold text-slate-700 mb-2">Days</label>
                      <input type="number" placeholder="e.g., 5" value={newTrip.days} onChange={(e) => setNewTrip({...newTrip, days: e.target.value})} className="w-full border border-slate-200 rounded-lg p-3 focus:border-[#fdbf46] outline-none" />
                    </div>
                    <div>
                      <label className="block text-sm font-bold text-slate-700 mb-2">Rating</label>
                      <input type="number" step="0.1" max="5" placeholder="e.g., 4.8" value={newTrip.rating} onChange={(e) => setNewTrip({...newTrip, rating: e.target.value})} className="w-full border border-slate-200 rounded-lg p-3 focus:border-[#fdbf46] outline-none" />
                    </div>
                    <div>
                      <label className="block text-sm font-bold text-slate-700 mb-2">Image URL</label>
                      <input placeholder="https://example.com/image.jpg" value={newTrip.image} onChange={(e) => setNewTrip({...newTrip, image: e.target.value})} className="w-full border border-slate-200 rounded-lg p-3 focus:border-[#fdbf46] outline-none col-span-1 md:col-span-2" />
                    </div>
                  </div>
                  <button onClick={handleAddTrip} className="w-full bg-green-500 text-white font-bold py-3 rounded-lg hover:bg-green-600 transition-all flex items-center justify-center gap-2"><Plus className="w-5 h-5"/> Add Tour</button>
                </div>

                {/* Edit Existing Tours */}
                <div className="space-y-4">
                  <h4 className="font-bold text-slate-900 text-lg mb-4">Existing Tours ({trips.length})</h4>
                  {trips.map(trip => (
                    <div key={trip.id} className="border border-slate-200 rounded-xl p-6 hover:border-[#fdbf46] transition-colors">
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                        <div>
                          <label className="block text-xs font-bold text-slate-700 mb-1">Title</label>
                          <input placeholder="Title" value={trip.title} onChange={(e) => handleUpdateTrip(trip.id, 'title', e.target.value)} className="w-full border border-slate-200 rounded-lg p-2 focus:border-[#fdbf46] outline-none text-sm" />
                        </div>
                        <div>
                          <label className="block text-xs font-bold text-slate-700 mb-1">Location</label>
                          <input placeholder="Location" value={trip.location} onChange={(e) => handleUpdateTrip(trip.id, 'location', e.target.value)} className="w-full border border-slate-200 rounded-lg p-2 focus:border-[#fdbf46] outline-none text-sm" />
                        </div>
                        <div>
                          <label className="block text-xs font-bold text-slate-700 mb-1">Price</label>
                          <input type="number" placeholder="Price" value={trip.price} onChange={(e) => handleUpdateTrip(trip.id, 'price', e.target.value)} className="w-full border border-slate-200 rounded-lg p-2 focus:border-[#fdbf46] outline-none text-sm" />
                        </div>
                        <div>
                          <label className="block text-xs font-bold text-slate-700 mb-1">Days</label>
                          <input type="number" placeholder="Days" value={trip.days} onChange={(e) => handleUpdateTrip(trip.id, 'days', e.target.value)} className="w-full border border-slate-200 rounded-lg p-2 focus:border-[#fdbf46] outline-none text-sm" />
                        </div>
                        <div>
                          <label className="block text-xs font-bold text-slate-700 mb-1">Rating</label>
                          <input type="number" step="0.1" max="5" placeholder="Rating" value={trip.rating} onChange={(e) => handleUpdateTrip(trip.id, 'rating', e.target.value)} className="w-full border border-slate-200 rounded-lg p-2 focus:border-[#fdbf46] outline-none text-sm" />
                        </div>
                        <button onClick={() => handleDeleteTrip(trip.id)} className="bg-red-500 text-white font-bold py-2 rounded-lg hover:bg-red-600 transition-all text-sm flex items-center justify-center gap-1"><Trash2 className="w-4 h-4"/> Delete</button>
                      </div>
                      <div>
                        <label className="block text-xs font-bold text-slate-700 mb-1">Image URL</label>
                        <input placeholder="Image URL" value={trip.image} onChange={(e) => handleUpdateTrip(trip.id, 'image', e.target.value)} className="w-full border border-slate-200 rounded-lg p-2 focus:border-[#fdbf46] outline-none text-sm" />
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Save Info */}
              <div className="bg-blue-50 border-2 border-blue-200 rounded-xl p-6">
                <p className="text-blue-900 font-bold flex items-center gap-2"><CheckCircle className="w-5 h-5"/> All changes are saved automatically to your browser!</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

// --- COMPONENT: FOOTER ---
const Footer = ({ setPage, isAdmin, setIsAdmin, showAdminLogin, setShowAdminLogin }) => (
  <footer className="bg-slate-900 text-slate-300 pt-16 pb-8">
    <div className="container mx-auto px-4 lg:px-8">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
        <div className="col-span-1 md:col-span-1">
          <Logo dark={true} />
          <p className="mt-6 text-sm text-slate-400 leading-relaxed">
            We curate experiences, not just trips. Join India's fastest-growing community of travelers and explorers.
          </p>
          <div className="flex gap-4 mt-6">
            <div className="w-10 h-10 rounded-full bg-white/5 hover:bg-[#fdbf46] hover:text-slate-900 flex items-center justify-center transition-all cursor-pointer"><Instagram className="w-5 h-5" /></div>
            <div className="w-10 h-10 rounded-full bg-white/5 hover:bg-[#fdbf46] hover:text-slate-900 flex items-center justify-center transition-all cursor-pointer"><Facebook className="w-5 h-5" /></div>
            <div className="w-10 h-10 rounded-full bg-white/5 hover:bg-[#fdbf46] hover:text-slate-900 flex items-center justify-center transition-all cursor-pointer"><Twitter className="w-5 h-5" /></div>
          </div>
        </div>

        <div>
          <h4 className="text-white font-bold mb-6">Explore</h4>
          <ul className="space-y-3 text-sm">
            <li><button onClick={() => setPage(PAGES.TOURS)} className="hover:text-[#fdbf46] transition-colors">All Packages</button></li>
            <li><button onClick={() => setPage(PAGES.TOURS)} className="hover:text-[#fdbf46] transition-colors">Group Tours</button></li>
            <li><button onClick={() => setPage(PAGES.TOURS)} className="hover:text-[#fdbf46] transition-colors">Honeymoon Specials</button></li>
          </ul>
        </div>

        <div>
          <h4 className="text-white font-bold mb-6">Company</h4>
          <ul className="space-y-3 text-sm">
            <li><button onClick={() => setPage(PAGES.ABOUT)} className="hover:text-[#fdbf46] transition-colors">About PackEscape</button></li>
            <li><button onClick={() => setPage(PAGES.CONTACT)} className="hover:text-[#fdbf46] transition-colors">Contact Us</button></li>
            <li><button className="hover:text-[#fdbf46] transition-colors">Privacy Policy</button></li>
          </ul>
        </div>

        <div>
            <h4 className="text-white font-bold mb-6">Newsletter</h4>
            <p className="text-xs text-slate-400 mb-4">Get the latest deals and travel tips.</p>
            <div className="flex gap-2">
                <input type="email" placeholder="Email Address" className="bg-white/5 border border-white/10 rounded-lg px-4 py-2 text-sm w-full focus:outline-none focus:border-[#fdbf46]" />
                <button className="bg-[#fdbf46] text-slate-900 px-4 py-2 rounded-lg font-bold hover:bg-yellow-400"><ArrowRight className="w-5 h-5" /></button>
            </div>
        </div>
      </div>

      <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
        <p className="text-xs text-slate-500">© 2025 PackEscape. All rights reserved.</p>
        <button 
          onClick={() => !isAdmin ? setShowAdminLogin(true) : setIsAdmin(false)} 
          className={`flex items-center gap-2 px-3 py-1.5 rounded-full text-xs font-bold transition-all ${isAdmin ? 'bg-red-500 text-white hover:bg-red-600' : 'bg-white/5 text-slate-500 hover:bg-white/10'}`}
        >
          <Lock className="w-3 h-3" /> {isAdmin ? 'Logout' : 'Admin Login'}
        </button>
      </div>
    </div>
  </footer>
);

// --- COMPONENT: TRIP CARD ---
const TripCard = ({ trip, onRequest }) => (
  <div className="group bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-2xl hover:-translate-y-1 transition-all duration-300 border border-slate-100 flex flex-col h-full relative">
    <div className="relative h-64 overflow-hidden">
      <img src={trip.image || "https://via.placeholder.com/600x400"} alt={trip.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
      <div className="absolute top-3 right-3 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-xs font-bold text-slate-900 flex items-center gap-1 shadow-sm">
        <Star className="w-3 h-3 fill-yellow-400 text-yellow-400" /> {trip.rating}
      </div>
      <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
        <button 
            onClick={() => onRequest(trip.title)}
            className="w-full bg-[#fdbf46] text-slate-900 font-bold py-3 rounded-xl hover:bg-white hover:text-slate-900 transition-all shadow-lg flex items-center justify-center gap-2 transform translate-y-4 group-hover:translate-y-0"
        >
            View Details <ArrowRight className="w-4 h-4" />
        </button>
      </div>
    </div>

    <div className="p-6 flex flex-col flex-grow">
      <div className="flex items-center gap-3 text-xs font-semibold text-slate-500 mb-3 uppercase tracking-wider">
        <span className="flex items-center gap-1"><MapPin className="w-3 h-3" /> {trip.location}</span>
        <span className="w-1 h-1 bg-slate-300 rounded-full"></span>
        <span className="flex items-center gap-1"><Calendar className="w-3 h-3" /> {trip.days} Days</span>
      </div>
      <h3 className="text-xl font-bold text-slate-900 mb-2 leading-tight group-hover:text-[#fdbf46] transition-colors">{trip.title}</h3>
      <div className="mt-auto pt-4 border-t border-slate-50 flex items-center justify-between">
        <div className="flex flex-col">
            <span className="text-xs text-slate-400">Starting from</span>
            <span className="text-lg font-black text-slate-900">₹{parseInt(trip.price || 0).toLocaleString()}</span>
        </div>
        <div className="h-8 w-8 rounded-full bg-slate-50 flex items-center justify-center group-hover:bg-[#fdbf46] transition-colors">
            <ArrowRight className="w-4 h-4 text-slate-400 group-hover:text-slate-900" />
        </div>
      </div>
    </div>
  </div>
);

// --- COMPONENT: PAGE - HOME ---
const HomePage = ({ trips, onRequest, setPage }) => (
  <div className="animate-in fade-in duration-500">
    {/* Hero */}
    <section className="relative h-[85vh] min-h-[600px] flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 bg-slate-900">
        <img 
          src="https://images.unsplash.com/photo-1682687220742-aba13b6e50ba?q=80&w=2070&auto=format&fit=crop" 
          className="w-full h-full object-cover opacity-60" 
          alt="Hero"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-transparent to-slate-900/30"></div>
      </div>

      <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
        <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-md border border-white/20 rounded-full px-4 py-1.5 text-xs font-bold text-yellow-300 mb-6 tracking-widest uppercase">
            <Globe className="w-3 h-3" /> Explore the World
        </div>
        <h1 className="text-5xl md:text-7xl lg:text-8xl font-black text-white mb-6 leading-[0.9] tracking-tight">
          {CONTENT.heroTitle}
        </h1>
        <div className="text-lg md:text-2xl text-slate-300 mb-10 font-light max-w-2xl mx-auto leading-relaxed">
          {CONTENT.heroSubtitle}
        </div>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <button onClick={() => setPage(PAGES.TOURS)} className="px-8 py-4 bg-[#fdbf46] text-slate-900 font-bold rounded-full hover:bg-yellow-400 hover:scale-105 transition-all shadow-lg shadow-yellow-500/20 w-full sm:w-auto">
                Find Your Trip
            </button>
            <button onClick={() => onRequest()} className="px-8 py-4 bg-white/10 text-white font-bold rounded-full hover:bg-white hover:text-slate-900 border border-white/20 backdrop-blur-sm transition-all w-full sm:w-auto">
                Plan Custom Trip
            </button>
        </div>
      </div>
    </section>

    {/* Featured Trips Preview */}
    <section className="py-24 bg-slate-50">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="flex justify-between items-end mb-12">
            <div>
                <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-2">Trending Destinations</h2>
                <p className="text-slate-500">Handpicked packages for this season.</p>
            </div>
            <button onClick={() => setPage(PAGES.TOURS)} className="hidden md:flex items-center gap-2 text-slate-900 font-bold hover:text-[#fdbf46] transition-colors">
                View All <ArrowRight className="w-4 h-4" />
            </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {trips.slice(0, 3).map(trip => (
            <TripCard key={trip.id} trip={trip} onRequest={onRequest} />
          ))}
        </div>

        <div className="mt-12 text-center md:hidden">
            <button onClick={() => setPage(PAGES.TOURS)} className="px-6 py-3 border border-slate-200 rounded-full font-bold text-slate-600">View All Tours</button>
        </div>
      </div>
    </section>

    {/* Features / Why Us */}
    <section className="py-24 bg-white">
        <div className="container mx-auto px-4 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                <div className="relative">
                    <div className="absolute -top-10 -left-10 w-40 h-40 bg-[#fdbf46] rounded-full opacity-20 blur-3xl"></div>
                    <img src="https://images.unsplash.com/photo-1501785888041-af3ef285b470?q=80&w=2070&auto=format&fit=crop" className="rounded-3xl shadow-2xl relative z-10" alt="Traveler" />
                    <div className="absolute -bottom-6 -right-6 bg-white p-6 rounded-2xl shadow-xl z-20 max-w-xs">
                        <div className="flex items-center gap-4 mb-4">
                            <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center text-green-600"><CheckCircle className="w-6 h-6" /></div>
                            <div>
                                <div className="font-bold text-slate-900">4.9/5 Rating</div>
                                <div className="text-xs text-slate-500">Based on 15k+ reviews</div>
                            </div>
                        </div>
                        <p className="text-xs text-slate-500 italic">"The best travel experience I've ever had. Highly recommended!"</p>
                    </div>
                </div>
                <div>
                    <span className="text-[#fdbf46] font-bold uppercase tracking-widest text-xs mb-2 block">Why Choose Us</span>
                    <h2 className="text-4xl font-black text-slate-900 mb-6">We Make Travel <br/>Simple & Memorable</h2>
                    <p className="text-slate-600 mb-8 leading-relaxed">
                        Forget the hassle of planning. We provide end-to-end travel solutions with 24/7 support, expert guides, and curated itineraries that take you off the beaten path.
                    </p>
                    <div className="space-y-4">
                        {[
                            "Personalized Itineraries for every budget",
                            "24/7 On-trip assistance and support",
                            "Handpicked hotels and authentic experiences",
                            "Best price guarantee on all packages"
                        ].map((item, i) => (
                            <div key={i} className="flex items-center gap-3">
                                <div className="w-6 h-6 rounded-full bg-[#fdbf46]/20 flex items-center justify-center text-[#fdbf46]"><CheckCircle className="w-4 h-4" /></div>
                                <span className="text-slate-700 font-medium">{item}</span>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    </section>
  </div>
);

// --- COMPONENT: PAGE - TOURS ---
const ToursPage = ({ trips, onRequest }) => (
  <div className="pt-8 pb-24 bg-slate-50 min-h-screen animate-in slide-in-from-bottom-4 duration-500">
    <div className="container mx-auto px-4 lg:px-8">
      <div className="bg-slate-900 text-white rounded-3xl p-8 md:p-12 mb-12 text-center relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10"></div>
        <h1 className="text-4xl md:text-5xl font-black mb-4 relative z-10">Explore Our Packages</h1>
        <p className="text-slate-400 max-w-xl mx-auto relative z-10">From the mountains of the north to the beaches of the south, find your perfect escape.</p>
      </div>

      <div className="flex justify-between items-center mb-8">
        <div className="text-sm text-slate-500">Showing <strong>{trips.length}</strong> active trips</div>
      </div>

      {trips.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
            {trips.map(trip => (
            <TripCard key={trip.id} trip={trip} onRequest={onRequest} />
            ))}
        </div>
      ) : (
        <div className="text-center py-20 bg-white rounded-2xl border-2 border-dashed border-slate-200">
            <p className="text-slate-500 font-medium">No packages available.</p>
        </div>
      )}
    </div>
  </div>
);

// --- COMPONENT: PAGE - ABOUT ---
const AboutPage = () => (
    <div className="bg-white min-h-screen animate-in fade-in duration-500">
        <div className="bg-slate-50 py-20">
            <div className="container mx-auto px-4 text-center">
                <h1 className="text-4xl md:text-6xl font-black text-slate-900 mb-6">About PackEscape</h1>
                <p className="text-lg text-slate-600 max-w-2xl mx-auto">We are a team of passionate travelers dedicated to showing you the world in its most authentic form.</p>
            </div>
        </div>
        <div className="container mx-auto px-4 py-20">
             <div className="grid md:grid-cols-3 gap-12 text-center">
                 {[
                     { icon: <Globe className="w-8 h-8"/>, title: "Global Reach", desc: "Operations in 15+ countries with local experts." },
                     { icon: <User className="w-8 h-8"/>, title: "Community First", desc: "Join 50,000+ travelers in our active community." },
                     { icon: <Star className="w-8 h-8"/>, title: "Premium Quality", desc: "Top-rated hotels and verified experiences only." }
                 ].map((item, i) => (
                     <div key={i} className="p-8 border border-slate-100 rounded-2xl shadow-sm hover:shadow-md transition-all">
                         <div className="w-16 h-16 bg-[#fdbf46]/20 text-[#fdbf46] rounded-full flex items-center justify-center mx-auto mb-6">
                             {item.icon}
                         </div>
                         <h3 className="text-xl font-bold text-slate-900 mb-3">{item.title}</h3>
                         <p className="text-slate-500">{item.desc}</p>
                     </div>
                 ))}
             </div>
        </div>
    </div>
);

// --- COMPONENT: PAGE - CONTACT ---
const ContactPage = ({ content }) => (
    <div className="min-h-screen bg-slate-50 py-12 animate-in fade-in duration-500">
        <div className="container mx-auto px-4 max-w-4xl">
            <div className="bg-white rounded-3xl shadow-xl overflow-hidden flex flex-col md:flex-row">
                <div className="bg-slate-900 text-white p-12 md:w-1/3 flex flex-col justify-between">
                    <div>
                        <h2 className="text-3xl font-black mb-6">Let's Talk</h2>
                        <p className="text-slate-400 mb-8">Have a question? We'd love to hear from you.</p>
                        <div className="space-y-6">
                            <div className="flex items-center gap-4">
                                <Phone className="w-5 h-5 text-[#fdbf46]" />
                                <span>{content.contactPhone}</span>
                            </div>
                            <div className="flex items-center gap-4">
                                <Mail className="w-5 h-5 text-[#fdbf46]" />
                                <span>{content.contactEmail}</span>
                            </div>
                            <div className="flex items-center gap-4">
                                <MapPin className="w-5 h-5 text-[#fdbf46]" />
                                <span>Cyber City, Gurgaon</span>
                            </div>
                        </div>
                    </div>
                    <div className="pt-12">
                         <Logo dark={true} />
                    </div>
                </div>
                <div className="p-12 md:w-2/3">
                    <form className="space-y-6">
                        <div className="grid md:grid-cols-2 gap-6">
                            <div>
                                <label className="block text-sm font-bold text-slate-700 mb-2">First Name</label>
                                <input type="text" className="w-full bg-slate-50 border border-slate-200 rounded-lg p-3 focus:border-[#fdbf46] outline-none" placeholder="John" />
                            </div>
                            <div>
                                <label className="block text-sm font-bold text-slate-700 mb-2">Last Name</label>
                                <input type="text" className="w-full bg-slate-50 border border-slate-200 rounded-lg p-3 focus:border-[#fdbf46] outline-none" placeholder="Doe" />
                            </div>
                        </div>
                        <div>
                            <label className="block text-sm font-bold text-slate-700 mb-2">Email Address</label>
                            <input type="email" className="w-full bg-slate-50 border border-slate-200 rounded-lg p-3 focus:border-[#fdbf46] outline-none" placeholder="john@example.com" />
                        </div>
                        <div>
                            <label className="block text-sm font-bold text-slate-700 mb-2">Message</label>
                            <textarea rows={4} className="w-full bg-slate-50 border border-slate-200 rounded-lg p-3 focus:border-[#fdbf46] outline-none" placeholder="How can we help you?"></textarea>
                        </div>
                        <button className="w-full bg-[#fdbf46] text-slate-900 font-bold py-4 rounded-lg hover:bg-yellow-400 transition-colors shadow-lg shadow-yellow-500/10">
                            Send Message
                        </button>
                    </form>
                </div>
            </div>
        </div>
    </div>
);

// --- COMPONENT: MODALS ---
const RequestModal = ({ onClose, onSubmit, initialTrip }) => (
    <div className="fixed inset-0 z-[60] flex items-center justify-center bg-slate-900/80 backdrop-blur-sm p-4 animate-in fade-in duration-200">
        <div className="bg-white rounded-2xl shadow-2xl w-full max-w-md overflow-hidden animate-in zoom-in-95 duration-200 relative">
             <button onClick={onClose} className="absolute top-4 right-4 text-slate-400 hover:text-slate-900 z-10"><X className="w-6 h-6"/></button>
             <div className="bg-[#fdbf46] p-8 pb-16 relative overflow-hidden">
                 <div className="absolute -right-6 -top-6 w-24 h-24 bg-white/20 rounded-full blur-xl"></div>
                 <h3 className="text-2xl font-black text-slate-900 relative z-10">Start Your Adventure</h3>
                 <p className="text-slate-900/80 font-medium relative z-10">We'll help you plan the perfect trip.</p>
             </div>
             <div className="p-8 -mt-8 bg-white rounded-t-3xl relative">
                 <form onSubmit={(e) => { e.preventDefault(); onSubmit(); }} className="space-y-4">
                     <input type="text" placeholder="Your Name" className="w-full bg-slate-50 border border-slate-200 rounded-xl p-4 font-medium focus:border-[#fdbf46] outline-none" required />
                     <input type="tel" placeholder="Phone Number" className="w-full bg-slate-50 border border-slate-200 rounded-xl p-4 font-medium focus:border-[#fdbf46] outline-none" required />
                     <input type="text" defaultValue={initialTrip} placeholder="Destination" className="w-full bg-slate-50 border border-slate-200 rounded-xl p-4 font-medium focus:border-[#fdbf46] outline-none" />
                     <button className="w-full bg-slate-900 text-white font-bold py-4 rounded-xl hover:bg-slate-800 transition-colors flex items-center justify-center gap-2">
                         Request Call Back <Phone className="w-4 h-4" />
                     </button>
                 </form>
             </div>
        </div>
    </div>
);

// --- MAIN APP COMPONENT ---
export default function App() {
  const [currentPage, setPage] = useState(PAGES.HOME);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isAdmin, setIsAdmin] = useState(false);
  const [showAdminLogin, setShowAdminLogin] = useState(false);
  const [showRequestModal, setShowRequestModal] = useState(false);
  const [selectedTrip, setSelectedTrip] = useState('');

  // Load from localStorage or use defaults
  const [trips, setTrips] = useState(() => {
    try {
      const saved = localStorage.getItem('packescape_trips');
      return saved ? JSON.parse(saved) : TRIPS;
    } catch {
      return TRIPS;
    }
  });

  const [content, setContent] = useState(() => {
    try {
      const saved = localStorage.getItem('packescape_content');
      return saved ? JSON.parse(saved) : CONTENT;
    } catch {
      return CONTENT;
    }
  });

  // Save to localStorage when trips or content change
  useEffect(() => {
    localStorage.setItem('packescape_trips', JSON.stringify(trips));
  }, [trips]);

  useEffect(() => {
    localStorage.setItem('packescape_content', JSON.stringify(content));
  }, [content]);

  const openRequest = (t='') => { setSelectedTrip(t); setShowRequestModal(true); };

  // Router Logic
  const renderPage = () => {
      switch(currentPage) {
          case PAGES.TOURS: return <ToursPage trips={trips} onRequest={openRequest} />;
          case PAGES.ABOUT: return <AboutPage />;
          case PAGES.CONTACT: return <ContactPage content={content} />;
          default: return <HomePage trips={trips} onRequest={openRequest} setPage={setPage} />;
      }
  };

  return (
    <div className="font-sans text-slate-900 bg-white selection:bg-[#fdbf46] selection:text-slate-900">
      <Navbar currentPage={currentPage} setPage={setPage} mobileMenuOpen={mobileMenuOpen} setMobileMenuOpen={setMobileMenuOpen} contactPhone={content.contactPhone} />

      <main className="min-h-screen">
        {renderPage()}
      </main>

      <Footer setPage={setPage} isAdmin={isAdmin} setIsAdmin={setIsAdmin} showAdminLogin={showAdminLogin} setShowAdminLogin={setShowAdminLogin} />

      {/* Admin Login Modal */}
      {showAdminLogin && <AdminLoginModal onLogin={() => { setIsAdmin(true); setShowAdminLogin(false); }} onClose={() => setShowAdminLogin(false)} />}

      {/* Admin Panel */}
      {isAdmin && <AdminPanel trips={trips} setTrips={setTrips} content={content} setContent={setContent} onLogout={() => setIsAdmin(false)} />}

      {/* Request Modal */}
      {showRequestModal && <RequestModal onClose={() => setShowRequestModal(false)} onSubmit={() => { setShowRequestModal(false); alert("Request Sent!"); }} initialTrip={selectedTrip} />}
    </div>
  );
}
