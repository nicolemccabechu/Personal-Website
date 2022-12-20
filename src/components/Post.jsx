import Link from 'next/link'

export default function Post({ path, title, description, date, tags }) {
  return (
    <li className="p-0 m-0">
      <Link as={`/blog/${path.replace(/\.md?$/, '')}`} href={`/blog/[slug]`}>
        <a className="block p-4 m-0 no-underline border rounded-lg border-pink-500 bg-transparent sm:bg-transparent sm:hover:bg-pink-500">
          <h3 className="m-0 text-white">{title}</h3>

          <div className="font-normal text-white">
            <p>{description}</p>

            <small className="flex gap-2">
              <time>{date}</time>
              <span>&middot;</span>
              <span>{tags.join(', ')}</span>
            </small>
          </div>
        </a>
      </Link>
    </li>
  )
}
