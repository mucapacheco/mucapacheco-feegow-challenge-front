import {Component} from 'react';
import BaseApi from "./BaseApi";

class Origens extends BaseApi {
    static getOrigens() {


        let headers = new Headers();
        headers.append("Content-Type", "application/json");
        headers.append("x-access-token", "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJmZWVnb3ciLCJhdWQiOiJwdWJsaWNhcGkiLCJpYXQiOiIxNy0wOC0yMDE4IiwibGljZW5zZUlEIjoiMTA1In0.UnUQPWYchqzASfDpVUVyQY0BBW50tSQQfVilVuvFG38");

        return fetch('http://www.mocky.io/v2/5c7b3f7d2f00006100e59e77', {
            headers: headers
        }).then(function (response) {
            if (!response.ok) {
                throw Error(response.statusText);
            }
            return response.json();
        }).then(function (response) {
            if (response.success !== true) {
                throw Error("Erro ao consultar a api");
            };
            return response.content;
        })
    }
}

export default Origens;