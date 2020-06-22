import { LightningElement, track} from 'lwc';
import fetcheventdata from './helperFile';
const columns = [
    { label: 'Username', fieldName: 'username' },
    { label: 'Name', fieldName: 'name', type: 'name' },
    { label: 'Website', fieldName: 'website', type: 'url' },
];


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

window.console.log("hi");

export default class App extends LightningElement {
    @track data;
    @track columns = columns;


    async connectedCallback() {
        const data = await fetcheventdata();
        window.console.log(data);
        this.data = data;

    }



}