// const {Tambahbarangbaru, GetDataBarang, HapusBarangById} = require('../models/Barang')  

// function TambahBarangView(req, res) {
//     res.render('tambahbarang.ejs')
// }

// function TambahBarang(req, res) {
//     console.log(req.body);
//     let data = req.body
//     Tambahbarangbaru(
//         Date.now(),
//         data['merk-hp'],
//         data['jml-stok'],
//         data['harga'],
//         function() {
//             res.redirect('/databarang')
//         }
//     )

// }

// // function UpdateBarang(req,res){
// //     console.log(req.params.id);
// //     UpdateBarangById(req.params.id, function () {
// //         res.redirect('/databarang')
// //     })
// // }

// function Databarang(req, res) {

//     GetDataBarang(function(data){
//         console.table(data)
//         res.render('databarang.ejs',{data: data})
//     })
// }

// function HapusBarang(req, res) {
//     console.log(req.params.id);
//     HapusBarangById(req.params.id, function(){
//         res.redirect('/databarang')
//     })
// }

// module.exports = {
//     TambahBarangView,
//     TambahBarang,
//     Databarang,
//     HapusBarang,
//     // UpdateBarang
// }