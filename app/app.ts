import {RouteConfig, Location} from 'angular2/router';
import {App, IonicApp, Platform, ActionSheet, MenuController} from 'ionic-angular';
import {Page, Config, Events} from 'ionic-angular';

// Change the import if you want to change the first page, for example:
// import { ImagePage as rootPage } from './pages/cards/cards';
import { ListPage as rootPage } from './pages/list/list';


// Import all of the pages in order to add them to the RouteConfig
import { ListPage } from './pages/list/list';
import { DetailPage } from './pages/detail/detail';

const ROUTES = [
  { path: '/list', component: ListPage, useAsDefault: true },
  { path: '/detail', component: DetailPage }
];

@App({
  templateUrl: './build/app.html'
})
@RouteConfig(ROUTES)

class DemoApp {
  isProductionMode: boolean = false;
  rootPage: any;
  nextPage: any;
  currentPlatform: string = "ios";
  routes = ROUTES;

  constructor(
    public app: IonicApp,
    public platform: Platform,
    public config: Config,
    public menu: MenuController,
    public location: Location) {

    if (platform.is("android"))
      this.currentPlatform = "android";
    else if (platform.is("windows"))
      this.currentPlatform = "windows";

    if (platform.query('production') == 'true') {
      this.isProductionMode = true;

      platform.ready().then(() => {
        
      });
    }
  }

  openPage(page) {
  }

}
