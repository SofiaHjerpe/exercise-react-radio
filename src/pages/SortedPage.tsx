import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { ICategorizedData, IProgram } from "../interfaces";
import { Program } from "../components/Program";

export const SortedPage = () => {
  const [programsBefore, setCategorizedPrograms] = useState<IProgram[]>([]);

  const { channelid } = useParams();
  const { categoryid } = useParams();
  const fetchCategorizedPrograms = async () => {
    const response = await fetch(
      `https://api.sr.se/api/v2/programs/index?channelid=${channelid}&programcategoryid=${categoryid}&format=json`
    );
    const categorizedProgramsObj: ICategorizedData = await response.json();
    const categorizedPrograms: IProgram[] = categorizedProgramsObj.programs;
    setCategorizedPrograms(categorizedPrograms);
    console.log(categorizedPrograms);
  };
  useEffect(() => {
    fetchCategorizedPrograms;
  }, []);
  return (
    <>
      <p> </p>
    </>
  );
};
