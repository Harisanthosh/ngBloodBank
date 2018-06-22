import { Component, OnInit } from '@angular/core';

import { DonationCamp } from '../../Camp'


@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css']
})
export class ContentComponent implements OnInit {
  // members:['test'];
  members: DonationCamp[];
  btnText: string = "Load More";
  info: string;
  location: string = "Chennai";
  apply:boolean = false;
  constructor() {
    var me = this;
    function printSchedule(...camps: DonationCamp[]) {
      me.members = camps;
      camps.forEach((eachCamp) => {
        // me.members.push(eachCamp);
        console.log(eachCamp.location + ";" + eachCamp.name + ";" + eachCamp.contactNumber);
      })
    }

    let camp1: DonationCamp = {
      name: "Siraj", organization: "School of AI", contactNumber: 89372618123,
      location: "Los Angeles", reqDate: new Date()
    };

    let camp2: DonationCamp = {
      name: "Raval", organization: "Mason Robotics", contactNumber: 4563548741,
      location: "Chennai", reqDate: new Date()
    };

    let camp3: DonationCamp = {
      name: "Santhosh", organization: "Alpha Alloy", contactNumber: 12487430496,
      location: "California", reqDate: new Date()
    };

    printSchedule(camp1, camp2, camp3);
  }

  ngOnInit() {
  }

  showMore() {
    //alert('hi');
    this.info="More Details will be uploaded shortly!";
    if(this.apply){
      this.info="More Details will be uploaded shortly!";
    }
    else {
      this.info="";
    }
    this.apply = !this.apply;
  }

}
