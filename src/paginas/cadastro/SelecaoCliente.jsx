import { Col, Row } from "react-grid-system"
import { Tipografia } from "../../componentes/Tipografia/Tipografia"
import cliente from './assets/cliente.png'
import freelancer from './assets/freela.png'
import { Link } from '../../componentes/Link/Link.jsx'
import { Link as RouterLink } from "react-router-dom"


const SelecaoCliente = () => {
    return (
        <div style={{ textAlign: "center" }}>
            <Tipografia variante="h1" componente="h1">
                Crie seu cadastro.
            </Tipografia>
            <Tipografia variate="h3" componente="h2">
                Como podemos te ajudar?
            </Tipografia>
            <Row>
                <Col md={6} sm={12}>
                    <RouterLink to='interesses'>
                        <img src={cliente} alt="" />
                        <Tipografia variante="body" componente="body">
                            Sou cliente e preciso de um freela!
                        </Tipografia>
                    </RouterLink>

                </Col>
                <Col md={6} sm={12}>
                    <img src={freelancer} alt="" />
                    <Tipografia variante="body" componente="body">
                        Sou freela e preciso de um cliente!
                    </Tipografia>
                </Col>
            </Row>
            <div >
                <Tipografia variante="body2" componente="body2">
                    Já tem conta?
                </Tipografia>
                <p>
                    <Link variante="secundaria">Faça login!</Link>
                </p>
            </div>
        </div>
    )
}

export default SelecaoCliente