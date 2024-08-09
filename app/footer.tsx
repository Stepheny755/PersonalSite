import Link from 'next/link';

export default function Footer() {
    return (
        <footer>
            <div>
                <p className="footer">Stephen Yang &copy; {new Date().getFullYear()}</p>
                <a href="https://github.com/Stepheny755" className="footer_elem">github</a>
                <a href="https://www.instagram.com/stephh.yang/" className="footer_elem">insta</a>
                <a href="https://www.facebook.com/stephy755" className="footer_elem">facebook</a>
                <a href="https://www.linkedin.com/in/stepheny755/" className="footer_elem">linkedin</a>
                <a href="https://neal.fun/password-game/" className="footer_elem">fun</a>
            </div>
        </footer>
    );

}