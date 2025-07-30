import { useEffect } from "react";
import { useState } from "react";
import "./style.css";
import { PAGE_SIZE } from "./constants";
import ProductCard from "./components/ProductCard";
import Pagination from "./components/Pagination";


function App() {
  const [products, setProducts] = useState([]);
  const [currentPage, setCurrentPage] = useState(0);
  const start = currentPage * PAGE_SIZE;
  const end = start + PAGE_SIZE;

  const fetchData = async () => {
    const data = await fetch("https://dummyjson.com/products?limit=300");
    const json = await data.json();

    setProducts(json.products);
  }
  
  useEffect(() => {
    fetchData();
  }, []);

  const totalProducts = products.length;
  const numOfPages = Math.ceil(totalProducts/PAGE_SIZE);

  const handlePageChange = (pageNum) => {
    setCurrentPage(pageNum);
  };
  
  const goToPrevPage = () => {
    setCurrentPage((prev) => prev-1);
  };

  const goToNextPage = () => {
    setCurrentPage((prev) => prev+1);
  };

  if (!products.length) {
    return (
      <h1>No products food</h1>
    );
  }

  return (
    <div className="App">
      <h1>Pagination</h1>
      
      <div className="products-container">
        {
          products.slice(start, end).map(product => 
            <ProductCard key={product.id} image={product.thumbnail} title={product.title} />
          )
        }
      </div>

      <Pagination 
        currentPage={currentPage} 
        numOfPages={numOfPages} 
        handlePageChange={handlePageChange} 
        goToNextPage={goToNextPage} 
        goToPrevPage={goToPrevPage}
      />
    </div>
  );
}

export default App;
