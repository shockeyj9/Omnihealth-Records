import { useState } from 'react';
import { useMutation } from '@apollo/client';

import { ADD_PROGRAM } from '../graphql/mutations/program'

const AddProgram = () => {

    const [formState, setFormState] = useState({
        beginDate: '',
        endDate: '',
        name: '',
    });
    const [addProgram, { error, data }] = useMutation(ADD_PROGRAM);

    const handleFormSubmit = async (event) => {
        event.preventDefault();
        console.log(formState);

        try {
            const { data } = await addProgram({
                variables: { ...formState },
            });

            window.location.href = 'http://localhost:3000/Programs';
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
        <div>
            <h1>New Program Entry</h1>
            <form onSubmit={handleFormSubmit}>
                <input
                    className="form-input"
                    placeholder="Begin Date"
                    name="beginDate"
                    type="text"
                    value={formState.beginDate}
                    onChange={handleChange}
                />
                <input
                    className="form-input"
                    placeholder="End Date"
                    name="endDate"
                    type="text"
                    value={formState.endDate}
                    onChange={handleChange}
                />
                <input
                    className="form-input"
                    placeholder="Program Name"
                    name="name"
                    type="text"
                    value={formState.name}
                    onChange={handleChange}
                />
               
                <button
                    className="btn btn-block btn-primary"
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
