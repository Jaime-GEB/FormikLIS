import CategoriesGrid from '../Extra/CategoriesGrid'

const Categories = () => {
    return (
        <div>
            <header>
                <h1>Choose a category to begin</h1>
                <p>Click on a category to see the movies/series available</p>
            </header>
            <br /><br /><br /><br />
            <main>
                <CategoriesGrid />
            </main>
        </div>
    )
}
export default Categories