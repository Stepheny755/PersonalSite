import Link from 'next/link'

export default function NotFound() {
  return (
    <div className="bg-l_body dark:bg-d_body">
      <div className="mx-auto w-full max-w-screen-xl px-2 lg:px-22 md:px-16 sm:px-10">
        <div className="container text-stone-800 dark:text-stone-100">
          <h1 className="my-6 mt-20 text-4xl">Not Found</h1>
          <p>
            Could not find requested resource
          </p>
          <p>
            Click to return <Link href="/" className="hlink">home</Link>.
          </p>
        </div>
      </div>
    </div>
  )
}
