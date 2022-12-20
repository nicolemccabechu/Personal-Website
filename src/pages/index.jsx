import Link from 'next/link'
/*import Typed from 'react-typed'*/
 

import { getBlogs } from '@/lib/getPosts'
import { getProjects } from '@/lib/getProjects'

import Posts from '@/components/Posts'
import Projects from '@/components/Projects'

export default function Index({ blogPosts, projectPosts }) {
  return (
    <>
      <h1 className="font-extrabold text-transparent text-5xl bg-clip-text bg-gradient-to-r from-pink-500 to-purple-300 pb-3">
        Nicole McCabe Chu
      </h1>

      <article className="prose max-w-none text-white">
        <p className="lead text-gray-300">
          Welcome to my website. Here you will find posts about things. 
         {/* You can talk to me about{' '} 
         <Typed
            className="typed-text"
            strings={[
              'software engineering',
              'game development',
              'tech events',
              'job opportunities',
              'cats',
            ]}
            typeSpeed={40}
            backSpeed={60}
            loop
          />. */}
          
        </p>

        <h2 className='text-white'>Featured Projects</h2>

        <Projects projectPosts={projectPosts} stacked={true} />

        <h2 className='text-white'>Latest Posts</h2>

        <Posts blogPosts={blogPosts} />

        <div className="flex justify-center">
          <Link href="/blog">
            <a className="block px-5 py-3 no-underline border rounded-lg bg-pink-500 border-pink-300">
              <span className="text-sm font-normal text-white">View More</span>
            </a>
          </Link>
        </div>
      </article>
    </>
  )
}

export async function getStaticProps() {
  const blogPosts = getBlogs([
    'title',
    'slug',
    'description',
    'date',
    'tags',
  ]).slice(0, 3)

  const projectPosts = getProjects([
    'title',
    'slug',
    'description',
    'role',
    'tags',
    'featured',
  ]).filter((projectData) => projectData.featured)

  return {
    props: { blogPosts, projectPosts },
  }
}
