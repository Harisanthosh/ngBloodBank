import { DonationCamp } from './Camp'


function printSchedule(...camps: DonationCamp[]) {
    camps.forEach((eachCamp) => {
        console.log(eachCamp.location + ";" + eachCamp.name + ";" + eachCamp.contactNumber);
    })
}

let camp1: DonationCamp = {
    name: "Siraj", organization: "School of AI", contactNumber: 89372618123,
    location: "Los Angeles", reqDate: new Date()
};

let camp2: DonationCamp = {
    name: "Raval", organization: "Mason Robotics", contactNumber: 4563548741,
    location: "Los Angeles", reqDate: new Date()
};

let camp3: DonationCamp = {
    name: "Santhosh", organization: "Alpha Alloy", contactNumber: 12487430496,
    location: "California", reqDate: new Date()
};

printSchedule(camp1, camp2, camp3);