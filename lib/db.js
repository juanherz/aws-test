import mysql from 'serverless-mysql'

export const db = mysql({
    config: {
        host: 'database-dht-dashboard.cpvn3krybspm.us-east-2.rds.amazonaws.com',
        database: 'pruebas_405',
        user: 'admin',
        password: 'avz6NBSjqeQZXeemdtBn',
    },
})

export async function sql_query(query_string, values = []) {
    try {
        const results = await db.query(query_string, values)
        await db.end()
        return results
    } catch(e) {
        throw Error(e.message)
    }
}

//sql_query('SELECT * from employees)