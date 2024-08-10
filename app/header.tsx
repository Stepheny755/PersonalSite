import Link from 'next/link';
import ThemeSwitcher from "./components/themeswitch";

export default function Header() {
    return (
        <header className="bg-white dark:bg-stone-900">
            <div className="mx-auto w-full max-w-screen-xl p-4 py-5 lg:py-6 mt-6">
                <div className="flex sm:items-center justify-between">
                    {/* <div className="inline sm:items-center justify-between"> */}
                    <h1 className="grow text-xl text-stone-600 dark:text-stone-100">Stephen Yang</h1>
                    <div className="mx-8 sm:justify-between space-x-8">
                        <ul className="space-x-10 text-stone-600 dark:text-stone-100">
                            <li className='inline'>
                                <Link href="/">home</Link>
                            </li>
                            <li className='inline'>
                                <Link href="/portfolio">portfolio</Link>
                            </li>
                        </ul>
                    </div>
                    {/* </div> */}
                    <div className="w-auto inline float-right">
                        <ThemeSwitcher />
                    </div>
                </div>
            </div>
        </header>
    );
}