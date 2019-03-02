import React, {Component} from 'react';

class Home extends Component {

    componentDidMount() {
        let headers = new Headers();
        headers.append("Content-Type", "application/json");
        headers.append("x-access-token", "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJmZWVnb3ciLCJhdWQiOiJwdWJsaWNhcGkiLCJpYXQiOiIxNy0wOC0yMDE4IiwibGljZW5zZUlEIjoiMTA1In0.UnUQPWYchqzASfDpVUVyQY0BBW50tSQQfVilVuvFG38");

        fetch('http://www.mocky.io/v2/5c7b05982f00006700e59e52', {
            headers: headers
        }).then(function (response) {
            if (!response.ok) {
                throw Error(response.statusText);
            }
            return response.json();
        }).then(function(response) {
            if(response.success === true){
                throw Error("Erro ao consultar a api");
            }

            console.log(response);
        }).catch(function (error) {
            console.log('Request failed', error)
        })
    }

    render() {
        return (
            <div>Home</div>
        );
    }
}

export default Home;