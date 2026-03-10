import { NextResponse } from "next/server";
import bcrypt from "bcryptjs";
import { connectDB } from "@/lib/db";
import User from "@/models/User";

export async function POST(req: Request) {
    try {
        await connectDB();
        const { name, email, contact, password } = await req.json();

        // 1. Check if user already exists
        const userExists = await User.findOne({ email });
        if (userExists) {
            return NextResponse.json(
                { message: "User already exists" },
                { status: 400 }
            );
        }

        // 2. Hash password
        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(password, salt);

        // 3. Create user
        const user = await User.create({
            name,
            email,
            contact,
            password: hashedPassword,
        });

        if (user) {
            return NextResponse.json(
                { message: "User registered successfully" },
                { status: 201 }
            );
        } else {
            return NextResponse.json(
                { message: "Invalid user data" },
                { status: 400 }
            );
        }
    } catch (error: any) {
        console.error("Registration error:", error);
        return NextResponse.json(
            { message: "Internal server error" },
            { status: 500 }
        );
    }
}
