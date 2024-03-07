import React, { useState } from "react";
import { IProgram } from "../interfaces";
import SingleProgram from "./SingleProgram";
import { Categories } from "./Categories";

interface IProgramProps {
  programs: IProgram[];
}

const Program = ({ programs }: IProgramProps) => {
  return (
    <>
      <div className="programs">
        <div>
          <Categories />
        </div>

        <section className="channelsAndPrograms">
          <h1 className="heading">All programs</h1>
          <div className="channelsAndPrograms-row">
            {programs.map((program, index) =>
              index < 3 ? <SingleProgram program={program} key={program.id} /> : null
            )}
          </div>
          <div className="channelsAndPrograms-row">
            {programs.map((program, index) =>
              index < 7 && index >= 4 ? <SingleProgram program={program} key={program.id} /> : null
            )}
          </div>
          <div className="channelsAndPrograms-row">
            {programs.map((program, index) =>
              index < 10 && index >= 7 ? <SingleProgram program={program} key={program.id} /> : null
            )}
          </div>
          <div className="channelsAndPrograms-row">
            {programs.map((program, index) =>
              index >= 10 ? <SingleProgram program={program} key={program.id} /> : null
            )}
          </div>
        </section>
      </div>
    </>
  );
};

export default Program;
