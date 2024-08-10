import Link from 'next/link';

export default function Footer() {
    return (
        <footer>
            <div className="bg-skyblue">
                <p>Stephen Yang &copy; {new Date().getFullYear()}</p>
                <a href="https://github.com/Stepheny755" className="footer_elem">github</a>
                <a href="https://www.linkedin.com/in/stepheny755/" className="footer_elem">linkedin</a>
                <a href="https://neal.fun/password-game/" className="footer_elem">fun</a>
            </div>
        </footer>
    );

}