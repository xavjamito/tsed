import {Configuration} from "@tsed/platform-http";
import {CalendarCtrl} from "./controllers/CalendarCtrl";

@Configuration({
  mount: {
    // Using manual import
    "/rest": [CalendarCtrl]
  }
})
export class Server {}
