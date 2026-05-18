"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import {
    MessageCircle,
    Star,
} from "lucide-react";

const desserts = [
    {
        title: "Chocolate",
        desc: "Rich Belgian chocolate crafted with creamy luxury textures.",
        rating: 4.9,
        reviews: 128,
        image:
            "https://images.unsplash.com/photo-1511381939415-e44015466834?w=1600&q=100&auto=format&fit=crop",
    },
    {
        title: "Donuts",
        desc: "Soft premium donuts glazed with caramel sweetness.",
        rating: 4.7,
        reviews: 96,
        image:
            "https://images.unsplash.com/photo-1530016555861-3d1f3f5ca94b?w=1600&q=100&auto=format&fit=crop",
    },
    {
        title: "Waffles",
        desc: "Golden crispy waffles topped with premium chocolate drizzle.",
        rating: 4.8,
        reviews: 174,
        image:
            "https://images.unsplash.com/photo-1562513872-634b8fae6dbe?w=1600&q=100&auto=format&fit=crop",
    },
    {
        title: "Ice Cream",
        desc: "Luxury creamy scoops blended with unforgettable flavors.",
        rating: 4.9,
        reviews: 212,
        image:
            "https://images.unsplash.com/photo-1570197788417-0e82375c9371?w=1600&q=100&auto=format&fit=crop",
    },
    {
        title: "Cupcakes",
        desc: "Freshly baked cupcakes with silky creamy frosting.",
        rating: 4.6,
        reviews: 88,
        image:
            "https://images.unsplash.com/photo-1486427944299-d1955d23e34d?w=1600&q=100&auto=format&fit=crop",
    },
    {
        title: "Pastries",
        desc: "Premium layered pastries with soft buttery textures.",
        rating: 4.8,
        reviews: 142,
        image:
            "https://images.unsplash.com/photo-1623334044303-241021148842?w=1600&q=100&auto=format&fit=crop",
    },
    {
        title: "Cookies",
        desc: "Crunchy handmade cookies baked with premium butter.",
        rating: 4.5,
        reviews: 76,
        image:
            "https://images.unsplash.com/photo-1499636136210-6f4ee915583e?w=1600&q=100&auto=format&fit=crop",
    },
    {
        title: "Cheesecake",
        desc: "Smooth creamy cheesecake layered with berry richness.",
        rating: 5.0,
        reviews: 264,
        image:
            "https://images.unsplash.com/photo-1533134242443-d4fd215305ad?w=1600&q=100&auto=format&fit=crop",
    },
];

export default function DessertCarousel() {

    return (
        <section className="relative overflow-hidden bg-linear-to-b from-[#FFFDFB] via-[#FFF7F0] to-[#FFF0E6] py-24">

            {/* AMBIENT GLOWS */}
            <div className="absolute -left-24 top-10 h-80 w-80 rounded-full bg-pink-300/20 blur-3xl" />

            <div className="absolute -right-24 bottom-0 h-80 w-80 rounded-full bg-orange-300/20 blur-3xl" />

            {/* HEADING */}
            <div className="relative z-10 mb-14 text-center">

                <motion.h2
                    initial={{
                        opacity: 0,
                        y: 30,
                    }}
                    whileInView={{
                        opacity: 1,
                        y: 0,
                    }}
                    viewport={{
                        once: true,
                    }}
                    transition={{
                        duration: 0.6,
                    }}
                    className="text-4xl font-black text-[#3A1F14] md:text-6xl"
                >
                    Taste The
                    <span className="bg-linear-to-r from-pink-500 via-orange-400 to-yellow-500 bg-clip-text text-transparent">
                        {" "}
                        Sweetness
                    </span>
                </motion.h2>

                <motion.p
                    initial={{
                        opacity: 0,
                        y: 20,
                    }}
                    whileInView={{
                        opacity: 1,
                        y: 0,
                    }}
                    viewport={{
                        once: true,
                    }}
                    transition={{
                        delay: 0.1,
                    }}
                    className="mx-auto mt-5 max-w-2xl text-base leading-relaxed text-[#8B6E5D] md:text-lg"
                >
                    Explore handcrafted premium desserts made
                    with luxury ingredients and unforgettable taste.
                </motion.p>
            </div>

            {/* CAROUSEL */}
            <div className="relative overflow-hidden">

                {/* LEFT FADE */}
                <div className="absolute left-0 top-0 z-20 h-full w-24 bg-linear-to-r from-[#FFF5EE] to-transparent" />

                {/* RIGHT FADE */}
                <div className="absolute right-0 top-0 z-20 h-full w-24 bg-linear-to-l from-[#FFF5EE] to-transparent" />

                {/* SCROLL TRACK */}
                <motion.div
                    animate={{
                        x: ["0%", "-50%"],
                    }}
                    transition={{
                        repeat: Infinity,
                        duration: 28,
                        ease: "linear",
                    }}
                    className="flex w-max gap-6"
                >

                    {[...desserts, ...desserts].map(
                        (item, index) => (
                            <motion.div
                                key={index}
                                whileHover={{
                                    y: -8,
                                }}
                                className="group relative h-107.5 w-72.5 overflow-hidden rounded-[36px] border border-white/40 bg-white/40 shadow-[0_15px_50px_rgba(0,0,0,0.06)] backdrop-blur-3xl"
                            >

                                {/* IMAGE */}
                                <div className="relative h-full w-full overflow-hidden">

                                    <Image
                                        src={item.image}
                                        alt={item.title}
                                        width={1200}
                                        height={1200}
                                        quality={100}
                                        placeholder="empty"
                                        sizes="(max-width: 768px) 100vw, 25vw"
                                        className="h-full w-full object-cover transition duration-700 group-hover:scale-110"
                                    />

                                    {/* OVERLAY */}
                                    <div className="absolute inset-0 bg-linear-to-t from-[#120C09]/85 via-[#120C09]/20 to-transparent" />

                                    {/* CONTENT */}
                                    <div className="absolute bottom-0 left-0 z-10 w-full p-6">

                                        {/* TAG */}
                                        <div className="mb-4 inline-flex rounded-full border border-white/10 bg-white/10 px-4 py-2 backdrop-blur-xl">
                                            <span className="text-xs font-bold tracking-wide text-white">
                                                PREMIUM DESSERT
                                            </span>
                                        </div>

                                        {/* TITLE */}
                                        <h3 className="text-3xl font-black text-white">
                                            {item.title}
                                        </h3>

                                        {/* DESCRIPTION */}
                                        <p className="mt-3 text-sm leading-relaxed text-white/70">
                                            {item.desc}
                                        </p>

                                        {/* REVIEWS */}
                                        <div className="mt-5 flex items-center justify-between">

                                            {/* LEFT */}
                                            <div className="flex items-center gap-2">

                                                {/* STARS */}
                                                <div className="flex items-center gap-1">

                                                    {[1, 2, 3, 4, 5].map(
                                                        (star) => (
                                                            <Star
                                                                key={star}
                                                                size={13}
                                                                className="fill-yellow-400 text-yellow-400"
                                                            />
                                                        )
                                                    )}
                                                </div>

                                                {/* RATING */}
                                                <span className="text-sm font-semibold text-white">
                                                    {item.rating}
                                                </span>
                                            </div>

                                            {/* REVIEW BUTTON */}
                                            <button className="group flex items-center gap-2 rounded-full border border-white/10 bg-white/10 px-3 py-2 backdrop-blur-xl transition duration-300 hover:bg-white/20">

                                                <MessageCircle
                                                    size={14}
                                                    className="text-pink-300"
                                                />

                                                <span className="text-xs font-bold tracking-wide text-white">
                                                    {item.reviews} Reviews
                                                </span>
                                            </button>
                                        </div>
                                    </div>
                                </div>

                                {/* HOVER GLOW */}
                                <div className="absolute inset-0 bg-linear-to-br from-pink-200/0 via-orange-100/0 to-yellow-100/0 opacity-0 transition duration-500 group-hover:opacity-100" />
                            </motion.div>
                        )
                    )}
                </motion.div>
            </div>
        </section>
    );
}