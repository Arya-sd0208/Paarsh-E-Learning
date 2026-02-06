
import Inquiry from "@/components/Layout/Inquiry";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Inquiry | Paarsh E-Learning",
    description: "Get in touch with us for any course related queries.",
};

const InquiryPage = () => {
    return (
        <main className="pt-20">
            <Inquiry />
        </main>
    );
};

export default InquiryPage;