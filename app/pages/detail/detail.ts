
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

  onPageDidEnter () {
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

// onPageLoaded - Runs when the page has loaded. This event only happens once per page being created and added to the DOM. If a page leaves but is cached, then this event will not fire again on a subsequent viewing. The onPageLoaded event is good place to put your setup code for the page.
// onPageWillEnter - Runs when the page is about to enter and become the active page.
// onPageDidEnter - Runs when the page has fully entered and is now the active page. This event will fire, whether it was the first load or a cached page.
// onPageWillLeave - Runs when the page is about to leave and no longer be the active page.
// onPageDidLeave - Runs when the page has finished leaving and is no longer the active page.
// onPageWillUnload - Runs when the page is about to be destroyed and have its elements removed.
// onPageDidUnload - Runs after the page has been destroyed and its elements have been removed.

