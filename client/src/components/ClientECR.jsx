

export default function ClientECR({client}) {
    console.log(client)
return (
    <>
    <div className="demographics">
        <h2>{client.demographics.name}</h2>
        <p>Date of birth: {client.demographics.dateOfBirth}</p>
        <p>Phone: {client.demographics.contactInfo.phone}</p>
        <p>Email: {client.demographics.contactInfo.email}</p>
        <p>Mailing Address: {client.demographics.addresses[0].mailing}</p>
        <p>Physical Address: {client.demographics.addresses[0].physical}</p>
    </div>
    </>
)

};
