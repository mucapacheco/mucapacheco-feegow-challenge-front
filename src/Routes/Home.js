import React, {Component} from 'react';
import Select from 'react-select';
import CardProfissional from "../Componentes/CardProfissional";
import Especialidades from "../Services/Api/Especialidades";
import Profissionais from "../Services/Api/Profissionais";
import App from "../App";


class Home extends Component {

    constructor(props) {
        super(props);
        this.changeEspecialidades = this.changeEspecialidades.bind(this);
        this.state = {
            especialidades: [],
            especialidadeSelecionada: null,
            profissionais: [],
            loading: false
        }
    }

    componentDidMount() {
        Especialidades.getEspecialidades().then((response) => {
            let especialidades = response.map((especialidade) => {
                return {value: especialidade.especialidade_id, label: especialidade.nome}
            });
            this.setState({
                especialidades: especialidades
            });
        }).catch(function (error) {
            App.ToastsStore.warning("Não foi possível listar as especialidades. :(");
        });
    }


    changeEspecialidades(arg) {
        this.setState({
            profissionais: [],
            especialidadeSelecionada: arg,
        });
    }

    listarProfissionais() {

        if (!this.state.especialidadeSelecionada) {
            App.ToastsStore.warning("Favor selecionar a especialidade");
            return;
        }

        this.setState({
            profissionais: [],
            loading: true,
        });

        Profissionais.getProfissionais(this.state.especialidadeSelecionada.value).then((profissionais) => {
            this.setState({
                profissionais: profissionais,
                loading: false,
            });
        }).catch(function (error) {
            App.ToastsStore.warning("Não foi possível listar os profissionais. :(");
        });
    }

    render() {
        return (
            <div>


                <div>
                    <div className="row">
                        <div className="col">
                            <div className="input-group mb-3">
                                <div className="input-group-prepend">
                                    <label className="input-group-text" htmlFor="inputGroupSelect01">Consulta
                                        de </label>
                                </div>
                                <div className="custom-select">
                                    <Select options={this.state.especialidades} onChange={this.changeEspecialidades}
                                            placeholder="Selecione as Especialidades"/>
                                </div>
                                <div className="input-group-append">
                                    <button className="btn btn-success" onClick={() => this.listarProfissionais()}
                                            type="button">Agendar
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div hidden={!this.state.loading} className="text-center" >
                        <div className="spinner-border text-primary" role="status">
                            <span className="sr-only">Loading...</span>
                        </div>
                    </div>
                    <div className="row" hidden={this.state.loading}>
                        {this.state.profissionais.map((profissional, key) =>
                            <div className="col-md-4" key={key}>
                                <CardProfissional agendar={true} profissional={profissional}
                                                  especialidadeSelecionada={this.state.especialidadeSelecionada}/>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        );
    }
}

export default Home;