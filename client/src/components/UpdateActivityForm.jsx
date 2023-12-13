import { useState } from 'react';
import PayerDropdown from './PayerDropDown';
import ProgramDropdown from './ProgramDropDown'
import { UPDATE_ACTIVITY } from "../graphql/mutations/activity";
import { useQuery, useMutation } from "@apollo/client";



export default function UpdateActivityForm({ activity }) {

    const [formState, setformState] = useState({
        id: activity._id,
        name: activity.name,
        procedureCode: { code: activity.procedureCode.code, fee: activity.procedureCode.fee },
        document: activity.document.name,
        beginDate: activity.beginDate,
        endDate: activity.endDate,
        programs: { _id: activity.programs[0]._id },
        payers: { _id: activity.payers[0]._id }
    })
    //Set Update Mutation
    const [updateActivity, { errors }] = useMutation(UPDATE_ACTIVITY);


    const handleChange = (event) => {
        const { name, value } = event.target;
        setformState({
            ...formState, [name]: value
        })
    };
    const handleFormSubmit = (event) => {
        event.preventDefault();
        updateActivity({
            variables: { id: activity._id, ...formState }
        })
        window.location.replace('/ActivityAdministration')
    }

    return (

        <div className="add-new">
            <h2 className="card-header">Update Activity Form</h2>
            <form onSubmit={handleFormSubmit}>
                <label name="name">Activity Name:</label>
                <input
                    className="form-input"
                    type="text"
                    name="name"
                    placeholder={activity.name}
                    value={formState.name}
                    onChange={handleChange} />
                <label name="procedureCode">Procedure Code:</label>
                <input
                    className="form-input"
                    type="text"
                    name="procedureCode"
                    placeholder={activity.procedureCode.code}
                    value={formState.procedureCode.code}
                    onChange={handleChange} />
                <label name="procedureCode">Procedure Fee:</label>
                <input
                    className="form-input"
                    type="text"
                    name="procedureCode"
                    placeholder={activity.procedureCode.fee}
                    value={formState.procedureCode.fee}
                    onChange={handleChange} />
                <label name="document">Document Name:</label>
                <input
                    className="form-input"
                    type="text"
                    name="document"
                    placeholder={activity.document}
                    value={formState.document}
                    onChange={handleChange} />
                <label name="beginDate">Begin Date:</label>
                <input
                    className="form-input"
                    type="text"
                    name="beginDate"
                    placeholder={activity.beginDate}
                    value={formState.beginDate}
                    onChange={handleChange} />
                <label name="endDate">End Date:</label>
                <input
                    className="form-input"
                    type="text"
                    name="endDate"
                    placeholder={activity.endDate}
                    value={formState.endDate}
                    onChange={handleChange} />
                <label name="payers">Payer:</label>
                <PayerDropdown specificPayer={activity.payers[0].name} />
                <label name="program">Program:</label>
                <ProgramDropdown specificProgram={activity.programs[0].name} />
                <button className="addbtn" type="submit">Submit Changes</button>
            </form>
        </div>
    );




}