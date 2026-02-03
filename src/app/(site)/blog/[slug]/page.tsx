
import React from "react";
import fs from "fs";
import path from "path";
import BlogDetail from "./BlogDetail";


interface CourseDetailPageProps {
    params: {
        slug: string;
    };
}

export function generateStaticParams() {
    try {
        const postsDirectory = path.join(process.cwd(), "markdown/Blog");
        const files = fs.readdirSync(postsDirectory);
        return files.map((file) => ({
            slug: file.replace(/\.mdx$/, ""),
        }));
    } catch (error) {
        console.error("Error reading blog posts:", error);
        return [
            { slug: "Blog_1" },
            { slug: "Blog_2" },
            { slug: "Blog_3" },
            { slug: "Blog_4" },
            { slug: "Blog_5" },
            { slug: "Blog_6" },
            { slug: "Blog_7" },
            { slug: "Blog_8" },
            { slug: "Blog_9" },
        ];
    }
}

const CourseDetailPage = ({ params }: CourseDetailPageProps) => {
    return (
        <>
            <BlogDetail />
        </>
    );
};

export default CourseDetailPage;
