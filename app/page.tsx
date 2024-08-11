import Image from "next/image";

export default function Home() {
  return (
    <main className="">
      <div className="bg-l_body dark:bg-d_body">
        <div className="mx-auto w-full max-w-screen-xl px-2 lg:px-22 md:px-16 sm:px-10">
          <div className="container text-stone-800 dark:text-stone-100">
            <h1 className="my-6 mt-10 text-2xl">Hi there!</h1>
            <p className="my-4">
              My name is Stephen Yang, and welcome to my corner of the internet!
            </p>
            <p className="my-4">
              I'm interested in mechatronics and the intersection of software engineering and physical systems. I studied computer engineering at the University of Toronto. Currently, I'm working through my Masters of Applied Science under the supervision of professor Eric Diller, where I focus on the simulation and development of millimeter scale medical microrobots.
            </p>
            <p className="my-4">
              Previously, I worked on FPGA IP Development at Intel, and at the UofT Multimedia Lab on ML for computational pathology. Read more on my <a href="/resume.pdf" className="underline font-bold">resume</a>.
            </p>
            <p className="my-4">
              In my free time, I enjoy brewing coffee (V60 and Moka), lifting rocks, 3D printing, taking <a href="https://www.instagram.com/stephyangshoots" className="underline font-bold">photos</a> and <a href="https://app.thestorygraph.com/profile/stepheny" className="underline font-bold">reading</a>.
            </p>
            <p>
              Feel free to reach out via <a href="mailto:stephy.yang@mail.utoronto.ca" className="underline font-bold">email</a>. If you're looking for course notes I took during my time at the University of Toronto, check out <a href="https://notes.stephyang.xyz" className="underline font-bold">notes.stephyang.xyz</a>.
            </p>
            <h1 className="mt-10 text-2xl">links</h1>
            <ul className="list-disc list-inside marker:text-l_header dark:marker:text-d_header">
              <li className="text-stone-800 dark:text-stone-100">
                <a href="/docs/parkore.pdf">PARKore: Parallel, Asynchronous, Relaxed K-Core Decomposition</a>
              </li>
              <li className="text-stone-800 dark:text-stone-100">
                <a href="/docs/ds_in_epilspey.pdf">Dynamical Systems for Epilepsy Prediction</a>
              </li>
            </ul>
            <br></br>
          </div>
        </div>
      </div>
    </main >
  );
}
