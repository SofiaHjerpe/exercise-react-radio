import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import Program from "../components/Programs";
import { IProgram, IProgramData } from "../interfaces";

export const ProgramPage = () => {
  const { id } = useParams();
  const baseUrl = "https://api.sr.se/api/v2/";
  const [programsBefore, setPrograms] = useState<IProgram[]>([]);

  const fetchPrograms = async () => {
    const response = await fetch(
      `${baseUrl}programs/index?channelid=${id}&format=json&indent=true`
    );
    const programObject: IProgramData = await response.json();

    const programs: IProgram[] = programObject.programs;
    setPrograms(programs);
    console.log(id);
  };
  useEffect(() => {
    fetchPrograms();
  }, []);

  return <Program programs={programsBefore} />;
};

export default ProgramPage;
