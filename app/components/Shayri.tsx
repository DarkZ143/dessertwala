"use client";

import { motion } from "framer-motion";
import { Sparkles } from "lucide-react";

export default function ShayriSection() {
    return (
        <section className="relative overflow-hidden bg-linear-to-b from-[#FFF7F0] via-[#FFF3EA] to-[#FFECDD] py-28">
            {/* AMBIENT GLOWS */}
            <div className="absolute -left-25 top-10 h-72 w-72 rounded-full bg-pink-300/20 blur-3xl" />

            <div className="absolute -right-30 bottom-0 h-80 w-80 rounded-full bg-orange-300/20 blur-3xl" />

            {/* CONTENT */}
            <div className="relative z-10 mx-auto max-w-5xl px-6 text-center">
                {/* TOP BADGE */}
                <motion.div
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
                        duration: 0.6,
                    }}
                    className="mb-8 inline-flex items-center gap-2 rounded-full border border-[#F7D8C7] bg-white/70 px-5 py-2 shadow-[0_5px_20px_rgba(0,0,0,0.05)] backdrop-blur-xl"
                >
                    <Sparkles
                        size={16}
                        className="text-pink-500"
                    />

                    <span className="text-sm font-semibold tracking-wide text-[#8B5E4A]">
                        Sweetness of Life
                    </span>
                </motion.div>

                {/* SHAYRI */}
                <motion.div
                    initial={{
                        opacity: 0,
                        y: 40,
                    }}
                    whileInView={{
                        opacity: 1,
                        y: 0,
                    }}
                    viewport={{
                        once: true,
                    }}
                    transition={{
                        duration: 0.8,
                    }}
                    className="relative overflow-hidden rounded-[40px] border border-white/50 bg-white/50 px-8 py-14 shadow-[0_15px_50px_rgba(0,0,0,0.08)] backdrop-blur-3xl md:px-16"
                >
                    {/* INNER GLOW */}
                    <div className="absolute inset-0 bg-linear-to-br from-pink-100/20 via-orange-100/10 to-yellow-100/20" />

                    {/* QUOTE ICON */}
                    <div className="absolute left-10 top-8 text-7xl font-black text-pink-200/40">
                        “
                    </div>

                    {/* TEXT */}
                    <div className="relative z-10">
                        <motion.h2
                            initial={{
                                opacity: 0,
                                scale: 0.96,
                            }}
                            whileInView={{
                                opacity: 1,
                                scale: 1,
                            }}
                            transition={{
                                delay: 0.2,
                                duration: 0.6,
                            }}
                            className="font-serif text-3xl font-bold leading-relaxed tracking-wide text-[#4A2C1D] md:text-5xl"
                        >
                            Zeher ki Zindagi me
                            <br />
                            <span className="bg-linear-to-r from-pink-500 via-orange-400 to-yellow-500 bg-clip-text text-transparent">
                                Thoda ullass bhar lo
                            </span>
                            <br />
                            zindagi ke har pal me
                            <br />
                            <span className="bg-linear-to-r from-pink-500 via-orange-400 to-yellow-500 bg-clip-text text-transparent">
                                Thoda meethas bhar lo
                            </span>
                        </motion.h2>

                        {/* SUBTEXT */}
                        <motion.p
                            initial={{
                                opacity: 0,
                                y: 20,
                            }}
                            whileInView={{
                                opacity: 1,
                                y: 0,
                            }}
                            transition={{
                                delay: 0.4,
                                duration: 0.6,
                            }}
                            className="mx-auto mt-8 max-w-2xl text-base leading-relaxed text-[#8B6E5D] md:text-lg"
                        >
                            Every dessert is not just sweetness —
                            it is a feeling crafted with warmth,
                            emotions, and unforgettable taste.
                        </motion.p>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}