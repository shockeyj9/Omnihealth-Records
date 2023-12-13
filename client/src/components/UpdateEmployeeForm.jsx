import { useEmployeeContext } from "../utils/contexts/EmployeeContext";
import { useState } from 'react';
import { useParams } from "react-router-dom";
import { useQuery,useMutation } from "@apollo/client";
import { QUERY_EMPLOYEE } from "../graphql/queries/employee";
import { UPDATE_EMPLOYEE } from "../graphql/mutations/employee";


export default function UpdateEmployeeForm() {
    const { employeeId } = useParams();
    const { loading, error, data } = useQuery(QUERY_EMPLOYEE, {variables: {id: employeeId}});
    const employeeData = data?.employee || [];
   
    const [updateEmployee, { errors }] = useMutation(UPDATE_EMPLOYEE);

    const [formState, setformState] = useState(
        {
            demographics: {
                name: employeeData.demographics.name,
                dateOfBirth: employeeData.demographics.dateOfBirth,
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


    const handleNameChange = (event) => {
        setformState( (prevState) => {return {
            ...prevState,
            demographics: { ...prevState.demographics, name: event.target.value }}
        })
    }
    const handleBirthChange = (event) => {
        setformState( (prevState) => {return {
            ...prevState,
            demographics: { ...prevState.demographics, dateOfBirth: event.target.value }}
        })
    }
    const handleSexChange = (event) => {
        setformState( (prevState) => {return {
            ...prevState,
            demographics: { ...prevState.demographics, sex: event.target.value }}
        })
    }
    const handleGenderChange = (event) => {
        setformState( (prevState) => {return {
            ...prevState,
            demographics: { ...prevState.demographics, gender: event.target.value }}
        })
    }
    const handleRaceChange = (event) => {
        setformState( (prevState) => {return {
            ...prevState,
            demographics: { ...prevState.demographics, race: event.target.value }}
        })
    }
    const handleEthnicityChange = (event) => {
        setformState( (prevState) => {return {
            ...prevState,
            demographics: { ...prevState.demographics, ethnicity: event.target.value }}
        })
    }
    const handleRoleChange = (event) => {
        setformState( (prevState) => {return {
            ...prevState,
            demographics: { ...prevState.demographics, role: event.target.value }}
        })
    }
    const handlePhoneChange = (event) => {
        setformState( (prevState) => {return {
            ...prevState,
            demographics: { ...prevState.demographics, contactInfo: {...prevState.contactInfo, phone: event.target.value }}}
        })
    }
    const handleEmailChange = (event) => {
        setformState( (prevState) => {return {
            ...prevState,
            demographics: { ...prevState.demographics, contactInfo: {...prevState.contactInfo, email: event.target.value }}}
        })
    }
    const handleMailingChange = (event) => {
        setformState( (prevState) => {return {
            ...prevState,
            demographics: { ...prevState.demographics, addresses: {...prevState.addresses, mailing: event.target.value }}}
        })
    }
    const handlePhysicalChange = (event) => {
        setformState( (prevState) => {return {
            ...prevState,
            demographics: { ...prevState.demographics, addresses: {...prevState.addresses, physical: event.target.value }}}
        })
    }
    const handleStartDateChange = (event) => {
        setformState( (prevState) => {return {
            ...prevState,
            demographics: { ...prevState.demographics, addresses: {...prevState.addresses, startDate: event.target.value }}}
        })
    }
    const handleEndDateChange = (event) => {
        setformState( (prevState) => {return {
            ...prevState,
            demographics: { ...prevState.demographics, addresses: {...prevState.addresses, endDate: event.target.value }}}

        })
    }
    const handleSupervisorIdChange = (event) => {
        setformState( (prevState) => {return {
            ...prevState,
            supervisors: { ...prevState.supervisors, supervisor_id: event.target.value }}
        })
    }
    const handleSupervisorStartDateChange = (event) => {
        setformState( (prevState) => {return {
            ...prevState,
            supervisors: { ...prevState.supervisors, startDate: event.target.value }}
        })
    }
    const handleSupervisorEndDateChange = (event) => {
        setformState( (prevState) => {return {
            ...prevState,
            supervisors: { ...prevState.supervisors, endDate: event.target.value }}
        })
    }

    
    const handleFormSubmit = (event)=>{
        event.preventDefault();
        updateEmployee({
            variables: {id: employeeData._id, ...formState}
        })
        window.location.replace('/EmployeeAdnministration')
    }

    return (
        <div className = "add-new">
        <h2 className="card-header">Update employee Form</h2>
        <form onSubmit={handleFormSubmit}>
            <input 
                className="form-input"
                type="text"
                name="name"
                placeholder={employeeData.demographics.name}
                value={formState.name}
                onChange={handleNameChange}/>
            <input type="text"
                className="form-input"
                name="dateOfBirth"
                placeholder={employeeData.demographics.dateOfBirth}
                value={formState.beginDate}
                onChange={handleBirthChange} />
            <input type="text"
                className="form-input"
                name="sex"
                placeholder={employeeData.demographics.sex}
                onChange={handleSexChange} />
            <input type="text"
                className="form-input"
                name="gender"
                placeholder={employeeData.demographics.gender}
                onChange={handleGenderChange} />
            <input type="text"
                className="form-input"
                name="race"
                placeholder={employeeData.demographics.race}
                onChange={handleRaceChange} />
            <input type="text"
                className="form-input"
                name="ethnicity"
                placeholder={employeeData.demographics.ethnicity}
                onChange={handleEthnicityChange} />
            <input type="text"
                className="form-input"
                name="role"
                placeholder={employeeData.demographics.role}
                onChange={handleRoleChange} />
            <input type="text"
                className="form-input"
                name="phone"
                placeholder={employeeData.demographics.contactInfo.phone}
                onChange={handlePhoneChange} />
            <input type="email"
                className="form-input"
                name="email"
                placeholder={employeeData.demographics.contactInfo.email}
                onChange={handleEmailChange} />
            <input type="text"
                className="form-input"
                name="mailing"
                placeholder={employeeData.demographics.addresses.mailing}
                onChange={handleMailingChange} />
            <input type="text"
                className="form-input"
                name="physical"
                placeholder={employeeData.demographics.addresses.physical}
                onChange={handlePhysicalChange} />
            <input type="text"
                className="form-input"
                name="startDate"
                placeholder={employeeData.demographics.addresses.startDate}
                onChange={handleStartDateChange} />
            <input type="text"
                className="form-input"
                name="endDate"
                placeholder={employeeData.demographics.addresses.endDate}
                onChange={handleEndDateChange} />
            <input type="text"
                className="form-input"
                name="supervisor_id"
                placeholder={employeeData.supervisors.supervisors_id}
                onChange={handleSupervisorIdChange} />
            <input type="text"
                className="form-input"
                name="startDate"
                placeholder={employeeData.supervisors.startDate}
                onChange={handleStartDateChange} />
            <input type="text"
                className="form-input"
                name="endDate"
                placeholder={employeeData.supervisors.endDate}
                onChange={handleEndDateChange} />
            <button className="addbtn" type="submit">Submit Changes</button>
        </form>
        </div>
    );

};