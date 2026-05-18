

import nodemailer from "nodemailer";
import { NextResponse } from "next/server";

export async function POST(req: Request) {

    try {

        // GET EMAIL FROM FRONTEND
        const { email } = await req.json();

        // VALIDATION
        if (!email) {
            return NextResponse.json(
                {
                    success: false,
                    message: "Email is required",
                },
                {
                    status: 400,
                }
            );
        }

        // TRANSPORTER
        const transporter = nodemailer.createTransport({
            service: "gmail",

            auth: {
                user: process.env.EMAIL_USER,
                pass: process.env.EMAIL_PASS,
            },
        });

        // SEND MAIL
        await transporter.sendMail({
            from: process.env.EMAIL_USER,

            to: email,

            subject: "Welcome To DessertWala 🍰",

            html: `
                <div
                    style="
                        font-family: Arial, sans-serif;
                        padding: 30px;
                        background: #fff7f0;
                        color: #3A1F14;
                    "
                >

                    <h1
                        style="
                            font-size: 32px;
                            margin-bottom: 10px;
                        "
                    >
                        Welcome To DessertWala 🍰
                    </h1>

                    <p
                        style="
                            font-size: 16px;
                            line-height: 1.7;
                        "
                    >
                        Thank you for subscribing to DessertWala.
                    </p>

                    <p
                        style="
                            font-size: 16px;
                            line-height: 1.7;
                        "
                    >
                        You will now receive:
                    </p>

                    <ul
                        style="
                            line-height: 2;
                            font-size: 15px;
                        "
                    >
                        <li>✨ Premium Dessert Updates</li>
                        <li>🎁 Cashback Offers</li>
                        <li>🍫 Luxury Sweet Collections</li>
                        <li>🚚 Fast Delivery Notifications</li>
                        <li>💝 Exclusive Festival Discounts</li>
                    </ul>

                    <div
                        style="
                            margin-top: 30px;
                            padding: 18px;
                            border-radius: 14px;
                            background: linear-gradient(
                                to right,
                                #ff5fa2,
                                #ff9f43,
                                #ffd166
                            );
                            color: white;
                            font-weight: bold;
                            display: inline-block;
                        "
                    >
                        DessertWala — Sweetness Delivered ❤️
                    </div>
                </div>
            `,
        });

        // SUCCESS RESPONSE
        return NextResponse.json({
            success: true,
            message: "Subscribed Successfully",
        });

    } catch (error) {

        console.log(error);

        return NextResponse.json(
            {
                success: false,
                message: "Subscription failed",
            },
            {
                status: 500,
            }
        );
    }
}

