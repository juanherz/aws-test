import { sql_query } from "../../../lib/db";

const handler = async (req, res) => {
    try{
        const {cuenta} = req.query
        const results = await sql_query(`
            SELECT * FROM corridas_robot, clientes WHERE corridas_robot.cuenta = clientes.cuenta AND corridas_robot.cuenta = ${cuenta}
        `)
        return res.json(results)
    }catch(e){
        res.status(500).json({message:e.message})
    }
}

export default handler;