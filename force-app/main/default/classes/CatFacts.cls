public with sharing class CatFacts {
    public CatFacts() {

    }

    public static List<String> getCatFacts(){

        try {
            List<String> facts = new List<String>();
            Http http = new Http();
            HttpRequest req = new HttpRequest();
            req.setEndpoint('https://meowfacts.herokuapp.com/?count=10');
            req.setMethod('GET');
            HttpResponse res = http.send(req);

            if (res.getStatusCode() == 200){

                Map<String, Object> entireResponse = (Map<String, Object>) JSON.deserializeUntyped(res.getBody());
                List<Object> data = (List<Object>) entireResponse.get('data');

                for (Integer i = 0; i < data.size(); i++){
                    String catFact = (String) data[i];
                    facts.add(catFact);
                }
            }
            return facts;

        } catch (Exception e){
            // Consider proper logging framework or platform events for errors in production
            return null;
        } 
    }
}
