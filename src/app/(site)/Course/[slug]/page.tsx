import React from "react";
import CourseDetails from "./CourseDeatils";
import fs from "fs";
import path from "path";

interface BlogDetailPageProps {
    params: {
        slug: string;
    };
}

export function generateStaticParams() {
    try {
        const postsDirectory = path.join(process.cwd(), "markdown/Course");
        const files = fs.readdirSync(postsDirectory);
        return files.map((file) => ({
            slug: file.replace(/\.mdx$/, ""),
        }));
    } catch (error) {
        console.error("Error reading blog posts:", error);
        return [
            { slug: "Course_1" },
            { slug: "Course_2" },
            { slug: "Course_3" },
            { slug: "Course_4" },
            { slug: "Course_5" },
            { slug: "Course_6" },
            { slug: "Course_7" },
            { slug: "Course_8" },
            { slug: "Course_9" },
        ];
    }
}

const BlogDetailPage = ({ params }: BlogDetailPageProps) => {
    return (
        <>
            <CourseDetails />
        </>
    );
};

export default BlogDetailPage;
