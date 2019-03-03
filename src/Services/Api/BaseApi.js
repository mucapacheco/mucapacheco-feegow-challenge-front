import {Component} from 'react';

class BaseApi extends Component {
    getUrlBase(){
        return 'http://www.mocky.io/v2';
    }

    get(path){
        return fetch(`${this.getUrlBase()}${path}`).then(function (response) {
            if (!response.ok) {
                throw Error(response.statusText);
            }
            return response.json();
        }).then(function (response) {
            if (response.success !== true) {
                throw Error("Erro ao consultar a api");
            };
            return response.content;
        });
    }
}

export default BaseApi;