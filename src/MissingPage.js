import { Link } from "react-router-dom"

const MissingPage = () => {
    return (
        <main className="Missing">
            <h2>404 Not Found</h2>
            <p>The page you are looking for is not found.</p>
            <p>
                <Link to="/">Visit Our Homepage</Link>
            </p>
        </main>
    )
}

export default MissingPage