import { useParams } from "react-router-dom";

const CategoryPage = () => {
  const { categoryId } = useParams();

  return (
    <div>
      <h2>{categoryId} Category</h2>
    </div>
  );
};

export default CategoryPage;
