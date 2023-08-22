

// const url = 'https://datausa.io/api/data?drilldowns=Nation&measures=Population';

// let year;

// fetch(url) //it returns a Promise, we use '.then' to handle 
//     .then(response => response.text()) //it returns another Promise in jason, we use again '.then' to handle. Have to check if the response is OK.
//     .then(data => {
//         console.log(data);
//         year = data[0].year;
//         console.log(year);
//     });
        

// const my_data = async function(){
//                     let data = await fetch(url)
//                         .then((response) => response.json())
//                         .then(data => {
//                             return data;
//                         })
//                         .catch(error => {
//                             console.error(error);
//                         });
                    
//                     console.log(data);
//                     return data;
//                     }();

import fetch from "node-fetch";
import axios from "axios";

const makeFetchRequest = async (url) => {
  try {
    const response = await fetch(url);
    const data = await response.json();
    console.log(data.data[0].Nation);
    return data;
  } catch (err) {
    console.error("Error: ", err);
  }
  
};


// const makeFetchRequestWithPromise = async (url) => {
//   fetch(url)
//   .then(resp=> resp.json())
//   .then(data=>{
//     const parseData = data.data
//     console.log(parseData)
//   })
//   .catch(err=>{
//     console.error("Error: ", err);

//   })
// };

// const makeAxiosRequest = async (url) => {
//   try {
//     const response = await axios(url);
//     const data = response.data;
//     console.log(data);
//   } catch (err) {
//     console.error("Error: ", err);
//   }
// };

makeFetchRequest(
  "https://datausa.io/api/data?drilldowns=Nation&measures=Population"
);

// const data = await makeFetchRequest("https://datausa.io/api/data?drilldowns=Nation&measures=Population");


// makeFetchRequestWithPromise("https://datausa.io/api/data?drilldowns=Nation&measures=Population");

// makeAxiosRequest(
//   "https://datausa.io/api/data?drilldowns=Nation&measures=Population"
// );