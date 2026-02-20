import React from 'react';
import { BookOpen, ArrowRight, Calendar } from 'lucide-react';

const Blog = () => {
    const posts = [
        {
            slug: 'cupping-deep-dive',
            title: 'Cupping – A Deep Dive',
            excerpt:
                'Cupping therapy has grown significantly in popularity over the years, yet many people still have questions about what it involves, how it works, and whether it is right for them.',
            date: 'February 2026',
            readTime: '8 min read',
            tags: ['Cupping', 'Hijama', 'Recovery'],
            image:
                'https://images.unsplash.com/photo-1621287571777-c725d8e34d39?crop=entropy&cs=srgb&fm=jpg&ixid=M3w4NjA1OTV8MHwxfHNlYXJjaHwzfHxjdXBwaW5nJTIwdGhlcmFweXxlbnwwfHx8fDE3NzA3NDczMTB8MA&ixlib=rb-4.1.0&q=85',
        },
    ];

    return (
        <section id="blog" className="py-20 bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Header */}
                <div className="text-center mb-16">
                    <h2 className="text-4xl lg:text-5xl font-bold text-black mb-4">
                        Blog
                    </h2>
                    <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                        Insights, education, and tips on recovery and therapy
                    </p>
                    <div className="w-20 h-1 bg-[#D32F2F] mx-auto mt-6"></div>
                </div>

                {/* Blog Posts Grid */}
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {posts.map((post) => (
                        <a
                            key={post.slug}
                            href={`/blog/${post.slug}`}
                            className="group bg-white rounded-3xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border border-gray-100"
                        >
                            {/* Image */}
                            <div className="relative overflow-hidden h-56">
                                <img
                                    src={post.image}
                                    alt={post.title}
                                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent"></div>
                                <div className="absolute bottom-4 left-4 flex space-x-2">
                                    {post.tags.map((tag, i) => (
                                        <span
                                            key={i}
                                            className="bg-white/90 text-[#D32F2F] px-3 py-1 rounded-full text-xs font-semibold"
                                        >
                                            {tag}
                                        </span>
                                    ))}
                                </div>
                            </div>

                            {/* Content */}
                            <div className="p-6">
                                <div className="flex items-center space-x-4 text-sm text-gray-500 mb-3">
                                    <span className="flex items-center space-x-1">
                                        <Calendar size={14} />
                                        <span>{post.date}</span>
                                    </span>
                                    <span className="flex items-center space-x-1">
                                        <BookOpen size={14} />
                                        <span>{post.readTime}</span>
                                    </span>
                                </div>
                                <h3 className="text-xl font-bold text-black mb-3 group-hover:text-[#D32F2F] transition-colors">
                                    {post.title}
                                </h3>
                                <p className="text-gray-600 leading-relaxed mb-4">{post.excerpt}</p>
                                <div className="flex items-center text-[#D32F2F] font-semibold">
                                    <span>Read More</span>
                                    <ArrowRight
                                        size={16}
                                        className="ml-2 group-hover:translate-x-2 transition-transform duration-200"
                                    />
                                </div>
                            </div>
                        </a>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Blog;
