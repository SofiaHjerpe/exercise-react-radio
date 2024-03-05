import React from "react";
import { IProgram } from "../interfaces";

interface ISingleProgramProps {
  program: IProgram;
}

const SingleProgram = ({ program }: ISingleProgramProps) => {
  return (
    <div>
        
      <p>{program.description}</p>
      <p>{program.broadcastinfo}</p>
      <p>Contact</p>
      <p>{program.email}</p>
      <p>{program.phone}</p>
      <img width={200} src={program.programimage} alt="img" />
      <img width={400} src={program.programimagetemplate} alt="img" />
    </div>
  );
};

export default SingleProgram;
