import axios from 'axios'

export const fetchDigimons = async() => {
    try{
        const { data } = await axios.get('https://digi-api.com/api/v1/digimon');

        if(!data) throw new Error('Error al capturar los datos de los digimosn')
            
        return data
    }catch(error){
        throw new Error('Error al capturar los digimons', error)
    }
}