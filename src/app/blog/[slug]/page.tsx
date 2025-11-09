import { AnimationContainer, BlogDetailSection } from '@/components';
import { demoBlogs } from '@/lib/blogs';
import { BlogProps } from '@/types';
import React from 'react'

interface Props {
    params: {
        slug: string;
    }
}

const Blog = async ({ params }: any) => {

    const { slug } = params;

    // Find blog locally by slug; fallback to a minimal 404-like object
    const data: BlogProps | undefined = demoBlogs.find((b) => b.slug === slug);

    return (
        <main className="relative flex flex-col items-center justify-center px-0 md:px-4 !z-[999] pt-20">
            {data ? (
                <BlogDetailSection data={data} />
            ) : (
                <div className="text-neutral-200">Blog not found.</div>
            )}
        </main>
    )
};

export default Blog
