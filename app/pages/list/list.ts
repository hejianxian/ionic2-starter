import {Page, Modal, NavController, MenuController} from 'ionic-angular';
import {TopicService} from '../../services/topics';
import {DetailPage} from '../detail/detail';

@Page({
  templateUrl: './build/pages/list/list.html',
  providers: [TopicService]
})

export class ListPage {
  topic: Array<any>;
  topicService: any;
  nav: any;
  menu: any;
  constructor(
      topicService: TopicService,
      nav: NavController,
      menu: MenuController) { 
        this.nav = nav;
        this.menu = menu;
        this.topic = null;
        this.topicService = topicService;
  }
  
  onPageWillEnter () {
      this.topicService.getTopics().subscribe(
        data => {
            this.topic = data.data;
            console.log(data);
        },
        err => {console.log(err)});
  }
  
  goDetail (item) {
      this.nav.push(DetailPage, {
          id: item.id
      });
  }
  
  openMenu() {
      this.menu.open();
  }
  
  openModal() {
      let pushModal = Modal.create(null);
      this.nav.present(pushModal);
  }
}
