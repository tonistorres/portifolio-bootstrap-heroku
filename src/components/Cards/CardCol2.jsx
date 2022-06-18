import '../Cards/Card.css';
import '../Cards/MQImg.css';
import '../Cards/MQYoutube.css'
import '../Cards/MQHabilidades.css'

function CardCol2({ project, img, linkedin, youtube, gitHub, arrHab }) {
    return (
        <div className="card ml-2 mt-2 card-main-person">
            <div className="row">
                <div className="col-12 ">
                    <div className="row">
                        <div className="col-12">
                            <img
                                src={img}
                                alt="Logo Projeto"
                                className="
                         img-fluid
                         img-rounded 
                         mx-auto
                         d-block 
                         img-measurements
                         media-300-350-img
                         media-351-399-img
                         media-400-450-img
                         media-451-499-img
                         media-540-561-img
                         media-562-599-img
                         media-600-629-img
                         media-630-650-img 
                         media-681-767-img
                         media-768-901-img
                         media-902-991-img
                         media-992-1112-img
                         media-1113-1199-img
                         media-1200-1241-img
                         media-1242-1393-img
                         media-1394-1563-img
                         media-1564-1707-img
                         media-1708-1920-img
                         mt-3"
                            />
                            <div className="container-fluid d-flex  justify-content-center align-items-center mt-3">
                                <iframe
                                    className='
                                youtube-measurements
                                mediaY-531-599-img
                                mediaY-571-599-img
                                mediaY-600-715-img
                                mediaY-716-767-img
                                mediaY-768-1028-img
                                mediaY-1029-1100-img
                                mediaY-1111-1920-img
                                '
                                    data-testid="video"
                                    src={youtube}
                                    title="YouTube video player"
                                />
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-12">
                    <div className="card-body d-flex flex-column justify-content-center align-items-center">
                        <div
                            className='
                    list-group-size
                    mediaH-531-599-img
                    mediaH-571-599-img
                    mediaH-600-715-img
                    mediaH-716-767-img
                    mediaH-768-1028-img
                    mediaH-1029-1920-img
                    '

                        >
                            <div >
                                <span class="list-group-item active bg-dark border-dark h4">{project} Habilidades:</span>
                                {
                                    arrHab.map((item, index) => (
                                        <span class="list-group-item mb-2 mt-2" key={index}>{item}</span>
                                    ))
                                }
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-12 w-75">
                    <div className='container-fluid bg-dark d-flex flex-row justify-content-around align-items-center p-2'>
                        <a href={gitHub} class="btn btn-light" type="button" target={"_blank"}>GitHub</a>
                        <a href={linkedin} class="btn btn-light" type="button" target={"_blank"}>Linkedin</a>
                    </div>

                </div>
            </div>
        </div>
    );
}

export default CardCol2;