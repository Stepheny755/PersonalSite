import Image from "next/image";
import ThemeSwitcher from "./components/themeswitch";

export default function Home() {
  return (
    <main className="">
      <div className="bg-white dark:bg-grey">
        <p className="">
          Get started by editing&nbsp;
          <code className="font-mono font-bold">app/page.tsx</code>
          <ThemeSwitcher />

        </p>
      </div>
    </main>
  );
}
