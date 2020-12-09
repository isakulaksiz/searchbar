const SearchBar = () => (
    <form action="/" method="get">
        <label htmlFor="heder-search">
            <span className="visually-hidden">Search blog post</span>
        </label>

        <input type="text" id="header-search" placeholder="Search blog post" name="s" />
        <button type="submit">Search</button>
    </form>
);
export default SearchBar;