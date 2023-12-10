import { useState } from 'react';
import { useMutation } from '@apollo/client';

import { ADD_ACTIVITY } from '../graphql/mutations/activity'
import mongoose from 'mongoose'
const AddActivity = () => {

    const [formState, setFormState] = useState({
        beginDate: '',
        endDate: '',
        name: '',
        procedureCode: {code: '', fee: ''},
        document: {name: ''},
        programs: {_id:  new mongoose.Types.ObjectId(1)},
        payers: {_id:  new mongoose.Types.ObjectId(2)},
    });
    const [addActivity, { error, data }] = useMutation(ADD_ACTIVITY);

    const handleFormSubmit = async (event) => {
        event.preventDefault();
        console.log(formState);

        try {
            const { data } = await addActivity({
                variables: { ...formState },
            });

            window.location.reload();
        } catch (err) {
            console.error(err);
        }
         // clear form values
    setFormState({
        beginDate: '',
        endDate: '',
        name: '',
        procedureCode: {code: '', fee: ''},
        document: {name: ''},
        programs: {_id:  new mongoose.Types.ObjectId(1)},
        payers: {_id:  new mongoose.Types.ObjectId(2)},
        // id has to be a valid mongodb object id, do we need to pull the programs and payers (dropdown?) 
      });
    };

    const handleChange = (event) => {
        const { name, value } = event.target;

        setFormState({
            ...formState, 
            [name]: value,
        });

    }

    const handleDocumentChange = (event) => {
        setFormState({
            ...formState,
            document : {name: event.target.value}
        })
    }
    const handleProcedureCodeChange = (event) => {
        setFormState({
            ...formState,
            procedureCode : {...formState.procedureCode, code: event.target.value}
        })
    }

    const handleProcedureFeeChange = (event) => {
        setFormState({
            ...formState,
            procedureCode : {...formState.procedureCode, fee: event.target.value}
        })
    }

    console.log(formState)
    return (
        <div>
            <h1>New Activity Entry</h1>
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
                    placeholder="Activity Name"
                    name="name"
                    type="text"
                    value={formState.name}
                    onChange={handleChange}
                />
                <input
                    className="form-input"
                    placeholder="Procedure Code"
                    name="procedureCode"
                    type="text"
                    value={formState.procedureCode.code}
                    onChange={handleProcedureCodeChange}
                />
                <input
                    className="form-input"
                    placeholder="Procedure Fee"
                    name="procedureCode"
                    type="number"
                    value={formState.procedureCode.fee}
                    onChange={handleProcedureFeeChange}
                />
                 <input
                    className="form-input"
                    placeholder="Service Document"
                    name="document"
                    type="text"
                    value={formState.document.name}
                    onChange={handleDocumentChange}
                />
                {/* add programs and payers as either a drop down or an input */}
                <button
                    className="btn btn-block btn-primary"
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
