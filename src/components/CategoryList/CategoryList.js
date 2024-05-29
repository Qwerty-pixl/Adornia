import React, { useContext } from "react";
import { NavLink } from "react-router-dom";
import { AppContext } from "../../App";
import AddCategory from "../AddCategory/AddCategory";
import DeleteCategory from "../DeleteCategory/DeleteCategory";
import "./CategoryList.css";

export default function CategoryList() {
  const { categories } = useContext(AppContext);

  // Reorder categories array to ensure "All" category is first
  const sortedCategories = [
    // Find the "All" category and place it first
    categories.find(category => category.name.toLowerCase() === "all"),
    // Filter out the "All" category from the rest
    ...categories.filter(category => category.name.toLowerCase() !== "all")
  ].filter(Boolean); // Remove any undefined values

  const output = sortedCategories.map((category) => (
    <li key={category.id}>
      <NavLink to={`/categories/${category.slug}`}>
        {category.name}
      </NavLink>
      <DeleteCategory category={category} />
    </li>
  ));

  return (
    <div className="CategoryList">
      <ul>{output}</ul>
      <div className="AddCategoryWrapper">
        <AddCategory />
      </div>
    </div>
  );
}
