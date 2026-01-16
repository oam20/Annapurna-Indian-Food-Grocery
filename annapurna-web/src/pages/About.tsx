import { useEffect } from 'react';
import { motion } from 'framer-motion';
import { Calendar, Clock, Users, ChevronRight, Utensils } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';

// Design Constants
const COLORS = {
    primaryAccent: '#B65A2A',
    heroOverlay: 'rgba(122, 74, 42, 0.55)',
    background: '#FFF6E8',
    headingText: '#8A3F1D',
    bodyText: '#6A4A3A',
    mutedText: '#8C7768',
    dividers: '#E8D8C8',
    white: '#FFFFFF'
};

const About = () => {
    const location = useLocation();

    useEffect(() => {
        if (location.hash === '#reservations') {
            const element = document.getElementById('reservations');
            if (element) {
                // Small timeout to ensure element is rendered
                setTimeout(() => {
                    element.scrollIntoView({ behavior: 'smooth', block: 'start' });
                }, 500);
            }
        }
    }, [location]);

    return (
        <div className="min-h-screen font-serif" style={{ backgroundColor: COLORS.background }}>

            {/* Hero Section */}
            <div className="relative h-[60vh] flex items-center justify-center overflow-hidden">
                <div className="absolute inset-0 z-10" style={{ backgroundColor: COLORS.heroOverlay }} />
                <img
                    src="https://images.unsplash.com/photo-1596560548464-f010549b84d7?q=80&w=2670&auto=format&fit=crop"
                    alt="Spices and ingredients"
                    className="absolute inset-0 w-full h-full object-cover"
                />

                <div className="relative z-20 text-center px-6">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                    >
                        <h1 className="text-5xl md:text-7xl font-bold mb-4 tracking-tight drop-shadow-sm text-white">
                            Our Culinary Journey
                        </h1>
                        <p className="text-xl md:text-2xl font-light text-white/90 italic max-w-2xl mx-auto">
                            Serving authentic flavors with a family touch since 2022
                        </p>
                    </motion.div>
                </div>
            </div>

            <div className="max-w-7xl mx-auto px-6 md:px-12 py-20 lg:py-28">

                {/* Story Section */}
                <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center mb-24">

                    {/* Image Left */}
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="relative"
                    >
                        <div className="aspect-[3/4] rounded-t-full rounded-b-[40px] overflow-hidden shadow-xl">
                            <img
                                src="https://images.unsplash.com/photo-1552590635-27c2c2128abf?q=80&w=2070&auto=format&fit=crop"
                                alt="Authentic Indian Cooking"
                                className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
                            />
                        </div>
                        {/* Decorative element */}
                        <div className="absolute -bottom-8 -right-8 w-40 h-40 rounded-full flex items-center justify-center shadow-lg"
                            style={{ backgroundColor: COLORS.primaryAccent }}>
                            <div className="text-center text-white p-4">
                                <Utensils className="w-8 h-8 mx-auto mb-1 opacity-80" />
                                <span className="block text-sm font-bold uppercase tracking-widest leading-tight">Authentic<br />Recipes</span>
                            </div>
                        </div>
                    </motion.div>

                    {/* Text Right */}
                    <div className="space-y-8">
                        <div>
                            <span className="block text-sm font-bold uppercase tracking-[0.2em] mb-3" style={{ color: COLORS.primaryAccent }}>
                                Humble Beginnings
                            </span>
                            <h2 className="text-4xl md:text-5xl font-bold leading-tight" style={{ color: COLORS.headingText }}>
                                From Our Home Kitchen to Your Table
                            </h2>
                        </div>

                        <div className="space-y-6 text-lg leading-relaxed" style={{ color: COLORS.bodyText }}>
                            <p>
                                We started making chapatis and curries in our home kitchen using traditional family recipes
                                that have been passed down through generations. That simple act of sharing love through food
                                ignited a passion that led us to start Annapurna Indian Food.
                            </p>
                            <p>
                                As a family-owned business, we take immense pride in serving <strong style={{ color: COLORS.headingText }}>REAL, Fresh, and Authentic</strong> Vegetarian Indian food.
                                We believe that food should taste as good as it looks, and we strive to provide a dining
                                experience that feels like coming home.
                            </p>
                            <p>
                                Our extended menu now offers a variety of dishes including traditional thalis,
                                tandoor specialties, savory fast-food, and kid-friendly items. Every dish is prepared
                                with the same care and attention to detail as if we were serving our own family.
                            </p>
                        </div>

                        <div className="pt-4">
                            <img
                                src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/e4/Signature_sample.svg/1200px-Signature_sample.svg.png"
                                alt="Signature"
                                className="h-16 opacity-60 mix-blend-multiply filter sepia"
                            />
                        </div>
                    </div>
                </div>

                {/* Divider */}
                <div className="w-full h-px my-20" style={{ backgroundColor: COLORS.dividers }} />

                {/* Reservation & CTA Section - Integrated style */}
                <div className="grid lg:grid-cols-12 gap-12 items-center">

                    {/* Text Area */}
                    <div className="lg:col-span-5 text-center lg:text-left">
                        <h3 className="text-3xl md:text-4xl font-bold mb-6" style={{ color: COLORS.headingText }}>
                            Join Us for a Meal
                        </h3>
                        <p className="text-lg mb-8" style={{ color: COLORS.mutedText }}>
                            Whether it's a quiet dinner for two or a family celebration, we look forward to serving you.
                            Reserve your table and let us take care of the rest.
                        </p>
                        <Link
                            to="/menu"
                            className="inline-flex items-center gap-3 px-8 py-4 rounded-full text-white font-sans font-bold transition-transform hover:-translate-y-1 shadow-md hover:shadow-lg"
                            style={{ backgroundColor: COLORS.primaryAccent }}
                        >
                            View Menu & Order <ChevronRight className="w-4 h-4" />
                        </Link>
                    </div>

                    {/* Reservation Card - Adapted Style */}
                    <motion.div
                        id="reservations"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="lg:col-span-7 bg-white p-8 md:p-12 rounded-[2rem] shadow-xl border relative overflow-hidden"
                        style={{ borderColor: COLORS.dividers }}
                    >
                        <div className="absolute top-0 left-0 w-full h-2" style={{ backgroundColor: COLORS.primaryAccent }} />

                        <h4 className="text-2xl font-bold mb-8 font-sans" style={{ color: COLORS.headingText }}>Make a Reservation</h4>

                        <form className="grid md:grid-cols-3 gap-6 font-sans">
                            {/* Guests */}
                            <div className="space-y-2">
                                <label className="text-xs font-bold uppercase tracking-wider" style={{ color: COLORS.mutedText }}>Party Size</label>
                                <div className="relative">
                                    <Users className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4" style={{ color: COLORS.primaryAccent }} />
                                    <select className="w-full pl-10 pr-4 py-3 bg-[#F9FAF9] border-none rounded-xl focus:ring-2 focus:ring-orange-200 outline-none text-gray-700 font-medium appearance-none">
                                        <option>2 People</option>
                                        <option>3 People</option>
                                        <option>4 People</option>
                                        <option>5+ People</option>
                                    </select>
                                </div>
                            </div>

                            {/* Date */}
                            <div className="space-y-2">
                                <label className="text-xs font-bold uppercase tracking-wider" style={{ color: COLORS.mutedText }}>Date</label>
                                <div className="relative">
                                    <Calendar className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4" style={{ color: COLORS.primaryAccent }} />
                                    <input
                                        type="date"
                                        className="w-full pl-10 pr-4 py-3 bg-[#F9FAF9] border-none rounded-xl focus:ring-2 focus:ring-orange-200 outline-none text-gray-700 font-medium"
                                    />
                                </div>
                            </div>

                            {/* Time */}
                            <div className="space-y-2">
                                <label className="text-xs font-bold uppercase tracking-wider" style={{ color: COLORS.mutedText }}>Time</label>
                                <div className="relative">
                                    <Clock className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4" style={{ color: COLORS.primaryAccent }} />
                                    <select className="w-full pl-10 pr-4 py-3 bg-[#F9FAF9] border-none rounded-xl focus:ring-2 focus:ring-orange-200 outline-none text-gray-700 font-medium appearance-none">
                                        <option>5:00 PM</option>
                                        <option>6:00 PM</option>
                                        <option>7:00 PM</option>
                                        <option>8:00 PM</option>
                                    </select>
                                </div>
                            </div>

                            <div className="md:col-span-3 mt-4">
                                <button
                                    type="submit"
                                    className="w-full py-4 rounded-xl text-white font-bold tracking-wide transition-opacity hover:opacity-90 shadow-md"
                                    style={{ backgroundColor: COLORS.headingText }}
                                >
                                    Confirm Table Request
                                </button>
                            </div>
                        </form>
                    </motion.div>
                </div>

            </div>
        </div>
    );
};

export default About;
