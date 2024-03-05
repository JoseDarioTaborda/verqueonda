import { readFile  } from 'fs/promises' 

const fileUsers = await readFile('./data/sectores.json', 'utf-8') 
const userData = JSON.parse(fileUsers) 

export const get_user_byId = (id)=>{
    return userData.find(e => e.id === id)
}
//const mozos=userData.mozos
//const nombre_mozos= mozos.forEach(mozo => {
  //  return(`Nombre del mozo: ${mozo.nombre}`);
  //})
