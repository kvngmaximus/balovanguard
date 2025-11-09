import { BlogProps, CategoryProps } from '@/types';

export const demoCategories: CategoryProps[] = [
  { name: 'Next.js', description: 'Posts about Next.js and React' },
  { name: 'TypeScript', description: 'Typed JavaScript for safer code' },
  { name: 'UI/UX', description: 'Design systems and interface patterns' },
];

export const demoBlogs: BlogProps[] = [
  {
    slug: 'building-a-portfolio-with-nextjs',
    title: 'Building a Portfolio with Next.js',
    description:
      'A practical walkthrough for structuring pages, components, and deploying a fast portfolio site with Next.js.',
    content: {
      raw: {
        children: [
          { type: 'heading-two', children: [{ text: 'Introduction' }] },
          {
            type: 'paragraph',
            children: [
              {
                text:
                  'Next.js makes it straightforward to build performant, SEO-friendly sites. In this post, we look at how to structure a portfolio and keep it maintainable.',
              },
            ],
          },
          { type: 'heading-two', children: [{ text: 'Pages and Routing' }] },
          {
            type: 'paragraph',
            children: [
              { text: 'Use the app router to define routes like /, /projects, and /blog.' },
            ],
          },
        ],
      },
    },
    categories: [demoCategories[0], demoCategories[1]],
    createdAt: new Date().toISOString(),
    publishedAt: new Date().toISOString(),
  },
  {
    slug: 'typescript-tips-for-react-projects',
    title: 'TypeScript Tips for React Projects',
    description:
      'Key patterns to simplify types, reduce errors, and improve developer experience in React apps.',
    content: {
      raw: {
        children: [
          { type: 'heading-two', children: [{ text: 'Why TypeScript?' }] },
          {
            type: 'paragraph',
            children: [
              { text: 'Type safety helps catch bugs early and clarifies intent across components.' },
            ],
          },
          { type: 'heading-two', children: [{ text: 'Common Patterns' }] },
          {
            type: 'paragraph',
            children: [
              { text: 'Prefer discriminated unions for component variants and shared props interfaces.' },
            ],
          },
        ],
      },
    },
    categories: [demoCategories[1]],
    createdAt: new Date().toISOString(),
    publishedAt: new Date().toISOString(),
  },
  {
    slug: 'designing-smooth-ui-animations',
    title: 'Designing Smooth UI Animations',
    description:
      'How to use motion and transitions responsibly to enhance UX without hurting performance.',
    content: {
      raw: {
        children: [
          { type: 'heading-two', children: [{ text: 'Principles' }] },
          {
            type: 'paragraph',
            children: [
              { text: 'Animations should guide attention and provide feedback, not block interactions.' },
            ],
          },
          { type: 'heading-two', children: [{ text: 'Implementation' }] },
          {
            type: 'paragraph',
            children: [
              { text: 'Use small durations and avoid delaying clicks or navigations.' },
            ],
          },
        ],
      },
    },
    categories: [demoCategories[2], demoCategories[0]],
    createdAt: new Date().toISOString(),
    publishedAt: new Date().toISOString(),
  },
];