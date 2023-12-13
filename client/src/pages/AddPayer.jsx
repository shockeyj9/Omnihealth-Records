import { useState } from 'react';
import { useMutation } from '@apollo/client';
import { ADD_PAYER } from '../graphql/mutations/payer';


const AddPayer = (payer) => {

    const [formState, setFormState] = useState({
        beginDate: '',
        endDate: '',
        name: '',
        electronicId: payer.electronic_id,
    });
    const [addPayer, { error, data }] = useMutation(ADD_PAYER);

    const handleFormSubmit = async (event) => {
        event.preventDefault();
        console.log(formState);

        try {
            const { data } = await addPayer({
                variables: { ...formState },
            });

            window.location.href = 'http://localhost:3000/Payers';
        } catch (err) {
            console.error(err);
        }
         // clear form values
    setFormState({
        beginDate: '',
        endDate: '',
        name: '',
        electronicId: '',
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
        <div className = "add-new">
            <h2 className="card-header">New Payer Plan Entry</h2>
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
                    placeholder="Payer Name"
                    name="name"
                    type="text"
                    value={formState.name}
                    onChange={handleChange}
                />
                <input
                    className="form-input"
                    placeholder="Electronic Payer ID"
                    name="electronic_id"
                    type="text"
                    value={formState.electronicId}
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

export default AddPayer;
