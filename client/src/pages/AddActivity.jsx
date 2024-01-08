import { useState } from 'react';
import { useMutation } from '@apollo/client';
import PayerDropdown from '../components/PayerDropDown';
import ProgramDropdown from '../components/ProgramDropDown';
import { ADD_ACTIVITY } from '../graphql/mutations/activity'
import { Navigate } from 'react-router-dom';
import Auth from '../utils/auth'

const AddActivity = () => {
    if (!Auth.loggedIn()) {
        return <Navigate to="/" />;
      }
    const [formState, setFormState] = useState({
        beginDate: '',
        endDate: '',
        name: '',
        procedureCode: '', 
        procedureFee: '' ,
        documentName: '' ,
    });

    const [addActivity, { error, data }] = useMutation(ADD_ACTIVITY);

    const handleFormSubmit = async (event) => {
        event.preventDefault();


        try {
            const { data } = await addActivity({
                variables: {
                    name: formState.name,
                    procedureCode: {
                        code: formState.procedureCode,
                        fee: parseInt(formState.procedureFee,10)
                    },
                    beginDate: formState.beginDate,
                    endDate: formState.endDate
                },
            });

            window.location.replace('/ActivityAdministration')
        } catch (err) {
            console.error(err);
        }
        // clear form values
        setFormState({
            beginDate: '',
            endDate: '',
            name: '',
            procedureCode: '', 
            procedureFee: '' ,
            documentName: '' ,
        });
    };

    const handleFormChange = (event) => {
        const { name, value } = event.target;
        setFormState({
            ...formState, 
            [name]: value,
        });
      };







    return (
        <div className="add-new">
            <h2 className="card-header">New Activity Entry</h2>
            <form onSubmit={handleFormSubmit}>
                <label name="beginDate">Begin Date:</label>
                <input
                    className="form-input"
                    placeholder="Begin Date"
                    name="beginDate"
                    type="text"
                    value={formState.beginDate}
                    onChange={handleFormChange}
                />
                <label name="endDate">End Date:</label>
                <input
                    className="form-input"
                    placeholder="End Date"
                    name="endDate"
                    type="text"
                    value={formState.endDate}
                    onChange={handleFormChange}
                />
                <label name="name">Activity Name:</label>
                <input
                    className="form-input"
                    placeholder="Activity Name"
                    name="name"
                    type="text"
                    value={formState.name}
                    onChange={handleFormChange}
                />
                <label name="procedureCode">Procedure Code:</label>
                <input
                    className="form-input"
                    placeholder="Procedure Code"
                    name="procedureCode"
                    type="text"
                    value={formState.procedureCode}
                    onChange={handleFormChange}
                />
                <label name="procedureCode">Procedure Fee:</label>
                <input
                    className="form-input"
                    placeholder="Procedure Fee"
                    name="procedureFee"
                    type="text"
                    value={formState.procedureFee}
                    onChange={handleFormChange}
                />
                <label name="document">Document Name:</label>
                <input
                    className="form-input"
                    placeholder="Service Document"
                    name="document"
                    type="text"
                    value={formState.documentName}
                    onChange={handleFormChange}
                />
                
                <div className="activitydropdowns">
                <label name="payers">Payer:</label>
                    <PayerDropdown />
                </div>
                <div className="activitydropdowns">
                <label name="program">Program:</label>
                    <ProgramDropdown />
                </div>
                <button
                    className="addbtn btn-block btn-primary"
                    style={{ cursor: 'pointer' }}
                    type="submit"
                >
                    Submit
                </button>
                {error && (
                    <div className="col-12 my-3 bg-danger text-white p-3">
                        {JSON.stringify(error)}
                        Something went wrong...
                    </div>
                )}
            </form>
        </div>
    );
};

export default AddActivity;
