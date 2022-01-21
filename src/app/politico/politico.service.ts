import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { Politico } from "./politico";


@Injectable()
export class PoliticoService {
    constructor(private http: HttpClient) { }
    protected UrlServiceV1: string = "https://localhost:5003/api/v1/Consulta/Politico"
    obterPoliticos() : Observable<Politico[]> {
        return this.http.get<Politico[]>(this.UrlServiceV1 + "politicos");
    }
}