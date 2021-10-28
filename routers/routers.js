const routes = require('express').Router()

const Todo = require('../controllers/Todo')
const Home = require('../controllers/Home')
const Time = require('../controllers/Time')
const Biodata = require('../controllers/Biodata')
const Barang = require('../controllers/Barang')
const Anggota = require('../controllers/Anggota')

routes.post('/tambahtodo',Todo.add)

routes.get('/', Home.main)

routes.get('/info',Home.info)

routes.get('/waktu',Time.kirimwaktu)

routes.get('/biodata',Biodata.kirimBiodata)

// routes.get('/tambahbarang',Barang.TambahBarangView)

// routes.post('/tambahbarang', Barang.TambahBarang)

// routes.get('/databarang',Barang.Databarang)

// routes.get('/hapusbarang/:id', Barang.HapusBarang)

// routes.get('/updatebarang/:id', Barang.UpdateBarang)

routes.get('/tambahanggota', Anggota.TambahAnggotaView)

module.exports = routes;
