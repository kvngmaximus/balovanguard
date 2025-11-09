import { Project } from '@/types';

export const demoProjects: Project[] = [
  {
    title: 'Acedly',
    description:
      'A full-fledged educational platform for Nigerian students. It offers features like a free virtual study library, CBT practice, engaging with community, search and discover, and study plan.',
    github: 'https://github.com/acedly/acedly',
    view: 'https://acedly.xyz',
    stack: ['NEXTJS', 'SUPABASE', 'SHADCN UI'],
    image: [{ url: '/projects/project-one.png' }],
  },
  {
    title: 'Balx',
    description:
      'A web application for a design and tech studio to help them showcase their offers and services.',
    github: 'https://github.com/kvngmaximus/balx',
    view: 'https://balx.xyz',
    stack: ['VITE', 'REACT', 'SUPABASE', 'SHADCN UI'],
    image: [{ url: '/projects/project-2.png' }],
  },
  {
    title: 'Mid Max',
    description:
      'A React website for a design agency run by a tech-savvy entrepreneur.',
    github: 'https://github.com/example/texto',
    view: 'https://mmdesignhub.vercel.app',
    stack: ['REACT', 'SUPABASE', 'SHADCN UI'],
    image: [{ url: '/projects/project-3.png' }],
  },
  {
    title: 'Design Challenge',
    description:
      'A 30day brand design challenge for 30 fictional startups run throughout the month of October.',
    github: 'https://www.instagram.com/balovanguard/',
    view: 'https://design-challenge.vercel.app',  
    stack: ['ADOBE', 'PINTEREST', 'AI'],
    image: [{ url: '/projects/project-4.png' }],
  },
];