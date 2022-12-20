export default function Footer() {
  return (
    <footer className="p-4 text-center border border-pink-500 bg-transparent rounded-xl dark:bg-transparent dark:border-pink-500">
      <div className="flex items-center justify-between gap-4">
        <p className="text-sm text-white dark:text-white">
          &copy; {new Date().getFullYear()} Nicole McCabe Chu.
        </p>
      </div>
    </footer>
  )
}
