import { presupuesto } from '@/db/fakeDb'
import type { Presupuesto } from '@/interfaces/presuspuestoInterface'
import { defineStore } from 'pinia'
import { ref } from 'vue'

export const usePresupuestoStore = defineStore('presuspuestoStore', () => {
  const presuspuestosEnDb = ref<Presupuesto[]>([])
  const presupuestoEnDb = ref<Presupuesto | null>(null)

  const obtenerPresupuestos = () => {
    presuspuestosEnDb.value = presupuesto
  }

  const obtenerPresupuesto = (id: number) => {
    presupuestoEnDb.value = presuspuestosEnDb.value.find((p) => p.id === id) || null
  }

  const crearPresupuesto = (nuevoPresupuesto: Presupuesto) => {
    presuspuestosEnDb.value.push(nuevoPresupuesto)
  }

  const modificarPresupuesto = (presupuestoMod: Presupuesto) => {
    const index = presuspuestosEnDb.value.findIndex((p) => p.id === presupuestoMod.id)
    presuspuestosEnDb.value[index] = presupuestoMod
  }

  const eliminarPresuspuesto = (id:number) => {
    presuspuestosEnDb.value = presuspuestosEnDb.value.filter(p=>p.id !== id)
  }

  return {
    presuspuestosEnDb,
    presupuestoEnDb,
    obtenerPresupuestos,
    obtenerPresupuesto,
    crearPresupuesto,
    modificarPresupuesto,
    eliminarPresuspuesto,
  }
})
