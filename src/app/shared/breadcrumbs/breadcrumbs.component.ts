import { Router, ActivationEnd } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { filter, map } from 'rxjs/operators';
import { Title, Meta, MetaDefinition } from '@angular/platform-browser';

@Component({
  selector: 'app-breadcrumbs',
  templateUrl: './breadcrumbs.component.html',
  styleUrls: ['./breadcrumbs.component.scss']
})
export class BreadcrumbsComponent implements OnInit {

  numero: number;
  public title: string;
  constructor(private router: Router,
    private _title: Title,
    private meta: Meta) {
      this.numero = 0;
    this.getDataRoute()
  }

  ngOnInit() {
  }
 
  getDataRoute() {

    this.router.events.pipe(

      filter(evento => evento instanceof ActivationEnd),
      filter((evento: ActivationEnd) => evento.snapshot.firstChild === null),
      map((evento: ActivationEnd) => evento.snapshot.data))
      .subscribe(data => {
      this.title = data.titulo
        this._title.setTitle(this.title);
        const metaTag: MetaDefinition = {
          name:'description',
          content: this.title
          
        }
        this.meta.updateTag(metaTag)
      })
  }
}
