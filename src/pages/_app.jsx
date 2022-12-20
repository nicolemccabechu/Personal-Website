import Head from 'next/head'

import '@/styles/tailwind.css'
import 'prismjs/themes/prism-okaidia.css'

import Header from '@/components/Header'
import Footer from '@/components/Footer'

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title> Nicole McCabe Chu</title>
        <meta
          name="description"
          content="computer science student"
          key="description"
        />
      </Head>

      <div className="bg-zinc-900 dark:zinc-900">
        <div className="flex flex-col justify-between max-w-2xl min-h-screen p-4 mx-auto sm:py-8">
          <div>
            <Header />

            <main className="py-8">
              <Component {...pageProps} />
            </main>
          </div>

          <Footer />
        </div>
      </div>
    </>
  )
}

export default MyApp
