import { useParams } from "react-router-dom"
//useParams es un hook que nos permite acceder a los parametros de las URL y almacenar ese dato

//ejemplo: https://www.cellshop.com/sillas/10
//yo puedo tomar ese 10 y almacenarlo

const Sillas = () => {

    const {id} = useParams()
    console.log(id)
  return (
    
    <div>
        <h2>Seccion Sillas Gamer</h2>
        <p>ID Producto: {id}</p>
    </div>
  )
}

export default Sillas