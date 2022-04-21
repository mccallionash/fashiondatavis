//data taken from clothing labels x-axis, brand countries:
//let  = ({England, Ireland, Spain, Italy}); didn't work, use design and manufacture to relate to binary numbers in country arrays.
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
let NotStated = [0,4];


const ctx = document.getElementById('myChart');

const myChart = new Chart (ctx,{
    type: "bar",
    data: {
        labels: ["Design", "Manufacture"],
        datasets: [
            {
              data: England,
              label: 'England',
              fill: '#71358b',
              borderColor: '#71358b',
              backgroundColor: '#71358b'
            },
            {
               data: Ireland,
               label: 'Ireland',
               fill: false,
               backgroundColor: '#2850a0'
            },
            {
               data: Spain,
               label: 'Spain',
               fill: false,
               backgroundColor: '#e41616'
            },
            {
               data: Italy,
               label: 'Italy',
               fill: false,
               backgroundColor: '#f18318'
            },
            {
               data: USA,
               label: 'USA',
               fill: false,
               backgroundColor: '#94a423'
            },
            {
               data: France,
               label: 'France',
               fill: false,
               backgroundColor: '#74c6c5'
            },
            {
               data: Germany,
               label: 'Germany',
               fill: false,
               backgroundColor: '#b9ce00'
            },
            {
               data: Canada,
               label: 'Canada',
               fill: false,
               backgroundColor: '#056370'
            },
            {
               data: India,
               label: 'India',
               fill: false,
               backgroundColor: '#f5a37a'
            },
            {
               data: Mexico,
               label: 'Mexico',
               fill: false,
               backgroundColor: '#e61467'
            },
            {
               data: Netherlands,
               label: 'Netherlands',
               fill: false,
               backgroundColor: '#70b73f'
            },
            {
               data: Sweden,
               label: 'Sweden',
               fill: false,
               backgroundColor: '#bb70ab'
            },
            {
               data: China,
               label: 'China',
               fill: false,
               backgroundColor: '#ed6881'
            },
            {
               data: HongKong,
               label: 'Hong Kong',
               fill: false,
               backgroundColor: '#e52421'
            },
            {
               data: Myanmar,
               label: 'Myanmar',
               fill: false,
               backgroundColor: '#89888c'
            },
            {
               data: Bangladesh,
               label: 'Bangladesh',
               fill: false,
               backgroundColor: '#8ec48b'
            },
            {
               data: Pakistan,
               label: 'Pakistan',
               fill: false,
               backgroundColor: '#2b86c7'
            },
            {
               data: Haiti,
               label: 'Haiti',
               fill: false,
               backgroundColor: '#5ab139'
            },
            {
               data: Turkey,
               label: 'Turkey',
               fill: false,
               backgroundColor: '#9f2828'
            },
            {
               data: SriLanka,
               label: 'Sri Lanka',
               fill: false,
               backgroundColor: '#ece77a'
            },
            {
               data: Colombia,
               label: 'Colombia',
               fill: false,
               backgroundColor: '#b62184'
            },
            {
               data: Cambodia,
               label: 'Cambodia',
               fill: false,
               backgroundColor: '#aec610'
            },
            {
               data: NotStated,
               label: 'Not Stated',
               fill: false,
               backgroundColor: '#000000'
            },
        ]
    } 
   })