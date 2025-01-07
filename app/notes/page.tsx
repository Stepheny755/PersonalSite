import { promises as fs } from 'fs';
import path from 'path';

export default async function Notes() {

  const notesDirectory = path.join(process.cwd(), 'public/notes');
  const filenames = await fs.readdir(notesDirectory);


  return (
    <div className="bg-l_body dark:bg-d_body">
      <div className="mx-auto w-full max-w-screen-xl px-2 lg:px-22 md:px-16 sm:px-10">
        <div className="container text-stone-800 dark:text-stone-100">
          <ul className="mt-10">
            {filenames.map(fn => (
              <li key={fn}>
                <a href={`/notes/${fn}`} className="hlink">
                  {fn.replace(/\.pdf$/, '').replace(/_/g, ' ')}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}
