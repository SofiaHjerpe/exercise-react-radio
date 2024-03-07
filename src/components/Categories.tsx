import React, { useEffect, useState } from "react";
import { ICategory, IProgramCategory } from "../interfaces";


export const Categories = () => {
  const [categories, setCategories] = useState<ICategory[]>([])
  const baseUrl = "http://api.sr.se/api/v2/";
  const fetchCategories = async () => {
    const response = await fetch(`${baseUrl}programcategories?format=json`);
    const categoriesObj: IProgramCategory = await response.json();
    const categories: ICategory[] = categoriesObj.programcategories;
    setCategories(categories)
    console.log(categories);
  }
  useEffect(()=> {
   fetchCategories()
  }, [])
  return (
    <>
      {/* {console.log(programCategory.name)} */}
      <section>
        <div className="links">
          {categories.map((category) => (
            <a className="link borderb">{category.name}</a>
          ))}
        </div>
      </section>
    </>
  );
};
