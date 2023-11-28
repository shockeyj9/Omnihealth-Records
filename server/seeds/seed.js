const db = require("../config/connection");
const { Client, Payer, Employee, Program } = require("../models");
const cleanDB = require("./cleanDB");
const { getRandom, getRandomDate } = require("./helpers");
const mongoose = require("mongoose");
const { ObjectId } = mongoose.Types;

//Bring in Arrays
const {
  fullNames,
  sex,
  genders,
  ethnicities,
  races,
  occupations,
  phoneNumbers,
  addresses,
  emails,
  relationshipTypes,
  payers,
  programs,
  roles,
  empNames,
} = require("./dataArrays");

db.once("open", async () => {
  //Clear if already exists
  await cleanDB("Client", "clients");
  await cleanDB("Payer", "payers");
  await cleanDB("Employee", "employees");
  await cleanDB("Program", "programs");

  //create clients
  await Promise.all(
    fullNames.map(async (item) => {
      await Client.insertMany({
        demographics: {
          name: item,
          dateOfBirth: await getRandomDate(new Date(1951, 0, 1), new Date()),
          sex: await getRandom(sex),
          gender: await getRandom(genders),
          race: await getRandom(races),
          ethnicity: await getRandom(ethnicities),
          roles: await getRandom(roles),
          contactInfo: [
            {
              phone: await getRandom(phoneNumbers),
              email: await getRandom(emails),
            },
          ],
          addresses: [
            {
              mailing: await getRandom(addresses),
              physical: await getRandom(addresses),
              startDate: await getRandomDate(new Date(2000, 0, 1), new Date()),
            },
          ],
        },
      });
    })
  );
  console.log("Clients Created!");

  //create payers
  await Promise.all(
    payers.map(async (item) => {
      await Payer.insertMany({
        name: item.name,
        electronic_id: item.payerId,
        beginDate: item.beginDate,
      });
    })
  );
  console.log("Payers Created!");

  //create programs
  await Promise.all(
    programs.map(async (item) => {
      await Program.insertMany({
        name: item.name,
        beginDate: item.beginDate,
      });
    })
  );
  console.log("Programs Created!");

  //Create Employees
  await Promise.all(
    empNames.map(async (item) => {
      await Employee.insertMany({
        demographics: {
          name: item,
          dateOfBirth: await getRandomDate(new Date(1951, 0, 1), new Date()),
          sex: await getRandom(sex),
          gender: await getRandom(genders),
          race: await getRandom(races),
          ethnicity: await getRandom(ethnicities),
          occupation: await getRandom(occupations),
          contactInfo: [
            {
              phone: await getRandom(phoneNumbers),
              email: await getRandom(emails),
            },
          ],
          addresses: [
            {
              mailing: await getRandom(addresses),
              physical: await getRandom(addresses),
              startDate: await getRandomDate(new Date(2000, 0, 1), new Date()),
            },
          ],
        },
        startDate: await getRandomDate(new Date(2000, 0, 1), new Date()),
      });
    })
  );
  console.log("Employees Created!");

  //Add insurance and program to client documents  
  const clients = await Client.find({}).lean().exec();
  const payersArray = await Payer.find({}).lean().exec();
  const programArray = await Program.find({}).lean().exec();
  const updatePromises = clients.map(async (client) => {
    const ranPayer = getRandom(payersArray);
    const ranProgram = getRandom(programArray);
      await Client.findByIdAndUpdate(
        client._id,
        { $addToSet: { 
            insurance: { 
              payerId: new ObjectId(ranPayer._id),
              priority: 'Primary',
              subscriber: {
                relationshipToPatient: await getRandom(relationshipTypes),
                name: await getRandom(fullNames),
                dateOfBirth: await getRandomDate(new Date(1951, 0, 1), new Date()),
                address: {
                  mailing: await getRandom(addresses),
                  physical: await getRandom(addresses)
                }
              },
              beginDate: await getRandomDate(new Date(2000, 0, 1), new Date())
            },
            programManagement: {
              program_id: ranProgram._id,
              beginDate: await getRandomDate(new Date(2000, 0, 1), new Date())
            }
          } 
        }
      );
  });
  await Promise.all(updatePromises);
  console.log("Client's insurance and programs added")


  process.exit(0);
});
