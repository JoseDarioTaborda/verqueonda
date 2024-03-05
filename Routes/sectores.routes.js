
import { Router } from "express";
import { readFile, writeFile  } from 'fs/promises'
//import {get_user_byId} from " ../utils/mozo.js"



const router = Router()


const fileSales = await readFile('./Datos/sectores.json', 'utf-8') 
const seleccion_sectores = JSON.parse(fileSales) 

router.get('/:id', (req, res)=>{
    const id = req.params.id
    //let aux_name=''

    try{
        const result = seleccion_sectores.filter(e => e.id == id)
    
        const array = result.map(e=>{
        //aux_name = get_user_byId(e.nombre)
        //aux_name = aux_name.nombre

           return {
               id: e.id,
               Nombre_sector:e.nombre,
                MesasOcupadas: e.mesasOcupadas,
                Nombre_mozos: e.mozos
            }
        }) 
    if(array){
        res.status(200).json(array)
    }else{
        res.status(400).json(`No hay ventas entre ${id}`)
    }
}catch(error){
    res.send(500).json('Error al buscar...')
}
})


export default router
