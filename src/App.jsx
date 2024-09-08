import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchMenu } from "./reducers/menuSlice";
import "./assets/styles/main.scss";
import CategoryButton from "./components/CategoryButton";
import Card from "./components/Card";
import CategoryTitle from "./components/CategoryTitle";
import Container from "./components/Container";
import Modal from "./components/Modal";

const App = () => {
  const dispatch = useDispatch();
  const { items, loading, error } = useSelector((state) => state.menu);
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalCategory, setModalCategory] = useState(null);

  useEffect(() => {
    dispatch(fetchMenu());
  }, [dispatch]);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;

  const filteredItems =
    selectedCategory === "All"
      ? items
      : items.filter((category) => category.name[0].value === selectedCategory);

  const handleProductClick = (product) => {
    setSelectedProduct(product);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedProduct(null);
  };

  return (
    <main>
      <h1>Menu</h1>
      <Container>
        <button
          className={`category-button ${
            selectedCategory === "All" ? "selected" : ""
          }`}
          onClick={() => setSelectedCategory("All")}
        >
          All
        </button>
        {items.length > 0 ? (
          items.map((item) => (
            <CategoryButton
              key={item.id}
              className={`category-button ${
                selectedCategory === item.name[0].value ? "selected" : ""
              }`}
              name={item.name[0].value}
              onClick={() => setSelectedCategory(item.name[0].value)}
              isSelected={item.name[0].value === selectedCategory}
            />
          ))
        ) : (
          <div>No categories found.</div>
        )}
      </Container>

      {filteredItems.length > 0 ? (
        filteredItems.map((item) => (
          <React.Fragment key={item.id}>
            <CategoryTitle title={item.name[0].value} />
            <div className="card-wrapper">
              {item.menuItems.map((menuItem) => (
                <Card
                  key={menuItem.id}
                  onClick={() => {
                    setModalCategory(item.name[0].value);
                    handleProductClick(menuItem);
                  }}
                  title={menuItem.name[0].value}
                  price={menuItem.priceSell}
                  image={menuItem.coverImageSrc}
                />
              ))}
            </div>
          </React.Fragment>
        ))
      ) : (
        <div>No products found</div>
      )}
      {isModalOpen && selectedProduct && (
        <Modal
          selectedProduct={selectedProduct}
          category={modalCategory}
          closeModal={closeModal}
        />
      )}
    </main>
  );
};

export default App;
