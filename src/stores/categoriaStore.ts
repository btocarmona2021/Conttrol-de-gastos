import {type  Categoria } from '@/interfaces/categoriaInterface'
import { defineStore } from 'pinia'
import { ref } from 'vue'
import { categorias } from '@/db/fakeDb'

export const useCategoriaStore = defineStore('categoriaStore', () => {
  const categoriasEnDb = ref<Categoria[]>([])
  const categoriaEnDb = ref<Categoria | null>(null)

  const obtenerCategorias = () => {

    categoriasEnDb.value = categorias
  }

  const obtenerCategoria=(id: number){
    const index = categoriasEnDb.value.find(c => c.id === id)
  }

  const modificarCategoria = (nuevaCategoria: Categoria) => {
    const index = categoriasEnDb.value.findIndex(c => c.id === nuevaCategoria.id)
    categoriasEnDb.value[index] = nuevaCategoria
  }

  const eliminarCategoria = (id:number) => {
    categoriasEnDb.value = categoriasEnDb.value.filter(c=>c.id !== id )
  }

  return {
    categorias,
    categoriaEnDb,
    obtenerCategorias,
    obtenerCategoria,
    modificarCategoria,
    eliminarCategoria,
  }
})
