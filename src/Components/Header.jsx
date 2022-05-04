import image from '../img/Logo.svg';
import {Col, Row} from 'react-bootstrap'


export const Header = () => {

    let dataHeader = [
        {name: "Home", url:"#home"},
        {name: "¿Quiénes somos?", url:"#quienes-somos"},
        {name: "Trabajamos con", url:"#trabajamos"},
        {name: "Nuestro equipo", url:"#crew"},
    ]
    
    return(
        <header>
            <Row className='landing-header row align-items-center'>
                <Col lg='2'>
                    <img src={image} alt='Logo Softopic Paradise' className='img' />
                </Col>
                <Col lg='6'>
                    <Row>
                        {
                            dataHeader.map((item, index) => (
                                <Col key={index} className='d-flex justify-content-center'>
                                    <a href={item.url} className='link u-text--white u-text-link'>
                                        {item.name}
                                    </a>
                                </Col>
                            ))
                        }
                    </Row>
                </Col>
            </Row>
        </header>
    )
}