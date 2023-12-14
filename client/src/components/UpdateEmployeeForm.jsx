import { useState } from 'react';
import { useQuery, useMutation } from "@apollo/client";
import { UPDATE_EMPLOYEE } from "../graphql/mutations/employee";


export default function UpdateEmployeeForm({ employee }) {


    const [formState, setformState] = useState({
        id: employee._id,
        demographics: {
            name: employee.demographics.name,
            dateOfBirth: employee.demographics.dateOfBirth,
            sex: employee.demographics.sex,
            gender: employee.demographics.gender,
            race: employee.demographics.race,
            ethnicity: employee.demographics.ethnicity,
            role: employee.demographics.role,
            contactInfo: {
                phone: employee.demographics.contactInfo.phone,
                email: employee.demographics.contactInfo.email,
            },
            addresses: {
                mailing: employee.demographics.addresses[0].mailing,
                physical: employee.demographics.addresses[0].physical,
                startDate: employee.demographics.addresses[0].startDate,
                endDate: employee.demographics.addresses[0].endDate,
            }
        },
        supervisors: {
            supervisor_id: employee.supervisors[0].supervisor_id,
            startDate: employee.supervisors[0].startDate,
            endDate: employee.supervisors[0].endDate,
        }
    });

    // set update mutation
    const [updateEmployee, { errors }] = useMutation(UPDATE_EMPLOYEE);


    // const handleChange = (event) => {
    //     const { name, value } = event.target;
    //     setformState({
    //         ...formState, [name]:value
    //     })
    //     }; 
    const handleNameChange = (event) => {
        setformState({
                ...formState,
                demographics: { ...formState.demographics, name: event.target.value }
            }
        )
    }
    const handleBirthChange = (event) => {
        setformState({
            ...formState,
                demographics: { ...formState.demographics, dateOfBirth: event.target.value }
            }
        )
    }
    const handleSexChange = (event) => {
        setformState({
            ...formState,
                demographics: { ...formState.demographics, sex: event.target.value }
            }
        )
    }
    const handleGenderChange = (event) => {
        setformState({
            ...formState,
                demographics: { ...formState.demographics, gender: event.target.value }
            }
        )
    }
    const handleRaceChange = (event) => {
        setformState({
            ...formState,
                demographics: { ...formState.demographics, race: event.target.value }
            }
        )
    }
    const handleEthnicityChange = (event) => {
        setformState({
            ...formState,
                demographics: { ...formState.demographics, ethnicity: event.target.value }
            }
        )
    }
    const handleRoleChange = (event) => {
        setformState({
            ...formState,
                demographics: { ...formState.demographics, role: event.target.value }
            }
        )
    }
    const handlePhoneChange = (event) => {
        setformState({
            ...formState,
                demographics: { ...formState.demographics, contactInfo: { ...formState.demographics.contactInfo, phone: event.target.value } }
            }
        )
    }
    const handleEmailChange = (event) => {
        setformState({
            ...formState,
                demographics: { ...formState.demographics, contactInfo: { ...formState.demographics.contactInfo, email: event.target.value } }
            }
        )
    }
    const handleMailingChange = (event) => {
        setformState({
            ...formState,
                demographics: { ...formState.demographics, addresses: { ...formState.demographics.addresses, mailing: event.target.value } }
            }
        )
    }
    const handlePhysicalChange = (event) => {
        setformState({
            ...formState,
                demographics: { ...formState.demographics, addresses: { ...formState.demographics.addresses, physical: event.target.value } }
            }
        )
    }
    const handleStartDateChange = (event) => {
        setformState({
            ...formState,
                demographics: { ...formState.demographics, addresses: { ...formState.demographics.addresses, startDate: event.target.value } }
            }
        )
    }
    const handleEndDateChange = (event) => {
        setformState({
            ...formState,
                demographics: { ...formState.demographics, addresses: { ...formState.demographics.addresses, endDate: event.target.value } }
            }

        )
    }
    const handleSupervisorIdChange = (event) => {
        setformState({
            ...formState,
                supervisors: { ...formState.supervisors, supervisor_id: event.target.value }
            }
        )
    }
    const handleSupervisorStartDateChange = (event) => {
        setformState({
            ...formState,
                supervisors: { ...formState.supervisors, startDate: event.target.value }
            }
        )
    }
    const handleSupervisorEndDateChange = (event) => {
        setformState({
            ...formState,
                supervisors: { ...formState.supervisors, endDate: event.target.value }
            }
        )
    }


    const handleFormSubmit = (event) => {
        event.preventDefault();
        updateEmployee({
            variables: { id: employee._id, ...formState }
        })
        window.location.replace('/EmployeeAdministration')
    }

    return (
        <div className="add-new">
            <h2 className="card-header">Update employee Form</h2>
            <form onSubmit={handleFormSubmit}>
                <div className="row">
                    <div className="column">
                        <p className="empHeader">Demographics</p>
                        <label name="name">Employee Name:</label>
                        <input
                            className="form-input"
                            type="text"
                            name="name"
                            placeholder={employee.demographics.name}
                            value={formState.name}
                            onChange={handleNameChange} />
                        <label name="name">Date of Birth:</label>
                        <input type="text"
                            className="form-input"
                            name="dateOfBirth"
                            placeholder={employee.demographics.dateOfBirth}
                            value={formState.beginDate}
                            onChange={handleBirthChange} />
                        <label name="name">Sex:</label>
                        <input type="text"
                            className="form-input"
                            name="sex"
                            value={formState.sex}
                            placeholder={employee.demographics.sex}
                            onChange={handleSexChange} />
                        <label name="name">Gender:</label>
                        <input type="text"
                            className="form-input"
                            name="gender"
                            value={formState.gender}
                            placeholder={employee.demographics.gender}
                            onChange={handleGenderChange} />
                        <label name="name">Race:</label>
                        <input type="text"
                            className="form-input"
                            name="race"
                            value={formState.race}
                            placeholder={employee.demographics.race}
                            onChange={handleRaceChange} />
                        <label name="name">Ethnicity:</label>
                        <input type="text"
                            className="form-input"
                            name="ethnicity"
                            value={formState.ethnicity}
                            placeholder={employee.demographics.ethnicity}
                            onChange={handleEthnicityChange} />
                        <label name="name">Role:</label>
                        <input type="text"
                            className="form-input"
                            name="role"
                            value={formState.role}
                            placeholder={employee.demographics.role}
                            onChange={handleRoleChange} />
                    </div>
                    <div className="column">
                    <p className="empHeader">Contact Info</p>
                    <label name="name">Phone:</label>
                    <input type="text"
                        className="form-input"
                        name="phone"
                        value={formState.phone}
                        placeholder={employee.demographics.contactInfo.phone}
                        onChange={handlePhoneChange} />
                    <label name="name">Email:</label>
                    <input type="email"
                        className="form-input"
                        name="email"
                        value={formState.email}
                        placeholder={employee.demographics.contactInfo.email}
                        onChange={handleEmailChange} />
                </div>
                <div className="column">
                    <p className="empHeader">Addresses</p>
                    <label name="name">Mailing:</label>
                    <input type="text"
                        className="form-input"
                        name="mailing"
                        value={formState.mailing}
                        placeholder={employee.demographics.addresses[0].mailing}
                        onChange={handleMailingChange} />
                    <label name="name">Physical:</label>
                    <input type="text"
                        className="form-input"
                        name="physical"
                        value={formState.physical}
                        placeholder={employee.demographics.addresses[0].physical}
                        onChange={handlePhysicalChange} />
                    <label name="name">Start Date:</label>
                    <input type="text"
                        className="form-input"
                        name="startDate"
                        value={formState.startDate}
                        placeholder={employee.demographics.addresses[0].startDate}
                        onChange={handleSupervisorStartDateChange} />
                    <label name="name">End Date:</label>
                    <input type="text"
                        className="form-input"
                        name="endDate"
                        value={formState.endDate}
                        placeholder={employee.demographics.addresses[0].endDate}
                        onChange={handleSupervisorEndDateChange} />
                </div>
                <div className="column">
                    <p className="empHeader">Supervisors</p>
                    <label name="name">Supervisor Id:</label>
                    <input type="text"
                        className="form-input"
                        name="supervisor_id"
                        value={formState.supervisor_id}
                        placeholder={employee.supervisors[0].supervisor_id}
                        onChange={handleSupervisorIdChange} />
                    <label name="name">Supervisor Start Date:</label>
                    <input type="text"
                        className="form-input"
                        name="startDate"
                        value={formState.startDate}
                        placeholder={employee.supervisors[0].startDate}
                        onChange={handleStartDateChange} />
                    <label name="name">Supervisor End Date:</label>
                    <input type="text"
                        className="form-input"
                        name="endDate"
                        value={formState.endDate}
                        placeholder={employee.supervisors[0].endDate}
                        onChange={handleEndDateChange} />
                </div>
                <button className="addbtn" type="submit">Submit Changes</button>
                </div>
            </form>
        </div>
    );

};