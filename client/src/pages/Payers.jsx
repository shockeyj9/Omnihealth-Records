import PayerTable from "../components/PayerTable";

const Payers = () => {
  return (
    <main className="flex-row justify-center mb-4">
      <div className="col-12 col-lg-10"> 
        <div className="card">
          <h4 className="card-header bg-dark text-light p-2">Active Payers</h4>
          <table>

          <PayerTable/>
          </table>
        </div>
      </div>
    </main>
  );
};

export default Payers;
