import { useEffect, useState } from "react";
import { Chart } from "react-google-charts";
let rating = new Map();
let check = new Map();
let totalValue =0;
let countObj;


function Codeforces({username}) {
    const [countData,setCountData] = useState([]);
    const [total,setTotal] = useState(0);
    const [lineData,setLineData] = useState([]);
    // let rahul ={};
let xMap = new Map();
let xMapWrong = new Map();
let xMapTLE = new Map();
let  checkMap = new Map();
let checkMapTLE = new Map();
let checkMapWrong = new Map();
let checkMapCount = new Map();

useEffect(function(){
    async function fetchData(){
        let totalWrongAns = 0;
        let totalTLEData =0;
        const res = await fetch(`https://codeforces.com/api/user.status?handle=${username}`);
        const data = await res.json();
        
        // console.log(data.result);
        
        // console.log(data.result);
    
        for(let item of data.result){
            // console.log(item.problem.rating);
            xMap.set(item.problem.rating,0);
            xMapWrong.set(item.problem.rating,0)
            xMapTLE.set(item.problem.rating,0);
        }
        for(let item of data.result){
            let check = checkMap.has(item.problem.name);
            if(item.verdict === 'OK' && !check){
                let dataV = xMap.get(item.problem.rating);
                xMap.set(item.problem.rating,dataV+1);
                checkMap.set(item.problem.name,true);
            }else if(item.verdict ==="TIME_LIMIT_EXCEEDED"){
                totalTLEData++;
                let dataT = xMapTLE.get(item.problem.rating)
                xMapTLE.set(item.problem.rating,dataT+1);
    
                checkMapTLE.set(item.problem.name,true);
            }else if(item.verdict==="WRONG_ANSWER"){
                let dataW = xMapWrong.get(item.problem.rating)
                xMapWrong.set(item.problem.rating,dataW+1);
                totalWrongAns++;
                checkMapWrong.set(item.problem.name,true);
            }
        }
    
        let countWrong=0;
        let countCorrect =0;
        let countTLE =0;
        let countOther =0;
        let countRunTime =0;
        let countComplierErr =0;
        let SkippedCont =0;
        let countMemoryError =0;
        let againSolved =0;
    
        for(let item of data.result){
            let check = checkMapCount.has(item.problem.name);
            if(item.verdict==='WRONG_ANSWER'){
               countWrong++;
            }else if(item.verdict ==="OK" && !check){
                countCorrect++;
                checkMapCount.set(item.problem.name,true)
                
            }else if(item.verdict==="TIME_LIMIT_EXCEEDED"){
                countTLE++;
            }
            else if(item.verdict==="MEMORY_LIMIT_EXCEEDED"){
                countMemoryError++;
            }else if(item.verdict==="RUNTIME_ERROR"){
                countRunTime++;
            }else if(item.verdict==="COMPILATION_ERROR"){
                 countComplierErr++;
            }else if(item.verdict==="SKIPPED"){
                SkippedCont++;
            }else{
                if(item.verdict==='OK'){
                    againSolved++;
                }else{
                    countOther++;
                // console.log(item.verdict);
                }
               
            }
        }
         countObj = [
            ["Codechef Stats","Problems"],
            ["Correct Answer",countCorrect],
            ["Wrong Answer",countWrong],
            ["Compilation Error",countComplierErr],
            ["Runtime Error",countRunTime],
            ["Memmory Exceed",countMemoryError],
            ["Skipped",SkippedCont],
            ["Others",countOther],
            [ "TLE",countTLE],
            ["Again Solved",againSolved]
        ]
        // const {correct} = countObj; 
        setCountData(countObj);
        // console.log(correct);
        
        
        let totalx =0;
        for(let item of xMap.values()){
            totalx +=item;
        }
        setTotal(totalx);
        
        
    
    
    }
    fetchData();

    // const ratingData = [["Count","New Rating",{ role: "tooltip", type: "string", p: { html: true } }]];
    const ratingData = [["Count","New Rating"]];
async function fetchDataLineData(){
    const res = await fetch(`https://codeforces.com/api/user.rating?handle=${username}`);
    const data = await res.json();
     data.result.map((value,i)=>{
        // let x = value.newRating - value.oldRating;
        // let y;
        // x>=0 ? y=`+${x}` : y=x;
        // let html = `<div>
        // <h1>ContestId : ${value.contestId} </h1>
        // <h1>ContestName : ${value.contestName}</h1>
        // <p>Rating : ${value.newRating} (${y})</p>
        // <p>Rank ${value.rank}</p>
        // </div>`
        // let htmlData =  "<h6>Contest Number: " +
        // i +
        // "</h6><h6>Contest Name: " +
        // value.contestName +
        // "</h6><h6>Delta: " +
        // (value.newRating - value.oldRating) +
        // "</h6><h6>New Rating: " +
        // value.newRating +
        // "</h6>" +
        // "<h6>Rank: " +
        // value.rank +
        // "</h6>" +
        // "<h6>Time: " +
        // new Date(value.ratingUpdateTimeSeconds * 1000).toLocaleString() +
        // "</h6>";
        // console.log(html)
        ratingData.push([i,value.newRating]);
    })

   setLineData(ratingData);
}
fetchDataLineData();

},[checkMap,checkMapCount,checkMapTLE,checkMapWrong,username,xMap,xMapTLE,xMapWrong]);

// console.log(countData,total);




    const data = countObj;
    const options = {
        title:` CodeForces Stats`,
        is3D: true,
        backgroundColor:"transparent",
        legendTextStyle: { color: "#7f8ea3"},
        // titleTextStyle: { color: '#FFF' },
        titleTextStyle: {
            color: "#7f8ea3",               // color 'red' or '#cc00cc'
            // fontName: "Courier New",    // 'Times New Roman'
            fontSize: 30,               // 12, 18
            bold: true,                 // true or false
            italic: true                // true of false
        },
      };
      const optionsLine = {
        title:"Rating Graph",
        // // colors: ['yellow', 'green'],
        // series: [{ color: "#1B8768" }],
        legendTextStyle: { color: "#ffffff"},
        
        titleTextStyle: {
            color: "#7f8ea3",               // color 'red' or '#cc00cc'
            // fontName: "Courier New",    // 'Times New Roman'
            fontSize: 30,               // 12, 18
            bold: true,                 // true or false
            italic: true                // true of false
        },
        hAxis: {
            title: 'Time'
          },
          vAxis: {
            title: 'Popularity'
          },
        fill:"white",
        // pointSize: 5,
        backgroundColor:"#091021",
        // tooltip: { isHtml: true },
        series: [{ color: "#ffff00" }],
    pointSize: 5,
    tooltip: { isHtml: true },
      };
    //   console.log(lineData);

    return (
        <>
        <div style={{width:"100%",height:"500px"} }>
            <Chart
      chartType="PieChart"
      data={data}
      options={options}
      width={"100%"}
      height={"400px"}
      columns={"10px"}    
    />
        </div>
        <div style={{width:"100%",height:"500px", marginBottom:"100px"} }>
        <Chart
        chartType="LineChart"
        width="auto"
        height="900px"
        data={lineData}
        options={optionsLine}
      />
        </div>

        </>
    );
}

export default Codeforces;