/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import Link from "next/link";
import {
    Mail,
    MapPin,
    Phone,
    Send,
    Sparkles, 
} from "lucide-react";
import {
    FaFacebookF,
    FaInstagram,
    FaXTwitter,
    FaYoutube,
} from "react-icons/fa6";

import { motion } from "framer-motion";
import { useState } from "react";

export default function Footer() {

    const [email, setEmail] = useState("");
    const [loading, setLoading] = useState(false);
    const [message, setMessage] = useState("");

    const handleSubscribe = async (
        e: React.FormEvent
    ) => {
        e.preventDefault();

        try {
            setLoading(true);
            setMessage("");

            const response = await fetch(
                "/api/subscribe",
                {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json",
                    },
                    body: JSON.stringify({
                        email,
                    }),
                }
            );

            const data = await response.json();

            if (!response.ok) {
                throw new Error(
                    data.message ||
                    "Something went wrong"
                );
            }

            setMessage(
                "Subscribed Successfully ✨"
            );

            setEmail("");

        } catch (error: any) {
            setMessage(
                error.message ||
                "Subscription Failed"
            );
        } finally {
            setLoading(false);
        }
    };

    return (
        <footer className="relative overflow-hidden bg-[#120C09] pt-28 text-white">

            {/* TOP GLOW */}
            <div className="absolute -left-32 top-0 h-112.5 w-112.5 rounded-full bg-pink-500/10 blur-3xl" />

            <div className="absolute -right-32 bottom-0 h-112.5 w-112.5 rounded-full bg-orange-500/10 blur-3xl" />

            {/* NEWSLETTER */}
            <div className="relative z-10 mx-auto max-w-7xl px-6 lg:px-10">

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
                    className="relative overflow-hidden rounded-[40px] border border-white/10 bg-white/5 p-8 shadow-[0_20px_60px_rgba(0,0,0,0.25)] backdrop-blur-3xl lg:p-14"
                >

                    {/* INNER GLOW */}
                    <div className="absolute inset-0 bg-linear-to-br from-pink-500/10 via-orange-500/5 to-yellow-500/10" />

                    <div className="relative z-10 grid gap-10 lg:grid-cols-2 lg:items-center">

                        {/* LEFT */}
                        <div>

                            <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-5 py-2 backdrop-blur-xl">

                                <Sparkles
                                    size={16}
                                    className="text-pink-400"
                                />

                                <span className="text-sm font-bold tracking-wide text-white/80">
                                    Sweet Updates
                                </span>
                            </div>

                            <h2 className="text-4xl font-black leading-tight text-white md:text-5xl">
                                Join The
                                <span className="bg-linear-to-r from-pink-400 via-orange-300 to-yellow-300 bg-clip-text text-transparent">
                                    {" "}
                                    DessertWala
                                </span>
                                <br />
                                Sweet Community
                            </h2>

                            <p className="mt-6 max-w-xl text-base leading-relaxed text-white/60 md:text-lg">
                                Get exclusive offers, cashback rewards,
                                premium dessert launches, and delicious
                                sweetness directly to your inbox.
                            </p>
                        </div>

                        {/* RIGHT */}
                        <div>

                            <form
                                onSubmit={handleSubscribe}
                                className="space-y-5"
                            >

                                <div className="flex flex-col gap-4 sm:flex-row">

                                    <input
                                        type="email"
                                        required
                                        value={email}
                                        onChange={(e) =>
                                            setEmail(e.target.value)
                                        }
                                        placeholder="Enter your email address"
                                        className="h-16 flex-1 rounded-2xl border border-white/10 bg-white/5 px-6 text-white outline-none backdrop-blur-2xl placeholder:text-white/40 focus:border-pink-400"
                                    />

                                    <button
                                        type="submit"
                                        disabled={loading}
                                        className="group flex h-16 items-center justify-center gap-3 rounded-2xl bg-linear-to-r from-pink-500 via-orange-400 to-yellow-300 px-8 font-bold text-white shadow-[0_10px_30px_rgba(255,120,120,0.3)] transition duration-300 hover:scale-[1.02]"
                                    >
                                        <Send
                                            size={18}
                                            className="transition duration-300 group-hover:translate-x-1"
                                        />

                                        {loading
                                            ? "Subscribing..."
                                            : "Subscribe"}
                                    </button>
                                </div>

                                {message && (
                                    <p className="text-sm font-medium text-pink-300">
                                        {message}
                                    </p>
                                )}
                            </form>
                        </div>
                    </div>
                </motion.div>

                {/* FOOTER GRID */}
                <div className="grid gap-12 border-b border-white/10 py-20 md:grid-cols-2 xl:grid-cols-5">

                    {/* BRAND */}
                    <div className="xl:col-span-2">

                        <div className="flex items-center gap-4">

                            <div className="flex h-16 w-16 items-center justify-center rounded-3xl bg-linear-to-br from-pink-500 via-orange-400 to-yellow-300 shadow-[0_10px_30px_rgba(255,120,120,0.3)]">
                                🍰
                            </div>

                            <div>
                                <h2 className="text-4xl font-black text-white">
                                    DessertWala
                                </h2>

                                <p className="mt-1 text-sm text-white/50">
                                    Sweetness Delivered
                                </p>
                            </div>
                        </div>

                        <p className="mt-8 max-w-xl text-base leading-relaxed text-white/60">
                            DessertWala is India’s premium dessert marketplace
                            connecting sweet lovers with handcrafted luxury
                            desserts, pastries, cakes, waffles, chocolates,
                            and unforgettable sweetness experiences.
                        </p>

                        {/* CONTACT */}
                        <div className="mt-8 space-y-4">

                            <div className="flex items-center gap-4 text-white/70">
                                <Mail
                                    size={18}
                                    className="text-pink-400"
                                />

                                support@dessertwala.com
                            </div>

                            <div className="flex items-center gap-4 text-white/70">
                                <Phone
                                    size={18}
                                    className="text-orange-300"
                                />

                                +91 9876543210
                            </div>

                            <div className="flex items-center gap-4 text-white/70">
                                <MapPin
                                    size={18}
                                    className="text-yellow-300"
                                />

                                Lucknow, Uttar Pradesh, India
                            </div>
                        </div>

                        {/* SOCIALS */}
                        <div className="mt-8 flex flex-wrap gap-4">

                            {[
                                FaFacebookF,
                                FaInstagram,
                                FaXTwitter,
                                FaYoutube,
                            ].map((Icon, index) => (
                                <motion.button
                                    key={index}
                                    whileHover={{
                                        y: -4,
                                    }}
                                    className="flex h-14 w-14 items-center justify-center rounded-2xl border border-white/10 bg-white/5 backdrop-blur-2xl transition duration-300 hover:bg-white/10"
                                >
                                    <Icon
                                        size={20}
                                        className="text-white"
                                    />
                                </motion.button>
                            ))}
                        </div>
                    </div>

                    {/* QUICK LINKS */}
                    <div>

                        <h3 className="text-2xl font-black text-white">
                            Quick Links
                        </h3>

                        <div className="mt-8 space-y-5">

                            {[
                                "Home",
                                "Desserts",
                                "Categories",
                                "Trending",
                                "Offers",
                                "Gift Boxes",
                                "Premium Cakes",
                                "About Us",
                            ].map((item) => (
                                <Link
                                    key={item}
                                    href="#"
                                    className="block text-base text-white/60 transition duration-300 hover:text-pink-300"
                                >
                                    {item}
                                </Link>
                            ))}
                        </div>
                    </div>

                    {/* SUPPORT */}
                    <div>

                        <h3 className="text-2xl font-black text-white">
                            Support
                        </h3>

                        <div className="mt-8 space-y-5">

                            {[
                                "Help Center",
                                "Track Order",
                                "Shipping",
                                "Refund Policy",
                                "Cancellation",
                                "FAQs",
                                "Customer Care",
                                "Live Chat",
                            ].map((item) => (
                                <Link
                                    key={item}
                                    href="#"
                                    className="block text-base text-white/60 transition duration-300 hover:text-orange-300"
                                >
                                    {item}
                                </Link>
                            ))}
                        </div>
                    </div>

                    {/* BUSINESS */}
                    <div>

                        <h3 className="text-2xl font-black text-white">
                            Business
                        </h3>

                        <div className="mt-8 space-y-5">

                            {[
                                "Partner With Us",
                                "Become Seller",
                                "Vendor Dashboard",
                                "Affiliate Program",
                                "Bulk Orders",
                                "Corporate Gifts",
                                "Advertise",
                                "Franchise",
                            ].map((item) => (
                                <Link
                                    key={item}
                                    href="#"
                                    className="block text-base text-white/60 transition duration-300 hover:text-yellow-300"
                                >
                                    {item}
                                </Link>
                            ))}
                        </div>
                    </div>
                </div>

                {/* BOTTOM BAR */}
                <div className="flex flex-col gap-6 py-8 text-center lg:flex-row lg:items-center lg:justify-between lg:text-left">

                    <p className="text-sm text-white/40">
                        © 2026 DessertWala. All Rights Reserved.
                    </p>

                    <div className="flex flex-wrap items-center justify-center gap-6 text-sm text-white/40 lg:justify-end">

                        <Link
                            href="#"
                            className="transition duration-300 hover:text-white"
                        >
                            Privacy Policy
                        </Link>

                        <Link
                            href="#"
                            className="transition duration-300 hover:text-white"
                        >
                            Terms & Conditions
                        </Link>

                        <Link
                            href="#"
                            className="transition duration-300 hover:text-white"
                        >
                            Cookies Policy
                        </Link>
                    </div>
                </div>
            </div>
        </footer>
    );
}


