import type { Ingreso } from '@/interfaces/ingresoInterface'
import { defineStore } from 'pinia'
import { ref } from 'vue'
import { ingreso } from '@/db/fakeDb'

export const useIngresoStore = defineStore('ingresoStore', () => {
  const ingresos = ref<Ingreso[]>([])
  const ingresoenDB = ref<Ingreso | null>(null)

  const obtenerIngresos = () => {
    ingresos.value = ingreso
  }

  const obtenerIngreso = (id: number) => {
    ingresoenDB.value = ingresos.value.find((i) => i.id === id) || null
  }

  const crearIngreso = (nuevoIngreso: Ingreso) => {
    ingresos.value.push(nuevoIngreso)
  }

  const modificarIngreso = (ingresoMod: Ingreso) => {
    const index = ingresos.value.findIndex((i) => i.id === ingresoMod.id)

    if (index !== -1) {
      ingresos.value[index] = ingresoMod
    }
  }

  const eliminarIngreso = (id: number) => {
    ingresos.value = ingresos.value.filter((i) => {
      return i.id !== id
    })
  }

  return {
    ingresos,
    ingresoenDB,
    obtenerIngresos,
    obtenerIngreso,
    crearIngreso,
    modificarIngreso,
    eliminarIngreso,
  }
})
