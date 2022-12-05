import { AssetsDataService } from './../../services/assets-data.service';
import { Component, OnInit } from '@angular/core';

//declare var name: any;
@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css'],
})
export class TableComponent implements OnInit {
  searchText: any;
  // names = [
  //   {camId: 10, accTypeCode: 'Tiger', accType: 'Nixon', sourceCode: 'System Architect', accSource: 'Edinburgh'},
  //   {camId: 20, accTypeCode: 'Tiger', accType: 'Nixon', sourceCode: 'System Architect', accSource: 'Edinburgh'},
  //   {camId: 30, accTypeCode: 'Tiger', accType: 'Nixon', sourceCode: 'System Architect', accSource: 'Edinburgh'},
  //   {camId: 40, accTypeCode: 'Tiger', accType: 'Nixon', sourceCode: 'System Architect', accSource: 'Edinburgh'},

  // ]
  names:any;
  title = 'learnApi';
  constructor(private userData: AssetsDataService){
    userData.asset().subscribe((data)=> {
      console.warn("data", data)
      this.names=data;
    });
    //console.warn(this.users);
  }

  ngOnInit(): void {
    //new name();
  }

}
