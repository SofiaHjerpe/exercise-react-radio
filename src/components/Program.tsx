import React, { useState } from "react";
import { IProgram } from "../interfaces";
import SingleProgram from "./SingleProgram";

interface IProgramProps {
  programs: IProgram[];
}

const Program = ({ programs }: IProgramProps) => {
  return (
    <>
      <h1 className="heading">All programs</h1>
      <section className="channelsAndPrograms">
        <div className="channelsAndPrograms-row">
          {programs.map((program, index) =>
            index < 3 ? <SingleProgram program={program} key={program.id} /> : null
          )}
        </div>
        <div className="channelsAndPrograms-row">
          {programs.map((program, index) =>
            index <= 6 && index > 3 ? <SingleProgram program={program} key={program.id} /> : null
          )}
        </div>
        <div className="channelsAndPrograms-row">
          {programs.map((program, index) =>
            index <= 9 && index >= 7 ? <SingleProgram program={program} key={program.id} /> : null
          )}
        </div>
        <div className="channelsAndPrograms-row">
          {programs.map((program, index) =>
            index > 10 && index <= 12 ? <SingleProgram program={program} key={program.id} /> : null
          )}
        </div>
      </section>
    </>
  );
};

export default Program;
