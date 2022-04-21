//data taken from clothing labels x-axis, brand countries:
let quantity = [0,1,2,3,4,5,6,7,8];

//data for drawing lines = [# of brands, # of manufacturers]
let England = [6,0];
let Ireland = [5,2];
let Spain = [5,0];
let Italy = [4,3];
let USA = [4,1];
let France = [3,0];
let Germany = [2,0];
let Canada = [1,0];
let India = [1,4];
let Mexico = [1,1];
let Netherlands = [1,0];
let Sweden = [1,0];
let China = [0,5];
let HongKong = [0,1];
let Myanmar = [0,1];
let Bangladesh = [0,2];
let Pakistan = [0,1];
let Haiti = [0,1];
let Turkey = [0,3];
let SriLanka = [0,1];
let Colombia = [0,1];
let Cambodia = [0,3];


let ctx = document.getElementById('myChart')

let myChart = new Chart (ctx,{
    type: "line",
    data: {
        labels: quantity,
        datasets: [
            {
              data: England,
              label: 'England',
              fill: false,
              borderColor: '#71358b'
            },
            {
               data: Ireland,
                label: 'Ireland',
                fill: false,
                borderColor: '#2a4b9b'
            },
            {
               data: Spain,
                label: 'Spain',
                fill: false,
                borderColor: '#e41616'
            },
        ]
    } 
   })