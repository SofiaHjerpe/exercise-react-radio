import React from 'react'
import { IProgram } from '../interfaces';
import SingleProgram from './SingleProgram';

interface IProgramProps {
  programs: IProgram[];
}

const Program = ({programs}: IProgramProps) => {
  return (
    <div className="programs">
        {programs.map((program) => 
           <SingleProgram key={program.id} program={program} />
        )}


    </div>
  )
}

export default Program