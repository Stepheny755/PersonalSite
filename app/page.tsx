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
              I&apos;m interested in mechatronics and the intersection of software engineering and physical systems. I studied computer engineering at the University of Toronto. Currently, I&apos;m working through my Masters of Applied Science under the supervision of professor Eric Diller, where I focus on the simulation and development of millimeter scale medical microrobots.
            </p>
            <p className="my-4">
              Previously, I worked on FPGA IP Development at <a href="https://www.intel.com/content/www/us/en/products/programmable.html" className="hblink">Intel</a>, and at the <a href="https://www.dsp.utoronto.ca/" className="hblink">UofT Multimedia Lab</a> on ML for computational pathology. Read more on my <a href="/resume.pdf" className="hblink">resume</a>.
            </p>
            <p className="my-4">
              In my free time, I enjoy brewing coffee (V60 and Moka), lifting rocks, 3D printing, taking <a href="https://www.instagram.com/stephyangshoots" className="hblink">photos</a> and <a href="https://app.thestorygraph.com/profile/stepheny" className="hblink">reading</a>.
            </p>
            <p>
              Feel free to reach out via <a href="mailto:stephy.yang@mail.utoronto.ca" className="hblink">email</a>. If you&apos;re looking for course notes I took during my time at the University of Toronto, check out <a href="https://notes.stephyang.xyz" className="hblink">notes.stephyang.xyz</a>.
            </p>
            {/* <h1 className="mt-10 text-2xl">publications</h1> */}
            <h1 className="mt-10 text-2xl">links</h1>
            <ul className="list-disc list-inside marker:text-l_header dark:marker:text-d_header">
              <li className="text-stone-800 dark:text-stone-100">
                <a href="/docs/parkore.pdf" className="hlink">PARKore: Parallel, Asynchronous, Relaxed K-Core Decomposition</a>
              </li>
              <li className="text-stone-800 dark:text-stone-100">
                <a href="/docs/ds_in_epilspey.pdf" className="hlink">Dynamical Systems for Epilepsy Prediction</a>
              </li>
            </ul>
            <br></br>
          </div>
        </div>
      </div>
    </main >
  );
}
