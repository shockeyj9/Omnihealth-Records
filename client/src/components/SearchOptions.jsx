
export const SearchOptions = ({clients,searched,onSearch,onChange}) => {

    const {name,id} = searched;
    return (
        
        <div className="search">
        <div className="searchInputs">
            <input 
            className="searchInputs" type="search" 
            placeholder="Enter Client Name"
            value={name}  
            onChange={onChange}/>
            <button onClick={()=>window.location.replace(`/Client/${id}`)}>Search</button>
        </div>
        <div className="dropdown-content">
        <ul className="dropdown-menu">
            {clients.filter(item =>{
                
                name.toLowerCase();
                const fullName = item.demographics.name.toLowerCase()
                return name && fullName.includes(name) && fullName !== name;
            })
            .slice(0,5)
            .map((client) => (
                <li 
                className='dropdown-item' 
                onClick={()=>onSearch(client.demographics.name,client._id)}
                key={client._id}>
                    {client.demographics.name}
                </li>
            ))}
        </ul>
        </div>
        </div>
        
    )
};