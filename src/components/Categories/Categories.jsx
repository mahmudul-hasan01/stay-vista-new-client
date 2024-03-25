import { useSearchParams } from "react-router-dom";
import { categories } from "./CategoriesData";
import CategoryBox from "./CategoryBox";

const Categories = () => {

  const [params, setParams] = useSearchParams()
  const categorys = params.get('category')

  return (
    <div className="py-4 flex items-center justify-between overflow-x-auto">
      {categories.map((category, index) => <CategoryBox key={index} label={category.label} icon={category.icon} selected={categorys === category.label}></CategoryBox>)}
    </div>
  );
};

export default Categories;