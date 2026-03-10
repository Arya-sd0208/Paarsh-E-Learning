

import { NextResponse } from "next/server";
import { connectDB } from "@/lib/db";
import Inquiry from "@/models/Inquiry";
import { sendConfirmationEmail } from "@/utils/sendEmail";
import { validateEmail, validatePhone } from "@/utils/validation";

export async function POST(request: Request) {
    try {
        await connectDB();

        const body = await request.json();

        // Destructure payload
        const { name, email, phone, message, course, type } = body;

        // Basic validation
        if (!name || !email || !phone || !message || !type) {
            return NextResponse.json(
                { error: "Please fill out all required fields" },
                { status: 400 }
            );
        }

        // Validate type
        if (!["General Inquiry", "Inquiry Form"].includes(type)) {
            return NextResponse.json(
                { error: "Invalid inquiry type" },
                { status: 400 }
            );
        }

        // Create the Inquiry document
        const newInquiry = await Inquiry.create({
            name,
            email,
            phone,
            message,
            course: course || "Not Specified",
            type,
        });

        // Send confirmation email (non-blocking for speed)
        sendConfirmationEmail(email, name, type).catch(err => {
            console.error("Background email failure:", err);
        });

        return NextResponse.json(
            {
                message: "Inquiry submitted successfully",
                inquiry: newInquiry
            },
            { status: 201 }
        );

    } catch (error: any) {
        console.error("Error submitting inquiry:", error);

        // Handle Mongoose validation errors
        if (error.name === 'ValidationError') {
            const messages = Object.values(error.errors).map((err: any) => err.message);
            return NextResponse.json(
                { error: messages.join(', ') },
                { status: 400 }
            );
        }

        return NextResponse.json(
            { error: "Internal Server Error" },
            { status: 500 }
        );
    }
}