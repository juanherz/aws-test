import { useRouter } from 'next/router'
import { useState, useEffect } from 'react'
import Navbar from '../../components/navbar/Navbar'
import axios from 'axios'
import { CompleteTable4 } from '../../components/table/CompleteTable4'

function DetallesCliente() {
    // const router = useRouter()
    
    // const {clientesId} = router.query
    // const [clientes, setClientes] = useState([])
    // useEffect(() => {
    //     axios.get(`../api/clientes/id/${clientesId}`)
    //         .then(res => {
    //         setClientes(res.data)
    //         })
    //         .catch(err => {
    //         console.log(err)
    //         })
    // }, [])

    // console.log(clientes)


    return (
        <>
            <div>
                <Navbar />
                <CompleteTable4 />
                        
            </div>
        </>
    )
}

export default DetallesCliente
