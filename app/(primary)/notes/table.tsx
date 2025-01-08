'use client';

import { Accordion, AccordionItem } from "@nextui-org/accordion";

const IndicatorIcon = () => {
  return (
    <svg 
      data-accordion-icon 
      className="w-3 h-3 rotate-180 shrink-0 items-center" 
      aria-hidden="true" 
      xmlns="http://www.w3.org/2000/svg" 
      fill="none" 
      viewBox="0 0 10 6">
        <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5 5 1 1 5"/>
      </svg>
  );
}

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
    <div className="mt-10 mb-10 flex">
      <Accordion selectionMode="multiple" defaultExpandedKeys={["2", "3", "4", "5"]}>
        <AccordionItem key="2" aria-label="Accordion 2" title="200" indicator={<IndicatorIcon />}>
          <ul>
            {Listfns(fns, 2)}
          </ul>
        </AccordionItem>
        <AccordionItem key="3" aria-label="Accordion 3" title="300" indicator={<IndicatorIcon />}>
          <ul>
            {Listfns(fns, 3)}
          </ul>
        </AccordionItem>
        <AccordionItem key="4" aria-label="Accordion 4" title="400" indicator={<IndicatorIcon />}>
          <ul>
            {Listfns(fns, 4)}
          </ul>
        </AccordionItem>
        <AccordionItem key="5" aria-label="Accordion 5" title="500" indicator={<IndicatorIcon />}>
          <ul>
            {Listfns(fns, 5)}
          </ul>
        </AccordionItem>
      </Accordion >
    </div>
  );
}