import { LightningElement } from 'lwc';

export default class InputContact extends LightningElement {

    numInput;
    numRandom;
    lower;
    higher;
    correct;

    connectedCallback(){
this.numRandom = Math.floor(Math.random() * 100) + 1;
    }

    higherOrLower(event){
        this.numInput = event.target.value;
        console.log('User Guess is ' + this.numInput);
       
        console.log('Random num is ' + this.numRandom);
       if (this.numInput > this.numRandom){
        this.lower = true;
       } else if (this.numInput < this.numRandom){
        this.higher = true;
       } else if (this.numInput == this.numRandom){
        this.correct = true;
       }
    }
}