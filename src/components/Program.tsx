import { Link } from "react-router-dom";
import { IProgram } from "../interfaces";

interface IProgramProps {
  program: IProgram;
  details: Boolean;
}

export const Program = ({ program, details }: IProgramProps) => {
  if (details === false) {
    return (
      <div className="card">
        <h4>{program.programslug}</h4>
        <p>{program.description}</p>
        <p>Contact</p>
        <p>{program.email}</p>
        <p>{program.phone}</p>
        <Link className="link" to={`/programs/${program.id}`}>
          see more
        </Link>
        <img width={200} height={110} src={program.programimagetemplate} alt="img" />
      </div>
    );
  } else {
    return (
      <div className="bigCard">
        <h1>{program.programslug}</h1>
        <p>{program.description}</p>
        <p>{program.broadcastinfo}</p>
        <p>Contact</p>
        <p>{program.email}</p>
        <p>{program.phone}</p>

        <img width={400} src={program.socialimage} alt="img" />
       
      </div>
    );
  }
};
