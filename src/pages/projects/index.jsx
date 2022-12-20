import Head from 'next/head'

import { getProjects } from '@/lib/getProjects'

import Projects from '@/components/Projects'

export default function ProjectsIndex({ projectPosts }) {
  return (
    <>
      <Head>
        <title>Projects | Nicole McCabe Chu</title>

        <meta
          content="Highlights of personal projects that I have worked on."
          name="description"
          key="description"
        />
      </Head>

      <article className="prose max-w-none prose-p:text-white">
        <h1 className="font-extrabold text-transparent text-5xl bg-clip-text bg-gradient-to-r from-pink-500 to-purple-300 pb-3">
          Projects
        </h1>

        <p className="lead text-white">Here are projects I&apos;ve made ⚒️</p>

        <Projects projectPosts={projectPosts} stacked={false} />
      </article>
    </>
  )
}

export async function getStaticProps() {
  const projectPosts = getProjects([
    'title',
    'slug',
    'description',
    'role',
    'tags',
  ])

  return {
    props: { projectPosts },
  }
}
