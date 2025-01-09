import Link from 'next/link';
import ThemeSwitcher from "./components/themeswitch";

export default function Header() {
    return (
        <header className="bg-l_header dark:bg-d_header">
            <div className="mx-auto w-full max-w-screen-xl px-6 pt-10 py-5">
                <div className="flex sm:items-center justify-between">
                    <h1 className="grow text-2xl header_txt"><a href="https://www.stephyang.xyz">Stephen Yang</a></h1>
                    <div className="mx-8 sm:justify-between space-x-8">
                        <ul className="space-x-10 header_txt">
                            <li className='inline'>
                                <Link href="/">home</Link>
                            </li>
                            <li className='inline'>
                                <Link href="/portfolio">portfolio</Link>
                            </li>
                        </ul>
                    </div>
                    <div className="w-auto inline float-right">
                        <ThemeSwitcher />
                    </div>
                </div>
            </div>
        </header>
    );
}