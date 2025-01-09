import { promises as fs } from 'fs';
import path from 'path';
import { Table } from './table';

export default async function Notes() {

  const notesDirectory = path.join(process.cwd(), 'public/notes');
  const filenames = await fs.readdir(notesDirectory);

  const sortedFilenames: string[][] = [];

  filenames.forEach(fn => {
    const match = fn.match(/\d+/);
    let leadingNumber: number;
    if (match && match[0].length === 4) {
      leadingNumber = parseInt(match[0].substring(0, 2));
    } else if (match && match[0].length === 3) {
      leadingNumber = parseInt(match[0].substring(0, 1));
    } else {
      leadingNumber = 0;
    }
    if (!sortedFilenames[leadingNumber]) {
      sortedFilenames[leadingNumber] = [];
    }
    sortedFilenames[leadingNumber].push(fn);
  });

  sortedFilenames.forEach(arr => {
    if (arr) {
      arr.sort();
    }
  });

  return (
    <div className="bg-l_body dark:bg-d_body">
      <div className="mx-auto w-full max-w-screen-xl px-2 lg:px-22 md:px-16 sm:px-10">
        <div className="container text-stone-800 dark:text-stone-100">
          {<Table fns={sortedFilenames}></Table>}
        </div>
      </div>
    </div >
  );
}