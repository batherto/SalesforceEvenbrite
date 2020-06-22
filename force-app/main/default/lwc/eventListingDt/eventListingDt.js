import { LightningElement, track} from 'lwc';
import fetcheventdata from './helper_file';
const columns = [
    { label: 'Name', fieldName: 'name', type: 'name' },
    { label: 'Start Date', 
      fieldName: 'startDate', 
      type: 'date',
        typeAttributes:{
            year: "numeric",
            month: "numeric",
            day: "numeric",
            hour: "numeric",
            hour12 :"true",
            minute: "2-digit"
            } 
        },
];

/* Old Date attribute
type: 'date',
        typeAttributes:{
            weekday: "long",
            year: "numeric",
            month: "short",
            day: "2-digit",
            hour: "numeric",
            hour12 :"true",
            minute: "2-digit"
            } 


// use test data

/*
const data = [{
                    id: 'a',
                    username:'jie001',
                    name :'Sam Smith' ,
                    website: 'www.yahoo.com'
                },
                {
  		            id: 'b',
                    username:'aaa001',
                    name :'Ted Templeton',
                    website: 'www.google.com'
                }];
*/

window.console.log("Begin");

export default class App extends LightningElement {
    @track data;
    @track columns = columns;


    async connectedCallback() {
        const data = await fetcheventdata();
        let newData = [];
        
        for (let x = 0; x< data.length; x++){
            //create a new object to push onto data 
            newData.push({
                id : data[x].id,
                name : data[x].name.text,
                startDate : data[x].start.local
            })
        }
        this.data = newData;


    }



}