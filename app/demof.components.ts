import {Component, OnInit} from 'angular2/core';
import {Http, Response, Headers, RequestOptions} from 'angular2/http';

@Component({
    selector: 'simple-http',
    template: `
        <h2>Basic Request</h2>
        <button type="button" (click)="makeRequest()">Request Get</button>
        <button type="button" (click)="makePost()">Request Post</button>
        <button type="button" (click)="makeHeaders()">Request Header</button>
        <div *ngIf="loading">loading...</div>
        <pre>{{data | json}}</pre>  <!--把data这个object转成json格式-->
       <!-- <div>{{data.title}}</div>-->
    `
})
export class SimpleHTTPComponent implements OnInit {
    ngOnInit(): void {
       console.log("init........")
    }
    data: Object;
    loading: boolean;
    constructor(public http:Http) {  //这里设置public会自动注入到this.http中。
       // this.data={'title':''};
    }
    makeRequest(): void {
        this.loading = true;
        this.http.get('http://jsonplaceholder.typicode.com/posts/1')
            .subscribe((res: Response) => {
                this.data = res.json();
                console.log(this.data);
                this.loading = false;
            });

    }

    makePost(): void {
        this.loading = true;
        this.http.post(
                "http://localhost:8080/gem-rest/rest/callCenterServiceRs/getDropList",
                JSON.stringify({
                    body: "bar",
                    title: "foo",
                    userId: 1
                })
            )
            .subscribe((res: Response) => {
                this.data = res.json();
                this.loading = false;
            });
    }

    makeHeaders(): void {
        let headers: Headers = new Headers();
        headers.append('X-API-TOKEN', 'ng-book');
        let opts: RequestOptions = new RequestOptions();
        opts.headers = headers;
        this.http.get('http://jsonplaceholder.typicode.com/posts/1', opts)
            .subscribe((res: Response) => {
                this.data = res.json();
                this.loading = false;
            });
    }
}