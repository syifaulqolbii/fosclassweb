const {QueryTypes} = require('sequelize');
const sequelize = require('../database/db')

function Tambahbarangbaru(id, merk,jml,harga,result){
    sequelize.query(
        'INSERT INTO barang (id, nama, stock, harga) VALUES ($id, $merk, $jumlah, $harga)',
        {
            bind: { id:id, merk:merk, jumlah:jml, harga:harga },
            type: QueryTypes.INSERT
        }
    ).then(result)
}

function GetDataBarang(result) {
    sequelize.query(
        "SELECT * FROM barang",
        {type: QueryTypes.SELECT}
    ).then(result)
}

function HapusBarangById(id, result) {
    sequelize.query(
        "DELETE FROM barang WHERE id = $id",
        {
            bind: { id:id },
            type: QueryTypes.DELETE
        }
    ).then(result)
}

function UpdateDataById(id, merk)

module.exports = {
    Tambahbarangbaru,
    GetDataBarang,
    HapusBarangById
}