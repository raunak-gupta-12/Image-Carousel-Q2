// App.jsx
import "./App.css";
import { Carousel } from "./components/Carousel";
import { slides } from "./data/CarouselData.json";

function App() {
  const fallbackImage = "https://via.placeholder.com/600x400?text=Image+Not+Available";

  return (
    <div className="App">
      <h1>Image Carousel</h1>
      <Carousel data={slides} fallbackImage={fallbackImage} />
    </div>
  );
}

export default App;
