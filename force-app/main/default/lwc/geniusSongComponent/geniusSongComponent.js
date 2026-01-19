import { LightningElement } from 'lwc';
import searchLyrics from '@salesforce/apex/GeniusSongRetriever.searchLyrics';

export default class GeniusSongComponent extends LightningElement {
    userSearch;
    listResults = [];
    error;

    // Imperative Apex call - invoke from a UI event (e.g., button click)
    handleSearch() {
        if (!this.userSearch || !this.userSearch.trim()) {
            this.listResults = [];
            this.error = 'Please enter a search term';
            return;
        }

        searchLyrics({ userSearch: this.userSearch })
            .then((result) => {
                this.listResults = Array.isArray(result) ? result : [];
                this.error = this.listResults.length === 0 ? 'No results found' : undefined;
            })
            .catch((err) => {
                this.listResults = [];
                this.error = err && err.body && err.body.message ? err.body.message : 'An error occurred';
                // eslint-disable-next-line no-console
                console.error('Error:', err);
            });
    }

    // Bind this to an input in the template to keep userSearch updated
    handleInputChange(event) {
        this.userSearch = event.target.value;
    }
}
