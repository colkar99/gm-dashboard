import { Component,OnInit } from '@angular/core';
import {CdkDragDrop, moveItemInArray,transferArrayItem} from '@angular/cdk/drag-drop';
declare var $: any;
const data = {
  chart: {
    caption: "Yearly sales of products",
    yaxisname: "Number of units sold",
    subcaption: "2008-2018",
    legendposition: "Right",
    drawanchors: "0",
    showvalues: "0",
    plottooltext: "<b>$dataValue</b> products sold in $label",
    theme: "fusion"
  },
  data: [
    {
      label: "2008",
      value: "1380000"
    },
    {
      label: "2009",
      value: "1450000"
    },
    {
      label: "2010",
      value: "1610000"
    },
    {
      label: "2011",
      value: "1540000"
    },
    {
      label: "2012",
      value: "1480000"
    },
    {
      label: "2013",
      value: "1573000"
    },
    {
      label: "2014",
      value: "2232000"
    },
    {
      label: "2016",
      value: "2100000"
    },
    {
      label: "2017",
      value: "1800000"
    },
    {
      label: "2018",
      value: "800000"
    }
  ]
};
const Piedata = {
  chart: {
    caption: "Top Transactions",
    subcaption: "k = Thousand dollers",
    enablesmartlabels: "0",
    showlabels: "0",
    numbersuffix: "k",
    usedataplotcolorforlabels: "0",
    plottooltext: "$label, <b>$value</b> K",
    theme: "fusion"
  },
  data: [
    {
      label: "Cash",
      value: "290"
    },
    {
      label: "Gifts",
      value: "260"
    },
    {
      label: "Stocks",
      value: "180"
    },
    {
      label: "Divident",
      value: "140"
    },
    {
      label: "Other ownership interest",
      value: "115"
    }
  ]
};
const bubbleData = {
  chart: {
    caption: "Quantity conversions",
    subcaption: "Conversions as % of total",
    xaxisname: "# Conversions",
    yaxisname: "Cost Per Conversion",
    numberprefix: "$",
    theme: "fusion",
    plottooltext: "$name : Share of total conversion: $zvalue%"
  },
  categories: [
    {
      verticallinealpha: "20",
      category: [
        {
          label: "0",
          x: "0"
        },
        {
          label: "1500",
          x: "1500",
          showverticalline: "1"
        },
        {
          label: "3000",
          x: "3000",
          showverticalline: "1"
        },
        {
          label: "4500",
          x: "4500",
          showverticalline: "1"
        },
        {
          label: "6000",
          x: "6000",
          showverticalline: "1"
        }
      ]
    }
  ],
  dataset: [
    {
      data: [
        {
          x: "5540",
          y: "16.09",
          z: "30.63",
          name: "Quantity 1"
        },
        {
          x: "4406",
          y: "12.74",
          z: "24.36",
          name: "Quantity 2"
        },
        {
          x: "1079",
          y: "15.79",
          z: "5.97",
          name: "Quantity 3"
        },
        {
          x: "1700",
          y: "8.27",
          z: "9.4",
          name: "Quantity 4"
        },
        {
          x: "853",
          y: "15.89",
          z: "4.71",
          name: "Quantity 5"
        },
        {
          x: "1202",
          y: "10.74",
          z: "6.65",
          name: "Quantity 6"
        },
        {
          x: "2018",
          y: "6.14",
          z: "11.16",
          name: "Quantity 7"
        },
        {
          x: "413",
          y: "19.83",
          z: "2.28",
          name: "Quantity 8"
        },
        {
          x: "586",
          y: "13.96",
          z: "3.24",
          name: "Quantity 9"
        },
        {
          x: "184",
          y: "15.82",
          z: "1.02",
          name: "Quantity 10"
        },
        {
          x: "311",
          y: "5.83",
          z: "1.72",
          name: "Quantity 11"
        },
        {
          x: "35",
          y: "10.76",
          z: "0.19",
          name: "Quantity 12"
        },
        {
          x: "55",
          y: "2.73",
          z: "0.3",
          name: "Quantity 13"
        },
        {
          x: "6",
          y: "21.22",
          z: "0.03",
          name: "Quantity 14"
        }
      ]
    }
  ]
};

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
 public Color;
  title = 'angular-material-begin';
  msg_data = [
    { id: 1, msg: "Ehab Ghali Lunched 10,000", eventData: "12 February", clicked: true },
    { id: 2, msg: "Ehab Ghali Lunched 10,000", eventData: "13 March", clicked: false },
    { id: 3, msg: "Ehab Ghali Lunched 10,000", eventData: "12 April", clicked: false },
    { id: 4, msg: "Ehab Ghali Lunched 10,000", eventData: "12 July", clicked: false },
    { id: 5, msg: "Ehab Ghali Lunched 10,000", eventData: "12 February", clicked: false }

  ]
  noticeData = [
    { id: 1, name: "Ehab Ghali", timeAgo: "2 Hours ago", content: "SPL_SP1_Transition_mission" },
    { id: 2, name: "Karthik", timeAgo: "2 Hours ago", content: "SPL_SP1_Transition_mission" },
    { id: 3, name: "Selwyn", timeAgo: "3 Hours ago", content: "SPL_SP1_Transition_mission" },
    { id: 4, name: "Ehab Ghali", timeAgo: "1 Week ago", content: "SPL_SP1_Transition_mission" },
    { id: 5, name: "Senthil", timeAgo: "1 Week ago", content: "SPL_SP1_Transition_mission" }
  ]

  reportCalender = [
    { id: 1, event: "Loreum ipsum Lorem ipsum event", timeLeft: "1 Days left", dateTime: "12 February" },
    { id: 2, event: "Loreum ipsum Lorem ipsum event", timeLeft: "12 Days left", dateTime: "22 March" },
    { id: 3, event: "Loreum ipsum Lorem ipsum event", timeLeft: "20 Days left", dateTime: "12 April" },
    { id: 4, event: "Loreum ipsum Lorem ipsum event", timeLeft: "25 Days left", dateTime: "20 June" },
    { id: 5, event: "Loreum ipsum Lorem ipsum event", timeLeft: "30 Days left", dateTime: "30 July" }
  ]

  clientAccess = [
    { id: 1, vale: "9000", backGround: "-webkit-linear-gradient(left, #33156d 0%,#f282bc 100%);", dateTime: "12 February" },
    { id: 2, vale: "9000", backGround: "webkit-linear-gradient(left, #33156d 0%,#f282bc 100%);", dateTime: "22 March" },
    { id: 3, vale: "9000", backGround: "-webkit-linear-gradient(left, #33156d 0%,#f282bc 100%);", dateTime: "12 April" },
    { id: 4, vale: "9000", backGround: "-webkit-linear-gradient(left, #33156d 0%,#f282bc 100%);", dateTime: "20 June" },
    { id: 5, vale: "9000", backGround: "-webkit-linear-gradient(left, #33156d 0%,#f282bc 100%);", dateTime: "30 July" },
    { id: 6, vale: "9000", backGround: "-webkit-linear-gradient(left, #33156d 0%,#f282bc 100%);", dateTime: "30 July" },
    { id: 7, vale: "9000", backGround: "-webkit-linear-gradient(left, #33156d 0%,#f282bc 100%);", dateTime: "30 July" },
    { id: 8, vale: "9000", backGround: "-webkit-linear-gradient(left, #33156d 0%,#f282bc 100%);", dateTime: "30 July" },
    { id: 9, vale: "9000", backGround: "-webkit-linear-gradient(left, #33156d 0%,#f282bc 100%);", dateTime: "30 July" },
    { id: 10, vale: "9000", backGround: "-webkit-linear-gradient(left, #33156d 0%,#f282bc 100%);", dateTime: "30 July" },
    { id: 11, vale: "9000", backGround: "-webkit-linear-gradient(left, #33156d 0%,#f282bc 100%);", dateTime: "30 July" },
    { id: 12, vale: "9000", backGround: "-webkit-linear-gradient(left, #33156d 0%,#f282bc 100%);", dateTime: "30 July" }





  ]


  clickedChange(item) {
    let temp = this.msg_data.filter(p => p.id === item.id)
    temp[0].clicked = true
  }
  //////line chart
  // width = 550;
  // height = 400;
  width="100%"
  height=400;
  type = "area2d";
  dataFormat = "json";
  dataSource = data;
  ///pie
  Piewidth = "100%";
  Pieheight = 400;
  Pietype = "doughnut3d";
  PiedataFormat = "json";
  PiedataSource = Piedata;
 // Bubble chart
 bubblewidth = "100%";
 bubbleheight = 400;
 bubbletype = "bubble";
 bubbledataFormat = "json";
 bubbledataSource = bubbleData;
 timePeriods = [
  "<h5 class='head-tag'>Most recent file uploaded</h5><div class='notice notice-success' *ngFor='let item of noticeData; let i = index'><span class='notice-name' [innerHTML]='item.name'></span><span class='pull-right notice-ago'>{{item.timeAgo}}</span><p class='notice-ptag'>{{item.content}}</p></div><div class='text-center' style='margin-bottom:5px;'><a class='notice-atag' href='#'>Show more</a></div>",
  '<h5 class="head-tag">Client Access</h5><div class="row"><div class="col-md-6" *ngFor="let item of clientAccess; let i = index"><div class="col-md-12"><span style="color:gray;font-size:12px;">Number of Exceptions</span></div><div class="row" style="padding:8px 0px 8px 0px;"><div class="col-md-6"><div class="progress"><div class="progress-bar" role="progressbar" aria-valuenow="60" aria-valuemin="0"aria-valuemax="100" style="width: 100%;"></div></div></div><div class="col-md-6"><H5 class="center-card-htag">9,000</H5></div></div></div></div>',
  '<h5 class="head-tag">Report calender</h5><div class="notice notice-success" *ngFor="let item of reportCalender;let i = index"><span class="notice-name">{{item.event}}</span><span class="pull-right notice-ago">{{item.timeLeft}}</span><p class="notice-ptag2">{{item.dateTime}}</p></div><div class="text-center" style="margin-bottom:5px;"><a class="notice-atag" href="#">Show more</a></div>',
  
];
  constructor() { }

    ngOnInit(){
     let one =  document.getElementById('get1').innerHTML
     console.log("one",one)
    }

    drop(event: CdkDragDrop<string[]>) {
     console.log(event)
     console.log("fhj","get"+(event.previousIndex+1))
    // console.log("hello + ",document.getElementById("get"+event.previousIndex).innerHTML)
    // moveItemInArray(this.timePeriods, event.previousIndex, event.currentIndex);
    let x = document.getElementById("get"+(event.previousIndex+1)).innerHTML;
    let y = document.getElementById("get"+(event.currentIndex+1)).innerHTML;
     console.log(
       {x:x,y:y}
     )
     document.getElementById("get"+(event.previousIndex+1)).innerHTML = y;
     document.getElementById("get"+(event.currentIndex+1)).innerHTML = x; 
    }

    drop1(event: CdkDragDrop<string[]>) {
      console.log(event)
      console.log("fhj","get"+(event.previousIndex+1))
     // console.log("hello + ",document.getElementById("get"+event.previousIndex).innerHTML)
     // moveItemInArray(this.timePeriods, event.previousIndex, event.currentIndex);
     let x = document.getElementById("get"+(event.previousIndex+4)).innerHTML;
     let y = document.getElementById("get"+(event.currentIndex+4)).innerHTML;
      console.log(
        {x:x,y:y}
      )
      document.getElementById("get"+(event.previousIndex+4)).innerHTML = y;
      document.getElementById("get"+(event.currentIndex+4)).innerHTML = x; 
     }
}


