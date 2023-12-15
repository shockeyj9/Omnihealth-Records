import { PayerProvider } from '../utils/contexts/PayerContext';
import UpdatePayerForm from '../components/UpdatePayerForm'
import { Navigate } from 'react-router-dom';
import Auth from '../utils/auth'




const SinglePayer = () => {
  if (!Auth.loggedIn()) {
    return <Navigate to="/" />;
  }


  return (

          <UpdatePayerForm />

  );
};

export default SinglePayer;
