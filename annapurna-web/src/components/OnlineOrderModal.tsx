import { useState } from 'react';
import { X, Clock, MapPin, ChevronDown } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

interface OnlineOrderModalProps {
    isOpen: boolean;
    onClose: () => void;
}

const OnlineOrderModal = ({ isOpen, onClose }: OnlineOrderModalProps) => {
    const [isEditingTime, setIsEditingTime] = useState(false);
    const [selectedDate, setSelectedDate] = useState('Tomorrow');
    const [selectedTime, setSelectedTime] = useState('11:00 AM');

    // Mock Date Generation
    const dates = [
        'Tomorrow',
        'Sunday, 1/18',
        'Tuesday, 1/20',
        'Wednesday, 1/21',
        'Thursday, 1/22',
        'Friday, 1/23'
    ];

    const times = [
        '11:00 AM', '11:15 AM', '11:30 AM', '11:45 AM',
        '12:00 PM', '12:15 PM', '12:30 PM', '12:45 PM',
        '1:00 PM'
    ];

    return (
        <AnimatePresence>
            {isOpen && (
                <>
                    {/* Backdrop */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={onClose}
                        className="fixed inset-0 bg-black/50 z-[60] backdrop-blur-sm"
                    />

                    {/* Modal */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95, y: 20 }}
                        animate={{ opacity: 1, scale: 1, y: 0 }}
                        exit={{ opacity: 0, scale: 0.95, y: 20 }}
                        className="fixed left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-2xl bg-white rounded-xl shadow-2xl z-[70] p-8 md:p-12 overflow-hidden"
                    >
                        {/* Close Button */}
                        <button
                            onClick={onClose}
                            className="absolute top-4 right-4 p-2 hover:bg-gray-100 rounded-full transition-colors"
                        >
                            <X className="w-6 h-6 text-gray-500" />
                        </button>

                        {/* Content */}
                        <div className="flex flex-col items-center text-center md:items-start md:text-left">
                            <h2 className="text-4xl md:text-5xl font-bold text-black mb-4 tracking-tight">
                                Online Ordering
                            </h2>
                            <p className="text-gray-600 text-lg mb-8 max-w-xl leading-relaxed">
                                You can order online! Browse our menu items and choose what you’d like to order from us.
                            </p>

                            {/* Status Pills */}
                            <div className="flex flex-wrap gap-4 mb-8">
                                <div className="flex items-center gap-2 border border-gray-200 rounded-full px-4 py-2 bg-white shadow-sm">
                                    <span className="w-2.5 h-2.5 bg-green-500 rounded-full animate-pulse" />
                                    <span className="font-medium text-gray-800">Accepting Orders</span>
                                </div>
                                <div className="flex items-center border border-gray-200 rounded-full px-4 py-2 bg-white shadow-sm">
                                    <span className="font-medium text-gray-800">Min. order - $5.00</span>
                                </div>
                            </div>

                            {/* Tab */}
                            {!isEditingTime && (
                                <div className="mb-10 w-full md:w-auto">
                                    <button className="w-full md:w-auto bg-[#FDF2F2] text-[#8B3E3E] px-12 py-3 rounded-lg font-bold text-lg hover:bg-[#fae8e8] transition-colors border border-[#fae8e8]">
                                        Pickup
                                    </button>
                                </div>
                            )}

                            {/* Viewing Mode Details */}
                            {!isEditingTime && (
                                <div className="grid gap-6 w-full text-left">
                                    {/* Time Row */}
                                    <div className="flex items-center gap-4 text-gray-800 text-lg">
                                        <Clock className="w-6 h-6 text-gray-400 flex-shrink-0" />
                                        <div className="flex flex-wrap gap-1">
                                            <span className="font-medium">Pickup time:</span>
                                            <span>{selectedDate} at {selectedTime}</span>
                                            <button
                                                onClick={() => setIsEditingTime(true)}
                                                className="text-[#8B3E3E] underline decoration-1 underline-offset-4 hover:decoration-2 font-medium ml-1"
                                            >
                                                Change
                                            </button>
                                        </div>
                                    </div>

                                    {/* Address Row */}
                                    <div className="flex items-center gap-4 text-gray-800 text-lg">
                                        <MapPin className="w-6 h-6 text-gray-400 flex-shrink-0" />
                                        <div className="flex gap-1">
                                            <span className="font-medium">Pickup Address:</span>
                                            <span className="text-gray-600">7464 Ridge Road, Parma, OH 44129-6605</span>
                                        </div>
                                    </div>
                                </div>
                            )}

                            {/* Editing Mode */}
                            {isEditingTime && (
                                <div className="w-full mt-2">
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                                        {/* Date Select */}
                                        <div className="space-y-2">
                                            <label className="block text-sm font-medium text-gray-900">Date</label>
                                            <div className="relative">
                                                <select
                                                    value={selectedDate}
                                                    onChange={(e) => setSelectedDate(e.target.value)}
                                                    className="w-full appearance-none bg-white border border-gray-300 rounded-md py-3 px-4 pr-10 text-gray-800 text-lg focus:outline-none focus:ring-1 focus:ring-[#8B3E3E] focus:border-[#8B3E3E]"
                                                >
                                                    {dates.map(date => <option key={date} value={date}>{date}</option>)}
                                                </select>
                                                <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400 pointer-events-none" />
                                            </div>
                                        </div>

                                        {/* Time Select */}
                                        <div className="space-y-2">
                                            <label className="block text-sm font-medium text-gray-900">Time</label>
                                            <div className="relative">
                                                <select
                                                    value={selectedTime}
                                                    onChange={(e) => setSelectedTime(e.target.value)}
                                                    className="w-full appearance-none bg-white border border-gray-300 rounded-md py-3 px-4 pr-10 text-gray-800 text-lg focus:outline-none focus:ring-1 focus:ring-[#8B3E3E] focus:border-[#8B3E3E]"
                                                >
                                                    {times.map(time => <option key={time} value={time}>{time}</option>)}
                                                </select>
                                                <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400 pointer-events-none" />
                                            </div>
                                        </div>
                                    </div>

                                    {/* Action Buttons */}
                                    <div className="flex justify-end pt-4 border-t border-gray-100">
                                        <button
                                            onClick={() => setIsEditingTime(false)}
                                            className="bg-[#A03030] text-white px-8 py-3 rounded-md font-medium text-lg hover:bg-[#8B2828] transition-colors shadow-sm"
                                        >
                                            Save
                                        </button>
                                    </div>
                                </div>
                            )}

                        </div>
                    </motion.div>
                </>
            )}
        </AnimatePresence>
    );
};

export default OnlineOrderModal;
