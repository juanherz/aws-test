import { sql_query } from "../../../../lib/db";


const handler = async (req, res) => {
    try{
        const {clientesId} = req.query
        const results = await sql_query(`
            SELECT * FROM clientes WHERE clientes.id = ${clientesId}
        `)
        return res.json(results)
    }catch(e){
        res.status(500).json({message:e.message})
    }
}

export default handler;