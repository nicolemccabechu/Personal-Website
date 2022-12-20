import Head from 'next/head'

export default function Uses() {
  return (
    <>
      <Head>
        <title>About | Nicole McCabe Chu</title>

        <meta content="About myself" name="description" key="description" />
      </Head>

      <div className="prose max-w-none pb-5 prose-white">
        <h1 className="font-extrabold text-transparent text-5xl bg-clip-text bg-gradient-to-r from-pink-500 to-purple-300">
          About Me
        </h1>
      </div>
      <article className="prose max-w-none text-white">
        <p>
          Hello! I&apos;m Nicole. I&apos;m an undergraduate Computer Science
          Student at{' '}
          <a className="font-semibold text-pink-500" href="https://www.myucd.ie/courses/science/computer-science/">
            University College Dublin
          </a>
          .
        </p>
        <p>
          In my spare time when I&apos;m not programming, I love gaming, playing
          TTRPGs, learning languages, and listening to punk music.
        </p>
        <p>
          In this website I will be writing some blogs and showcase my projects.
          I believe that writing what I have learned is the best way to remember
          things, and I can share my knowledge along the way. So do contact me
          and I will be very happy to help!
        </p>
      </article>
    </>
  )
}
