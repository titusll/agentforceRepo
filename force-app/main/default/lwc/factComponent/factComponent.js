import { LightningElement } from 'lwc';
import { getCatFacts } from '@salesforce/apex/CatFacts.getCatFacts';

export default class FactComponent extends LightningElement {

    facts = [];

    handleClick(){
            getCatFacts()
            .then((result) => {
                this.facts = Array.isArray(result) ? result : [];
                this.error = this.listResults.length === 0 ? 'No results found' : undefined;
            })
            .catch((err) => {
                this.listResults = [];
                this.error = err && err.body && err.body.message ? err.body.message : 'An error occurred';
                // eslint-disable-next-line no-console
                console.error('Error:', err);
            });
    }
    
}