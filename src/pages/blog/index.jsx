import Head from 'next/head'

import Posts from '@/components/Posts'

import { getBlogs } from '@/lib/getPosts'

export default function PostsIndex({ blogPosts }) {
  return (
    <>
      <Head>
        <title>Blog | Nicole McCabe Chu</title>

        <meta
          content="Development blog posts."
          name="description"
          key="description"
        />
      </Head>

      <article className="prose max-w-none prose-p:text-white">
        <h1 className="font-extrabold text-transparent text-5xl bg-clip-text bg-gradient-to-r from-pink-500 to-purple-300 pb-3">
          Posts
        </h1>

        <p className="lead">
          Here are posts I&apos;ve written ✍️ Views are my own.
        </p>

        <Posts blogPosts={blogPosts} />
      </article>
    </>
  )
}

export async function getStaticProps() {
  const blogPosts = getBlogs(['title', 'slug', 'description', 'date', 'tags'])

  return {
    props: { blogPosts },
  }
}
