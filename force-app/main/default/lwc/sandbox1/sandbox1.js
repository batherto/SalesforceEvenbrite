import { LightningElement, track } from 'lwc';

export default class Sandbox1 extends LightningElement {

    @track infoData;

    handleDataFetch(){
        // output a pulse
        window.console.log('You got into the event! v3');

        //function to check the status using a promise
        function status(responseData) {
            window.console.log('Status = ' +responseData.status);
            return new Promise((resolve,reject) =>{
                if (responseData.status >= 200 && responseData.status < 300) {
                    resolve(responseData)
                }
                reject(new Error(responseData.status.Text));
            })
        }

        fetch('https://jsonplaceholder.typicode.com/users',{
            // request type
            method:"GET",
            headers:{// content type
                     "Content-Type": "application/json"
                    }
        })
        .then(status)
        .then(response => response.json()) // returning the response in the form of JSON
        .then((jsonResponse) => {
            window.console.log('jsonResponse ===> '+JSON.stringify(jsonResponse.name));
            window.console.log('jsonResponse ===> '+JSON.stringify(jsonResponse));

           if (jsonResponse.length){
                let size = Object.keys(jsonResponse);
                window.console.log('Try for size ===> '+size);
                this.infoData = jsonResponse;
            }
            else{
                // adding data object
                let size = Object.keys(jsonResponse);
                window.console.log('Try for size of one ===> '+size);
                let finalArray = [];
                finalArray.push(jsonResponse);
                this.infoData = finalArray;

            }

        })
        .catch(error => {
            window.console.log('callout error ===> '+JSON.stringify(error));
        });
    }
}