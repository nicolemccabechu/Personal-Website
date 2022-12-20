import Link from 'next/link'

export default function Project({ path, title, description, role, tags }) {
  return (
    <li className="p-0 m-0">
      <Link
        as={`/projects/${path.replace(/\.md?$/, '')}`}
        href={`/projects/[slug]`}
      >
        <a className="block p-4 m-0 no-underline border rounded-lg border-pink-500 bg-transparent sm:bg-transparent sm:hover:bg-pink-500">
          <h3 className="m-0 text-white">{title}</h3>

          <div className="font-normal text-gray-300">
            <p>{description}</p>

            <small className="flex gap-2">
              <span className="text-white">{role}</span>
              <span>&middot;</span>
              <span className="text-white">{tags.join(', ')}</span>
            </small>
          </div>
        </a>
      </Link>
    </li>
  )
}