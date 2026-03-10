"use client";

import { useState } from "react";
import { X, Star } from "lucide-react";

interface TestimonialFormModalProps {
    isOpen: boolean;
    onClose: () => void;
    onSuccess?: () => void;
}

export default function TestimonialFormModal({ isOpen, onClose, onSuccess }: TestimonialFormModalProps) {
    const [form, setForm] = useState({
        name: "",
        course: "",
        message: "",
        rating: 5,
    });
    const [loading, setLoading] = useState(false);

    if (!isOpen) return null;

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        if (!form.name || !form.message) {
            alert("Please fill in name and message");
            return;
        }

        setLoading(true);
        try {
            const res = await fetch("/api/testimonial", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(form),
            });

            if (res.ok) {
                alert("Thank you for your feedback! Your testimonial has been submitted.");
                onClose();
                if (onSuccess) onSuccess();
                setForm({ name: "", course: "", message: "", rating: 5 });
            } else {
                const data = await res.json();
                alert("Error: " + data.error);
            }
        } catch (error) {
            console.error("Error submitting testimonial:", error);
            alert("Something went wrong. Please try again later.");
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-in fade-in duration-200">
            <div className="relative w-full max-w-md bg-white dark:bg-gray-800 rounded-2xl shadow-2xl p-6 animate-in zoom-in-95 duration-200 border border-white/10">
                <button
                    onClick={onClose}
                    className="absolute right-4 top-4 p-1.5 rounded-full hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors"
                >
                    <X className="h-5 w-5 text-gray-400" />
                </button>

                <h2 className="text-2xl font-bold text-blue-950 dark:text-white mb-1">Share Your Story</h2>
                <p className="text-sm text-gray-500 dark:text-gray-400 mb-6">Tell us about your learning journey.</p>

                <form onSubmit={handleSubmit} className="space-y-4">
                    <div className="grid grid-cols-2 gap-4">
                        <div className="space-y-1">
                            <label className="text-xs font-semibold text-gray-700 dark:text-gray-300">Full Name</label>
                            <input
                                required
                                type="text"
                                placeholder="e.g. John Doe"
                                value={form.name}
                                onChange={(e) => setForm({ ...form, name: e.target.value })}
                                className="w-full px-3 py-2 text-sm rounded-lg border border-gray-200 dark:border-gray-700 dark:bg-gray-900 dark:text-white focus:border-blue-500 focus:ring-2 focus:ring-blue-100 outline-none transition"
                            />
                        </div>

                        <div className="space-y-1">
                            <label className="text-xs font-semibold text-gray-700 dark:text-gray-300">Course / Role</label>
                            <input
                                required
                                type="text"
                                placeholder="e.g. MERN Stack"
                                value={form.course}
                                onChange={(e) => setForm({ ...form, course: e.target.value })}
                                className="w-full px-3 py-2 text-sm rounded-lg border border-gray-200 dark:border-gray-700 dark:bg-gray-900 dark:text-white focus:border-blue-500 focus:ring-2 focus:ring-blue-100 outline-none transition"
                            />
                        </div>
                    </div>

                    <div className="space-y-1">
                        <label className="text-xs font-semibold text-gray-700 dark:text-gray-300">Your Rating</label>
                        <div className="flex gap-1.5">
                            {[1, 2, 3, 4, 5].map((star) => (
                                <button
                                    key={star}
                                    type="button"
                                    onClick={() => setForm({ ...form, rating: star })}
                                    className="focus:outline-none transition-transform active:scale-90"
                                >
                                    <Star
                                        className={`h-6 w-6 ${star <= form.rating
                                            ? "text-yellow-400 fill-yellow-400"
                                            : "text-gray-200 dark:text-gray-600"
                                            }`}
                                    />
                                </button>
                            ))}
                        </div>
                    </div>

                    <div className="space-y-1">
                        <label className="text-xs font-semibold text-gray-700 dark:text-gray-300">Message</label>
                        <textarea
                            required
                            placeholder="What did you like about the course?"
                            value={form.message}
                            onChange={(e) => setForm({ ...form, message: e.target.value })}
                            className="w-full px-3 py-2 text-sm rounded-lg border border-gray-200 dark:border-gray-700 dark:bg-gray-900 dark:text-white focus:border-blue-500 focus:ring-2 focus:ring-blue-100 outline-none transition min-h-[80px]"
                        />
                    </div>

                    <button
                        disabled={loading}
                        type="submit"
                        className="w-full py-3 rounded-lg bg-gradient-to-r from-blue-500 to-blue-900 text-white font-bold text-base shadow-lg hover:shadow-xl active:scale-[0.98] transition-all disabled:opacity-50"
                    >
                        {loading ? "Submitting..." : "Post Testimonial"}
                    </button>
                </form>
            </div>
        </div>
    );
}
