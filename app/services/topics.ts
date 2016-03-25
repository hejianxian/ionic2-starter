import { Inject } from 'angular2/core';
import { Http } from 'angular2/http';
import 'rxjs/add/operator/map';

export class TopicService {
    
    constructor(@Inject(Http) http: Http) {
        this.http = http
    }   
 
    getTopics () {
        var url = 'https://cnodejs.org/api/v1/topics?page=0&limit=10&tab=good';
        return this.http.get(url).map(res => res.json());
    }
    
    getDetailByID (id) {
        var url = 'https://cnodejs.org/api/v1/topic/' + id;
        return this.http.get(url).map(res => res.json());
    }
}