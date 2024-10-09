import { Link } from "react-router-dom"

const AboutPage = () => {
    return (
        <main className="About">
            <h2>About Us</h2>
            <p className="mt-2">This is about us page</p>
            <p>
                <Link to="/">Visit Our Homepage</Link>
            </p>
        </main>
    )
}

export default AboutPage