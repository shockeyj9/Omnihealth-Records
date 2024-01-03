import { Link } from "react-router-dom";

export default function DynamicTable({ data, column,link,deleteFunction }) {
    const deep_value = (obj, path) => 
        path
        .split('.')
        .reduce((acc, val) => acc && acc[val], obj);

    return (
        <div className="tablecontainer">
        <table className="table">
            <tbody className="tbody">
            
                    <tr>
                    <th className="th titles"></th>
                {column.map((item)=> (
                    <th className="th titles">{item.heading}</th>
                    ))}
                    <th className="th titles"></th>
                    </tr>
          
                {data.map((item)=>

                <tr key={item._id}>
                
                <td className="th">
                    <button className="tablebtn">
                    <Link style={{ textDecoration: "none", color: "black" }}
                      className="btn btn-primary btn-block btn-squared"
                      to={`${link}/${item._id}`}
                    >
                      Edit
                    </Link>
                    </button>
                </td>
                {column.map((columnItem)=>{
                    return <td className="th td">{deep_value(item, columnItem.value)}</td>
                })}
                <td className="th">
                  <button className="tablebtn" onClick={() => deleteFunction({ variables: { id: payer._id } })}>
                    Delete
                  </button>
                </td>
                </tr>)}
            </tbody>
        </table>
        </div>
    )

}