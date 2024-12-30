import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";

@Injectable()

export class BooksService
{
    private url = 'https://localhost:44329/api/MagicReads'
    httpOptions = {
        headers: new HttpHeaders({'content-type': 'application/json'})
    }

    constructor(private http:HttpClient){}

    getBook(){
        return this.http.get(this.url, this.httpOptions)
    }
}
