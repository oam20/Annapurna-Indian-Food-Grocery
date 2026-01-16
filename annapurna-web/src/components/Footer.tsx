import { MapPin, Phone, Mail, Clock, Facebook, Instagram } from 'lucide-react';

const Footer = () => {
    return (
        <footer className="bg-brand-secondary text-brand-cream pt-16 pb-8 font-sans border-t border-brand-primary/20">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">

                    {/* Brand & Address */}
                    <div className="space-y-4">
                        <h3 className="text-2xl font-bold font-serif text-brand-cream">Annapurna</h3>
                        <div className="flex items-start gap-3 text-brand-cream/80">
                            <MapPin className="h-6 w-6 mt-1 flex-shrink-0 text-brand-lime" />
                            <p>7464 Ridge Rd,<br />Parma, OH 44129</p>
                        </div>
                        <div className="flex items-center gap-3 text-brand-cream/80">
                            <Phone className="h-5 w-5 text-brand-lime" />
                            <p>440-253-8311</p>
                        </div>
                        <div className="flex items-center gap-3 text-brand-cream/80">
                            <Mail className="h-5 w-5 text-brand-lime" />
                            <p>info@annapurnaindianfood.com</p>
                        </div>
                    </div>

                    {/* Opening Hours */}
                    <div className="space-y-4">
                        <h3 className="text-xl font-semibold font-serif">Opening Hours</h3>
                        <div className="space-y-2 text-brand-cream/80">
                            <div className="flex items-start gap-3">
                                <Clock className="h-5 w-5 mt-1 text-brand-lime" />
                                <div>
                                    <p>Sun, Tue - Fri: 11:30am - 9pm</p>
                                    <p>Saturday: 11am - 9pm</p>
                                    <p className="text-brand-primary font-bold bg-brand-cream/10 px-2 rounded">Monday: Closed</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Subscribe */}
                    <div className="space-y-4">
                        <h3 className="text-xl font-semibold font-serif">Stay Updated</h3>
                        <p className="text-brand-cream/80">Subscribe for latest updates and offers.</p>
                        <form className="flex flex-col gap-3">
                            <input
                                type="email"
                                placeholder="Enter your email"
                                className="bg-brand-brown/30 border border-brand-divider/30 rounded-lg px-4 py-2 text-white placeholder-brand-cream/50 focus:outline-none focus:border-brand-primary focus:bg-brand-brown/50 transition-colors"
                            />
                            <button type="submit" className="bg-brand-primary hover:bg-brand-cream hover:text-brand-secondary text-white px-4 py-2 rounded-lg font-medium transition-colors">
                                Join
                            </button>
                        </form>
                    </div>

                    {/* Social / Map Placeholder */}
                    <div className="space-y-4">
                        <h3 className="text-xl font-semibold font-serif">Follow Us</h3>
                        <div className="flex items-center gap-4">
                            <a href="#" className="bg-brand-brown/30 p-3 rounded-full hover:bg-brand-primary transition-colors text-brand-cream">
                                <Facebook className="h-6 w-6" />
                            </a>
                            <a href="#" className="bg-brand-brown/30 p-3 rounded-full hover:bg-brand-primary transition-colors text-brand-cream">
                                <Instagram className="h-6 w-6" />
                            </a>
                        </div>
                    </div>

                </div>

                <div className="border-t border-gray-800 pt-8 text-center text-gray-500 text-sm">
                    <p>&copy; {new Date().getFullYear()} by annapurnaindianfood.com. All rights reserved.</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
