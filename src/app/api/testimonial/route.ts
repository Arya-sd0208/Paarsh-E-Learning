import { connectDB } from "@/lib/db";
import Testimonial from "@/models/Testimonial";
import { NextResponse } from "next/server";

export async function GET(req: Request) {
    try {
        await connectDB();
        const { searchParams } = new URL(req.url);
        const isAdmin = searchParams.get("admin") === "true";

        const filter = isAdmin ? {} : { status: "approved" };
        const testimonials = await Testimonial.find(filter).sort({ createdAt: -1 });

        return NextResponse.json({ success: true, data: testimonials });
    } catch (error: any) {
        return NextResponse.json({ success: false, error: error.message }, { status: 500 });
    }
}

export async function POST(req: Request) {
    try {
        await connectDB();
        const body = await req.json();
        const testimonial = await Testimonial.create(body);
        return NextResponse.json({ success: true, data: testimonial }, { status: 201 });
    } catch (error: any) {
        return NextResponse.json({ success: false, error: error.message }, { status: 400 });
    }
}
