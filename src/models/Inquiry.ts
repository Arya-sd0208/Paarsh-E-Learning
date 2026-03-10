import mongoose from "mongoose";

const InquirySchema = new mongoose.Schema(
    {
        name: {
            type: String,
            required: [true, "Please provide a name"],
            trim: true,
        },
        email: {
            type: String,
            required: [true, "Please provide an email"],
            match: [
                /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/,
                "Please fill a valid email address",
            ],
        },
        phone: {
            type: String,
            required: [true, "Please provide a phone number"],
        },
        message: {
            type: String,
            required: [true, "Please provide a message"],
        },
        course: {
            type: String,
            default: "Not Specified",
        },
        type: {
            type: String,
            enum: ["General Inquiry", "Inquiry Form"],
            required: [true, "Please specify the type of inquiry"],
            default: "General Inquiry",
        },
        createdAt: {
            type: Date,
            default: Date.now,
        },
    },
    {
        timestamps: true,
    }
);

export default mongoose.models.Inquiry || mongoose.model("Inquiry", InquirySchema);