import React, { useEffect, useState } from "react";
import { ICategory, IProgramCategory } from "../interfaces";
import { SortedPage } from "../pages/SortedPage";
import { Link } from "react-router-dom";
interface ICategoriesProps {
  channelid: string | undefined;
}

export const Categories = ({ channelid }: ICategoriesProps) => {
  const [categories, setCategories] = useState<ICategory[]>([]);
  const baseUrl = "http://api.sr.se/api/v2/";
  const fetchCategories = async () => {
    const response = await fetch(`${baseUrl}programcategories?format=json`);
    const categoriesObj: IProgramCategory = await response.json();
    const categories: ICategory[] = categoriesObj.programcategories;
    setCategories(categories);
    console.log(categories);
  };
  useEffect(() => {
    fetchCategories();
  }, []);
  return (
    <>
      {/* {console.log(programCategory.name)} */}
      <section>
        <div className="links">
          {categories.map((category) => (
            <Link
              key={category.id}
              to={`/programs/${channelid}&${category.id}`}
              className="link borderb"
            >
              {category.name}
            </Link>
          ))}
        </div>
      </section>
    </>
  );
};
