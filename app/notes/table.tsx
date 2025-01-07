'use client';

import { Accordion, AccordionItem } from "@nextui-org/accordion";

export function Table({ fns }) {
  return (
    <Accordion selectionMode="multiple" defaultExpandedKeys={["2", "3", "4", "5"]}>
      <AccordionItem key="2" title="200">
        <ul>
          {fns[2].map(fn => (
            <li key={fn}>
              <a href={`/notes/${fn}`} className="hlink">
                {fn.replace(/\.pdf$/, '').replace(/_/g, ' ')}
              </a>
            </li>
          ))}
        </ul>
      </AccordionItem>
      <AccordionItem key="3" title="300">
        <ul>
          {fns[3].map(fn => (
            <li key={fn}>
              <a href={`/notes/${fn}`} className="hlink">
                {fn.replace(/\.pdf$/, '').replace(/_/g, ' ')}
              </a>
            </li>
          ))}
        </ul>
      </AccordionItem>
      <AccordionItem key="4" title="400">
        <ul>
          {fns[4].map(fn => (
            <li key={fn}>
              <a href={`/notes/${fn}`} className="hlink">
                {fn.replace(/\.pdf$/, '').replace(/_/g, ' ')}
              </a>
            </li>
          ))}
        </ul>
      </AccordionItem>
      <AccordionItem key="5" title="500">
        <ul>
          {fns[5].map(fn => (
            <li key={fn}>
              <a href={`/notes/${fn}`} className="hlink">
                {fn.replace(/\.pdf$/, '').replace(/_/g, ' ')}
              </a>
            </li>
          ))}
        </ul>
      </AccordionItem>
    </Accordion >
  );
}