import React, { useState } from "react";
import { IProgram } from "../interfaces";
import { Program } from "./Program";
import { Categories } from "./Categories";

interface IProgramsProps {
  programs: IProgram[];

}

const Programs = ({ programs }: IProgramsProps) => {
  return (
    <>
      <div className="programs">
        <div className="sortArea">
          <h1 className="heading left">Categories</h1>
         <Categories />
        </div>

        <section className="channelsAndPrograms">
          <h1 className="heading">All programs</h1>
          <div className="channelsAndPrograms-row">
            {programs.map((program, index) =>
              index < 3 ? <Program details={false} key={program.id} program={program} /> : null
            )}
          </div>
          <div className="channelsAndPrograms-row">
            {programs.map((program, index) =>
              index < 7 && index >= 4 ? (
                <Program details={false} program={program} key={program.id} />
              ) : null
            )}
          </div>
          <div className="channelsAndPrograms-row">
            {programs.map((program, index) =>
              index < 10 && index >= 7 ? (
                <Program details={false} program={program} key={program.id} />
              ) : null
            )}
          </div>
          <div className="channelsAndPrograms-row">
            {programs.map((program, index) =>
              index >= 10 ? <Program details={false} program={program} key={program.id} /> : null
            )}
          </div>
        </section>
      </div>
    </>
  );
};

export default Programs;
