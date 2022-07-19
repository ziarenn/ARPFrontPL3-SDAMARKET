import React from "react";
import Navbar from "./components/Navbar/Navbar";
import HomePage from "./components/HomePage/HomePage";
function App() {
  return (
    <div className="App">
      <Navbar />
      <HomePage />
    </div>
  );
}

export default App;
// stwórz folder i comp HomePage
// W HomePage:
// stwórz stan categories i ustaw jego typ na liste stringów lub undefined
// w useEffect call do api ("https://fakestoreapi.com/products/categories"), gdy dane sie ściągną, dane do stanu categories, dependencies array = []
// JSX:
// Typography z textem Browse and buy your favorite electronics, jewellery and clothes. All in one place.

// JESZCZE NIE ROBIĆ
// CategoryMenu
// JESZCZE NIE ROBIĆ

// Typography z textem Our bestsellers:

// JESZCZE NIE ROBIĆ
// Bestsellers
// JESZCZE NIE ROBIĆ

// const [x, setX] = useState<string[] | undefined>();
