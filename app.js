// console.log('hello');

fetch('https://reqres.in/api/users/') //it returns a Promise, we use '.then' to handle 
    .then(res => res.json()) //it returns another Promise in jason, we use again '.then' to handle. Have to check if the response is OK.
    .then(data => console.log(data))



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