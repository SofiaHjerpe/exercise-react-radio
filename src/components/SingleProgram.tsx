import React from "react";
import { IProgram } from "../interfaces";

interface ISingleProgramProps {
  program: IProgram;
}

const SingleProgram = ({ program }: ISingleProgramProps) => {
  const daysInWeek = ["Måndag", "Tisdag", "Onsdag", "Torsdag", "Fredag", "Lördag", "Söndag"];
  const dayOfToday = new Date().getDay();
  console.log(dayOfToday)
  return (
    <div className="card">
      <p>{program.description}</p>
      <p>{program.broadcastinfo}</p>
      <p>Contact</p>
      <p>{program.email}</p>
      <p>{program.phone}</p>
      <img width={400} src={program.programimagetemplate} alt="img" />
    </div>
  );
};

export default SingleProgram;
