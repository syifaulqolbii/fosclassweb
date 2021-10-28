const AnggotaModel = require('../models/Anggota')


function TambahAnggotaView(req, res) {
    res.render('tambahanggota.ejs')
}

function TambahAnggota(req, res) {

    //insert ke database melalui model
    AnggotaModel.TambahAnggotaBaru(
        req.body['nama'],
        req.body['nim'],
        req.body['jurusan'],
        function(){
            res.redirect('/dataanggota')
        }
    )

}

function DataAnggotaView(req, res) {
    AnggotaModel.DataAnggota(function(data){
        res.render('dataanggota.ejs', {anggota: data})
    })    
}

function HapusAnggota(req, res) {
    let idA = req.params.id
    AnggotaModel.DeleteAnggota(idA, function () {
        res.redirect('/dataanggota')
    })
}

module.exports = {TambahAnggotaView, TambahAnggota, DataAnggotaView, HapusAnggota}