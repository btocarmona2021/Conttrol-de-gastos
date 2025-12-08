import { ahorro } from '@/db/fakeDb'
import type { Ahorro } from '@/interfaces/ahorroInterface'
import { defineStore } from 'pinia'
import { ref } from 'vue'

export const useAhorroStore = defineStore('ahorroStore', () => {
  const ahorros = ref<Ahorro[]>([])
  const ahorroEnDB = ref<Ahorro | null>(null)

  const obtenerAhorros = () => {
    ahorros.value = ahorro
  }

  const obtenerAhorro = (id: number) => {
    ahorroEnDB.value = ahorros.value.find((a) => a.id === id) || null
  }

  const crearAhorro = (nuevoAhorro: Ahorro) => {
    ahorros.value.push(nuevoAhorro)
  }

  const modificarAhorro = (ahorroMod : Ahorro) => {
    const index = ahorros.value.findIndex(a => a.id == ahorroMod.id)
    ahorros.value[index] = ahorroMod
  }

  const eliminarAhorro = (id:number) => {
    ahorros.value = ahorros.value.filter(a=>a.id !== id)
  }
 
  return {
    ahorros,
    ahorroEnDB,
    obtenerAhorros,
    obtenerAhorro,
    crearAhorro,
    modificarAhorro,
    eliminarAhorro,
    }
})
