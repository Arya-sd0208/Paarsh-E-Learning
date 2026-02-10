
import React from "react";
import blogData from "../blogData";
import BlogDetail from "./BlogDetail";

interface CourseDetailPageProps {
    params: {
        slug: string;
    };
}

export function generateStaticParams() {
    return blogData.map((blog) => ({
        slug: blog.slug,
    }));
}

const CourseDetailPage = ({ params }: CourseDetailPageProps) => {
    return (
        <>
            <BlogDetail />
        </>
    );
};

export default CourseDetailPage;
