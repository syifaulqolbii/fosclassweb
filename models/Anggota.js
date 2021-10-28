const {QueryTypes} = require('sequelize');
const sequelize = require('../database/db')

function TambahAnggotaBaru(nama, nim, jurusan, result) {
    sequelize.query(
        'INSERT INTO anggota (nama, nim, jurusan) VALUES ($nama, $nim, $jurusan) ',
        {
            bind: {nama :nama, nim: nim, jurusan: jurusan},
            type: QueryTypes.INSERT
        }
    ).then(result)
}

function DataAnggota(result) {
    sequelize.query(
        'SELECT * FROM anggota',
        {
            type: QueryTypes.SELECT
        }
    ).then(result)
}

function DeleteAnggota(id, result) {
    sequelize.query(
        'DELETE FROM anggota WHERE id = $id',
        {
            bind: {id: id},
            type: QueryTypes.DELETE
        }
    ).then(result)
}
module.exports = {
    TambahAnggotaBaru,
    DataAnggota,
    DeleteAnggota
}