import './App.css';
import { AiFillInstagram } from 'react-icons/ai';
import Review from './components/Review';

function App() {
  return (
    <main>
      <section className="container">
        <div className="title">
          <h2>Follower Reviews</h2>
        </div>
        <Review />
      </section>
    </main>
  );
}

export default App;
