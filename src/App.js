import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import Navigation from './components/Navigation';
import BookList from './components/BookList';
import Categories from './components/Categories';

function App() {
  return (
    <>
      <BrowserRouter>
        <div className="App">
          <Navigation />
          <Routes>
            <Route index element={<BookList />} />
            <Route path="/categories" element={<Categories />} />
          </Routes>
        </div>
      </BrowserRouter>
    </>
  );
}

export default App;
