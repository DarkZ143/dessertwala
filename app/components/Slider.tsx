"use client";

import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight, Star } from "lucide-react";
import { useEffect, useState } from "react";

const slides = [
    {
        image:
            "https://images.unsplash.com/flagged/photo-1554216728-8c7f65f64070?w=2400&q=100&auto=format&fit=crop",
        title: "Luxury Chocolate Delight",
        subtitle: "Crafted with premium cocoa & sweetness",
    },
    {
        image:
            "https://plus.unsplash.com/premium_photo-1705433052912-5e6135454dc2?w=2400&q=100&auto=format&fit=crop",
        title: "Fresh Strawberry Cakes",
        subtitle: "Freshly baked every morning",
    },
    {
        image:
            "https://plus.unsplash.com/premium_photo-1681826507324-0b3c43928753?w=2400&q=100&auto=format&fit=crop",
        title: "Creamy Dessert Collection",
        subtitle: "Luxury pastries & soft cream textures",
    },
    {
        image:
            "https://images.unsplash.com/photo-1562513872-634b8fae6dbe?w=2400&q=100&auto=format&fit=crop",
        title: "Premium Waffle Experience",
        subtitle: "Golden waffles with rich toppings",
    },
];

export default function HeroSlider() {
    const [current, setCurrent] = useState(0);

    const nextSlide = () => {
        setCurrent((prev) => (prev + 1) % slides.length);
    };

    const prevSlide = () => {
        setCurrent((prev) =>
            prev === 0 ? slides.length - 1 : prev - 1
        );
    };

    useEffect(() => {
        const interval = setInterval(() => {
            nextSlide();
        }, 5000);

        return () => clearInterval(interval);
    }, []);

    return (
        <section className="relative h-screen w-full overflow-hidden">
            {/* BACKGROUND SLIDES */}
            <AnimatePresence mode="wait">
                <motion.div
                    key={current}
                    initial={{
                        opacity: 0,
                        scale: 1.08,
                    }}
                    animate={{
                        opacity: 1,
                        scale: 1,
                    }}
                    exit={{
                        opacity: 0,
                    }}
                    transition={{
                        duration: 1,
                    }}
                    className="absolute inset-0"
                >
                    <Image
                        src={slides[current].image}
                        alt={slides[current].title}
                        fill
                        priority
                        quality={100}
                        sizes="100vw"
                        className="object-cover"
                    />

                    {/* DARK OVERLAY */}
                    <div className="absolute inset-0 bg-black/45" />

                    {/* GRADIENT OVERLAY */}
                    <div className="absolute inset-0 bg-linear-to-r from-[#120C09]/80 via-[#120C09]/40 to-transparent" />

                    {/* BLUR GLOW */}
                    <div className="absolute left-20 top-40 h-72 w-72 rounded-full bg-pink-400/20 blur-3xl" />

                    <div className="absolute bottom-20 right-20 h-72 w-72 rounded-full bg-orange-300/20 blur-3xl" />
                </motion.div>
            </AnimatePresence>

            {/* CONTENT */}
            <div className="relative z-20 flex h-full items-center">
                <div className="mx-auto grid w-full max-w-350 grid-cols-1 gap-12 px-6 lg:grid-cols-2 lg:px-10">
                    {/* LEFT TEXT */}
                    <motion.div
                        initial={{
                            opacity: 0,
                            y: 40,
                        }}
                        animate={{
                            opacity: 1,
                            y: 0,
                        }}
                        transition={{
                            duration: 0.8,
                        }}
                        className="flex flex-col justify-center"
                    >
                        {/* BADGE */}
                        <motion.div
                            initial={{
                                opacity: 0,
                                y: 20,
                            }}
                            animate={{
                                opacity: 1,
                                y: 0,
                            }}
                            transition={{
                                delay: 0.2,
                            }}
                            className="mb-6 flex w-fit items-center gap-2 rounded-full border border-white/10 bg-white/10 px-5 py-2 backdrop-blur-xl"
                        >
                            <Star
                                size={15}
                                className="fill-yellow-400 text-yellow-400"
                            />

                            <span className="text-sm font-semibold text-white">
                                Premium Dessert Experience
                            </span>
                        </motion.div>

                        {/* HEADING */}
                        <motion.h1
                            key={slides[current].title}
                            initial={{
                                opacity: 0,
                                y: 30,
                            }}
                            animate={{
                                opacity: 1,
                                y: 0,
                            }}
                            transition={{
                                duration: 0.6,
                            }}
                            className="max-w-175 text-5xl font-black leading-tight text-white md:text-7xl"
                        >
                            {slides[current].title}
                        </motion.h1>

                        {/* SUBTITLE */}
                        <motion.p
                            key={slides[current].subtitle}
                            initial={{
                                opacity: 0,
                                y: 20,
                            }}
                            animate={{
                                opacity: 1,
                                y: 0,
                            }}
                            transition={{
                                delay: 0.1,
                                duration: 0.6,
                            }}
                            className="mt-6 max-w-140 text-lg leading-relaxed text-white/80 md:text-xl"
                        >
                            {slides[current].subtitle}
                        </motion.p>

                        {/* BUTTONS */}
                        <motion.div
                            initial={{
                                opacity: 0,
                                y: 20,
                            }}
                            animate={{
                                opacity: 1,
                                y: 0,
                            }}
                            transition={{
                                delay: 0.3,
                            }}
                            className="mt-10 flex flex-wrap items-center gap-4"
                        >
                            {/* PRIMARY */}
                            <button className="group relative overflow-hidden rounded-2xl bg-linear-to-r from-pink-500 via-orange-400 to-yellow-300 px-8 py-4 text-base font-bold text-white shadow-[0_10px_35px_rgba(255,120,120,0.35)] transition-all duration-300 hover:scale-[1.03]">
                                <span className="relative z-10">
                                    Order Desserts
                                </span>

                                <div className="absolute inset-0 translate-y-full bg-white/20 transition duration-300 group-hover:translate-y-0" />
                            </button>

                            {/* SECONDARY */}
                            <button className="rounded-2xl border border-white/10 bg-white/10 px-8 py-4 text-base font-bold text-white backdrop-blur-xl transition-all duration-300 hover:bg-white/20">
                                Explore Menu
                            </button>
                        </motion.div>
                    </motion.div>
                </div>
            </div>

            {/* SLIDER CONTROLS */}
            <div className="absolute bottom-10 left-1/2 z-30 flex -translate-x-1/2 items-center gap-4">
                {/* PREV */}
                <button
                    onClick={prevSlide}
                    className="flex h-14 w-14 items-center justify-center rounded-2xl border border-white/10 bg-white/10 text-white backdrop-blur-xl transition-all duration-300 hover:scale-105 hover:bg-white/20"
                >
                    <ChevronLeft size={22} />
                </button>

                {/* DOTS */}
                <div className="flex items-center gap-3">
                    {slides.map((_, index) => (
                        <button
                            key={index}
                            onClick={() => setCurrent(index)}
                            className={`transition-all duration-300 ${current === index
                                ? "h-3 w-10 rounded-full bg-linear-to-r from-pink-500 to-orange-300"
                                : "h-3 w-3 rounded-full bg-white/40"
                                }`}
                        />
                    ))}
                </div>

                {/* NEXT */}
                <button
                    onClick={nextSlide}
                    className="flex h-14 w-14 items-center justify-center rounded-2xl border border-white/10 bg-white/10 text-white backdrop-blur-xl transition-all duration-300 hover:scale-105 hover:bg-white/20"
                >
                    <ChevronRight size={22} />
                </button>
            </div>

            {/* FLOATING GLASS CARD */}
            <motion.div
                initial={{
                    opacity: 0,
                    y: 30,
                }}
                animate={{
                    opacity: 1,
                    y: 0,
                }}
                transition={{
                    delay: 0.5,
                }}
                className="absolute bottom-24 right-10 z-20 hidden w-[320px] rounded-3xl border border-white/10 bg-white/10 p-5 shadow-[0_10px_40px_rgba(0,0,0,0.2)] backdrop-blur-2xl lg:block"
            >
                <div className="flex items-center gap-4">
                    <div className="h-16 w-16 overflow-hidden rounded-2xl">
                        <Image
                            src="https://images.unsplash.com/photo-1578985545062-69928b1d9587?q=80&w=800&auto=format&fit=crop"
                            alt="Dessert"
                            width={100}
                            height={100}
                            className="h-full w-full object-cover"
                        />
                    </div>

                    <div>
                        <h3 className="text-lg font-bold text-white">
                            Chocolate Lava
                        </h3>

                        <p className="mt-1 text-sm text-white/70">
                            Rich creamy sweetness
                        </p>

                        <div className="mt-2 flex items-center gap-1">
                            {[1, 2, 3, 4, 5].map((item) => (
                                <Star
                                    key={item}
                                    size={13}
                                    className="fill-yellow-400 text-yellow-400"
                                />
                            ))}
                        </div>
                    </div>
                </div>
            </motion.div>
        </section>
    );
}