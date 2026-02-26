import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { ArrowLeft, Calendar, BookOpen, Share2 } from 'lucide-react';

const blogPosts = {
    'cupping-deep-dive': {
        title: 'Cupping – A Deep Dive',
        date: 'February 2026',
        readTime: '8 min read',
        image:
            'https://images.unsplash.com/photo-1621287571777-c725d8e34d39?crop=entropy&cs=srgb&fm=jpg&ixid=M3w4NjA1OTV8MHwxfHNlYXJjaHwzfHxjdXBwaW5nJTIwdGhlcmFweXxlbnwwfHx8fDE3NzA3NDczMTB8MA&ixlib=rb-4.1.0&q=85',
    },
};

const CuppingDeepDive = () => (
    <article className="prose prose-lg max-w-none">
        <p className="text-xl text-gray-600 leading-relaxed mb-8">
            Cupping therapy has grown significantly in popularity over the years, yet many people still
            have questions about what it involves, how it works, and whether it is right for them. In this
            article, we'll take a detailed look at the two primary types of cupping, address common
            concerns, explore its roots in Islamic tradition, and correct a few widespread misconceptions.
        </p>

        <h2 className="text-3xl font-bold text-black mt-12 mb-6">The Two Primary Types of Cupping</h2>
        <p className="text-gray-700 leading-relaxed mb-4">
            There are two main forms of cupping therapy:
        </p>
        <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-8">
            <li><strong>Dry Cupping</strong></li>
            <li><strong>Wet Cupping (Hijama)</strong></li>
        </ul>

        <div className="bg-gray-50 rounded-2xl p-8 mb-8">
            <h3 className="text-2xl font-bold text-black mb-4">Dry Cupping</h3>
            <p className="text-gray-700 leading-relaxed mb-4">
                Dry Cupping involves the use of cups placed on the skin to create suction. There are{' '}
                <strong>no incisions made on the skin surface</strong>, and{' '}
                <strong>no blood is drawn</strong> during this process. The suction created by the cups
                helps to:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-gray-700">
                <li>Release tension</li>
                <li>Loosen tight muscles</li>
                <li>Promote better blood flow throughout the body</li>
            </ul>
            <p className="text-gray-700 leading-relaxed mt-4">
                Many clients describe the sensation as similar to a deep tissue massage, with a pulling
                effect rather than pressure.
            </p>
        </div>

        <div className="bg-gray-50 rounded-2xl p-8 mb-8">
            <h3 className="text-2xl font-bold text-black mb-4">Wet Cupping (Hijama)</h3>
            <p className="text-gray-700 leading-relaxed mb-4">
                Wet Cupping, also known as <strong>Hijama</strong>, combines suction with slight,
                superficial incisions made on the skin's surface. After ensuring that all hygienic protocols
                are properly followed, a <strong>small amount of blood is drawn from the body</strong>.
            </p>
            <p className="text-gray-700 leading-relaxed mb-2">Wet Cupping is known to:</p>
            <ul className="list-disc pl-6 space-y-2 text-gray-700">
                <li>Aid in improving organ health</li>
                <li>Assist in removing toxins from the blood</li>
                <li>Support recovery and healing</li>
                <li>Provide numerous additional health benefits</li>
            </ul>
        </div>

        <h2 className="text-3xl font-bold text-black mt-12 mb-6">Is Cupping Painful?</h2>
        <p className="text-gray-700 leading-relaxed mb-4">
            This is one of the most common questions — and the answer is <strong>NO</strong>.
        </p>
        <p className="text-gray-700 leading-relaxed mb-4">
            With <strong>Dry Cupping</strong>, the cups simply create suction on the skin. Most people
            find it feels like a massage with a pulling sensation.
        </p>
        <p className="text-gray-700 leading-relaxed mb-8">
            With <strong>Wet Cupping</strong>, the incisions are slight and superficial. Any discomfort
            experienced is minimal. It is often compared to a sugar test, where a small prick is made on
            the finger to release a drop of blood.
        </p>

        <div className="bg-[#D32F2F]/5 border-l-4 border-[#D32F2F] rounded-r-2xl p-8 mb-8">
            <h2 className="text-2xl font-bold text-black mb-6">Hadith on Hijama (Cupping)</h2>
            <p className="text-gray-700 mb-6">
                Hijama is also rooted in Islamic tradition. The Prophet Muhammad (Peace Be Upon Him) spoke
                highly of cupping as a remedy.
            </p>
            <blockquote className="border-l-4 border-[#D32F2F] pl-6 my-6 not-prose">
                <p className="text-xl italic text-gray-800 mb-2">
                    "Indeed the best of remedies you have is cupping."
                </p>
                <p className="text-sm text-gray-600 font-semibold">— Sahih Bukhari 5371</p>
            </blockquote>
            <blockquote className="border-l-4 border-[#D32F2F] pl-6 my-6 not-prose">
                <p className="text-xl italic text-gray-800 mb-2">
                    "If there is any good in the medicines with which you treat yourselves, it is in the
                    incisions of the Hijama therapist, or a drink of honey or cauterization with fire, but I
                    do not like to be cauterized."
                </p>
                <p className="text-sm text-gray-600 font-semibold">— Sahih Muslim 2205</p>
            </blockquote>
        </div>

        <h2 className="text-3xl font-bold text-black mt-12 mb-6">
            When Is the Best Time to Do Cupping?
        </h2>
        <p className="text-gray-700 leading-relaxed mb-4">
            It is important to note that cupping can be performed{' '}
            <strong>at any time of the month</strong>, especially when immediate recovery or healing is
            needed.
        </p>
        <p className="text-gray-700 leading-relaxed mb-4">
            However, according to authentic narrations, the Sunnah (preferred) days for Hijama are:
        </p>
        <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-4">
            <li>
                The <strong>17th, 19th, and 21st</strong> of every lunar month
            </li>
            <li>
                <strong>Monday, Tuesday, and Thursday</strong>
            </li>
        </ul>
        <p className="text-sm text-gray-600 mb-8">— Sunan Ibn Majah 3486; 3487</p>

        <div className="bg-gray-50 rounded-2xl p-8 mb-8">
            <h2 className="text-2xl font-bold text-black mb-6">Sunnah Points for Cupping</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
                There are specific areas mentioned in narrations that carry particular benefit when cupped:
            </p>
            <ul className="space-y-3 text-gray-700">
                <li>
                    <strong>Yafookh</strong> – Top of the head (only if shaved/bald)
                </li>
                <li>
                    <strong>Qamahduwah</strong> – Above the nape cavity/back of the head (only if
                    shaved/bald)
                </li>
                <li>
                    <strong>Akhada'ain</strong> – The two posterior jugular veins adjacent to the back of the
                    neck
                </li>
                <li>
                    <strong>Kahil</strong> – Base of the neck between the shoulders
                </li>
                <li>Underneath the chin</li>
                <li>On top of the foot between the index and big toe</li>
                <li>
                    <strong>Waraq</strong> – Hips
                </li>
            </ul>
            <p className="text-gray-600 mt-4 italic">
                Each of these sites is associated with specific health benefits, which can be discussed in
                more detail during your session.
            </p>
        </div>

        <h2 className="text-3xl font-bold text-black mt-12 mb-6">
            Correcting Misconceptions About Cupping
        </h2>
        <div className="space-y-4 mb-8">
            {[
                {
                    num: 1,
                    text: 'Cupping is not solely a religious practice. While it holds significance in Islamic tradition, people of any religion, race, or background can benefit from this remedy.',
                },
                {
                    num: 2,
                    text: 'Cupping is not painful. If any discomfort is experienced, it is minimal.',
                },
                {
                    num: 3,
                    text: "Cupping is not limited to specific body parts. It can be performed on most (not all) areas of the body, depending on the individual's needs.",
                },
                {
                    num: 4,
                    text: 'Cupping can be done whenever the need arises. It is not restricted only to specific dates.',
                },
                {
                    num: 5,
                    text: 'Many top athletes practice cupping. Numerous elite athletes have recognized the benefits of cupping therapy and incorporate it into their recovery routines.',
                },
            ].map((item) => (
                <div
                    key={item.num}
                    className="flex items-start space-x-4 bg-gray-50 rounded-xl p-4"
                >
                    <span className="flex-shrink-0 w-8 h-8 bg-[#D32F2F] text-white rounded-full flex items-center justify-center font-bold text-sm">
                        {item.num}
                    </span>
                    <p className="text-gray-700">{item.text}</p>
                </div>
            ))}
        </div>

        <h2 className="text-3xl font-bold text-black mt-12 mb-6">Final Thoughts</h2>
        <p className="text-gray-700 leading-relaxed mb-4">
            Cupping is a powerful, time-tested therapy that supports recovery, healing, and overall
            well-being. Whether you are seeking relief from muscular tension, aiming to detoxify the body,
            or looking to follow the Sunnah practice of Hijama, cupping offers a holistic approach to
            health.
        </p>
        <p className="text-gray-700 leading-relaxed">
            If you would like to learn more about the specific benefits of each cupping site or book your
            next session, feel free to get in touch.
        </p>

        {/* CTA */}
        <div className="bg-gradient-to-r from-[#D32F2F] to-[#B71C1C] rounded-3xl p-8 mt-12 text-center text-white">
            <h3 className="text-2xl font-bold mb-4">Ready to Experience the Benefits of Cupping?</h3>
            <p className="text-white/90 mb-6">
                Book your Hijama or Dry Cupping session with The FixSir today.
            </p>
            <a
                href="https://wa.me/27648906906?text=Hi%2C%20I%27d%20like%20to%20book%20a%20cupping%20session"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block bg-white text-[#D32F2F] px-8 py-4 rounded-full font-semibold hover:bg-gray-100 transition-all duration-200"
            >
                Book via WhatsApp
            </a>
        </div>
    </article>
);

const BlogPost = () => {
    const { slug } = useParams();
    const post = blogPosts[slug];

    const pageTitle = post ? (post.title + ' | The FixSir Blog') : 'Post Not Found | The FixSir';
    const canonicalUrl = 'https://www.thefixsir.co.za/blog/' + slug;

    React.useEffect(() => {
        document.title = pageTitle;
    }, [pageTitle]);

    if (!post) {
        return (
            <div className="min-h-screen bg-white">
                <Navbar />
                <div className="pt-32 pb-20 text-center">
                    <h1 className="text-4xl font-bold text-black mb-4">Post Not Found</h1>
                    <Link
                        to="/"
                        className="text-[#D32F2F] font-semibold hover:underline"
                    >
                        ← Back to Home
                    </Link>
                </div>
                <Footer />
            </div>
        );
    }

    return (
        <div className="min-h-screen bg-white">
            <Helmet>
                <link rel="canonical" href={canonicalUrl} />
            </Helmet>
            <Navbar />

            {/* Hero */}
            <div className="relative pt-20">
                <div className="h-[400px] relative">
                    <img
                        src={post.image}
                        alt={post.title}
                        className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent"></div>
                    <div className="absolute bottom-0 left-0 right-0 p-8 md:p-12">
                        <div className="max-w-4xl mx-auto">
                            <Link
                                to="/blog"
                                className="inline-flex items-center text-white/80 hover:text-white mb-4 transition-colors"
                            >
                                <ArrowLeft size={16} className="mr-2" />
                                Back to Blog
                            </Link>
                            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">{post.title}</h1>
                            <div className="flex items-center space-x-6 text-white/80">
                                <span className="flex items-center space-x-2">
                                    <Calendar size={16} />
                                    <span>{post.date}</span>
                                </span>
                                <span className="flex items-center space-x-2">
                                    <BookOpen size={16} />
                                    <span>{post.readTime}</span>
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Content */}
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
                {slug === 'cupping-deep-dive' && <CuppingDeepDive />}
            </div>

            <Footer />
        </div>
    );
};

export default BlogPost;
