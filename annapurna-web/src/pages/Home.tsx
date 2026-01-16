import Hero from '../components/Hero';
import { motion } from 'framer-motion';

const Home = () => {
    return (
        <div className="flex flex-col min-h-screen">
            <Hero />

            {/* About Section (Extracted text) */}
            <section className="py-24 px-4 sm:px-6 lg:px-8 bg-brand-cream relative overflow-hidden">
                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-brand-divider to-transparent" />
                <div className="max-w-4xl mx-auto text-center space-y-8 relative z-10">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                    >
                        <span className="text-brand-primary text-sm font-bold uppercase tracking-[0.2em] mb-4 block">Our Story</span>
                        <h2 className="text-4xl md:text-5xl font-bold text-brand-secondary mb-8 font-serif">Who We Are</h2>
                        <div className="prose prose-lg mx-auto text-brand-brown leading-relaxed font-sans">
                            <p>
                                As a family owned business, we are proud to serve
                                <span className="font-semibold text-brand-primary"> REAL Fresh, Authentic, Simple and Delicious</span> Vegetarian Indian food that tastes as good as it looks.
                            </p>
                            <p className="mt-4">
                                Our goal is to provide the best dining experience to our customers. Our extended menu offers a variety of dishes including traditional, tandoor, fast-food and kid-friendly items.
                            </p>
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* Featured Grid (Placeholder for Menu categories) */}
            <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
                <div className="max-w-7xl mx-auto">
                    <h2 className="text-3xl font-bold text-center mb-12">Our Offerings</h2>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {[
                            { title: 'Dine-In', img: 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&q=80&w=1000' },
                            { title: 'Catering', img: 'https://images.unsplash.com/photo-1555126634-323283e090fa?auto=format&fit=crop&q=80&w=1000' },
                            { title: 'Grocery', img: 'https://images.unsplash.com/photo-1542838132-92c53300491e?auto=format&fit=crop&q=80&w=1000' }
                        ].map((item, idx) => (
                            <motion.div
                                key={idx}
                                className="relative h-80 rounded-2xl overflow-hidden shadow-lg group cursor-pointer"
                                initial={{ opacity: 0, scale: 0.95 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                transition={{ delay: idx * 0.1 }}
                            >
                                <img src={item.img} alt={item.title} className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" />
                                <div className="absolute inset-0 bg-black/30 group-hover:bg-black/40 transition-colors" />
                                <div className="absolute inset-0 flex items-center justify-center">
                                    <h3 className="text-white text-3xl font-bold tracking-wide">{item.title}</h3>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Home;
