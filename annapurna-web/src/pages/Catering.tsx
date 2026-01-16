import { motion } from 'framer-motion';
import { Phone, Mail, MapPin, Users, Clock, Leaf, Truck, UtensilsCrossed } from 'lucide-react';

const Catering = () => {
    return (
        <div className="bg-brand-cream min-h-screen font-serif text-brand-brown">
            {/* Hero Section */}
            <div className="relative h-[60vh] flex items-center justify-center overflow-hidden">
                <div className="absolute inset-0 z-10" style={{ backgroundColor: 'rgba(122, 74, 42, 0.4)' }} />
                <img
                    src="https://images.unsplash.com/photo-1555244162-803834f70033?q=80&w=2070&auto=format&fit=crop"
                    alt="Catering Service"
                    className="absolute inset-0 w-full h-full object-cover"
                />
                <div className="relative z-20 text-center text-white px-4">
                    <motion.span
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="block text-sm md:text-base font-bold uppercase tracking-[0.2em] mb-4"
                    >
                        Exceptional Events
                    </motion.span>
                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2 }}
                        className="text-5xl md:text-7xl font-bold uppercase tracking-tight mb-8 drop-shadow-lg"
                    >
                        Catering Services
                    </motion.h1>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.4 }}
                        className="max-w-2xl mx-auto text-lg md:text-xl text-brand-cream/90 font-light italic"
                    >
                        From intimate gatherings to grand celebrations (10 - 500 Guests)
                    </motion.p>
                </div>
            </div>

            <div className="max-w-7xl mx-auto px-6 md:px-12 py-24">
                {/* Introduction */}
                <div className="grid md:grid-cols-2 gap-16 mb-24 items-center">
                    <div className="space-y-6">
                        <h2 className="text-3xl md:text-4xl font-bold uppercase tracking-wide text-brand-secondary">
                            Our Services
                        </h2>
                        <div className="w-20 h-1 bg-brand-primary" />
                        <p className="text-brand-brown leading-relaxed text-lg font-sans">
                            We offer services such as catering from minimum 10 to maximum 500 guests, tiffins & lunch boxes, and takeouts.
                            We also provide wide array of customizable lunch and dinner menus. At Annapurna caterers we indulge your desire
                            for exquisite hand crafted food that looks delicious and tastes divine!
                        </p>
                        <p className="text-brand-brown leading-relaxed text-lg font-sans">
                            Whether it’s a wedding, birthday, anniversary, housewarming parties or traditional puja/katha.
                            We create food according to your event and customized taste. Our Gujarati food items are made very traditional
                            with a homestyle touch and our North Indian specialty menu are based in tradition and authenticity yet dishes
                            are created with twist of modernity presented in style.
                        </p>
                        <p className="text-brand-brown leading-relaxed font-sans">
                            Our attention to detail and warm customer service have made us well known among our customers day by day.
                        </p>
                    </div>
                    <div className="grid grid-cols-2 gap-4 font-sans">
                        <div className="bg-white p-8 text-center rounded-2xl shadow-sm border border-brand-divider">
                            <Users className="w-10 h-10 text-brand-primary mx-auto mb-4" />
                            <h3 className="font-bold uppercase tracking-wider mb-2 text-brand-secondary">Onsite Catering</h3>
                            <p className="text-sm text-brand-muted">For park picnics, private, or corporate events.</p>
                        </div>
                        <div className="bg-white p-8 text-center rounded-2xl shadow-sm border border-brand-divider">
                            <Truck className="w-10 h-10 text-brand-primary mx-auto mb-4" />
                            <h3 className="font-bold uppercase tracking-wider mb-2 text-brand-secondary">Home Delivery</h3>
                            <p className="text-sm text-brand-muted">Free delivery within certain area in Parma/North Royalton, Ohio.</p>
                        </div>
                        <div className="bg-white p-8 text-center rounded-2xl shadow-sm border border-brand-divider">
                            <UtensilsCrossed className="w-10 h-10 text-brand-primary mx-auto mb-4" />
                            <h3 className="font-bold uppercase tracking-wider mb-2 text-brand-secondary">Tiffin Services</h3>
                            <p className="text-sm text-brand-muted">Daily/weekly tiffin services (contact us for details).</p>
                        </div>
                        <div className="bg-white p-8 text-center rounded-2xl shadow-sm border border-brand-divider">
                            <Leaf className="w-10 h-10 text-brand-green mx-auto mb-4" />
                            <h3 className="font-bold uppercase tracking-wider mb-2 text-brand-secondary">Dietary Options</h3>
                            <p className="text-sm text-brand-muted">No onion, no garlic, and Jain catering available on request.</p>
                        </div>
                    </div>
                </div>

                {/* Contact & Form Section */}
                <div className="grid lg:grid-cols-12 gap-12 lg:gap-24">
                    {/* Contact Details */}
                    <div className="lg:col-span-5 space-y-12">
                        <div>
                            <h3 className="text-2xl font-bold uppercase tracking-wide mb-8 text-brand-secondary">Contact Us</h3>
                            <p className="text-brand-brown mb-8 font-sans">
                                We would love to hear from you to discuss your requirements.
                                Contact Hemant & Nilam Amin directly or fill out the form.
                            </p>

                            <div className="space-y-6 font-sans">
                                <a href="tel:4402538311" className="flex items-center gap-4 group">
                                    <div className="w-12 h-12 bg-brand-secondary text-white flex items-center justify-center rounded-full group-hover:bg-brand-primary transition-colors">
                                        <Phone className="w-5 h-5" />
                                    </div>
                                    <div>
                                        <p className="text-xs font-bold uppercase tracking-widest text-brand-muted">Call Us</p>
                                        <p className="text-lg font-bold text-brand-brown">440-253-8311</p>
                                    </div>
                                </a>

                                <a href="mailto:info@annapurnaindianfood.com" className="flex items-center gap-4 group">
                                    <div className="w-12 h-12 bg-brand-secondary text-white flex items-center justify-center rounded-full group-hover:bg-brand-primary transition-colors">
                                        <Mail className="w-5 h-5" />
                                    </div>
                                    <div>
                                        <p className="text-xs font-bold uppercase tracking-widest text-brand-muted">Email Us</p>
                                        <p className="text-lg font-bold text-brand-brown">info@annapurnaindianfood.com</p>
                                    </div>
                                </a>

                                <div className="flex items-center gap-4">
                                    <div className="w-12 h-12 bg-brand-secondary text-white flex items-center justify-center rounded-full">
                                        <MapPin className="w-5 h-5" />
                                    </div>
                                    <div>
                                        <p className="text-xs font-bold uppercase tracking-widest text-brand-muted">Location</p>
                                        <p className="text-lg font-bold text-brand-brown">7464 Ridge Rd, Parma, OH 44129</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="bg-white p-8 rounded-2xl border border-brand-divider shadow-sm">
                            <h4 className="font-bold flex items-center gap-2 mb-4 text-brand-secondary">
                                <Clock className="w-5 h-5 text-brand-primary" />
                                Opening Hours
                            </h4>
                            <div className="space-y-2 text-sm text-brand-brown font-sans">
                                <div className="flex justify-between">
                                    <span>Sun, Tue - Fri</span>
                                    <span className="font-semibold">11:30am - 9pm</span>
                                </div>
                                <div className="flex justify-between">
                                    <span>Saturday</span>
                                    <span className="font-semibold">11am - 9pm</span>
                                </div>
                                <div className="flex justify-between text-brand-primary font-medium">
                                    <span>Monday</span>
                                    <span>Closed</span>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Form */}
                    <div className="lg:col-span-7">
                        <div className="bg-white p-8 md:p-12 rounded-3xl shadow-xl border border-brand-divider">
                            <h3 className="text-2xl font-bold uppercase tracking-wide mb-8 text-brand-secondary">Inquiry Form</h3>
                            <form className="space-y-6 font-sans">
                                <div className="grid md:grid-cols-2 gap-6">
                                    <div className="space-y-2">
                                        <label className="text-xs font-bold uppercase tracking-widest text-brand-muted">Name</label>
                                        <input type="text" className="w-full bg-brand-cream border border-brand-divider rounded-lg p-4 focus:outline-none focus:border-brand-primary transition-colors" placeholder="Your Full Name" />
                                    </div>
                                    <div className="space-y-2">
                                        <label className="text-xs font-bold uppercase tracking-widest text-brand-muted">Phone</label>
                                        <input type="tel" className="w-full bg-brand-cream border border-brand-divider rounded-lg p-4 focus:outline-none focus:border-brand-primary transition-colors" placeholder="(555) 000-0000" />
                                    </div>
                                </div>

                                <div className="space-y-2">
                                    <label className="text-xs font-bold uppercase tracking-widest text-brand-muted">Email</label>
                                    <input type="email" className="w-full bg-brand-cream border border-brand-divider rounded-lg p-4 focus:outline-none focus:border-brand-primary transition-colors" placeholder="your@email.com" />
                                </div>

                                <div className="grid md:grid-cols-2 gap-6">
                                    <div className="space-y-2">
                                        <label className="text-xs font-bold uppercase tracking-widest text-brand-muted">Event Date</label>
                                        <input type="date" className="w-full bg-brand-cream border border-brand-divider rounded-lg p-4 focus:outline-none focus:border-brand-primary transition-colors" />
                                    </div>
                                    <div className="space-y-2">
                                        <label className="text-xs font-bold uppercase tracking-widest text-brand-muted">Guest Count</label>
                                        <select className="w-full bg-brand-cream border border-brand-divider rounded-lg p-4 focus:outline-none focus:border-brand-primary transition-colors">
                                            <option>10 - 50 Guests</option>
                                            <option>50 - 100 Guests</option>
                                            <option>100 - 300 Guests</option>
                                            <option>300 - 500 Guests</option>
                                            <option>500+ Guests</option>
                                        </select>
                                    </div>
                                </div>

                                <div className="space-y-2">
                                    <label className="text-xs font-bold uppercase tracking-widest text-brand-muted">Message / Event Details</label>
                                    <textarea rows={4} className="w-full bg-brand-cream border border-brand-divider rounded-lg p-4 focus:outline-none focus:border-brand-primary transition-colors resize-none" placeholder="Tell us about your event and any specific requirements..."></textarea>
                                </div>

                                <button type="submit" className="w-full bg-brand-secondary text-white font-bold uppercase tracking-widest py-5 rounded-lg hover:bg-brand-primary transition-colors shadow-md">
                                    Send Inquiry
                                </button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Catering;
