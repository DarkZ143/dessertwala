/* eslint-disable react-hooks/set-state-in-effect */
/* eslint-disable react-hooks/purity */
"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import {
    Heart,
    ShoppingCart,
    Sparkles,
    Star,
} from "lucide-react";
import { useEffect, useState } from "react";

const allProducts = [
    {
        title: "Chocolate Lava",
        desc: "Warm molten chocolate with creamy sweetness.",
        price: "₹299",
        image:
            "https://images.unsplash.com/photo-1606313564200-e75d5e30476c?w=1200&q=100&auto=format&fit=crop",
    },
    {
        title: "Strawberry Bliss",
        desc: "Fresh strawberry cream layered cake delight.",
        price: "₹349",
        image:
            "https://images.unsplash.com/photo-1551024601-bec78aea704b?w=1200&q=100&auto=format&fit=crop",
    },
    {
        title: "Golden Waffle",
        desc: "Luxury waffles with caramel toppings.",
        price: "₹259",
        image:
            "https://images.unsplash.com/photo-1562513872-634b8fae6dbe?w=1200&q=100&auto=format&fit=crop",
    },
    {
        title: "Brownie Heaven",
        desc: "Rich fudgy brownies with cocoa textures.",
        price: "₹279",
        image:
            "https://images.unsplash.com/photo-1607920591413-4ec007e70023?w=1200&q=100&auto=format&fit=crop",
    },
    {
        title: "Ice Cream Royale",
        desc: "Luxury vanilla cream with chocolate syrup.",
        price: "₹219",
        image:
            "https://images.unsplash.com/photo-1570197788417-0e82375c9371?w=1200&q=100&auto=format&fit=crop",
    },
    {
        title: "Cupcake Fantasy",
        desc: "Soft creamy cupcakes with sweetness inside.",
        price: "₹189",
        image:
            "https://images.unsplash.com/photo-1486427944299-d1955d23e34d?w=1200&q=100&auto=format&fit=crop",
    },
    {
        title: "Caramel Pastry",
        desc: "Fresh layered caramel pastry premium edition.",
        price: "₹229",
        image:
            "https://images.unsplash.com/photo-1623334044303-241021148842?w=1200&q=100&auto=format&fit=crop",
    },
    {
        title: "Cookie Crunch",
        desc: "Crunchy cookies baked with premium butter.",
        price: "₹149",
        image:
            "https://images.unsplash.com/photo-1499636136210-6f4ee915583e?w=1200&q=100&auto=format&fit=crop",
    },
    {
        title: "Velvet Cake",
        desc: "Soft red velvet luxury cream experience.",
        price: "₹399",
        image:
            "https://images.unsplash.com/photo-1614707267537-b85aaf00c4b7?w=1200&q=100&auto=format&fit=crop",
    },
    {
        title: "Donut Magic",
        desc: "Premium donuts glazed with chocolate syrup.",
        price: "₹199",
        image:
            "https://images.unsplash.com/photo-1530016555861-3d1f3f5ca94b?w=1600&q=100&auto=format&fit=crop",
    },
    {
        title: "Macaron Luxury",
        desc: "Colorful French macarons with elegance.",
        price: "₹449",
        image:
            "https://images.unsplash.com/photo-1569864358642-9d1684040f43?w=1200&q=100&auto=format&fit=crop",
    },
    {
        title: "Mithai Box",
        desc: "Traditional sweetness with modern luxury.",
        price: "₹499",
        image:
            "https://images.unsplash.com/photo-1747227231303-7731e2f7dd85?w=1600&q=100&auto=format&fit=crop",
    },
    {
        title: "Creamy Cheesecake",
        desc: "Smooth cheesecake with berry toppings.",
        price: "₹379",
        image:
            "https://images.unsplash.com/photo-1533134242443-d4fd215305ad?w=1200&q=100&auto=format&fit=crop",
    },
    {
        title: "Coffee Dessert",
        desc: "Coffee infused creamy dessert pleasure.",
        price: "₹289",
        image:
            "https://images.unsplash.com/photo-1571115177098-24ec42ed204d?w=1200&q=100&auto=format&fit=crop",
    },
    {
        title: "Choco Pancakes",
        desc: "Soft pancakes with rich chocolate drizzle.",
        price: "₹329",
        image:
            "https://images.unsplash.com/photo-1528207776546-365bb710ee93?w=1200&q=100&auto=format&fit=crop",
    },
    {
        title: "Luxury Sundae",
        desc: "Ice cream sundae topped with sweetness.",
        price: "₹269",
        image:
            "https://images.unsplash.com/photo-1563805042-7684c019e1cb?w=1200&q=100&auto=format&fit=crop",
    },
];

export default function FeaturedProducts() {

    const [featuredProducts, setFeaturedProducts] = useState(allProducts.slice(0, 8));

    useEffect(() => {

        const shuffleArray = (array: typeof allProducts) => {
            const shuffled = [...array];

            for (let i = shuffled.length - 1; i > 0; i--) {

                const j = Math.floor(
                    Math.random() * (i + 1)
                );

                [shuffled[i], shuffled[j]] = [
                    shuffled[j],
                    shuffled[i],
                ];
            }

            return shuffled;
        };

        const randomizedProducts = shuffleArray(allProducts)
            .slice(0, 8);

        setFeaturedProducts(randomizedProducts);

    }, []);

    return (
        <section className="relative overflow-hidden bg-linear-to-b from-[#FFF0E6] via-[#FFF6EF] to-[#FFFDFB] py-28">

            {/* AMBIENT GLOWS */}
            <div className="absolute -left-25 top-20 h-96 w-96 rounded-full bg-pink-300/20 blur-3xl" />

            <div className="absolute -right-30 bottom-0 h-112.5 w-112.5 rounded-full bg-orange-300/20 blur-3xl" />

            <div className="relative z-10 mx-auto max-w-362.5 px-6 lg:px-10">

                {/* TOP HEADING */}
                <div className="mb-16 flex flex-col items-center text-center">

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
                            Featured Sweetness
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
                            duration: 0.7,
                        }}
                        className="max-w-3xl text-4xl font-black leading-tight text-[#3A1F14] md:text-6xl"
                    >
                        Crafted For
                        <span className="bg-linear-to-r from-pink-500 via-orange-400 to-yellow-500 bg-clip-text text-transparent">
                            {" "}
                            Luxury Taste
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
                        className="mt-6 max-w-2xl text-base leading-relaxed text-[#8B6E5D] md:text-lg"
                    >
                        Handcrafted premium desserts designed to
                        bring sweetness, luxury, and unforgettable
                        moments to your life.
                    </motion.p>
                </div>

                {/* PRODUCTS GRID */}
                <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 xl:grid-cols-4">

                    {featuredProducts.map((product, index) => (
                        <motion.div
                            key={product.title}
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
                                delay: index * 0.05,
                                duration: 0.5,
                            }}
                            whileHover={{
                                y: -8,
                            }}
                            className="group relative overflow-hidden rounded-[34px] border border-white/40 bg-white/50 shadow-[0_15px_50px_rgba(0,0,0,0.06)] backdrop-blur-3xl"
                        >

                            {/* CARD GLOW */}
                            <div className="absolute inset-0 bg-linear-to-br from-pink-100/10 via-orange-100/5 to-yellow-100/10 opacity-0 transition duration-500 group-hover:opacity-100" />

                            {/* IMAGE */}
                            <div className="relative h-70 overflow-hidden">

                                {/* WISHLIST */}
                                <button className="absolute right-4 top-4 z-20 flex h-11 w-11 items-center justify-center rounded-2xl border border-white/20 bg-white/20 backdrop-blur-xl transition-all duration-300 hover:scale-105 hover:bg-white/30">
                                    <Heart
                                        size={18}
                                        className="text-white"
                                    />
                                </button>

                                <Image
                                    src={product.image}
                                    alt={product.title}
                                    width={1000}
                                    height={1000}
                                    quality={100}
                                    className="h-full w-full object-cover transition duration-700 group-hover:scale-110"
                                />

                                {/* OVERLAY */}
                                <div className="absolute inset-0 bg-linear-to-t from-[#120C09]/60 via-transparent to-transparent" />

                                {/* PRICE */}
                                <div className="absolute bottom-4 left-4 rounded-2xl bg-white/20 px-4 py-2 backdrop-blur-xl">
                                    <span className="text-sm font-bold text-white">
                                        {product.price}
                                    </span>
                                </div>
                            </div>

                            {/* CONTENT */}
                            <div className="relative z-10 p-6">

                                {/* RATING */}
                                <div className="mb-3 flex items-center gap-1">
                                    {[1, 2, 3, 4, 5].map((item) => (
                                        <Star
                                            key={item}
                                            size={14}
                                            className="fill-yellow-400 text-yellow-400"
                                        />
                                    ))}

                                    <span className="ml-2 text-sm font-medium text-[#8B6E5D]">
                                        5.0
                                    </span>
                                </div>

                                {/* TITLE */}
                                <h3 className="text-2xl font-black text-[#3A1F14]">
                                    {product.title}
                                </h3>

                                {/* DESCRIPTION */}
                                <p className="mt-3 text-sm leading-relaxed text-[#8B6E5D]">
                                    {product.desc}
                                </p>

                                {/* BUTTONS */}
                                <div className="mt-6 flex items-center gap-3">

                                    {/* ADD TO CART */}
                                    <button className="flex flex-1 items-center justify-center gap-2 rounded-2xl border border-[#F4D3C1] bg-white/80 px-4 py-3 text-sm font-bold text-[#5A3825] shadow-sm backdrop-blur-xl transition-all duration-300 hover:scale-[1.02] hover:bg-white">
                                        <ShoppingCart size={16} />

                                        Add
                                    </button>

                                    {/* BUY NOW */}
                                    <button className="flex-1 rounded-2xl bg-linear-to-r from-pink-500 via-orange-400 to-yellow-300 px-4 py-3 text-sm font-bold text-white shadow-[0_8px_25px_rgba(255,120,120,0.3)] transition-all duration-300 hover:scale-[1.02]">
                                        Buy
                                    </button>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}