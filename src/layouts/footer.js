import React from 'react';
// import SimpleReactFooter from 'simple-react-footer';

class Footer extends React.Component {
    render() {
        return (
            <footer>
                <div>
                    <h4>
                    <a href="resume.pdf" className="footer_elem">resume</a>
                    <a href="mailto:stephy.yang@mail.utoronto.ca" className="footer_elem">email</a>
                    <a href="https://github.com/Stepheny755" className="footer_elem">github</a>
                    <a href="https://www.linkedin.com/in/stepheny755/" className="footer_elem">linkedin</a>
                    <a href="https://neal.fun/password-game/" className="footer_elem">fun</a>
                    </h4>
                </div>
            </footer>
        );
    }
}

export default Footer
