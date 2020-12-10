import {useHistory} from 'react-router-dom';

const SearchBar = ({searchQuery, setSearchQuery}) => {
    const history = useHistory();
    const onSubmit = e => {
        history.push(`?s=${searchQuery}`)
        e.preventDefault();
    }
    return (
        <form action="/" method="get" autoComplete="off" onSubmit={onSubmit}>
            <label htmlFor="heder-search">
                <span className="visually-hidden">Search blog post</span>
            </label>

            <input value={searchQuery} onInput={e => setSearchQuery(e.target.value)} type="text" id="header-search" placeholder="Search blog post" name="s" />
            <button type="submit">Search</button>
        </form>
    );
    
};
export default SearchBar;