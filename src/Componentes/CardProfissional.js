import React, {Component} from 'react';
import doctor from './../assets/imgs/doctor.svg';

class CardProfissional extends Component {
    render() {
        let profissional = this.props.profissional;
        return (
            <div className="card" style={{marginBottom: "5px"}}>
                <div className="card-body">
                    <div className="row">
                        <div className="col-5 text-center">
                            <h6 className="card-title">{this.props.especialidadeSelecionada.label}</h6>
                            <div style={{minHeight: "130px"}}>
                                <img src={profissional.foto ? profissional.foto : doctor}
                                     className="rounded-circle m-t-xs img-fluid" alt="Cinque Terre"/>
                            </div>
                        </div>
                        <div className="col-7 text-center">
                            <h5 className="card-subtitle mb-2 text-muted">{profissional.nome}</h5>
                            <div className="card-text" style={{minHeight: "72px"}}>
                                <address>
                                    {profissional.conselho ? `Conselho: ${profissional.conselho}` : ''}<br/>
                                    {profissional.documento_conselho ? `Documento: ${profissional.documento_conselho}` : ''}<br/>
                                    {profissional.uf_conselho ? `Estado do Conselho: ${profissional.uf_conselho.toUpperCase()}` : ''}
                                </address>
                            </div>
                            {
                                this.props.agendar &&
                                <div>
                                    <a href={`/cadastro/${this.props.especialidadeSelecionada.value}/${this.props.profissional.profissional_id}`}
                                       className="btn btn-success btn-sm">Agendar</a>
                                </div>
                            }

                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default CardProfissional;