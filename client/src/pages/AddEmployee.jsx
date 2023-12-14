import { useState } from 'react';
import { useMutation } from '@apollo/client';
import { Navigate } from 'react-router-dom';
import Auth from '../utils/auth'
import { ADD_EMPLOYEE } from '../graphql/mutations/employee'
import mongoose from 'mongoose'
const AddEmployee = () => {
    if (!Auth.loggedIn()) {
        return <Navigate to="/" />;
      }
    const [formState, setFormState] = useState({
        demographics: {
            name: '',
            dateOfBirth: '',
            sex: '',
            gender: '',
            race: '',
            ethnicity: '',
            role: '',
            contactInfo: { phone: '', email: '' }
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

    const [addEmployee, { error, data }] = useMutation(ADD_EMPLOYEE);

    const handleFormSubmit = async (event) => {
        event.preventDefault();


        try {
            const { data } = await addEmployee({
                variables: { ...formState },
            });

            window.location.replace('/EmployeeAdministration')
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
        })
    };

    const handleNameChange = (event) => {
        setFormState( (prevState) => {return {
            ...prevState,
            demographics: { ...prevState.demographics, name: event.target.value }}
        })
    }
    const handleBirthChange = (event) => {
        setFormState( (prevState) => {return {
            ...prevState,
            demographics: { ...prevState.demographics, dateOfBirth: event.target.value }}
        })
    }
    const handleSexChange = (event) => {
        setFormState( (prevState) => {return {
            ...prevState,
            demographics: { ...prevState.demographics, sex: event.target.value }}
        })
    }
    const handleGenderChange = (event) => {
        setFormState( (prevState) => {return {
            ...prevState,
            demographics: { ...prevState.demographics, gender: event.target.value }}
        })
    }
    const handleRaceChange = (event) => {
        setFormState( (prevState) => {return {
            ...prevState,
            demographics: { ...prevState.demographics, race: event.target.value }}
        })
    }
    const handleEthnicityChange = (event) => {
        setFormState( (prevState) => {return {
            ...prevState,
            demographics: { ...prevState.demographics, ethnicity: event.target.value }}
        })
    }
    const handleRoleChange = (event) => {
        setFormState( (prevState) => {return {
            ...prevState,
            demographics: { ...prevState.demographics, role: event.target.value }}
        })
    }
    const handlePhoneChange = (event) => {
        setFormState( (prevState) => {return {
            ...prevState,
            demographics: { ...prevState.demographics, contactInfo: {...prevState.demographics.contactInfo, phone: event.target.value }}}
        })
    }
    const handleEmailChange = (event) => {
        setFormState( (prevState) => {return {
            ...prevState,
            demographics: { ...prevState.demographics, contactInfo: {...prevState.demographics.contactInfo, email: event.target.value }}}
        })
    }
    const handleMailingChange = (event) => {
        setFormState( (prevState) => {return {
            ...prevState,
            demographics: { ...prevState.demographics, addresses: {...prevState.demographics.addresses, mailing: event.target.value }}}
        })
    }
    const handlePhysicalChange = (event) => {
        setFormState( (prevState) => {return {
            ...prevState,
            demographics: { ...prevState.demographics, addresses: {...prevState.demographics.addresses, physical: event.target.value }}}
        })
    }
    const handleStartDateChange = (event) => {
        setFormState( (prevState) => {return {
            ...prevState,
            demographics: { ...prevState.demographics, addresses: {...prevState.demographics.addresses, startDate: event.target.value }}}
        })
    }
    const handleEndDateChange = (event) => {
        setFormState( (prevState) => {return {
            ...prevState,
            demographics: { ...prevState.demographics, addresses: {...prevState.demographics.addresses, endDate: event.target.value }}}

        })
    }
    const handleSupervisorIdChange = (event) => {
        setFormState( (prevState) => {return {
            ...prevState,
            supervisors: { ...prevState.supervisors, supervisor_id: event.target.value }}
        })
    }
    const handleSupervisorStartDateChange = (event) => {
        setFormState( (prevState) => {return {
            ...prevState,
            supervisors: { ...prevState.supervisors, startDate: event.target.value }}
        })
    }
    const handleSupervisorEndDateChange = (event) => {
        setFormState( (prevState) => {return {
            ...prevState,
            supervisors: { ...prevState.supervisors, endDate: event.target.value }}
        })
    }


    return (
        <div className="add-new">
            <h2 className="card-header">New Employee Entry</h2>
            <form onSubmit={handleFormSubmit}>
            <div className="row">
                <div className="column"> 
                <p className="empHeader">Demographics</p>
                <label name="name">Employee Name:</label>
                    <input
                        className="form-input"
                        placeholder="name"
                        name="demographics"
                        type="text"
                        value={formState.demographics.name}
                        onChange={handleNameChange}
                    />
                    <label name="name">Date of Birth:</label>
                    <input
                        className="form-input"
                        placeholder="date of birth"
                        name="demographics"
                        type="text"
                        value={formState.demographics.dateOfBirth}
                        onChange={handleBirthChange}
                    />
                    <label name="name">Sex:</label>
                    <input
                        className="form-input"
                        placeholder="sex"
                        name="demographics"
                        type="text"
                        value={formState.demographics.sex}
                        onChange={handleSexChange}
                    />
                    <label name="name">Gender:</label>
                    <input
                        className="form-input"
                        placeholder="gender"
                        name="demographics"
                        type="text"
                        value={formState.demographics.gender}
                        onChange={handleGenderChange}
                    />
                    <label name="name">Race:</label>
                    <input
                        className="form-input"
                        placeholder="race"
                        name="demographics"
                        type="text"
                        value={formState.demographics.race}
                        onChange={handleRaceChange}
                    />
                    <label name="name">Ethnicity:</label>
                    <input
                        className="form-input"
                        placeholder="ethnicity"
                        name="demographics"
                        type="text"
                        value={formState.demographics.ethnicity}
                        onChange={handleEthnicityChange}
                    />
                     <label name="name">Role:</label>
                    <input
                        className="form-input"
                        placeholder="role"
                        name="demographics"
                        type="text"
                        value={formState.demographics.role}
                        onChange={handleRoleChange}
                    />
                </div>
                <div className="column">
                    <p className="empHeader">Contact Info</p>
                    <label name="name">Phone:</label>
                    <input
                        className="form-input"
                        placeholder="phone"
                        name="demographics"
                        type="text"
                        value={formState.demographics.contactInfo.phone}
                        onChange={handlePhoneChange}
                    />
                    <label name="name">Email:</label>
                    <input
                        className="form-input"
                        placeholder="email"
                        name="demographics"
                        type="email"
                        value={formState.demographics.contactInfo.email}
                        onChange={handleEmailChange}
                    />
                </div>
                <div className="column">
                    <p className="empHeader">Addresses</p>
                    <label name="name">Mailing:</label>
                    <input
                        className="form-input"
                        placeholder="mailing"
                        name="demographics"
                        type="text"
                        value={formState.demographics.addresses.mailing}
                        onChange={handleMailingChange}
                    />
                    <label name="name">Physical:</label>
                    <input
                        className="form-input"
                        placeholder="physical"
                        name="demographics"
                        type="text"
                        value={formState.demographics.addresses.physical}
                        onChange={handlePhysicalChange}
                    />
                     <label name="name">Start Date:</label>
                    <input
                        className="form-input"
                        placeholder="start date"
                        name="demographics"
                        type="text"
                        value={formState.demographics.addresses.startDate}
                        onChange={handleStartDateChange}
                    />
                     <label name="name">End Date:</label>
                    <input
                        className="form-input"
                        placeholder="end date"
                        name="demographics"
                        type="text"
                        value={formState.demographics.addresses.endDate}
                        onChange={handleEndDateChange}
                    />
                </div>
                <div className="column">
                    <p className="empHeader">Supervisors</p>
                    <label name="name">Supervisor Id:</label>
                    <input
                        className="form-input"
                        placeholder="supervisor_id"
                        name="supervisor_id"
                        type="text"
                        value={formState.supervisors.supervisor_id}
                        onChange={handleSupervisorIdChange}
                    />
                    <label name="name">Supervisor Start Date:</label>
                    <input
                        className="form-input"
                        placeholder="start date"
                        name="supervisors"
                        type="text"
                        value={formState.supervisors.startDate}
                        onChange={handleSupervisorStartDateChange}
                    />
                     <label name="name">Supervisor End Date:</label>
                    <input
                        className="form-input"
                        placeholder="end date"
                        name="supervisors"
                        type="text"
                        value={formState.supervisors.endDate}
                        onChange={handleSupervisorEndDateChange}
                    />
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
                </div>
            </form>
        </div>
    );
};

export default AddEmployee;
