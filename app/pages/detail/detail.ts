
import {Page, NavController, NavParams} from 'ionic-angular';
import {TopicService} from '../../services/topics';

@Page({
  templateUrl: './build/pages/detail/detail.html',
  providers: [TopicService]
})
export class DetailPage {
  detail: any;
  nav: any;
  topicService: any;
  params: any;
  constructor(
      nav: NavController,
      topicService: TopicService,
      params: NavParams) {
      this.detail = {}; 
      this.nav = nav;
      this.topicService = topicService;
      this.params = params;
      this.params.get('id');
  }

  onPageWillEnter () {
      let _id = this.params.data.id;
      this.topicService.getDetailByID(_id).subscribe(
          data => {
              this.detail = data.data;
              console.log(data);
          },
          error => {
              console.log(error)
          });
  }
  
}
