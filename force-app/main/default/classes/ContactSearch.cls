public with sharing class ContactSearch {
    public ContactSearch() {

    }

    AuraEnabled(cacheable=true);
    public List<Contact> returnCons(String nameInput){
        try {
        List<Contact> cons = [SELECT Name, Email, Birthdate FROM Contact WHERE Name LIKE :nameInput];
        return cons;
        } catch (Exception e){
            System.debug('ERROR: ' + e);
        }
    }
}