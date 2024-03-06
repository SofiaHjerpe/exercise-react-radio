
import { IProgram } from "../interfaces";

interface ISingleProgramProps {
  program: IProgram;

}

const SingleProgram = ({ program,}: ISingleProgramProps) => {

  
  return (
    <div className="card">
      <p>{program.description}</p>
      <p>Contact</p>
      <p>{program.email}</p>
      <p>{program.phone}</p>
      <img width={400} src={program.programimagetemplate} alt="img" />
    </div>
  );
};

export default SingleProgram;
