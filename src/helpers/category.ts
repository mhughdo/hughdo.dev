import { Category } from '@/types'

export const CATEGORIES = [
  {
    name: 'General',
    slug: 'general',
  },
  {
    name: 'React',
    slug: 'react',
  },
  {
    name: 'Next.js',
    slug: 'nextjs',
  },
  {
    name: 'AWS',
    slug: 'aws',
  },
  {
    name: 'Kubernetes',
    slug: 'kubernetes',
  },
  {
    name: 'Performance',
    slug: 'performance',
  },
  {
    name: 'TypeScript',
    slug: 'typescript',
  },
  {
    name: 'JavaScript',
    slug: 'javascript',
  },
] as const satisfies Category[]
