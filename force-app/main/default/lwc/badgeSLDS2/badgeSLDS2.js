import { LightningElement, api } from 'lwc';
export default class BadgeSLDS2 extends LightningElement {
    @api alertType;
    @api alertTitle;
    @api alertMessage;
    typeClass;
    icon; 
    iconVariant;
    iconColours;

    connectedCallback() {
        this.updateStyles();
    }

    // Bundle notification alert styling and individual alert type styling into one class
    get containerClasses() {
        return `slds2-notificationAlert ${this.typeClass}`;
    }
    get iconStyle(){
        return `slds2-iconStyling ${this.iconColours}`;
    }

    // Update all styles (alert type, icon type, icon color)
    updateStyles() {
        if (this.alertType == 'info'){
            this.typeClass = 'slds2-info';
            this.icon = 'utility:info';
            this.iconVariant='info';
            this.iconColours = 'info-colour';
        } else if (this.alertType == 'quotation_marks') {
            this.typeClass = 'slds2-quotation';
            this.icon = 'utility:quotation_marks';
        } else if (this.alertType == 'success') {
            this.typeClass = 'slds2-success';
            this.icon = 'utility:success';
            this.iconVariant='success';
        } else if (this.alertType == 'warning') {
            this.typeClass = 'slds2-warning';
            this.icon = 'utility:warning';
            this.iconVariant='warning';
        } else if (this.alertType == 'error') {
            this.typeClass = 'slds2-error';
            this.icon = 'utility:error';
            this.iconVariant='error';
        } else {
            this.typeClass = 'slds2-info';
            this.icon = 'utility:info';
            this.iconVariant='info';
        }
    }


}
