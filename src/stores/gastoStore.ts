import { type Gasto } from '@/interfaces/gastoInterface'
import { defineStore } from 'pinia'
import { ref } from 'vue'
import { gasto } from '@/db/fakeDb'

export const useGastoStore = defineStore('gastoStore', () => {
  const gastosEnDb = ref<Gasto[]>([])
  const gastoEnDb = ref<Gasto | null>(null)

  const obtenerGastos = () => {

    gastosEnDb.value = gasto
  }

  const obtenerGasto=(id: number){
    const index = gastosEnDb.value.find(c => c.id === id)
  }

  const modificarGasto = (nuevoGasto: Gasto) => {
    const index = gastosEnDb.value.findIndex(g => g.id === nuevoGasto.id)
    gastosEnDb.value[index] = nuevoGasto
  }

  const eliminarGasto = (id:number) => {
    gastosEnDb.value = gastosEnDb.value.filter(c=>c.id !== id )
  }

  return {
    gastosEnDb,
    gastoEnDb,
    obtenerGasto,
    obtenerGastos,
    modificarGasto,
    eliminarGasto
  }
})
