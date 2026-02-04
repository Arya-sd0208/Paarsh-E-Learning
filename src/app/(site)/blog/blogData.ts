

export interface Blog {
    id: number;
    title: string;
    image: string;
    content: string;
    author: string;
    authorImage: string;
    date: string;
    readTime: string;
    tags: string[];
}

const blogData: Blog[] = [
    {
        id: 1,
        title: "The Future of Web Development",
        image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085",
        author: "Sarah Johnson",
        authorImage: "https://randomuser.me/api/portraits/women/1.jpg",
        date: "February 04, 2026",
        readTime: "5 min read",
        tags: ["Web Development", "React", "Next.js", "Programming"],
        content: `
Web development is evolving rapidly with new frameworks, tools, and best practices.

Modern web applications focus on performance, accessibility, and scalability.
Technologies like React, Next.js, and server-side rendering are shaping the future.

Staying updated with these trends helps developers build faster and more reliable applications.
        `,
    },
    {
        id: 2,
        title: "How Artificial Intelligence is Changing Our Lives",
        image: "https://images.unsplash.com/photo-1677442136019-21780ecad995",
        author: "David Smith",
        authorImage: "https://randomuser.me/api/portraits/men/2.jpg",
        date: "February 04, 2026",
        readTime: "8 min read",
        tags: ["AI", "Technology", "Future"],
        content: `
Artificial Intelligence is no longer a concept of the future — it is already part of our daily lives.

From voice assistants to recommendation systems, AI improves efficiency and personalization.
Industries like healthcare, education, and finance are seeing massive transformations.

Understanding AI basics is becoming essential for modern professionals.
        `,
    },
    {
        id: 3,
        title: "React Best Practices Every Developer Should Know",
        image: "https://images.unsplash.com/photo-1633356122544-f134324a6cee",
        author: "Emily Chen",
        authorImage: "https://randomuser.me/api/portraits/women/3.jpg",
        date: "February 04, 2026",
        readTime: "6 min read",
        tags: ["React", "JavaScript", "Best Practices"],
        content: `
React is one of the most popular JavaScript libraries for building user interfaces.

Using reusable components, proper state management, and clean folder structure
helps maintain large applications efficiently.

Following best practices ensures better performance and easier debugging.
        `,
    },
    {
        id: 4,
        title: "Why Learning JavaScript is Important in 2026",
        image: "https://images.unsplash.com/photo-1526378722484-bd91ca387e72",
        author: "Michael Brown",
        authorImage: "https://randomuser.me/api/portraits/men/4.jpg",
        date: "February 04, 2026",
        readTime: "4 min read",
        tags: ["JavaScript", "Programming", "Career"],
        content: `
JavaScript is the backbone of modern web development.

It powers front-end frameworks, backend servers, mobile apps, and even desktop applications.
Learning JavaScript opens doors to full-stack development opportunities.

Its flexibility and huge ecosystem make it a must-learn language.
        `,
    },
    {
        id: 5,
        title: "UI/UX Design Principles for Beginners",
        image: "https://images.unsplash.com/photo-1559028012-481c04fa702d",
        author: "Jessica Lee",
        authorImage: "https://randomuser.me/api/portraits/women/5.jpg",
        date: "February 04, 2026",
        readTime: "7 min read",
        tags: ["Design", "UI/UX", "Beginners"],
        content: `
Good UI/UX design focuses on user needs and simplicity.

Clear layouts, readable typography, and consistent colors improve user experience.
Design is not just about looks, but also usability and accessibility.

Even basic design principles can greatly improve product quality.
        `,
    },
    {
        id: 6,
        title: "Getting Started with Full Stack Development",
        image: "https://images.unsplash.com/photo-1519389950473-47ba0277781c",
        author: "Robert Wilson",
        authorImage: "https://randomuser.me/api/portraits/men/6.jpg",
        date: "February 04, 2026",
        readTime: "10 min read",
        tags: ["Full Stack", "Development", "Learning"],
        content: `
Full stack development involves working on both frontend and backend technologies.

Developers typically use HTML, CSS, JavaScript, React, Node.js, and databases.
Understanding how different layers communicate is crucial.

Full stack developers are highly in demand across industries.
        `,
    },
];

export default blogData;