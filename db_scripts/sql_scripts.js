
import db from '../db_connections/cnnConfig.js'

async function find() {
    const data = await db(`Select * From [bi-Usuarios]`)
    return data
}

export default find