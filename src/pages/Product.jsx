import { useContext } from "react";
import { AppContext } from "../App";
import { useMatch } from "react-router";
import NotFound from "./NotFound";
import AddToCart from "../components/AddToCart/AddToCart";

export default function Product() {
  const { products } = useContext(AppContext);
  const { params } = useMatch("/products/:slug");

  const product = products.find((product) => product.slug === params.slug);

  // Стили для контейнера продукта
  const productContainerStyles = {
    padding: "20px",
    border: "1px solid #ddd",
    borderRadius: "5px",
    backgroundColor: "#f9f9f9"
  };

  // Стили для названия продукта
  const titleStyles = {
    color: "#333",
    fontSize: "24px",
    marginBottom: "10px"
  };

  // Стили для изображения продукта
  const imageStyles = {
    maxWidth: "100%",
    height: "auto",
    marginBottom: "10px"
  };

  // Стили для цены продукта
  const priceStyles = {
    fontSize: "18px",
    fontWeight: "bold",
    color: "#666"
  };

  // Стили для описания продукта
  const descriptionStyles = {
    color: "#555",
    fontSize: "16px"
  };

  if (!product) {
    return <NotFound />;
  }

  return (
    <div style={productContainerStyles}>
      <h1 style={titleStyles}>{product.name}</h1>
      <img
        src={product.picture}
        alt={product.name}
        style={imageStyles}
      />
      <span style={priceStyles}>${product.price}</span>
      <span style={descriptionStyles}>{product.description}</span>
      <AddToCart product={product}/>
    </div>
  );
}
