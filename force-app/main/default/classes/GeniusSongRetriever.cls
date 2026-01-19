public with sharing class GeniusSongRetriever {
    public GeniusSongRetriever() {

    }

    @AuraEnabled(cacheable=true)
    public static List<String> searchLyrics(String searchName){
        try {

            List<String> fullTitles = new List<String>();
            String geniusClientId = '';
            String geniusClientSecret = '';
            String accessToken = 'UxwafzJsaoX6dye672ueFvIqK8XNAyLRrJ52ify4hanysu_czFRuepMoYOPBpoZC';

            Http http = new Http();
            HttpRequest request = new HttpRequest();
            request.setEndpoint('https://api.genius.com/search?q='+ searchName);
            request.setMethod('GET');
            request.setHeader('Authorization', 'Bearer ' + accessToken);
            HttpResponse response = http.send(request);

            if (response.getStatusCode() == 200){

                System.debug('GOT 200 SUCCESS');
                Map<String, Object> entireResponse = (Map<String, Object>) JSON.deserializeUntyped(response.getBody());
                Map<String, Object> responseData = (Map<String, Object>) entireResponse.get('response');
                List<Object> hits = (List<Object>) responseData.get('hits');
                
                for (Integer i=0; i<hits.size(); i++){

                    if (i > 5){
                        break;
                    }
                    Map<String, Object> hit = (Map<String, Object>) hits[i];
                    Map<String, Object> song = (Map<String, Object>) hit.get('result');
                    String title = (String) song.get('full_title');
                    fullTitles.add(title);
                }
                return fullTitles;
            }
        } catch (Exception e) {
            throw new AuraHandledException(e.getMessage());
        }
        return null;
    }
}
