import * as React from 'react';
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import { useMutation } from "@apollo/client";
import { ADD_CLIENT } from "../graphql/mutations/client";


function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`vertical-tabpanel-${index}`}
      aria-labelledby={`vertical-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography sx={{width:'90%', marginLeft:'30vw' ,display:'flex', flexDirection:'column', fontSize:'18px'}}>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `vertical-tab-${index}`,
    'aria-controls': `vertical-tabpanel-${index}`,
  };
}

export default function VerticalTabs() {
  const [value, setValue] = React.useState(0);
  const [formState, setFormState] = React.useState({
        demographicsName: "",
        dateOfBirth: "",
        sex: "",
        gender: "",
        race: "",
        ethnicity: "",
        occupation: "",
        demographicsMailing: "",
        demographicsPhysical: "",
        demographicsStartDate: "",
        demographicsEndDate: "",
        payerId: "",
        priority: "",
        relationshipToPatient: "",
        subscriberName: "",
        subscriberDateOfBirth: "",
        subscriberMailing: "",
        subscriberPhysical: "",
        subscriberStartDate: "",
        subscriberEndDate: "",
        phone: "",
        email: "",
        insuranceBeginDate: "",
        insuranceEndDate: "",
        program_id: "",
        programBeginDate: "",
        programEndDate: "",
      
});

const [addClient, { errors }] = useMutation(ADD_CLIENT);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };


  const handleFormChange = (event) => {
    const { name, value } = event.target;
    setFormState({
        ...formState, 
        [name]: value,
    });
  };

  const handleFormSubmit = async (event) => {
    event.preventDefault();

    addClient({
        variables: {
            demographics: {
                name: formState.demographicsName,
                dateOfBirth: formState.dateOfBirth,
                sex: formState.sex,
                gender: formState.gender,
                race: formState.race,
                ethnicity: formState.ethnicity,
                occupation: formState.occupation,
                addresses: {
                    mailing: formState.demographicsMailing,
                    physical: formState.demographicsPhysical,
                    startDate: formState.demographicsStartDate,
                    endDate: formState.demographicsEndDate
                },
                contactInfo: {
                    phone: formState.phone,
                    email: formState.email
                }
            },
            insurance: {
                payerId: formState.payerId,
                priority: formState.priority,
                beginDate: formState.insuranceBeginDate,
                endDate: formState.insuranceEndDate,
                subscriber: {
                    relationshipToPatient: formState.relationshipToPatient,
                    name: formState.subscriberName,
                    dateOfBirth: formState.subscriberDateOfBirth,
                    addresses: {
                        mailing: formState.subscriberMailing,
                        physical: formState.subscriberPhysical,
                        startDate: formState.subscriberStartDate,
                        endDate: formState.subscriberEndDate
                    }
                }
            },
            programManagement: {
                program_id: formState.program_id,
                beginDate: formState.programBeginDate,
                endDate: formState.programEndDate
            }
        }
    })
    // window.location.replace('/ActivityAdministration')

    setFormState({
        demographicsName: "",
        dateOfBirth: "",
        sex: "",
        gender: "",
        race: "",
        ethnicity: "",
        occupation: "",
        demographicsMailing: "",
        demographicsPhysical: "",
        demographicsStartDate: "",
        demographicsEndDate: "",
        payerId: "",
        priority: "",
        relationshipToPatient: "",
        subscriberName: "",
        subscriberDateOfBirth: "",
        subscriberMailing: "",
        subscriberPhysical: "",
        subscriberStartDate: "",
        subscriberEndDate: "",
        phone: "",
        email: "",
        insuranceBeginDate: "",
        insuranceEndDate: "",
        program_id: "",
        programBeginDate: "",
        programEndDate: "",
    })
  }

  return (
    <form onSubmit={handleFormSubmit}>
    <Box
      sx={{ flexGrow: 1, bgcolor: 'background.paper', display: 'flex', width:'100%', height:'100%', }}
    >
      <Tabs
        orientation="vertical"
        variant="scrollable"
        value={value}
        onChange={handleChange}
        aria-label="Vertical tabs example"
        sx={{ borderRight: 1, borderColor: 'divider', position:'fixed', height:'100%',}}
      >
        <Tab label="Demographics" {...a11yProps(0)} />
        <Tab label="Insurance" {...a11yProps(1)} />
        <Tab label="Program Management" {...a11yProps(2)} />

      </Tabs>
      <TabPanel value={value} index={0} >
        <label className="client-fill"> Client Name: </label>
        <input type="text"
        name='demographicsName'
        value={formState.demographicsName}
        onChange={handleFormChange}
         />
        <label > Date of Birth: </label>
        <input type="text"
        name='dateOfBirth'
        value={formState.dateOfBirth}
        onChange={handleFormChange}
         />
         <label > Gender: </label>
        <input type="text"
        name='gender'
        value={formState.gender}
        onChange={handleFormChange}
         />
        <label > Biological Sex: </label>
        <input type="text"
        name='sex'
        value={formState.sex}
        onChange={handleFormChange}
         />
         <label > Race: </label>
        <input type="text"
        name='race'
        value={formState.race}
        onChange={handleFormChange}
         />
         <label > Ethnicity: </label>
        <input type="text"
        name='ethnicity'
        value={formState.ethnicity}
        onChange={handleFormChange}
         />
         <label > Occupation: </label>
        <input type="text"
        name='occupation'
        value={formState.occupation}
        onChange={handleFormChange}
         />
         <label > Phone: </label>
        <input type="text"
        name='phone'
        value={formState.phone}
        onChange={handleFormChange}
         /> 
        <label > Email: </label>
        <input type="text"
        name='email'
        value={formState.email}
        onChange={handleFormChange}
         />
         <label > Mailing Address: </label>
        <input type="text"
        name='demographicsMailing'
        value={formState.demographicsMailing}
        onChange={handleFormChange}
         /> 
         <label > Physical Address: </label>
        <input type="text"
        name='demographicsPhysical'
        value={formState.demographicsPhysical}
        onChange={handleFormChange}
         />
      </TabPanel>
      <TabPanel value={value} index={1}>
      <label > Payer ID: </label>
      <input type="text"
      name='payerId'
      value={formState.payerId}
      onChange={handleFormChange}
       />
        <label > Payer Priority: </label>
      <input type="text"
      name='priority'
      value={formState.priority}
      onChange={handleFormChange}
       />
      <label > Begin Date: </label>
        <input type="text"
        name='insuranceBeginDate'
        value={formState.insuranceBeginDate}
        onChange={handleFormChange}
         />
        <label > End Date: </label>
        <input type="text"
        name='insuranceEndDate'
        value={formState.insuranceEndDate}
        onChange={handleFormChange}
         />
          <label > Subscriber Name: </label>
          <input type="text"
          name='subscriberName'
          value={formState.subscriberName}
          onChange={handleFormChange}
           />
          <label > Subscriber Date of Birth: </label>
        <input type="text"
        name='subscriberDateOfBirth'
        value={formState.subscriberDateOfBirth}
        onChange={handleFormChange}
         />
        <label > Relationship to Patient: </label>
        <input type="text"
        name='relationshipToPatient'
        value={formState.relationshipToPatient}
        onChange={handleFormChange}
         />
        <label > Subscriber Mailing Address: </label>
        <input type="text"
        name='subscriberMailing'
        value={formState.subscriberMailing}
        onChange={handleFormChange}
         />
         <label > Subscriber Physical Address: </label>
        <input type="text"
        name='subscriberPhysical'
        value={formState.subscriberPhysical}
        onChange={handleFormChange}
         />
        <label > Addresses Begin Date: </label>
        <input type="text"
        name='subscriberStartDate'
        value={formState.subscriberStartDate}
        onChange={handleFormChange}
         />
                  <label > Addresses End Date: </label>
        <input type="text"
        name='subscriberEndDate'
        value={formState.subscriberEndDate}
        onChange={handleFormChange}
         />
      </TabPanel>
      <TabPanel value={value} index={2}>
      <label > Program ID: </label>
        <input type="text"
        name='program_id'
        value={formState.program_id}
        onChange={handleFormChange}
         />
        <label > Begin Date: </label>
        <input type="text"
        name='programBeginDate'
        value={formState.programBeginDate}
        onChange={handleFormChange}
         />
        <label > End Date: </label>
        <input type="text"
        name='programEndDate'
        value={formState.programEndDate}
        onChange={handleFormChange}
         />
      </TabPanel>

    </Box>
    <button type="submit"> Submit</button>
    </form>
  );
}