import React from 'react'
import { IProgram } from '../interfaces';
import SingleProgram from './SingleProgram';

interface IProgramProps {
  programs: IProgram[];
}

const Program = ({programs}: IProgramProps) => {
  return (
    <>
      <section className="channelsAndPrograms">
        <div className="channelsAndPrograms-row">
          {programs.map((program, index) =>
            index < 3 ? <SingleProgram program={program} key={program.id} /> : null
          )}
        </div>
        <div className="channelsAndPrograms-row">
          {programs.map((program, index) =>
            index < 7 && index > 3 ? <SingleProgram program={program} key={program.id} /> : null
          )}
        </div>
        <div className="channelsAndPrograms-row">
          {programs.map((program, index) =>
            index < 10 && index > 7 ? <SingleProgram program={program} key={program.id} /> : null
          )}
        </div>
      </section>
    </>
  );
}

export default Program