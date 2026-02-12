import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const Legal = () => {
    const location = useLocation();
    const [activeTab, setActiveTab] = useState('terms');

    useEffect(() => {
        if (location.pathname === '/privacy') {
            setActiveTab('privacy');
        } else {
            setActiveTab('terms');
        }
        window.scrollTo(0, 0);
    }, [location.pathname]);

    return (
        <div className="min-h-screen bg-gray-50 flex flex-col">
            <Navbar />

            <main className="flex-grow pt-32 pb-20">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">

                    {/* Page Header */}
                    <div className="text-center mb-12">
                        <h1 className="text-4xl font-bold text-black mb-4">Legal Information</h1>
                        <div className="w-20 h-1 bg-[#D32F2F] mx-auto"></div>
                    </div>

                    {/* Tabs */}
                    <div className="flex justify-center mb-12">
                        <div className="bg-white p-1 rounded-xl shadow-sm border border-gray-200 inline-flex">
                            <button
                                onClick={() => setActiveTab('terms')}
                                className={`px-6 py-3 rounded-lg text-sm font-semibold transition-all duration-200 ${activeTab === 'terms'
                                        ? 'bg-[#D32F2F] text-white shadow-md'
                                        : 'text-gray-600 hover:text-black hover:bg-gray-50'
                                    }`}
                            >
                                Terms of Service
                            </button>
                            <button
                                onClick={() => setActiveTab('privacy')}
                                className={`px-6 py-3 rounded-lg text-sm font-semibold transition-all duration-200 ${activeTab === 'privacy'
                                        ? 'bg-[#D32F2F] text-white shadow-md'
                                        : 'text-gray-600 hover:text-black hover:bg-gray-50'
                                    }`}
                            >
                                Privacy Policy
                            </button>
                        </div>
                    </div>

                    {/* Content Container */}
                    <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-8 md:p-12">

                        {/* Terms of Service */}
                        {activeTab === 'terms' && (
                            <div className="prose prose-red max-w-none">
                                <h2 className="text-2xl font-bold text-black mb-2">Terms of Service</h2>
                                <p className="text-gray-500 mb-8">Effective Date: 12/02/2026</p>

                                <div className="space-y-8">
                                    <section>
                                        <h3 className="text-xl font-bold text-black mb-3">1. Introduction</h3>
                                        <p className="text-gray-700 leading-relaxed">
                                            Welcome to The FixSir. By booking an appointment or using our services (including Sports Massage, Cupping/Hijama, Injury Taping, and any other additional treatments), you agree to comply with and be bound by the following terms and conditions.
                                        </p>
                                    </section>

                                    <section>
                                        <h3 className="text-xl font-bold text-black mb-3">2. Medical Disclaimer</h3>
                                        <p className="text-gray-700 leading-relaxed mb-4">
                                            The services provided by The FixSir are not a substitute for medical diagnosis, advanced medical treatment, or care from a licensed physician.
                                        </p>
                                        <ul className="list-disc pl-5 space-y-2 text-gray-700">
                                            <li><strong>Consultation:</strong> You agree to disclose all relevant medical conditions, injuries, or medications before treatment.</li>
                                            <li><strong>Liability:</strong> The FixSir is not liable for any injury, worsening of conditions, or adverse reactions resulting from the withholding of medical information.</li>
                                        </ul>
                                    </section>

                                    <section>
                                        <h3 className="text-xl font-bold text-black mb-3">3. Bookings and Cancellations</h3>
                                        <ul className="list-disc pl-5 space-y-2 text-gray-700">
                                            <li><strong>Appointments:</strong> All sessions are by appointment only.</li>
                                            <li><strong>Cancellations:</strong> We require at least 24 hours notice for cancellations or rescheduling. Failure to do so may result in a cancellation fee.</li>
                                            <li><strong>Late Arrivals:</strong> Treatment times will not be extended for late arrivals, and the full session fee will apply.</li>
                                        </ul>
                                    </section>

                                    <section>
                                        <h3 className="text-xl font-bold text-black mb-3">4. Mobile Services & Call-Out Fees</h3>
                                        <ul className="list-disc pl-5 space-y-2 text-gray-700">
                                            <li><strong>Location:</strong> We require a safe, clean, and adequate space to set up a massage table and equipment at your location, should you opt for our mobile service.</li>
                                            <li><strong>Fees:</strong> Prices listed exclude call-out fees, which vary based on location (R100–R150+). These fees are payable in addition to the treatment cost.</li>
                                        </ul>
                                    </section>

                                    <section>
                                        <h3 className="text-xl font-bold text-black mb-3">5. Code of Conduct & Right to Refuse Service</h3>
                                        <p className="text-gray-700 mb-4">We are committed to providing a professional and safe environment.</p>
                                        <ul className="list-disc pl-5 space-y-2 text-gray-700">
                                            <li><strong>Zero Tolerance:</strong> Any illicit, sexual, or aggressive behavior will result in the immediate termination of the session with full payment due.</li>
                                            <li><strong>Right to Refuse:</strong> The FixSir explicitly reserves the right to refuse service to any client for any reason, including but not limited to safety concerns, inappropriate behavior, medical contraindications, or hygiene issues.</li>
                                        </ul>
                                    </section>

                                    <section>
                                        <h3 className="text-xl font-bold text-black mb-3">6. Indemnity</h3>
                                        <p className="text-gray-700 leading-relaxed">
                                            By using our services, you voluntarily agree to assume all risks involved. You hereby release, waive, discharge, and hold harmless The FixSir and its therapists from any claims, liabilities, or damages arising from your receipt of these services, including wet cupping (Hijama) and deep tissue work.
                                        </p>
                                    </section>

                                    <section>
                                        <h3 className="text-xl font-bold text-black mb-3">7. Governing Law</h3>
                                        <p className="text-gray-700 leading-relaxed">
                                            These terms are governed by the laws of the Republic of South Africa.
                                        </p>
                                    </section>
                                </div>
                            </div>
                        )}

                        {/* Privacy Policy */}
                        {activeTab === 'privacy' && (
                            <div className="prose prose-red max-w-none">
                                <h2 className="text-2xl font-bold text-black mb-2">Privacy Policy</h2>
                                <p className="text-gray-500 mb-8">Effective Date: 12/02/2026</p>

                                <div className="space-y-8">
                                    <section>
                                        <h3 className="text-xl font-bold text-black mb-3">1. Introduction</h3>
                                        <p className="text-gray-700 leading-relaxed">
                                            The FixSir ("we", "us", "our") is committed to protecting your privacy in accordance with the Protection of Personal Information Act (POPIA) of South Africa. This policy explains how we collect, use, and safeguard your personal information.
                                        </p>
                                    </section>

                                    <section>
                                        <h3 className="text-xl font-bold text-black mb-3">2. Information Collection</h3>
                                        <p className="text-gray-700 mb-4">We collect necessary personal information to provide safe and effective therapy, including:</p>
                                        <ul className="list-disc pl-5 space-y-2 text-gray-700">
                                            <li><strong>Personal Information:</strong> Name, phone number, email address, and physical address (for mobile call-outs).</li>
                                            <li><strong>Health Information:</strong> Medical history, current injuries, allergies, and contraindications relevant to massage or cupping therapy.</li>
                                        </ul>
                                    </section>

                                    <section>
                                        <h3 className="text-xl font-bold text-black mb-3">3. How We Use Your Information</h3>
                                        <p className="text-gray-700 mb-4">We use your data strictly for business purposes:</p>
                                        <ul className="list-disc pl-5 space-y-2 text-gray-700">
                                            <li>To schedule and manage appointments.</li>
                                            <li>To travel to your location for mobile services.</li>
                                            <li>To assess the safety and suitability of treatments for your specific health needs.</li>
                                            <li>To communicate with you regarding bookings, reminders, or special offers.</li>
                                        </ul>
                                    </section>

                                    <section>
                                        <h3 className="text-xl font-bold text-black mb-3">4. Data Sharing and Security</h3>
                                        <ul className="list-disc pl-5 space-y-2 text-gray-700">
                                            <li><strong>Confidentiality:</strong> Your health information is treated as strictly confidential. We do not sell or rent your personal data to third parties.</li>
                                            <li><strong>Service Providers:</strong> We may share necessary details (like address) with trusted staff or referral partners (e.g., female therapists) only with your consent.</li>
                                            <li><strong>Security:</strong> We take reasonable steps to secure your data (e.g., password-protected devices for client records). However, no method of transmission over the internet or mobile networks is 100% secure.</li>
                                        </ul>
                                    </section>

                                    <section>
                                        <h3 className="text-xl font-bold text-black mb-3">5. Your Rights Under POPIA</h3>
                                        <p className="text-gray-700 mb-2">You have the right to:</p>
                                        <ul className="list-disc pl-5 space-y-2 text-gray-700">
                                            <li>Request access to the personal information we hold about you.</li>
                                            <li>Request the correction or deletion of your personal data.</li>
                                            <li>Object to the processing of your personal information.</li>
                                        </ul>
                                    </section>

                                    <section>
                                        <h3 className="text-xl font-bold text-black mb-3">6. Contact Us</h3>
                                        <p className="text-gray-700 mb-4">Should you have any questions about this policy or your data, please contact us at:</p>
                                        <div className="bg-gray-50 p-4 rounded-lg border border-gray-200">
                                            <p className="text-gray-700"><strong>Phone/WhatsApp:</strong> 064 890 6906</p>
                                            <p className="text-gray-700"><strong>Email:</strong> mohoosain@gmail.com</p>
                                        </div>
                                    </section>
                                </div>
                            </div>
                        )}
                    </div>
                </div>
            </main>

            <Footer />
        </div>
    );
};

export default Legal;
