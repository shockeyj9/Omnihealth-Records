import { Link } from "react-router-dom";

export default function DynamicTable({ data, column, link, deleteFunction }) {
  const deep_value = (obj, path) =>
    path.split(".").reduce((acc, val) => acc && acc[val], obj);

  return (
    <div className="tablecontainer">
      <table className="table">
        <tbody className="tbody">
          <tr>
            <th></th>
            {column.map((item,index) => (
              <th className="th titles" key={index}>{item.heading}</th>
            ))}
            <th className="th titles"></th>
          </tr>

          {data.map((item) => (
            <tr key={item._id}>
              <td className="th" key={item._id}>
                <button className="tablebtn">
                  <Link
                    style={{ textDecoration: "none", color: "black" }}
                    className="btn btn-primary btn-block btn-squared"
                    to={`${link}/${item._id}`}
                  >
                    Edit
                  </Link>
                </button>
              </td>
              {column.map((columnItem,index) => {
                return (
                  <td className="th td" key={index}>
                    {deep_value(item, columnItem.value)}
                  </td>
                );
              })}
              <td className="th">
                <button
                  className="tablebtn"
                  onClick={() =>
                    deleteFunction({ variables: { id: item._id } })
                  }
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
