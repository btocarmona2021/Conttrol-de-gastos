import type { Sueldo } from '@/interfaces/sueldoInterface'
import { defineStore } from 'pinia'
import { ref } from 'vue'

import { sueldo } from '@/db/fakeDb'

export const useSueldoStore = defineStore('sueldoStore', () => {
  const sueldos = ref<Sueldo[]>([])
  const sueldoEnDb = ref<Sueldo | null>(null)

  const obtenersueldos = () => {
    sueldos.value = sueldo
  }

  const obtenersueldo = (id: number) => {
    sueldoEnDb.value = sueldo.find((s) => s.id === id) || null
  }

  const crearSueldo = (sueldoNuevo: Sueldo) => {
    sueldos.value.push(sueldoNuevo)
  }

  const modificarSueldo = (sueldoActualizado: Sueldo) => {
    const index = sueldos.value.findIndex((s) => s.id === sueldoActualizado.id)

    if (index !== -1) {
      sueldos.value[index] = sueldoActualizado
    }
  }

  const eliminarSueldo = (id: number) => {
    sueldos.value = sueldos.value.filter((s) => s.id !== id)
  }

  return {
    sueldos,
    sueldoEnDb,
    obtenersueldos,
    obtenersueldo,
    crearSueldo,
    modificarSueldo,
    eliminarSueldo,
  }
})
