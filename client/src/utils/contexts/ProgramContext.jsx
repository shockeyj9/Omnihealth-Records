import { createContext, useContext, useState,useReducer } from 'react';
import { useQuery,useMutation } from "@apollo/client";
import { QUERY_PROGRAMS,QUERY_PROGRAM } from "../../graphql/queries/program";
import { UPDATE_PROGRAM} from "../../graphql/mutations/program";
import reducer from '../reducers';

const ProgramContext = createContext();
export const useProgramContext = () => useContext(ProgramContext);


export const ProgramProvider = ({ children }) => {
  
  //Gets all Programs
    const { loading, data } = useQuery(QUERY_PROGRAMS);
    const programsData = data?.programs || [];
    const [programs, setPrograms] = useState(programsData)

  //Gets payer by ID
    const getProgram = (id) => {
      const { loading, error, data } = useQuery(QUERY_PROGRAM, {variables: {id: id}});
      const programData = data?.program || [];
      const [program, setProgram] = useState(programData)
      return program
      };

    const [updateProgram, { errors }] = useMutation(UPDATE_PROGRAM);

    const [state, dispatch] = useReducer(reducer, { 
      programs,
      getProgram,
      updateProgram
    });

    return (
        <ProgramContext.Provider
          value={[state, dispatch]}       >
          {children}
        </ProgramContext.Provider>
      );
}