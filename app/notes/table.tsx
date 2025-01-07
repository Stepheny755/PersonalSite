'use client';

import { Accordion, AccordionItem } from "@nextui-org/accordion";

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
      <Accordion selectionMode="multiple" defaultExpandedKeys={["2", "3", "4", "5"]}>
        <AccordionItem key="2" aria-label="Accordion 2" title="200" className="">
          <ul>
            {Listfns(fns, 2)}
          </ul>
        </AccordionItem>
        <AccordionItem key="3" aria-label="Accordion 3" title="300">
          <ul>
            {Listfns(fns, 3)}
          </ul>
        </AccordionItem>
        <AccordionItem key="4" aria-label="Accordion 4" title="400">
          <ul>
            {Listfns(fns, 4)}
          </ul>
        </AccordionItem>
        <AccordionItem key="5" aria-label="Accordion 5" title="500">
          <ul>
            {Listfns(fns, 5)}
          </ul>
        </AccordionItem>
      </Accordion >
    </div>
  );
}