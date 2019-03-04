import React, {Component} from 'react';
import Especialidades from "../Services/Api/Especialidades";
import Profissionais from "../Services/Api/Profissionais";
import CardProfissional from "../Componentes/CardProfissional";
import Origens from "../Services/Api/Origens";
import Select from "react-select";
import CPF from 'cpf-check';
import App from "../App";
import Agendamento from "../Services/Api/Agendamento";

class Cadastro extends Component {

    forms = {
        nome: React.createRef(),
        cpf: React.createRef(),
        comoconheceu: React.createRef(),
        datanascimento: React.createRef(),
    }

    constructor(props) {
        super(props);
        this.changeOrigens = this.changeOrigens.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.state = {
            especialidadeSelecionada: null,
            profissional: null
        }
    }


    async componentDidMount() {
        let parametros = this.props.match.params;

        Especialidades.getEspecialidade(Number(parametros.especialidade))
            .then((especialidade) => {
                this.setState({
                    especialidadeSelecionada: {
                        label: especialidade.nome,
                        value: especialidade.especialidade_id,
                    },
                });
            }).catch(function (error) {
            App.ToastsStore.warning("Não foi possível selecionar a especialidade. :(");
        });

        Profissionais.getProfissional(Number(parametros.especialidade), Number(parametros.profissional))
            .then(async (professional) => {
                this.setState({profissional: professional});
            }).catch(function (error) {
            App.ToastsStore.warning("Não foi possível selecionar o profissional. :(");
        });

        ;

        Origens.getOrigens().then(async (origens) => {
            this.setState({
                origens: origens.map((origem) => {
                    return {
                        label: origem.nome_origem,
                        value: origem.origem_id
                    };
                })
            });
        });
    }

    changeOrigens(origemSelecionada) {
        this.setState({
            origemSelecionada: origemSelecionada
        });
    }

    handleSubmit(event) {
        event.preventDefault();
        let formData = {
            specialty_id: Number(this.props.match.params.especialidade),
            professional_id: Number(this.props.match.params.profissional),
            name: this.forms.nome.current.value,
            cpf: this.forms.cpf.current.value,
            source_id: this.state.origemSelecionada && this.state.origemSelecionada.value
        };

        if (!formData.source_id) {
            App.ToastsStore.warning("Favor selecionar a origem");
            return;
        }

        if (!CPF.validate(this.forms.cpf.current.value).valid) {
            App.ToastsStore.warning("Informa um cpf válido");
            return;
        }

        Agendamento.agendar(formData).then(() => {
            App.ToastsStore.success("Agendamento realizado com sucesso.");
        });

        return false;
    }

    render(arg) {
        return (
            <div>
                <h5>Preencha seu dados</h5>
                <div className="row">
                    <div className="col-md-4">
                        <label>Profissional Selecionado</label>
                        {this.state.profissional && this.state.especialidadeSelecionada &&
                        <CardProfissional profissional={this.state.profissional}
                                          especialidadeSelecionada={this.state.especialidadeSelecionada}/>}
                    </div>
                    <div className="col-md-8">

                        <form onSubmit={this.handleSubmit}>
                            <div className="row">
                                <div className="col-md-8">
                                    <div className="form-group">
                                        <label>Nome Completo</label>
                                        <input ref={this.forms.nome} required className="form-control"
                                               placeholder="Nome Completo"/>
                                    </div>
                                </div>
                                <div className="col-md-4">
                                    <div className="form-group">
                                        <label>Data de Nascimento</label>
                                        <input type="date" ref={this.forms.datanascimento} required
                                               className="form-control" placeholder="Data de Nascimento"/>
                                    </div>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-md-8">
                                    <div className="form-group">
                                        <label>Como Conheceu?</label>
                                        <Select ref={this.forms.comoconheceu} options={this.state.origens}
                                                onChange={this.changeOrigens}
                                                placeholder="Como Conheceu?"/>
                                    </div>
                                </div>
                                <div className="col-md-4">
                                    <div className="form-group">
                                        <label>CPF</label>
                                        <input required ref={this.forms.cpf} className="form-control"
                                               placeholder="CPF"/>
                                    </div>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-md-12 text-right">
                                    <button type="submit" className="btn btn-success btn-sm">Agendar</button>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        );
    }
}

export default Cadastro;