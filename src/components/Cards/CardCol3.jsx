import '../Cards/Card.css'

function CardProjects({img,linkYoutube,linkLikedin, project}) {
    return (
        <div className="card ml-2 mt-2 card-main-person">
            <div className="row">
                <div className="col-6">
                    <div className="row">
                        <div className="col-12">
                            <div className="container-fluid">
                                <img src={img} alt="Foto Projeto TrybeTunes" className="card-image img-thumbnail mt-4 ml-1" />
                            </div>

                            <div className="container-fluid mt-2">
                                <iframe
                                    data-testid="video"
                                    width="255"
                                    height="225"
                                    src={linkYoutube}
                                    title="YouTube video player"
                                />
                            </div>
                        
                        </div>

                    </div>
                </div>
                <div className="col-6">
                    <div className="card-body d-flex flex-column justify-content-center align-items-center mt-3">
                        <h5 className="card-title">{project}</h5>
                        <ul class="list-group">
                            <li class="list-group-item active tamanho-font-habilidade">Habilidades Desenvolvidas:</li>
                            <li class="list-group-item">Executar uma requisição e consumir dados vindos de uma API;</li>
                            <li class="list-group-item">Utilizar os ciclos de vida de um componente React;</li>
                            <li class="list-group-item">Utilizar a função setState de forma a garantir que um determinado código só é executado após o estado ser atualizado;</li>
                            <li class="list-group-item">Utilizar o componente BrowserRouter corretamente;</li>
                            <li class="list-group-item">Criar rotas, mapeando o caminho da URL com o componente correspondente, via Route;</li>
                            <li class="list-group-item">Utilizar o Switch do React Router;</li>
                            <li class="list-group-item">Usar o componente Redirect pra redirecionar para uma rota específica;</li>
                            <li class="list-group-item"> Criar links de navegação na aplicação com o componente Link;</li>
                        </ul>
                    </div>
                    <div className="container d-flex flex-row justify-content-center mb-3 bg-primary w-75 ">
                                <a href={linkLikedin} class="btn btn-primary btn-lg active" role="button" aria-pressed="true" target={"_blank"}>Publicação Linkedin</a>
                            </div>

                </div>
            </div>
        </div>
    );
}

export default CardProjects;