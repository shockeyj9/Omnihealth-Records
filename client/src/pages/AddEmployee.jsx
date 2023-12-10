import { useState } from 'react';
import { useMutation } from '@apollo/client';

import { ADD_EMPLOYEE } from '../graphql/mutations/employee'
import mongoose from 'mongoose'
const AddEmployee = () => {

    const [formState, setFormState] = useState({
        demographics: {
            name: '', 
            dateOfBirth: '', 
            sex: '',
            gender: '',
            race: '',
            ethnicity: '',
            role: '',
            contactInfo: {phone: '', email: ''}
        ,
            addresses: {
                mailing: '',
                physical: '',
                startDate: '',
                endDate: '',
        }
    },
        supervisors: {
            supervisor_id: new mongoose.Types.ObjectId(1),
            startDate: '',
            endDate: '',
        }
    });

    const [AddEmployee, { error, data }] = useMutation(ADD_EMPLOYEE);

    const handleFormSubmit = async (event) => {
        event.preventDefault();
        console.log(formState);

        try {
            const { data } = await addEmployee({
                variables: { ...formState },
            });

            window.location.reload();
        } catch (err) {
            console.error(err);
        }
         // clear form values
    setFormState({
        demographics: {
            name: '', 
            dateOfBirth: '', 
            sex: '',
            gender: '',
            race: '',
            ethnicity: '',
            role: '',
            contactInfo: {
                phone: '', 
                email: ''
            }
        ,
            addresses: {
                mailing: '',
                physical: '',
                startDate: '',
                endDate: '',
        }
    },
        supervisors: {
            supervisor_id: new mongoose.Types.ObjectId(1),
            startDate: '',
            endDate: '',
        }
        // id has to be a valid mongodb object id, do we need to pull the programs and payers (dropdown?) 
      })
    };

    const handleNameChange = (event) => {
        setFormState({
            ...formState,
            demographics : {...formState.demographics, name: event.target.value}
        })
    }

    const handleBirthChange = (event) => {
        setFormState({
            ...formState,
            demographics : {...formState.demographics, dateOfBirth: event.target.value}
        })
    }

    const handleSexChange = (event) => {
        setFormState({
            ...formState,
            demographics : {...formState.demographics, sex: event.target.value}
        })
    }

    const handleGenderChange = (event) => {
        setFormState({
            ...formState,
            demographics : {...formState.demographics, gender: event.target.value}
        })
    }

    const handleRaceChange = (event) => {
        setFormState({
            ...formState,
            demographics: {...formState.demographics, race: event.target.value}
        })
    }

    const handleEthnicityChange = (event) => {
        setFormState({
            ...formState,
            demographics: {...formState.demographics, ethnicity: event.target.value}
        })
    }

    const handleRoleChange = (event) => {
        setFormState({
            ...formState,
            demographics: {...formState.demographics, role: event.target.value}
        })
    }

    console.log(formState)
    return (
        <div>
            <h1>New Employee Entry</h1>
            <form onSubmit={handleFormSubmit}>
               <p>Demographics:</p> 
                <input
                    className="form-input"
                    placeholder="name"
                    name="demographics"
                    type="text"
                    value={formState.demographics.name}
                    onChange={handleNameChange}
                />
                <input
                    className="form-input"
                    placeholder="date of birth"
                    name="demographics"
                    type="text"
                    value={formState.demographics.dateOfBirth}
                    onChange={handleBirthChange}
                />
                <input
                    className="form-input"
                    placeholder="sex"
                    name="demographics"
                    type="text"
                    value={formState.demographics.sex}
                    onChange={handleSexChange}
                />
                <input
                    className="form-input"
                    placeholder="gender"
                    name="demographics"
                    type="text"
                    value={formState.demographics.gender}
                    onChange={handleGenderChange}
                />
                <input
                    className="form-input"
                    placeholder="race"
                    name="demographics"
                    type="text"
                    value={formState.demographics.race}
                    onChange={handleRaceChange}
                />
                <input
                    className="form-input"
                    placeholder="ethnicity"
                    name="demographics"
                    type="text"
                    value={formState.demographics.ethnicity}
                    onChange={handleEthnicityChange}
                />
                <input
                    className="form-input"
                    placeholder="role"
                    name="demographics"
                    type="text"
                    value={formState.demographics.role}
                    onChange={handleRoleChange}
                />
                <p>Contact Info:</p>
                <input
                    className="form-input"
                    placeholder="phone"
                    name="demographics"
                    type="text"
                    value={formState.contactInfo.phone}
                    onChange={handleChange}
                />
                <input
                    className="form-input"
                    placeholder="email"
                    name="demographics"
                    type="email"
                    value={formState.contactInfo.email}
                    onChange={handleChange}
                />
                <p>Addresses:</p>
                <input
                    className="form-input"
                    placeholder="mailing"
                    name="demographics"
                    type="text"
                    value={formState.addresses.mailing}
                    onChange={handleChange}
                />
                <input
                    className="form-input"
                    placeholder="physical"
                    name="demographics"
                    type="text"
                    value={formState.addresses.physical}
                    onChange={handleChange}
                />
                <input
                    className="form-input"
                    placeholder="start date"
                    name="demographics"
                    type="text"
                    value={formState.addresses.startDate}
                    onChange={handleChange}
                />
                <input
                    className="form-input"
                    placeholder="end date"
                    name="demographics"
                    type="text"
                    value={formState.addresses.endDate}
                    onChange={handleChange}
                />
                <p>Supervisors:</p>
                <input
                    className="form-input"
                    placeholder="start date"
                    name="supervisors"
                    type="text"
                    value={formState.supervisors.startDate}
                    onChange={handleChange}
                />
                <input
                    className="form-input"
                    placeholder="end date"
                    name="supervisors"
                    type="text"
                    value={formState.supervisors.endDate}
                    onChange={handleChange}
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

export default AddEmployee;
