import { useState } from 'react';

export default  function UpdateActivityForm ({activity}) {

    const [formState, setformState] = useState({...activity})
    const handleChange = (event) => {
        const { name, value } = event.target;
        setformState({
            ...formState, [name]:value
        })
        };
    const handleFormSubmit = (event)=>{
        event.preventDefault();
        updateActivity({
            variables: {id: activity._id, ...formState}
        })
        window.location.replace('/ActivityAdministration')
    }
    
    return (

        <>
            <form onSubmit={handleFormSubmit}>
                <input 
                    type="text"
                    name="name"
                    placeholder={activity.name}
                    value={formState.name}
                    onChange={handleChange}/>
            </form>
        </>
      );




}