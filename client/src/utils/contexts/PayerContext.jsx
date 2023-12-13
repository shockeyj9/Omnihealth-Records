import { createContext, useContext, useState,useReducer } from 'react';
import { useQuery,useMutation } from "@apollo/client";
import { QUERY_PAYERS,QUERY_PAYER } from "../../graphql/queries/payer";
import { UPDATE_PAYER} from "../../graphql/mutations/payer";
import reducer from '../reducers';

const PayerContext = createContext();
export const usePayerContext = () => useContext(PayerContext);


export const PayerProvider = ({ children }) => {
  
  //Gets all Payers
    const { loading, data } = useQuery(QUERY_PAYERS);
    const payersData = data?.payers || [];
    const [payers, setPayers] = useState(payersData)

  //Gets payer by ID
    const getPayer = (id) => {
      const { loading, error, data } = useQuery(QUERY_PAYER, {variables: {id: id}});
      const payerData = data?.payer || [];
      const [payer, setPayer] = useState(payerData)
      return payer
      };

    const [updatePayer, { errors }] = useMutation(UPDATE_PAYER);

    const [state, dispatch] = useReducer(reducer, { 
      payers,
      getPayer,
      updatePayer
    });

    return (
        <PayerContext.Provider
          value={[state, dispatch]}       >
          {children}
        </PayerContext.Provider>
      );
}