import { Component } from '@angular/core';
import {
  Injectable
} from '@angular/core';
import {
  Http,
  Response
} from '@angular/http';
import {
  Headers,
  RequestOptions,
  RequestMethod,
  Request
} from '@angular/http';
import {
  Observable
} from 'rxjs/Observable';
// Statics
import 'rxjs/add/observable/throw';

// Operators
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/distinctUntilChanged';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toPromise';

import {
  Settings
} from './../../app/app.settings';
import { Helpers } from './../../app/helper';

@Component({
  selector: 'another',
  template: '<Tree [nodes]="nodes"></Tree>',
  providers: [serviceMenu]
})
export class AnotherPage {
  private nodes: any;
  constructor(private service: serviceMenu) {
    this.service.getMenu().subscribe(data => {
      this.nodes = data;
      console.log(data);
    })
  }
}

@Injectable()
class serviceMenu {
  constructor(private http: Http) {

  }

  getMenu(): Observable<Object> {
    return this.http.get('http://localhost:8000/api/menu/').map(Helpers.extractData)
  }

}

