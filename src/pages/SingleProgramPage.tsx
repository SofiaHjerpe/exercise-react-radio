import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { IProgram, ISingleProgramData } from "../interfaces";
import { Program } from "../components/Program";

export const SingleProgramPage = () => {
  const baseUrl = "https://api.sr.se/api/v2/";
  const { programid } = useParams();
  const [programBefore, setProgram] = useState<IProgram>(Object);

  const fetchSingleProgramData = async () => {
    const response = await fetch(`${baseUrl}programs/${programid}?format=json`);
    const programObj: ISingleProgramData = await response.json();

    const program: IProgram = programObj.program;
    setProgram(program);
    console.log(program);
  };

  useEffect(() => {
    fetchSingleProgramData();
  }, []);

  return (
    <>
      <Program details={true} program={programBefore} />
    </>
  );
};
