import Search from './search';
import './App.css';

const posts =  [
  {id: '1', name: "Clean code"},
  {id: '2', name: "React design pattern and best practice"},
  {id: '3', name: 'Gof design pattern'},
  {id: '4', name: 'Artificial intelligence'}
];

const App = () => {
  return(
    <div>
      <Search />
      <ul>
        {posts.map((post) => (
          <li key={post.id}>{post.name}</li>
        ))}
      </ul>
    </div>
  );
}

export default App;