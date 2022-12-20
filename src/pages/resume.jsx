import Head from 'next/head'
import experienceData from '@/data/experiencePage'
import Experience from '@/components/Experience'

export default function Uses() {
  return (
    <>
      <Head>
        <title>Resume | Nicole McCabe Chu</title>

        <meta
          content="My work experience and skills"
          name="description"
          key="description"
        />
      </Head>

      <div className="prose max-w-none text-white">
        <h1 className="font-extrabold text-transparent text-5xl bg-clip-text bg-gradient-to-r from-pink-500 to-purple-300">
          Experience
        </h1>
      </div>
      <div className="max-w-none pt-8 pb-8 xl:col-span-2">
        {experienceData.map((d) => (
          <Experience
            key={d.company}
            title={d.title}
            company={d.company}
            location={d.location}
            range={d.range}
            url={d.url}
            text1={d.text1}
            text2={d.text2}
            text3={d.text3}
            text4={d.text4}
            text5={d.text5}
          />
        ))}
      </div>
    </>
  )
}
