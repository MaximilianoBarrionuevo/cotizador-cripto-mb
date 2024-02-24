import styled from "@emotion/styled"

const Contenedor = styled.div`
    color: #fff;
    font-family: 'Lato', sans-serif;
    display:grid;
    justify-items: center;
    margin-top: 15px;

    @media (min-width: 480px) {
        display: flex;
        align-items: center;
        justify-content: center;
        gap: 1rem;
        margin-top: 30px;
    }
`

const Imagen = styled.img`
    display: block;
    width: 120px

`
const Texto = styled.p `
    font-size: 18px;
    span {
        font-weight: 700;
    }
`

const Precio = styled.p `
    font-size: 24px;
    span {
        font-weight: 700;
    }
`

const Resultado = ({resultado}) => {

    const {PRICE, HIGHDAY, LOWDAY, CHANGEPCT24HOUR, IMAGEURL, LASTUPDATE} = resultado;
  
    return (
    <Contenedor>
        <Imagen src={`https://cryptocompare.com/${IMAGEURL}`} alt="Imagen Cripto" />
        <div>
            <Precio>El precio es de: <span>{PRICE}</span></Precio>
            <Texto>Precio mas alto del dia: <span>{HIGHDAY}</span></Texto>
            <Texto>Precio mas bajo del dia: <span>{LOWDAY}</span></Texto>
            <Texto>Variacion ultimas 24hs: <span>{CHANGEPCT24HOUR}</span></Texto>
            <Texto>Ultima actualizacion: <span>{LASTUPDATE}</span></Texto>
        </div>
    </Contenedor>
  )
}

export default Resultado