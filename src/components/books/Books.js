import { v4 as uuidv4 } from 'uuid';
import Navigation from '../Navigation';

function Books() {
  const books = [];
  return (
    <div>
      <Navigation />
      <form>
        <ul>
          {books.map((book) => <li key={uuidv4()}>{book.title}</li>)}
        </ul>
      </form>
    </div>
  );
}

export default Books;
