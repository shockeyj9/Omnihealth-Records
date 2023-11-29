const fullNames = [
    'Alice Johnson',
    'Bob Smith',
    'Charlie Davis',
    'David Brown',
    'Emily White',
    'Frank Wilson',
    'Grace Thomas',
    'Henry Miller',
    'Ivy Robinson',
    'Jack Anderson',
    'Kate Martinez',
    'Liam Taylor',
    'Mia Harris',
    'Noah Jones',
    'Olivia Taylor',
    'Penny Lewis',
    'Quinn Clark',
    'Ryan Hall',
    'Sophia Scott',
    'Tom Turner',
    'Uma Patel',
    'Victor Green',
    'Wendy Adams',
    'Xander Hill',
    'Yara Carter'
  ];

  const empNames = [
    'John Smith',
    'Emily Johnson',
    'Michael Davis',
    'Jessica Brown',
    'Brian Wilson',
    'Ashley Martin',
    'Christopher Lee',
    'Amanda Miller',
    'David Jones',
    'Sarah Taylor',
    'Matthew Wilson',
    'Olivia White',
    'Daniel Davis',
    'Sophia Moore',
    'Christopher Smith',
    'Emma Johnson',
    'Joshua Brown',
    'Grace Wilson',
    'Tyler Martin',
    'Isabella Lee',
    'Andrew Miller',
    'Madison Davis',
    'Ryan Taylor',
    'Abigail Wilson'
  ];

  const sex = [
    'Male',
    'Female'
  ];

  const genders = [
    'Male',
    'Female',
    'Non-binary',
    'Genderqueer',
    'Agender',
    'Bigender',
    'Two-Spirit',
    'Demiboy',
    'Demigirl',
    'Genderfluid',
    'Androgynous',
    'Neutrois',
    'Pangender',
    'Cisgender',
    'Transgender',
    'Other'
  ];

  const ethnicities = [
    'African',
    'Asian',
    'Caucasian',
    'Hispanic',
    'Latino/Latina',
    'Middle Eastern',
    'Native American',
    'Pacific Islander',
    'South Asian',
    'Southeast Asian',
    'Caribbean',
    'Indigenous Peoples',
    'Multiracial',
    'Other'
  ];
  const races = [
    'American Indian or Alaska Native',
    'Asian',
    'Black or African American',
    'Native Hawaiian or Other Pacific Islander',
    'White',
    'Two or More Races',
    'Prefer not to say'
  ];
  const occupations = [
    'Software Developer',
    'Teacher',
    'Nurse',
    'Mechanical Engineer',
    'Graphic Designer',
    'Chef',
    'Police Officer',
    'Accountant',
    'Marketing Specialist',
    'Electrician',
    'Journalist',
    'Dentist',
    'Librarian',
    'Pilot',
    'Social Worker',
    'Architect',
    'Fitness Trainer',
    'Data Scientist',
    'Firefighter',
    'Event Planner',
    'Pharmacist',
    'Artist',
    'Psychologist',
    'Real Estate Agent',
    'Biologist'
  ];
  const phoneNumbers = [
    '+1 555-123-4567',
    '+1 555-234-5678',
    '+1 555-345-6789',
    '+1 555-456-7890',
    '+1 555-567-8901',
    '+1 555-678-9012',
    '+1 555-789-0123',
    '+1 555-890-1234',
    '+1 555-901-2345',
    '+1 555-012-3456',
    '+1 555-123-4567',
    '+1 555-234-5678',
    '+1 555-345-6789',
    '+1 555-456-7890',
    '+1 555-567-8901',
    '+1 555-678-9012',
    '+1 555-789-0123',
    '+1 555-890-1234',
    '+1 555-901-2345',
    '+1 555-012-3456',
    '+1 555-123-4567',
    '+1 555-234-5678',
    '+1 555-345-6789',
    '+1 555-456-7890'
  ];

  const addresses = [
    '123 Main St, Cityville, State, 12345',
    '456 Oak Ave, Townsville, State, 67890',
    '789 Pine Ln, Villagetown, State, 23456',
    '101 Elm Blvd, Hamletsville, State, 78901',
    '202 Maple Dr, Boroughville, State, 34567',
    '303 Cedar Ct, Villageburg, State, 89012',
    '404 Birch Rd, Townshipville, State, 45678',
    '505 Spruce Pl, Settlementtown, State, 90123',
    '606 Willow Ave, Hamletburg, State, 56789',
    '707 Oakwood Blvd, Districtville, State, 12345',
    '808 Pinecrest Dr, Suburbtown, State, 67890',
    '909 Birchwood Ln, Countyville, State, 23456',
    '111 Maplehurst Ct, Provinceburg, State, 78901',
    '222 Cedarwood Dr, Territorytown, State, 34567',
    '333 Elmridge Rd, Dominionville, State, 89012',
    '444 Sycamore Ave, Sectorburg, State, 45678',
    '555 Willowbrook Ln, Zoneville, State, 90123',
    '666 Redwood Pl, Precincttown, State, 56789',
    '777 Greentree Dr, Realmville, State, 12345',
    '888 Meadowland Rd, Territoryburg, State, 67890',
    '999 Lakeside Blvd, Countytown, State, 23456',
    '121 Hillcrest Ave, Villageville, State, 78901',
    '232 Brookside Ln, Boroughburg, State, 34567',
    '343 Riverside Dr, Sectorville, State, 89012',
    '454 Lakeshore Rd, Townburg, State, 45678'
  ];
  const emails = [
    'john.doe@example.com',
    'jane.smith@example.com',
    'bob.jones@example.com',
    'mary.white@example.com',
    'david.wilson@example.com',
    'emily.davis@example.com',
    'chris.martin@example.com',
    'lisa.thomas@example.com',
    'steve.miller@example.com',
    'amy.jackson@example.com',
    'ryan.anderson@example.com',
    'olivia.harris@example.com',
    'michael.moore@example.com',
    'sophia.taylor@example.com',
    'matthew.robinson@example.com',
    'emma.martinez@example.com',
    'alexander.davis@example.com',
    'ava.johnson@example.com',
    'nathan.smith@example.com',
    'isabella.white@example.com',
    'daniel.jones@example.com',
    'mia.martin@example.com',
    'william.thomas@example.com',
    'olivia.smith@example.com',
    'chloe.miller@example.com'
  ];

  const relationshipTypes = [
    'Self',
    'Spouse',
    'Child',
    'Parent',
    'Sibling',
    'Grandparent',
    'Grandchild',
    'Aunt/Uncle',
    'Niece/Nephew',
    'Cousin',
    'Legal Guardian',
    'Domestic Partner',
    'Other'
  ];

  const payers = [
    {
      name: 'UnitedHealthcare',
      payerId: '12345',
      beginDate: '01/01/2023'
    },
    {
      name: 'Anthem Blue Cross Blue Shield',
      payerId: '67890',
      beginDate: '01/01/2023'
    },
    {
      name: 'Aetna',
      payerId: '54321',
      beginDate: '01/01/2023'
    },
    {
      name: 'Cigna',
      payerId: '98765',
      beginDate: '01/01/2023'
    },
    {
        name: 'Humana',
        payerId: '12345',
        beginDate: '01/01/2023'
    }
  ];
  
  const programs = [
    { name: 'Mindful Living Program', beginDate: '2023-01-01' },
    { name: 'Emotional Wellness Initiative', beginDate: '2023-01-01' },
    { name: 'Cognitive Harmony Workshop', beginDate: '2023-01-01' },
    { name: 'Behavioral Resilience Training', beginDate: '2023-01-01' }
  ];
  
  const roles = [
    'Clinical Psychologist',
    'Licensed Professional Counselor',
    'Psychiatric Nurse Practitioner',
    'Substance Abuse Counselor',
    'Marriage and Family Therapist',
    'Social Worker',
    'Psychiatrist',
    'Behavioral Health Technician',
    'Art Therapist',
    'Rehabilitation Counselor',
    'Music Therapist',
    'Occupational Therapist',
    'Psychiatric Nurse',
    'Child and Adolescent Therapist',
    'Behavior Analyst',
    'Clinical Supervisor',
    'Mental Health Advocate',
    'Expressive Therapist',
    'Play Therapist',
    'Addiction Medicine Specialist',
    'Case Manager',
  ];

  const activities = [
    {
      name: "Individual Counseling",
      procedureCode: {
        code: "90837",
        fee: 100
      },
      beginDate: '2023-01-01'
    },
    {
      name:  "Group Therapy",
      procedureCode: {
        code: "90853",
        fee: 50
      },
      beginDate: '2023-01-01'
    },
    {
      name:  "Family Therapy",
      procedureCode: {
        code: "90847",
        fee: 75
      },
      beginDate: '2023-01-01'
    },
    {
      name:  "Psychiatric Assessment",
      procedureCode: {
        code: "90791",
        fee: 275
      },
      beginDate: '2023-01-01'
    },
  ]


  module.exports = {
    fullNames,
    sex,
    genders,
    races,
    ethnicities,
    occupations,
    phoneNumbers,
    addresses,
    emails,
    relationshipTypes,
    payers,
    programs,
    roles,
    empNames,
    activities
  }