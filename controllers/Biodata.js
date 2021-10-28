function kirimBiodata(req,res) {
    res.render('biodata.ejs',{Nama:'Syifaul Qolbi',NIM:'L200200141',prodi:'Informatika',univ:'UMS'})
}

module.exports = {kirimBiodata}