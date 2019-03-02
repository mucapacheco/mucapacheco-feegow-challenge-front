import React, {Component} from 'react';
import Select from 'react-select';


class Home extends Component {

    constructor(props) {
        super(props);
        this.state = {
            especialidades: [],
        }
    }

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
        }).then((response) => {
            if (response.success !== true) {
                throw Error("Erro ao consultar a api");
            }

            let especialidades = response.content.map((especialidade) => {
                return {value: especialidade.especialidade_id, label: especialidade.nome}
            });

            this.setState({
                especialidades: especialidades
            });

        }).catch(function (error) {
            console.log('Request failed', error)
        });
    }

    render() {
        return (
            <Select options={this.state.especialidades}/>
        );
    }
}

export default Home;