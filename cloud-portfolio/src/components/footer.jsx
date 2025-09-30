

export default function Footer() {
    return (
        <footer>
            <p>Steven James Tulk 2025. All rights reserved.</p>
            <p id="liveTime"></p>

            <ul>
                <li>
                    <a href="mailto:steven@email.com">
                        <img src="/images/gmail-logo.png" alt="Gmail logo" className="gmail-logo" />
                    </a>

                    <a href="https://github.com/StevenJTK" target="_blank" rel="noopener noreferrer">
                        <img src="/images/github-logo.png" alt="Github logo" className="githublogo" />
                    </a>

                    <a
                        href="https://www.linkedin.com/in/steven-james-tulk-4a95681b8/"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <img src="/images/linked-logo.png" alt="LinkedIn logo" className="linkedinlogo" />
                    </a>
                </li>
            </ul>

            <div id="notification" className="noti">
                Thank you for checking out my website!
            </div>
        </footer>
    );
}
