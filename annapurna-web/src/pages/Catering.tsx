import { motion } from 'framer-motion';
import { Phone, Mail, MapPin, Users, Clock, Leaf, Truck, UtensilsCrossed } from 'lucide-react';

const Catering = () => {
    return (
        <div className="bg-white min-h-screen">
            {/* Hero Section */}
            <div className="relative h-[60vh] flex items-center justify-center overflow-hidden">
                <div className="absolute inset-0 bg-black/40 z-10" />
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
                        className="text-5xl md:text-7xl font-bold uppercase tracking-tight mb-8"
                    >
                        Catering Services
                    </motion.h1>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.4 }}
                        className="max-w-2xl mx-auto text-lg md:text-xl text-gray-200 font-light"
                    >
                        From intimate gatherings to grand celebrations (10 - 500 Guests)
                    </motion.p>
                </div>
            </div>

            <div className="max-w-7xl mx-auto px-6 md:px-12 py-24">
                {/* Introduction */}
                <div className="grid md:grid-cols-2 gap-16 mb-24 items-center">
                    <div className="space-y-6">
                        <h2 className="text-3xl md:text-4xl font-bold uppercase tracking-wide">
                            Our Services
                        </h2>
                        <div className="w-20 h-1 bg-orange-600" />
                        <p className="text-gray-600 leading-relaxed text-lg">
                            We offer services such as catering from minimum 10 to maximum 500 guests, tiffins & lunch boxes, and takeouts.
                            We also provide wide array of customizable lunch and dinner menus. At Annapurna caterers we indulge your desire
                            for exquisite hand crafted food that looks delicious and tastes divine!
                        </p>
                        <p className="text-gray-600 leading-relaxed text-lg">
                            Whether it’s a wedding, birthday, anniversary, housewarming parties or traditional puja/katha.
                            We create food according to your event and customized taste. Our Gujarati food items are made very traditional
                            with a homestyle touch and our North Indian specialty menu are based in tradition and authenticity yet dishes
                            are created with twist of modernity presented in style.
                        </p>
                        <p className="text-gray-600 leading-relaxed">
                            Our attention to detail and warm customer service have made us well known among our customers day by day.
                        </p>
                    </div>
                    <div className="grid grid-cols-2 gap-4">
                        <div className="bg-gray-50 p-8 text-center rounded-2xl">
                            <Users className="w-10 h-10 text-purple-600 mx-auto mb-4" />
                            <h3 className="font-bold uppercase tracking-wider mb-2">Onsite Catering</h3>
                            <p className="text-sm text-gray-500">For park picnics, private, or corporate events.</p>
                        </div>
                        <div className="bg-gray-50 p-8 text-center rounded-2xl">
                            <Truck className="w-10 h-10 text-orange-600 mx-auto mb-4" />
                            <h3 className="font-bold uppercase tracking-wider mb-2">Home Delivery</h3>
                            <p className="text-sm text-gray-500">Free delivery within certain area in Parma/North Royalton, Ohio.</p>
                        </div>
                        <div className="bg-gray-50 p-8 text-center rounded-2xl">
                            <UtensilsCrossed className="w-10 h-10 text-blue-600 mx-auto mb-4" />
                            <h3 className="font-bold uppercase tracking-wider mb-2">Tiffin Services</h3>
                            <p className="text-sm text-gray-500">Daily/weekly tiffin services (contact us for details).</p>
                        </div>
                        <div className="bg-gray-50 p-8 text-center rounded-2xl">
                            <Leaf className="w-10 h-10 text-green-600 mx-auto mb-4" />
                            <h3 className="font-bold uppercase tracking-wider mb-2">Dietary Options</h3>
                            <p className="text-sm text-gray-500">No onion, no garlic, and Jain catering available on request.</p>
                        </div>
                    </div>
                </div>

                {/* Contact & Form Section */}
                <div className="grid lg:grid-cols-12 gap-12 lg:gap-24">
                    {/* Contact Details */}
                    <div className="lg:col-span-5 space-y-12">
                        <div>
                            <h3 className="text-2xl font-bold uppercase tracking-wide mb-8">Contact Us</h3>
                            <p className="text-gray-600 mb-8">
                                We would love to hear from you to discuss your requirements.
                                Contact Hemant & Nilam Amin directly or fill out the form.
                            </p>

                            <div className="space-y-6">
                                <a href="tel:4402538311" className="flex items-center gap-4 group">
                                    <div className="w-12 h-12 bg-black text-white flex items-center justify-center rounded-full group-hover:bg-orange-600 transition-colors">
                                        <Phone className="w-5 h-5" />
                                    </div>
                                    <div>
                                        <p className="text-xs font-bold uppercase tracking-widest text-gray-400">Call Us</p>
                                        <p className="text-lg font-bold">440-253-8311</p>
                                    </div>
                                </a>

                                <a href="mailto:info@annapurnaindianfood.com" className="flex items-center gap-4 group">
                                    <div className="w-12 h-12 bg-black text-white flex items-center justify-center rounded-full group-hover:bg-orange-600 transition-colors">
                                        <Mail className="w-5 h-5" />
                                    </div>
                                    <div>
                                        <p className="text-xs font-bold uppercase tracking-widest text-gray-400">Email Us</p>
                                        <p className="text-lg font-bold">info@annapurnaindianfood.com</p>
                                    </div>
                                </a>

                                <div className="flex items-center gap-4">
                                    <div className="w-12 h-12 bg-black text-white flex items-center justify-center rounded-full">
                                        <MapPin className="w-5 h-5" />
                                    </div>
                                    <div>
                                        <p className="text-xs font-bold uppercase tracking-widest text-gray-400">Location</p>
                                        <p className="text-lg font-bold">7464 Ridge Rd, Parma, OH 44129</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="bg-orange-50 p-8 rounded-2xl border border-orange-100">
                            <h4 className="font-bold flex items-center gap-2 mb-4">
                                <Clock className="w-5 h-5 text-orange-600" />
                                Opening Hours
                            </h4>
                            <div className="space-y-2 text-sm text-gray-700">
                                <div className="flex justify-between">
                                    <span>Sun, Tue - Fri</span>
                                    <span className="font-semibold">11:30am - 9pm</span>
                                </div>
                                <div className="flex justify-between">
                                    <span>Saturday</span>
                                    <span className="font-semibold">11am - 9pm</span>
                                </div>
                                <div className="flex justify-between text-red-500 font-medium">
                                    <span>Monday</span>
                                    <span>Closed</span>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Form */}
                    <div className="lg:col-span-7">
                        <div className="bg-white p-8 md:p-12 rounded-3xl shadow-xl border border-gray-100">
                            <h3 className="text-2xl font-bold uppercase tracking-wide mb-8">Inquiry Form</h3>
                            <form className="space-y-6">
                                <div className="grid md:grid-cols-2 gap-6">
                                    <div className="space-y-2">
                                        <label className="text-xs font-bold uppercase tracking-widest text-gray-500">Name</label>
                                        <input type="text" className="w-full bg-gray-50 border border-gray-200 rounded-lg p-4 focus:outline-none focus:border-black transition-colors" placeholder="Your Full Name" />
                                    </div>
                                    <div className="space-y-2">
                                        <label className="text-xs font-bold uppercase tracking-widest text-gray-500">Phone</label>
                                        <input type="tel" className="w-full bg-gray-50 border border-gray-200 rounded-lg p-4 focus:outline-none focus:border-black transition-colors" placeholder="(555) 000-0000" />
                                    </div>
                                </div>

                                <div className="space-y-2">
                                    <label className="text-xs font-bold uppercase tracking-widest text-gray-500">Email</label>
                                    <input type="email" className="w-full bg-gray-50 border border-gray-200 rounded-lg p-4 focus:outline-none focus:border-black transition-colors" placeholder="your@email.com" />
                                </div>

                                <div className="grid md:grid-cols-2 gap-6">
                                    <div className="space-y-2">
                                        <label className="text-xs font-bold uppercase tracking-widest text-gray-500">Event Date</label>
                                        <input type="date" className="w-full bg-gray-50 border border-gray-200 rounded-lg p-4 focus:outline-none focus:border-black transition-colors" />
                                    </div>
                                    <div className="space-y-2">
                                        <label className="text-xs font-bold uppercase tracking-widest text-gray-500">Guest Count</label>
                                        <select className="w-full bg-gray-50 border border-gray-200 rounded-lg p-4 focus:outline-none focus:border-black transition-colors">
                                            <option>10 - 50 Guests</option>
                                            <option>50 - 100 Guests</option>
                                            <option>100 - 300 Guests</option>
                                            <option>300 - 500 Guests</option>
                                            <option>500+ Guests</option>
                                        </select>
                                    </div>
                                </div>

                                <div className="space-y-2">
                                    <label className="text-xs font-bold uppercase tracking-widest text-gray-500">Message / Event Details</label>
                                    <textarea rows={4} className="w-full bg-gray-50 border border-gray-200 rounded-lg p-4 focus:outline-none focus:border-black transition-colors resize-none" placeholder="Tell us about your event and any specific requirements..."></textarea>
                                </div>

                                <button type="submit" className="w-full bg-black text-white font-bold uppercase tracking-widest py-5 rounded-lg hover:bg-orange-600 transition-colors">
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
