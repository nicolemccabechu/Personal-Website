import { useRouter } from 'next/router'

import Link from 'next/link'

export default function Header() {
  let nextRouter = useRouter()

  let menuItems = [
    { title: 'Blog', path: '/blog', external: false },
    { title: 'Projects', path: '/projects', external: false },
    { title: 'About', path: '/about', external: false },
    { title: 'Resume', path: '/resume', external: false },
  ]

  return (
    <header className="p-4 border bg-transparent border-pink-500 dark:bg-transparent dark:border-pink-500 rounded-xl">
      <div className="flex items-center justify-between">
        <Link href="/">
          <a
            aria-current={nextRouter.pathname === '/' ? 'page' : 'false'}
            target="_self"
            rel="self"
          >
            <span className="sr-only">Home</span>
            <span className="text-lg sm:text-xl">🏡</span>
          </a>
        </Link>

        <nav className="flex items-center gap-4">
          {menuItems.map((menuItem) => (
            <Link href={menuItem.path} key={menuItem.path}>
              <a
                className={
                  nextRouter.pathname === menuItem.path
                    ? 'font-medium text-white dark:text-white'
                    : 'text-white hover:text-pink-500 dark:text-white dark:hover:text-pink-500'
                }
                aria-current={
                  nextRouter.pathname === menuItem.path ? 'page' : 'false'
                }
                target={menuItem.external ? '_blank' : '_self'}
                rel={menuItem.external ? 'nofollow noreferrer' : 'self'}
              >
                <span className="text-sm">{menuItem.title}</span>
              </a>
            </Link>
          ))}

          <a
            target="_blank"
            rel="noreferrer nofollow"
            href="https://hachyderm.io/@nicolechu"
            className="text-white hover:text-pink-500 dark:text-white dark:hover:text-pink-500"
          >
            <span className="sr-only">Mastodon</span>

            <svg
              className="w-5 h-5"
              fill="currentColor"
              viewBox="0 0 16 16"
              aria-hidden="true"
            >
              <path
                d="M11.19 12.195c2.016-.24 3.77-1.475 3.99-2.603.348-1.778.32-4.339.32-4.339 0-3.47-2.286-4.488-2.286-4.488C12.062.238 10.083.017 8.027 0h-.05C5.92.017 3.942.238 2.79.765c0 0-2.285 1.017-2.285 4.488l-.002.662c-.004.64-.007 1.35.011 2.091.083 3.394.626 6.74 3.78 7.57 1.454.383 2.703.463 3.709.408 1.823-.1 2.847-.647 2.847-.647l-.06-1.317s-1.303.41-2.767.36c-1.45-.05-2.98-.156-3.215-1.928a3.614 3.614 0 0 1-.033-.496s1.424.346 3.228.428c1.103.05 2.137-.064 3.188-.189zm1.613-2.47H11.13v-4.08c0-.859-.364-1.295-1.091-1.295-.804 0-1.207.517-1.207 1.541v2.233H7.168V5.89c0-1.024-.403-1.541-1.207-1.541-.727 0-1.091.436-1.091 1.296v4.079H3.197V5.522c0-.859.22-1.541.66-2.046.456-.505 1.052-.764 1.793-.764.856 0 1.504.328 1.933.983L8 4.39l.417-.695c.429-.655 1.077-.983 1.934-.983.74 0 1.336.259 1.791.764.442.505.661 1.187.661 2.046v4.203z"
                clipRule="evenodd"
              />
            </svg>
          </a>

          <a
            target="_blank"
            rel="noreferrer nofollow"
            href="https://www.linkedin.com/in/nicolemccabechu/"
            className="text-white hover:text-pink-500 dark:text-white dark:hover:text-pink-500"
          >
            <span className="sr-only">LinkedIn</span>

            <svg
              className="w-5 h-5"
              fill="currentColor"
              viewBox="0 0 16 16"
              aria-hidden="true"
            >
              <path
                d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854V1.146zm4.943 12.248V6.169H2.542v7.225h2.401zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248-.822 0-1.359.54-1.359 1.248 0 .694.521 1.248 1.327 1.248h.016zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016a5.54 5.54 0 0 1 .016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225h2.4z"
                clipRule="evenodd"
              />
            </svg>
          </a>

          <a
            target="_blank"
            rel="noreferrer nofollow"
            href="https://github.com/nicolemccabechu"
            className="text-white hover:text-pink-500 dark:text-white dark:hover:text-pink-500"
          >
            <span className="sr-only">GitHub</span>

            <svg
              className="w-5 h-5"
              fill="currentColor"
              viewBox="0 0 24 24"
              aria-hidden="true"
            >
              <path
                fillRule="evenodd"
                d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
                clipRule="evenodd"
              />
            </svg>
          </a>
        </nav>
      </div>
    </header>
  )
}
