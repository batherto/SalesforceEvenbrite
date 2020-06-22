export default function fetcheventdata(){
    window.console.log('hello');
    return fetch('https://jsonplaceholder.typicode.com/users',{
        // request type
        method:"GET",
        headers:{// content type
                 "Content-Type": "application/json"
                }
   })
   .then(response => response.json())
   .then((jsonResponse) => {
           if (jsonResponse.length){
                let size = Object.keys(jsonResponse);
                console.log('Try for size ===> '+size);
                return jsonResponse;
            }
            // eslint-disable-next-line no-else-return
            else{
                // adding data object
                let size = Object.keys(jsonResponse);
                console.log('Try for size of one ===> '+size);
                let finalArray = [];
                finalArray.push(jsonResponse);
                return finalArray;

            }
   })
}