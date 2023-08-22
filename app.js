// console.log('hello');

const url = 'https://datausa.io/api/data?drilldowns=Nation&measures=Population';

let year;

fetch(url) //it returns a Promise, we use '.then' to handle 
    .then(response => response.json()) //it returns another Promise in jason, we use again '.then' to handle. Have to check if the response is OK.
    .then(data => {
        console.log(data);
        // year = data.data[0].year;
        // console.log(year);
    });
        

// console.log(data.year);



    // fetch('https://reqres.in/api/users/') //it returns a Promise, we use '.then' to handle 
    // .then(res => {
    //     if(res.ok){
    //         console.log('SUCCESS')
    //     }else{
    //         console.log('NOT Successful')
    //     }
    //     res.json()
    // }) //it returns another Promise in jason, we use again '.then' to handle. Have to check if the response is OK.
    // .then(data => console.log(data))