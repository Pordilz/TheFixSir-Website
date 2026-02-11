import React from 'react';
import { HeartPulse, Medal, Users, Trophy } from 'lucide-react';

const RugbyIcon = (props) => (
    <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        {...props}
    >
        <path d="M16 3H8L3 12L8 21H16L21 12L16 3Z" />
        <path d="M7 6L17 18" />
        <path d="M17 6L7 18" />
    </svg>
);

const PadelIcon = (props) => (
    <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        {...props}
    >
        <circle cx="12" cy="9" r="7" />
        <ellipse cx="12" cy="18" rx="2" ry="6" />
        <path d="M12 9V9.01" />
        <path d="M10 7V7.01" />
        <path d="M14 7V7.01" />
        <path d="M10 11V11.01" />
        <path d="M14 11V11.01" />
    </svg>
);

const CricketIcon = (props) => (
    <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        {...props}
    >
        <path d="M4 14L10 20L21 9L15 3L4 14Z" />
        <circle cx="5" cy="19" r="2" />
    </svg>
);

const WaterpoloIcon = (props) => (
    <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        {...props}
    >
        <circle cx="12" cy="10" r="8" />
        <path d="M12 18V22" />
        <path d="M8 22H16" />
        <path d="M8 10L16 10" />
        <path d="M12 6L12 14" />
    </svg>
);


const Experience = () => {
    const experiences = [
        { text: 'Cipla Mobeni Employee Wellness Massages', icon: HeartPulse },
        { text: 'Comrades Marathon', icon: Medal },
        { text: 'Nedbank Running Club', icon: Users },
        { text: 'HollywoodBets Dolphins Cricket Team', icon: CricketIcon },
        { text: 'Northwood School Waterpolo', icon: WaterpoloIcon },
        { text: 'Durban High School First Team Rugby', icon: RugbyIcon },
        { text: 'Padel Tournaments', icon: PadelIcon },
        { text: 'Football/Soccer Tournaments', icon: Trophy },
    ];

    return (
        <section className="py-20 bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <h2 className="text-4xl lg:text-5xl font-bold text-black mb-4">
                        Trusted By Champions
                    </h2>
                    <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                        Proud to have worked with top athletes and organizations
                    </p>
                    <div className="w-20 h-1 bg-[#D32F2F] mx-auto mt-6"></div>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {experiences.map((item, index) => {
                        const Icon = item.icon;
                        return (
                            <div
                                key={index}
                                className="bg-gray-50 rounded-xl p-6 flex items-center space-x-4 hover:shadow-lg transition-all duration-200 border border-gray-100 hover:border-[#D32F2F]"
                            >
                                <div className="bg-[#D32F2F]/10 p-2 rounded-lg text-[#D32F2F] flex-shrink-0">
                                    <Icon size={24} />
                                </div>
                                <p className="font-semibold text-gray-800">{item.text}</p>
                            </div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
};

export default Experience;
