"use client";

import { motion } from "framer-motion";
import {
    BadgeCheck,
    Bike,
    HeartHandshake,
    ShieldCheck,
    Sparkles,
    WalletCards,
} from "lucide-react";

const trustFeatures = [
    {
        title: "Secure Payments",
        desc: "100% secure transactions powered by trusted payment partners.",
        icon: ShieldCheck,
        gradient:
            "from-blue-500 via-cyan-400 to-sky-300",
        brands: [
            "PhonePe",
            "Paytm",
            "BharatPe",
            "Google Pay",
            "PayPal",
            "Amazon Pay",
            "Apple Pay",
            "Credit/Debit Cards",
            "UPI",
            "Cash on Delivery",
        ],
    },
    {
        title: "Fastest Delivery",
        desc: "Lightning fast doorstep delivery with real-time order tracking.",
        icon: Bike,
        gradient:
            "from-orange-500 via-amber-400 to-yellow-300",
        brands: [
            "10-20 Min",
            "Live Tracking",
            "Fresh Packed",
            "Contactless Delivery",
            "Late Night Delivery",
            "Express Delivery",
            "Priority Orders", 
            "Scheduled Delivery",
        ],
    },
    {
        title: "Hygiene Maintained",
        desc: "Premium cleanliness and food safety maintained in every order.",
        icon: BadgeCheck,
        gradient:
            "from-emerald-500 via-green-400 to-lime-300",
        brands: [
            "Certified",
            "Fresh Kitchen",
            "Safe Packing",
            "Daily Sanitization",
            "Premium Ingredients",
            "Gloves & Masks",
            "Temperature Control",
            "Quality Checked",
        ],
    },
    {
        title: "Assured Cashbacks",
        desc: "Exciting cashback rewards and sweet discount offers everyday.",
        icon: WalletCards,
        gradient:
            "from-pink-500 via-rose-400 to-orange-300",
        brands: [
            "Flat ₹100 Off",
            "Rewards",
            "Coupons",
            "Festival Offers",
            "Refer & Earn",
            "First Order Deals",
            "Wallet Cashback",
            "Loyalty Points",
        ],
    },
    {
        title: "Trusted Support",
        desc: "Friendly customer support available anytime for your assistance.",
        icon: HeartHandshake,
        gradient:
            "from-violet-500 via-fuchsia-400 to-pink-300",
        brands: [
            "24x7 Help",
            "Live Chat",
            "Quick Resolve",
            "Instant Refunds",
            "Order Assistance",
            "Friendly Support",
            "Priority Service",
            "Customer Care",
        ],
    },
];

export default function TrustedSection() {

    return (
        <section className="relative overflow-hidden bg-linear-to-b from-[#FFF0E6] via-[#FFF7F0] to-[#FFFDFB] py-28">

            {/* AMBIENT GLOWS */}
            <div className="absolute -left-32 top-10 h-105 w-105 rounded-full bg-pink-300/20 blur-3xl" />

            <div className="absolute -right-32 bottom-0 h-105 w-105 rounded-full bg-orange-300/20 blur-3xl" />

            {/* CONTAINER */}
            <div className="relative z-10 mx-auto max-w-362.5 px-6 lg:px-10">

                {/* TOP HEADING */}
                <div className="mb-16 text-center">

                    {/* BADGE */}
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
                        className="mb-5 inline-flex items-center gap-2 rounded-full border border-[#F7D8C7] bg-white/70 px-5 py-2 shadow-[0_5px_20px_rgba(0,0,0,0.05)] backdrop-blur-xl"
                    >
                        <Sparkles
                            size={15}
                            className="text-pink-500"
                        />

                        <span className="text-sm font-bold tracking-wide text-[#8B5E4A]">
                            Why Customers Trust Us
                        </span>
                    </motion.div>

                    {/* TITLE */}
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
                        className="text-4xl font-black leading-tight text-[#3A1F14] md:text-6xl"
                    >
                        Premium Service
                        <span className="bg-linear-to-r from-pink-500 via-orange-400 to-yellow-500 bg-clip-text text-transparent">
                            {" "}
                            You Can Trust
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
                        viewport={{
                            once: true,
                        }}
                        transition={{
                            delay: 0.1,
                        }}
                        className="mx-auto mt-6 max-w-3xl text-base leading-relaxed text-[#8B6E5D] md:text-lg"
                    >
                        DessertWala delivers not just sweetness,
                        but trust, hygiene, security, and premium
                        customer experience with every order.
                    </motion.p>
                </div>

                {/* TRUST GRID */}
                <div className="grid grid-cols-1 gap-8 md:grid-cols-2 xl:grid-cols-5">

                    {trustFeatures.map((item, index) => {
                        const Icon = item.icon;

                        return (
                            <motion.div
                                key={item.title}
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
                                    delay: index * 0.08,
                                }}
                                whileHover={{
                                    y: -8,
                                }}
                                className="group relative overflow-hidden rounded-[34px] border border-white/40 bg-white/50 p-7 shadow-[0_15px_50px_rgba(0,0,0,0.06)] backdrop-blur-3xl"
                            >

                                {/* HOVER GLOW */}
                                <div className={`absolute inset-0 bg-linear-to-br ${item.gradient} opacity-0 blur-3xl transition duration-500 group-hover:opacity-10`} />

                                {/* ICON */}
                                <div className={`mb-6 flex h-18 w-18 items-center justify-center rounded-[28px] bg-linear-to-br ${item.gradient} shadow-[0_10px_30px_rgba(0,0,0,0.12)]`}>

                                    <Icon
                                        size={30}
                                        className="text-white"
                                    />
                                </div>

                                {/* TITLE */}
                                <h3 className="text-2xl font-black text-[#3A1F14]">
                                    {item.title}
                                </h3>

                                {/* DESC */}
                                <p className="mt-4 text-sm leading-relaxed text-[#8B6E5D]">
                                    {item.desc}
                                </p>

                                {/* TAGS */}
                                <div className="mt-6 flex flex-wrap gap-2">

                                    {item.brands.map((brand) => (
                                        <div
                                            key={brand}
                                            className="rounded-full border border-[#F4D3C1] bg-white/70 px-3 py-2 text-xs font-bold tracking-wide text-[#5A3825] shadow-sm backdrop-blur-xl"
                                        >
                                            {brand}
                                        </div>
                                    ))}
                                </div>
                            </motion.div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}