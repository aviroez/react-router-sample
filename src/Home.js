import Feed from "./Feed"
import { useStoreState } from 'easy-peasy'

const Home = ({fetchError, isLoading}) => {
    const searchResults = useStoreState((state) => state.searchResults)

    return (
        <main className="Home">
            {isLoading && <p className="statusMsg">Loading Post...</p>}
            {fetchError && <p className="statusMsg">{fetchError}</p>}
            {!isLoading && !fetchError && (searchResults.length ? (
                <Feed posts={searchResults} />
            ) : (
                <p className="mt-2">No Post to display</p>
            ))}
        </main>
    )
}

export default Home