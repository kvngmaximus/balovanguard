import { Project } from '@/types';

export const demoProjects: Project[] = [
  {
    title: 'Acedly',
    description:
      'A full-fledged educational platform for Nigerian students. It offers features like a free virtual study library, CBT practice, engaging with community, search and discover, and study plan.',
    github: 'https://github.com/acedly/acedly',
    view: 'https://acedly.xyz',
    stack: ['NEXTJS', 'SUPABASE', 'SHADCN UI'],
    image: [{ url: '/projects/prroject-one.png' }],
  },
  {
    title: 'Cryzian',
    description:
      'A website and web application for a startup merging Web3 with Artificial Intelligence to create a decentralized, secure, and transparent platform for education.',
    github: 'https://github.com/kvngmaximus/cryzian',
    view: 'https://cryzian.xyz',
    stack: ['VITE', 'REACT', 'SUPABASE', 'SHADCN UI'],
    image: [{ url: '/projects/prroject-2.png' }],
  },
  {
    title: 'Mid Max',
    description:
      'A React website for a design agency run by a tech-savvy entrepreneur.',
    github: 'https://github.com/example/texto',
    view: 'https://mmdesignhub.vercel.app',
    stack: ['REACT', 'SUPABASE', 'SHADCN UI'],
    image: [{ url: '/projects/prroject-3.png' }],
  },
  {
    title: 'Design Challenge',
    description:
      'A 30day brand design challenge for 30 fictional startups run throughout the month of October.',
    github: 'https://www.instagram.com/balovanguard/',
    view: 'https://pin.it/2Zcrqw6tb',  
    stack: ['ADOBE', 'PINTEREST', 'AI'],
    image: [{ url: '/projects/prroject-4.png' }],
  },
];