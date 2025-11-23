const db = require('./db')
const helper = require('../helper')
const config = require('../config')

async function insertData(req, res) {
    const { nombre, marca, tipo, precio } = req.query;
    const result = await db.query(`insert into coleccion (nombre, marca, tipo, precio) values ('${nombre}', '${marca}', '${tipo}', '${precio}')`)
    return result.affectedRows
}

async function getData(req, res) {
    const rows = await db.query(`select id, nombre, marca, tipo, precio from coleccion`)
    const data = helper.emptyOrRows(rows)
    return {
        data
    }
}

async function deleteData(req, res) {
    const id = req.query.id
    const result = await db.query(`delete from coleccion where id = '${id}'`)
    return result.affectedRows
}

module.exports = {
    getData,
    insertData,
    deleteData
}