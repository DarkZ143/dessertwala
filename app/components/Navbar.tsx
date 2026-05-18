/* eslint-disable react-hooks/set-state-in-effect */
"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import {
    ChevronDown,
    Menu,
    Sparkles,
    User2,
    X,
} from "lucide-react";
import Image from "next/image";
import Logo from "../../public/dessertwala.png"

const categories = [
    "Cakes",
    "Pastries",
    "Brownies",
    "Ice Cream",
    "Waffles",
    "Cookies",
    "Mithai",
    "Chocolates",
];

export default function Navbar() {
    const [mobileMenu, setMobileMenu] = useState(false);
    const [dropdown, setDropdown] = useState(false);
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 20);
        };

        window.addEventListener("scroll", handleScroll, {
            passive: true,
        });

        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    return (
        <>
            <motion.nav
                initial={{
                    y: -80,
                    opacity: 0,
                }}
                animate={{
                    y: 0,
                    opacity: 1,
                }}
                transition={{
                    duration: 0.5,
                }}
                className={`fixed top-0 left-0 z-50 w-full transition-all duration-500 ${scrolled
                    ? "border-b border-[#F3D9CB] bg-[#FFF8F0]/80 shadow-[0_10px_40px_rgba(0,0,0,0.08)] backdrop-blur-3xl"
                    : "bg-transparent"
                    }`}
            >
                {/* Ambient Glow */}
                <div className="absolute inset-0 -z-10 bg-linear-to-r from-pink-100/20 via-orange-100/10 to-yellow-100/20 blur-3xl dark:from-pink-900/10 dark:via-orange-900/5 dark:to-yellow-900/10" />

                <div className="mx-auto flex h-20 max-w-350 items-center justify-between px-6 lg:px-10">
                    {/* LEFT BRANDING */}
                    <Link href="/">
                        <motion.div
                            whileHover={{
                                scale: 1.02,
                            }}
                            className="flex cursor-pointer items-center gap-3"
                        >
                            <motion.div
                                animate={{
                                    y: [0, -4, 0],
                                }}
                                transition={{
                                    repeat: Infinity,
                                    duration: 3,
                                }}
                                className="relative flex h-12 w-12 items-center justify-center overflow-hidden rounded-2xl bg-linear-to-br from-pink-500 via-orange-400 to-yellow-300 shadow-[0_8px_25px_rgba(255,120,120,0.35)]"
                            >
                                <div className="absolute inset-0 bg-white/20" />

                                <Image
                                    src={Logo}
                                    alt="DessertWala Logo"
                                    fill
                                    priority
                                    quality={100}
                                    sizes="100vw"
                                    className="object-cover"
                                />
                            </motion.div>

                            <div className="flex flex-col leading-none">
                                <span className="bg-linear-to-r from-[#3A1F14] via-[#FF4F87] to-[#D97706] bg-clip-text text-[30px] font-black tracking-tight text-transparent dark:from-[#FFF1E8] dark:via-[#FF9DBD] dark:to-[#FFD089]">
                                    DessertWala
                                </span>

                                <span className="mt-1 text-xs font-semibold tracking-wide text-[#7B6252] dark:text-[#B8AAA1]">
                                    Sweetness Delivered
                                </span>
                            </div>
                        </motion.div>
                    </Link>

                    {/* CENTER MENUS - DESKTOP NAVIGATION */}
                    <div className="hidden items-center gap-12 lg:flex">
                        {/* DESSERTS */}
                        <Link
                            href="/desserts"
                            className="group relative flex items-center text-[15px] font-bold tracking-wide text-[#2B170F] transition-all duration-300 hover:text-[#FF4F87] dark:text-[#f38383] dark:hover:text-[#fa7fa8]"
                        >
                            <span className="relative z-10">Desserts</span>
                            <span className="absolute -bottom-2 left-0 h-[2.5px] w-0 rounded-full bg-linear-to-r from-pink-500 via-orange-400 to-yellow-300 transition-all duration-300 group-hover:w-full" />
                            <span className="absolute inset-0 -z-10 rounded-xl bg-pink-100/0 blur-xl transition-all duration-300 group-hover:bg-pink-100/60 dark:group-hover:bg-pink-500/10" />
                        </Link>

                        {/* ABOUT */}
                        <Link
                            href="/about"
                            className="group relative flex items-center text-[15px] font-bold tracking-wide text-[#2B170F] transition-all duration-300 hover:text-[#FF4F87] dark:text-[#f38383] dark:hover:text-[#FF9DBD]"
                        >
                            <span className="relative z-10">About</span>
                            <span className="absolute -bottom-2 left-0 h-[2.5px] w-0 rounded-full bg-linear-to-r from-pink-500 via-orange-400 to-yellow-300 transition-all duration-300 group-hover:w-full" />
                            <span className="absolute inset-0 -z-10 rounded-xl bg-pink-100/0 blur-xl transition-all duration-300 group-hover:bg-pink-100/60 dark:group-hover:bg-pink-500/10" />
                        </Link>

                        {/* SUPPORT */}
                        <Link
                            href="/support"
                            className="group relative flex items-center text-[15px] font-bold tracking-wide text-[#2B170F] transition-all duration-300 hover:text-[#FF4F87] dark:text-[#f38383] dark:hover:text-[#FF9DBD]"
                        >
                            <span className="relative z-10">Support</span>
                            <span className="absolute -bottom-2 left-0 h-[2.5px] w-0 rounded-full bg-linear-to-r from-pink-500 via-orange-400 to-yellow-300 transition-all duration-300 group-hover:w-full" />
                            <span className="absolute inset-0 -z-10 rounded-xl bg-pink-100/0 blur-xl transition-all duration-300 group-hover:bg-pink-100/60 dark:group-hover:bg-pink-500/10" />
                        </Link>

                        {/* CATEGORIES DROPDOWN */}
                        <div
                            className="relative"
                            onMouseEnter={() => setDropdown(true)}
                            onMouseLeave={() => setDropdown(false)}
                        >
                            <button className="group relative flex items-center gap-1 text-[15px] font-bold tracking-wide text-[#2B170F] transition-all duration-300 hover:text-[#FF4F87] dark:text-[#f38383] dark:hover:text-[#FF9DBD]">
                                <span className="relative z-10">Categories</span>

                                <ChevronDown
                                    size={16}
                                    className={`transition duration-300 ${dropdown ? "rotate-180" : ""
                                        }`}
                                />

                                <span className="absolute -bottom-2 left-0 h-[2.5px] w-0 rounded-full bg-linear-to-r from-pink-500 via-orange-400 to-yellow-300 transition-all duration-300 group-hover:w-full" />
                                <span className="absolute inset-0 -z-10 rounded-xl bg-pink-100/0 blur-xl transition-all duration-300 group-hover:bg-pink-100/60 dark:group-hover:bg-pink-500/10" />
                            </button>

                            <AnimatePresence>
                                {dropdown && (
                                    <motion.div
                                        initial={{
                                            opacity: 0,
                                            y: 10,
                                            scale: 0.96,
                                        }}
                                        animate={{
                                            opacity: 1,
                                            y: 0,
                                            scale: 1,
                                        }}
                                        exit={{
                                            opacity: 0,
                                            y: 10,
                                            scale: 0.96,
                                        }}
                                        transition={{
                                            duration: 0.2,
                                        }}
                                        className="absolute left-1/2 top-14 w-75 -translate-x-1/2 rounded-3xl border border-black/5 bg-white/90 p-4 shadow-[0_20px_50px_rgba(0,0,0,0.08)] backdrop-blur-3xl dark:border-white/10 dark:bg-[#1C130E]/95"
                                    >
                                        <div className="grid grid-cols-2 gap-3">
                                            {categories.map((item) => (
                                                <Link
                                                    key={item}
                                                    href={`/categories/${item.toLowerCase()}`}
                                                    className="group flex items-center justify-between rounded-2xl bg-linear-to-r from-pink-50 to-orange-50 px-4 py-3 text-sm font-semibold text-[#4A2C1D] transition-all duration-300 hover:scale-[1.03] hover:shadow-md dark:from-white/5 dark:to-white/3 dark:text-[#f38383] dark:hover:bg-white/10"
                                                >
                                                    {item}

                                                    <Sparkles
                                                        size={13}
                                                        className="opacity-60 transition group-hover:rotate-12"
                                                    />
                                                </Link>
                                            ))}
                                        </div>
                                    </motion.div>
                                )}
                            </AnimatePresence>
                        </div>
                    </div>

                    {/* RIGHT SIDE */}
                    <div className="flex items-center gap-3">
                        {/* ACCOUNT BUTTON */}
                        <motion.button
                            whileTap={{
                                scale: 0.92,
                            }}
                            whileHover={{
                                y: -2,
                            }}
                            className="group relative hidden lg:flex h-12 items-center gap-3 overflow-hidden rounded-2xl border border-black/5 bg-white/80 px-4 shadow-[0_5px_20px_rgba(0,0,0,0.06)] backdrop-blur-2xl transition-all duration-300 hover:shadow-[0_10px_30px_rgba(255,120,120,0.18)] dark:border-white/10 dark:bg-white/10"
                        >
                            {/* GLOW */}
                            <div className="absolute inset-0 bg-linear-to-br from-pink-200/30 via-orange-100/20 to-yellow-100/30 opacity-0 transition duration-300 group-hover:opacity-100 dark:from-pink-500/10 dark:via-orange-500/10 dark:to-yellow-500/10" />

                            {/* ICON */}
                            <div className="relative z-10 flex h-9 w-9 items-center justify-center rounded-xl bg-linear-to-br from-pink-500 via-orange-400 to-yellow-300 shadow-md">
                                <User2
                                    size={18}
                                    className="text-white"
                                />
                            </div>

                            {/* TEXT */}
                            <div className="relative z-10 hidden flex-col items-start lg:flex">
                                <span className="text-xs font-medium text-[#8B6E5D] dark:text-[#B8AAA1]">
                                    Welcome
                                </span>

                                <span className="text-sm font-bold text-[#2A170F] dark:text-[#f38383]">
                                    My Account
                                </span>
                            </div>
                        </motion.button>

                        {/* MOBILE MENU BUTTON */}
                        <motion.button
                            whileTap={{
                                scale: 0.92,
                            }}
                            onClick={() => setMobileMenu(true)}
                            className="group relative flex h-12 w-12 items-center justify-center overflow-hidden rounded-2xl border border-black/5 bg-white/80 shadow-[0_5px_20px_rgba(0,0,0,0.06)] backdrop-blur-2xl transition-all duration-300 hover:shadow-[0_10px_30px_rgba(255,120,120,0.2)] lg:hidden dark:border-white/10 dark:bg-white/10"
                        >
                            <div className="absolute inset-0 bg-linear-to-br from-pink-200/30 via-orange-100/20 to-yellow-100/30 opacity-0 transition duration-300 group-hover:opacity-100 dark:from-pink-500/10 dark:via-orange-500/10 dark:to-yellow-500/10" />

                            <Menu
                                size={22}
                                className="relative z-10 text-[#3A2418] dark:text-[#f38383]"
                            />
                        </motion.button>
                    </div>
                </div>
            </motion.nav>

            {/* MOBILE MENU */}
            <AnimatePresence>
                {mobileMenu && (
                    <>
                        {/* OVERLAY */}
                        <motion.div
                            initial={{
                                opacity: 0,
                            }}
                            animate={{
                                opacity: 1,
                            }}
                            exit={{
                                opacity: 0,
                            }}
                            onClick={() => setMobileMenu(false)}
                            className="fixed inset-0 z-40 bg-black/50 backdrop-blur-md lg:hidden"
                        />

                        {/* MENU */}
                        <motion.div
                            initial={{
                                x: "100%",
                            }}
                            animate={{
                                x: 0,
                            }}
                            exit={{
                                x: "100%",
                            }}
                            transition={{
                                type: "spring",
                                damping: 24,
                            }}
                            className="fixed right-0 top-0 z-50 flex h-screen w-[85%] max-w-sm flex-col overflow-hidden border-l border-white/10 bg-[#FFF8F0]/90 backdrop-blur-3xl lg:hidden dark:bg-[#140D0A]/95"
                        >
                            {/* TOP AREA */}
                            <div className="relative overflow-hidden border-b border-black/5 px-6 py-6 dark:border-white/10">
                                <div className="absolute inset-0 bg-linear-to-br from-pink-100/30 via-orange-100/10 to-yellow-100/20 dark:from-pink-900/10 dark:via-orange-900/5 dark:to-yellow-900/10" />

                                <div className="relative z-10 flex items-center justify-between">
                                    <div>
                                        <h2 className="bg-linear-to-r from-[#3A1F14] via-[#FF4F87] to-[#D97706] bg-clip-text text-3xl font-black text-transparent dark:from-[#FFF1E8] dark:via-[#FF9DBD] dark:to-[#FFD089]">
                                            DessertWala
                                        </h2>

                                        <p className="mt-1 text-sm font-medium text-[#7B6252] dark:text-[#B8AAA1]">
                                            Luxury Dessert Experience
                                        </p>
                                    </div>

                                    <motion.button
                                        whileTap={{
                                            scale: 0.9,
                                        }}
                                        onClick={() => setMobileMenu(false)}
                                        className="flex h-11 w-11 items-center justify-center rounded-2xl border border-black/5 bg-white/70 shadow-lg backdrop-blur-xl dark:border-white/10 dark:bg-white/10"
                                    >
                                        <X
                                            size={20}
                                            className="text-[#3A2418] dark:text-white"
                                        />
                                    </motion.button>
                                </div>
                            </div>

                            {/* NAV LINKS */}
                            <div className="flex flex-1 flex-col gap-3 overflow-y-auto px-5 py-6">

                                {/* MY ACCOUNT PROFILE */}
                                <motion.div
                                    initial={{ opacity: 0, x: 30 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    transition={{ delay: 0.05 }}
                                >
                                    <Link
                                        href="/account"
                                        onClick={() => setMobileMenu(false)}
                                        className="group flex items-center justify-between rounded-3xl border border-black/5 bg-white/60 px-5 py-4 text-lg font-bold text-[#2A170F] shadow-sm backdrop-blur-xl transition-all duration-300 hover:translate-x-1 hover:bg-linear-to-r hover:from-pink-50 hover:to-orange-50 hover:shadow-lg dark:border-white/10 dark:bg-white/5 dark:text-[#f38383] dark:hover:bg-white/10"
                                    >
                                        <div className="flex items-center gap-3">
                                            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-linear-to-br from-pink-500 via-orange-400 to-yellow-300 shadow-md">
                                                <User2 size={18} className="text-white" />
                                            </div>
                                            <div className="flex flex-col">
                                                <span className="text-xs font-medium text-[#8B6E5D] dark:text-[#B8AAA1] leading-none mb-1">
                                                    Welcome Back
                                                </span>
                                                <span className="leading-none">My Account</span>
                                            </div>
                                        </div>

                                        <motion.div
                                            whileHover={{ x: 4 }}
                                            className="text-pink-500"
                                        >
                                            →
                                        </motion.div>
                                    </Link>
                                </motion.div>

                                {/* DESSERTS */}
                                <motion.div
                                    initial={{
                                        opacity: 0,
                                        x: 30,
                                    }}
                                    animate={{
                                        opacity: 1,
                                        x: 0,
                                    }}
                                    transition={{
                                        delay: 0.1,
                                    }}
                                >
                                    <Link
                                        href="/desserts"
                                        onClick={() => setMobileMenu(false)}
                                        className="group flex items-center justify-between rounded-3xl border border-black/5 bg-white/60 px-5 py-5 text-lg font-bold text-[#2A170F] shadow-sm backdrop-blur-xl transition-all duration-300 hover:translate-x-1 hover:bg-linear-to-r hover:from-pink-50 hover:to-orange-50 hover:shadow-lg dark:border-white/10 dark:bg-white/5 dark:text-[#f38383] dark:hover:bg-white/10"
                                    >
                                        Desserts

                                        <motion.div
                                            whileHover={{
                                                x: 4,
                                            }}
                                            className="text-pink-500"
                                        >
                                            →
                                        </motion.div>
                                    </Link>
                                </motion.div>

                                {/* CATEGORIES DROPDOWN */}
                                <motion.div
                                    initial={{
                                        opacity: 0,
                                        x: 30,
                                    }}
                                    animate={{
                                        opacity: 1,
                                        x: 0,
                                    }}
                                    transition={{
                                        delay: 0.15,
                                    }}
                                    className="overflow-hidden rounded-3xl border border-black/5 bg-white/60 shadow-sm backdrop-blur-xl dark:border-white/10 dark:bg-white/5"
                                >
                                    <button
                                        onClick={() => setDropdown(!dropdown)}
                                        className="flex w-full items-center justify-between px-5 py-5 text-left text-lg font-bold text-[#2A170F] dark:text-[#f38383]"
                                    >
                                        <span>Categories</span>

                                        <motion.div
                                            animate={{
                                                rotate: dropdown ? 180 : 0,
                                            }}
                                            transition={{
                                                duration: 0.25,
                                            }}
                                        >
                                            <ChevronDown
                                                size={22}
                                                className="text-pink-500"
                                            />
                                        </motion.div>
                                    </button>

                                    <AnimatePresence>
                                        {dropdown && (
                                            <motion.div
                                                initial={{
                                                    height: 0,
                                                    opacity: 0,
                                                }}
                                                animate={{
                                                    height: "auto",
                                                    opacity: 1,
                                                }}
                                                exit={{
                                                    height: 0,
                                                    opacity: 0,
                                                }}
                                                transition={{
                                                    duration: 0.3,
                                                }}
                                                className="overflow-hidden"
                                            >
                                                <div className="grid grid-cols-2 gap-3 px-4 pb-5">
                                                    {categories.map((item, index) => (
                                                        <motion.div
                                                            key={item}
                                                            initial={{
                                                                opacity: 0,
                                                                y: 10,
                                                            }}
                                                            animate={{
                                                                opacity: 1,
                                                                y: 0,
                                                            }}
                                                            transition={{
                                                                delay: index * 0.03,
                                                            }}
                                                        >
                                                            <Link
                                                                href={`/categories/${item.toLowerCase()}`}
                                                                onClick={() => setMobileMenu(false)}
                                                                className="group flex items-center justify-between rounded-2xl bg-linear-to-r from-pink-50 to-orange-50 px-4 py-3 text-sm font-semibold text-[#5A3825] transition-all duration-300 hover:scale-[1.03] hover:shadow-md dark:from-white/5 dark:to-white/3 dark:text-[#f38383] dark:hover:bg-white/10"
                                                            >
                                                                {item}

                                                                <Sparkles
                                                                    size={13}
                                                                    className="opacity-60"
                                                                />
                                                            </Link>
                                                        </motion.div>
                                                    ))}
                                                </div>
                                            </motion.div>
                                        )}
                                    </AnimatePresence>
                                </motion.div>

                                {/* ABOUT */}
                                <motion.div
                                    initial={{
                                        opacity: 0,
                                        x: 30,
                                    }}
                                    animate={{
                                        opacity: 1,
                                        x: 0,
                                    }}
                                    transition={{
                                        delay: 0.2,
                                    }}
                                >
                                    <Link
                                        href="/about"
                                        onClick={() => setMobileMenu(false)}
                                        className="group flex items-center justify-between rounded-3xl border border-black/5 bg-white/60 px-5 py-5 text-lg font-bold text-[#2A170F] shadow-sm backdrop-blur-xl transition-all duration-300 hover:translate-x-1 hover:bg-linear-to-r hover:from-pink-50 hover:to-orange-50 hover:shadow-lg dark:border-white/10 dark:bg-white/5 dark:text-[#f38383] dark:hover:bg-white/10"
                                    >
                                        About

                                        <motion.div
                                            whileHover={{
                                                x: 4,
                                            }}
                                            className="text-pink-500"
                                        >
                                            →
                                        </motion.div>
                                    </Link>
                                </motion.div>

                                {/* SUPPORT */}
                                <motion.div
                                    initial={{
                                        opacity: 0,
                                        x: 30,
                                    }}
                                    animate={{
                                        opacity: 1,
                                        x: 0,
                                    }}
                                    transition={{
                                        delay: 0.25,
                                    }}
                                >
                                    <Link
                                        href="/support"
                                        onClick={() => setMobileMenu(false)}
                                        className="group flex items-center justify-between rounded-3xl border border-black/5 bg-white/60 px-5 py-5 text-lg font-bold text-[#2A170F] shadow-sm backdrop-blur-xl transition-all duration-300 hover:translate-x-1 hover:bg-linear-to-r hover:from-pink-50 hover:to-orange-50 hover:shadow-lg dark:border-white/10 dark:bg-white/5 dark:text-[#f38383] dark:hover:bg-white/10"
                                    >
                                        Support

                                        <motion.div
                                            whileHover={{
                                                x: 4,
                                            }}
                                            className="text-pink-500"
                                        >
                                            →
                                        </motion.div>
                                    </Link>
                                </motion.div>
                            </div>

                            {/* BOTTOM */}
                            <div className="border-t border-black/5 px-6 py-5 dark:border-white/10">
                                <div className="rounded-3xl bg-linear-to-r from-pink-500 via-orange-400 to-yellow-300 p-px">
                                    <div className="rounded-3xl bg-white/90 px-5 py-4 dark:bg-[#1A120E]">
                                        <p className="text-sm font-semibold text-[#5A3825] dark:text-[#f38383]">
                                            🍰 Fresh desserts crafted daily
                                        </p>

                                        <p className="mt-1 text-xs text-[#8B6E5D] dark:text-[#B8AAA1]">
                                            Sweetness delivered with love.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    </>
                )}
            </AnimatePresence>
        </>
    );
}