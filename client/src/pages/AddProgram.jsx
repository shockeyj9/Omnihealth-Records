import { useState } from 'react';
import { useMutation } from '@apollo/client';
import { Navigate } from 'react-router-dom';
import Auth from '../utils/auth'
import { ADD_PROGRAM } from '../graphql/mutations/program'

const AddProgram = () => {
    if (!Auth.loggedIn()) {
        return <Navigate to="/" />;
      }
    const [formState, setFormState] = useState({
        beginDate: '',
        endDate: '',
        name: '',
    });
    const [addProgram, { error, data }] = useMutation(ADD_PROGRAM);

    const handleFormSubmit = async (event) => {
        event.preventDefault();


        try {
            const { data } = await addProgram({
                variables: { ...formState },
            });

            window.location.replace('/Programs')
        } catch (err) {
            console.error(err);
        }
         // clear form values
    setFormState({
        beginDate: '',
        endDate: '',
        name: '',
      });
    };

    const handleChange = (event) => {
        const { name, value } = event.target;

        setFormState({
            ...formState, 
            [name]: value,
        });

    }
    return (
        <div  className = "add-new">
            <h2 className="card-header">New Program Entry</h2>
            <form onSubmit={handleFormSubmit}>
            <label name="beginDate">Begin Date:</label>
                <input
                    className="form-input"
                    placeholder="Begin Date"
                    name="beginDate"
                    type="text"
                    value={formState.beginDate}
                    onChange={handleChange}
                />
                <label name="endDate">End Date:</label>
                <input
                    className="form-input"
                    placeholder="End Date"
                    name="endDate"
                    type="text"
                    value={formState.endDate}
                    onChange={handleChange}
                />
                <label name="name">Program Name:</label>
                <input
                    className="form-input"
                    placeholder="Program Name"
                    name="name"
                    type="text"
                    value={formState.name}
                    onChange={handleChange}
                />
               
                <button
                    className="addbtn btn-block btn-primary"
                    style={{ cursor: 'pointer' }}
                    type="submit"
                >
                    Submit
                </button>
                {error && (
                    <div className="col-12 my-3 bg-danger text-white p-3">
                        Something went wrong...
                    </div>
                )}
            </form>
        </div>
    );
};

export default AddProgram;
