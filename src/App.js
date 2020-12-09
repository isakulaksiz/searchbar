import {useState} from 'react';
import Search from './search';
import './App.css';


const posts =  [
  {id: '1', name: "Clean code"},
  {id: '2', name: "React design pattern and best practice"},
  {id: '3', name: 'Gof design pattern'},
  {id: '4', name: 'Artificial intelligence'}
];

const filterPosts = (posts, query) => {
  if(!query){
    return posts;
  }
  return posts.filter((post) => {
    const postName = post.name.toLowerCase();
    return postName.includes(query);
  });
}

const App = () => {

  const {search} = window.location;
  const query = new URLSearchParams(search).get('s');
  const [searchQuery, setSearchQuery] = useState(query || '');
  const filteredPosts = filterPosts(posts, searchQuery);

  return(
    <div>
      <Search 
        searchQuery={searchQuery}
        setSearchQuery={setSearchQuery}
      />
      <ul>
        {filteredPosts.map((post) => (
          <li key={post.id}>{post.name}</li>
        ))}
      </ul>
    </div>
  );
}

export default App;