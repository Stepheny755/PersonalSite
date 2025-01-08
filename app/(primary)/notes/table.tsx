'use client';

import Accordion from "../components/accordion";

function Listfns(fns: string[][], index: number) {
  return (fns[index].map(fn => (
    <li key={fn}>
      <a href={`/notes/${fn}`} className="hlink">
        {fn.replace(/\.pdf$/, '').replace(/_/g, ' ')}
      </a>
    </li>
  )));
}

export function Table({ fns }) {
  return (
    <div className="mt-10 mb-10">
      <hr className="mt-3 mb-4 sm:mx-auto border-gray-700 dark:border-stone-50" />
      {
        <Accordion title="200">
          <ul>
            {Listfns(fns, 2)}
          </ul>
        </Accordion>
      }
      {
        <Accordion title="300">
          <ul>
            {Listfns(fns, 3)}
          </ul>
        </Accordion>
      }
      {
        <Accordion title="400">
          <ul>
            {Listfns(fns, 4)}
          </ul>
        </Accordion>
      }
      {
        <Accordion title="500">
          <ul>
            {Listfns(fns, 5)}
          </ul>
        </Accordion>
      }
    </div>
  );
}