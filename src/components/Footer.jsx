export default function Footer() {
  return (
    <main className="text-sm bg-zinc-300 dark:bg-inherit  py-2 mt-4 rounded-lg md:flex md:flex-row justify-between">
      <div className="px-2">
        <p>benjamin selikem keteku || {new Date().getFullYear()}</p>
        <p className="text-zinc-500">all rights not reserved</p>
      </div>
      <hr className="border md:hidden my-2" />
      <div className="px-2 md:text-right">
        <p className="text-zinc-700 dark:text-zinc-500 hover:text-zinc-900">
          souce:{" "}
          <a
            className="text-red-800 dark:text-red-400 hover:underline"
            href="https://github.com/geepaps/geepaps.github.io"
          >
            github/geepaps
          </a>
        </p>

        <p className="text-zinc-500">
          react + vite | tailwindcss | github pages
        </p>
      </div>
    </main>
  );
}
