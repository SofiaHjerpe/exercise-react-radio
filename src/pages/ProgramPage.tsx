import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { IProgram } from "../interfaces";
import Program from "../components/Program";

export const ProgramPage = () => {
  const { id } = useParams();
  const [programsBefore, setPrograms] = useState<IProgram[]>([]);
  //index?channelid=${id}

  const fetchPrograms = async () => {
    const response = await fetch(`https://api.sr.se/api/v2/programs/?format=json`);
    const programs: IProgram[] = await response.json();

    setPrograms(programs);
    console.log(programs);
  };
  useEffect(() => {
    fetchPrograms();
  }, []);
};

export default ProgramPage;
