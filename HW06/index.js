function clear(elementID){
    var div = document.getElementById(elementID);
    while(div.firstChild){
        div.removeChild(div.firstChild);
    }
}

function RtoD(){
    var data = [
        //first in dictionary is Clinton, second is Sanders,third is unallotted
        ["Iowa",44,0],
        ["New Hampshire",24,0],
        ["Nevada",35,0],
        ["South Carolina",53,0],
        ["Alabama",53,0],
        ["Alaska",0,20],
        ["Arkansas",32,0],
        ["Colorado",66,0],
        ["Georgia",73+29,0],
        ["Massachusetts",46+45,0],
        ["Minnesota",31+46,0],
        ["Oklahoma",17+21,0],
        ["Tennessee",44+23,0],
        ["Texas",147+75,0],
        ["Vermont",16,0],
        ["Virginia",62+33,0],
        ["Kansas",33,0],
        ["Louisiana",37+14,0],
        ["Maine",25,0],
        ["Nebraska",25,0],
        ["Hawaii",0,34],
        ["Michigan",60+67,0],
        ["Mississippi",34,0],
        ["District of Columbia",0,45],
        ["Wyoming",0,18],
        ["Florida",133+65,0],
        ["Illinois",68+67,0],
        ["Missouri",64,0],
        ["North Carolina",59+45,0],
        ["Ohio",79+62,0],
        ["Arizona",0,85],
        ["Idaho",0,27],
        ["Utah",0,37],
        ["Washington",0,118],
        ["Wisconsin",0,96],
        ["New York",0,291],
        ["Connecticut",0,70],
        ["Delaware",0,31],
        ["Maryland",0,118],
        ["Pennsylvania",0,210],
        ["Rhode Island",0,33],
        ["Indiana",0,92],
        ["West Virginia",0,37],
        ["Kentucky",0,61],
        ["Oregon",0,74],
        ["California",0,546],
        ["Montana",0,27],
        ["New Jersey",0,142],
        ["New Mexico",0,43],
        ["North Dakota",0,23],
        ["South Dakota",0,25]
    ];

    var stateNames = [];
    for(var i = 0;i<data.length;i++){
        stateNames.push(data[i][0]);
    }

    var allotted = [];
    for(var i = 0;i<data.length;i++){
        if(data[i][2]==0){
            allotted.push(true);
        }else{
            allotted.push(false);
        }
    }

    var delegates = [];
    for(var i = 0;i<data.length;i++){
        if(allotted[i]==true){
            delegates.push(data[i][1]);
        }else{
            delegates.push(data[i][2]);
        }
    }
   
    //clear div
    clear("chart");

    //to scale your bars
    var foo = d3.scale.linear()
        .domain([0,d3.max(delegates)])
        .range([0,1300])

    //same as above first block of stuff
    d3.select(".chart")
        .selectAll("div")
        .data(stateNames)
        .enter().append("div").transition()
        .style("width",function(d){
	          return foo(delegates[stateNames.indexOf(d)]) + "px"; })
        .text(function(d){
	          return d + ": " + delegates[stateNames.indexOf(d)]; })
        .style("background-color",function(d){
            if(allotted[stateNames.indexOf(d)]==true){
                return "#4682B4";
            }else{
                return "#808080";
            }
        });


    document.getElementById("DtoR").removeEventListener('click',RtoD);
    document.getElementById("DtoR").addEventListener('click',DtoR);
}

function DtoR(){
    var alot = [30, 23, 50, 30 , 50 , 28, 40 , 76, 
	              42, 38 , 43, 58, 155, 16, 49, 40,
	              46, 46, 23, 23, 19, 32, 59, 40, 29,
	              9, 19, 99, 69, 52, 72, 9, 66];
    var alot_name = ["iowa","new hampshire","south carolina","nevada","alabama",
		                 "alaska","arkansas","georgia","massachusetts",
		                 "minnesota","oklahoma","tenessee","texas","vermont",
		                 "virginia","kansas","kentucky","louisiana",
		                 "maine","puerto rico","hawaii","idaho","michigan",
		                 "mississippi","wyoming","guam","washington dc", "florida",
		                 "illinois", "missouri", "north carolina", "marianas", "ohio"
		                ];

    var ulot = [37, 9, 9, 58, 40, 28, 42, 95, 28, 16, 38, 71,
	              19, 57, 36, 34, 28, 44, 172, 27, 51, 24, 29
	             ];
    var ulot_name= ["colorado","virg isld","samoa","arizona","utah",
		                "north dakota","wisconsin","new york","connecticut",
		                "delaware","maryland","pennsylvannia","rhode island","indiana",
		                "nebraska","west virginia","oregon","washington",
		                "california", "montana", "new jersey", "new mexico", "south dakota"]

    var delegates = [];
    for(var i = 0;i<alot.length;i++){
        delegates.push(alot[i]);
    }
    for(var i = 0;i<ulot.length;i++){
        delegates.push(ulot[i]);
    }

    var stateNames = [];
    for(var i = 0;i<alot_name.length;i++){
        stateNames.push(alot_name[i]);
    }
    for(var i = 0;i<ulot_name.length;i++){
        stateNames.push(ulot_name[i]);
    }

    clear("chart");

    var foo = d3.scale.linear()
        .domain([0,d3.max(delegates)])
        .range([0,1300])

    d3.select(".chart")
        .selectAll("div")
        .data(stateNames)
        .enter().append("div").transition()
        .style("width", function(d){
            console.log(d);
	          return foo(delegates[stateNames.indexOf(d)]) + "px"; })
        .text(function(d){
	          return d + ": " + delegates[stateNames.indexOf(d)]; })
        .style("background-color",function(d){
            if(alot_name.indexOf(d)!=-1){
                return "#4682B4";
            }else{
                return "#808080";
            }
        });

    document.getElementById("DtoR").removeEventListener('click',DtoR);
    document.getElementById("DtoR").addEventListener('click',RtoD);
}
DtoR();
