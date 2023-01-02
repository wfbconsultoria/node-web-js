import sql from 'mssql'
const client = new sql.ConnectionPool(
{
    server: 'web.database.windows.net',
    database: 'CSL_2023',
    user: 'db',
    port: 1433,
    password: '@Mepm2412',
    options: { encrypt: true, trustServerCertificate: false }
})

await client.connect();

async function db(queryString, values) {
   return await client.query(queryString)
}
export default db