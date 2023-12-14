import VerticalTabs from "../components/VerticalTabs";
import { Navigate } from 'react-router-dom';
import Auth from '../utils/auth'

const Admission = () => {
    if (!Auth.loggedIn()) {
        return <Navigate to="/" />;
      }
    return (
        <>
        <VerticalTabs />
        </>
    )
}

export default Admission;
