import type { Sueldo } from "@/interfaces/sueldoInterface";
import type { Ingreso } from "@/interfaces/ingresoInterface";
import type { Gasto } from "@/interfaces/gastoInterface";
import type { Presupuesto } from "@/interfaces/presuspuestoInterface";
import type { Categoria } from "@/interfaces/categoriaInterface";
import type { Ahorro } from "@/interfaces/ahorroInterface";


export const sueldo: Sueldo[] = []

export const ingreso: Ingreso[] = []

export const gasto: Gasto[] = []

export const presupuesto: Presupuesto[] = []

export const ahorro: Ahorro[] = []

export const categorias: Categoria[] = [
  // 🧾 GASTOS BÁSICOS
  { id: 1, nombre: 'Comida', tipo: 'gasto' },
  { id: 2, nombre: 'Supermercado', tipo: 'gasto' },
  { id: 3, nombre: 'Transporte', tipo: 'gasto' },
  { id: 4, nombre: 'Combustible', tipo: 'gasto' },
  { id: 5, nombre: 'Servicios (Luz/Agua/Gas)', tipo: 'gasto' },
  { id: 6, nombre: 'Internet / Telefonía', tipo: 'gasto' },
  { id: 7, nombre: 'Alquiler', tipo: 'gasto' },
  { id: 8, nombre: 'Mascotas', tipo: 'gasto' },

  // 🎬 VIDA Y OCIO
  { id: 9, nombre: 'Ocio', tipo: 'gasto' },
  { id: 10, nombre: 'Restaurantes', tipo: 'gasto' },
  { id: 11, nombre: 'Ropa', tipo: 'gasto' },
  { id: 12, nombre: 'Regalos', tipo: 'gasto' },

  // 🧑‍⚕️ SALUD
  { id: 13, nombre: 'Farmacia', tipo: 'gasto' },
  { id: 14, nombre: 'Obra social / Prepaga', tipo: 'gasto' },
  { id: 15, nombre: 'Médico', tipo: 'gasto' },

  // 🛠 HOGAR
  { id: 16, nombre: 'Mantenimiento del hogar', tipo: 'gasto' },
  { id: 17, nombre: 'Electrodomésticos', tipo: 'gasto' },
  { id: 18, nombre: 'Muebles', tipo: 'gasto' },

  // 🚗 VEHÍCULO
  { id: 19, nombre: 'Mecánico', tipo: 'gasto' },
  { id: 20, nombre: 'Seguro del auto', tipo: 'gasto' },

  // 📚 EDUCACIÓN
  { id: 21, nombre: 'Cursos', tipo: 'gasto' },
  { id: 22, nombre: 'Libros', tipo: 'gasto' },
  { id: 23, nombre: 'Educación', tipo: 'gasto' },

  // 💳 FINANZAS
  { id: 24, nombre: 'Tarjetas de crédito', tipo: 'gasto' },
  { id: 25, nombre: 'Préstamos', tipo: 'gasto' },
  { id: 26, nombre: 'Intereses / Comisiones', tipo: 'gasto' },

  // 💼 INGRESOS
  { id: 27, nombre: 'Sueldo', tipo: 'ingreso' },
  { id: 28, nombre: 'Horas extras', tipo: 'ingreso' },
  { id: 29, nombre: 'Venta de productos', tipo: 'ingreso' },
  { id: 30, nombre: 'Servicios / Freelance', tipo: 'ingreso' },
  { id: 31, nombre: 'Regalías', tipo: 'ingreso' },
  { id: 32, nombre: 'Reintegros', tipo: 'ingreso' },
  { id: 33, nombre: 'Otros ingresos', tipo: 'ingreso' },
]



