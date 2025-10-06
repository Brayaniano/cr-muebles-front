import { Component } from '@angular/core';
import { CommonModule, CurrencyPipe, DatePipe } from '@angular/common';

interface Producto {
  nombre: string;
  categoria: string;
  precio: number;
  stock: number;
  activo: boolean;
}

interface Cliente {
  nombre: string;
  email: string;
  telefono: string;
  fechaRegistro: Date;
  activo: boolean;
}

interface Cotizacion {
  id: string;
  cliente: string;
  productos: number;
  total: number;
  fecha: Date;
  estado: string;
}

@Component({
  selector: 'app-home',
  imports: [    CommonModule, 
    CurrencyPipe, 
    DatePipe],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {
  ultimosProductos: Producto[] = [
    {
      nombre: 'Silla Ejecutiva Ergonómica',
      categoria: 'Oficina',
      precio: 299.99,
      stock: 15,
      activo: true
    },
    {
      nombre: 'Mesa de Centro Moderna',
      categoria: 'Living',
      precio: 450.00,
      stock: 8,
      activo: true
    },
    {
      nombre: 'Sofá Seccional 3 Plazas',
      categoria: 'Living',
      precio: 1200.00,
      stock: 3,
      activo: true
    },
    {
      nombre: 'Escritorio de Roble',
      categoria: 'Oficina',
      precio: 320.50,
      stock: 12,
      activo: true
    },
    {
      nombre: 'Lámpara de Pie Decorativa',
      categoria: 'Iluminación',
      precio: 89.99,
      stock: 0,
      activo: false
    }
  ];

  ultimosClientes: Cliente[] = [
    {
      nombre: 'María González',
      email: 'maria.gonzalez@email.com',
      telefono: '+1 234 567 890',
      fechaRegistro: new Date('2024-01-15'),
      activo: true
    },
    {
      nombre: 'Carlos Rodríguez',
      email: 'c.rodriguez@empresa.com',
      telefono: '+1 234 567 891',
      fechaRegistro: new Date('2024-01-14'),
      activo: true
    },
    {
      nombre: 'Ana Martínez',
      email: 'ana.martinez@outlook.com',
      telefono: '+1 234 567 892',
      fechaRegistro: new Date('2024-01-13'),
      activo: true
    },
    {
      nombre: 'Juan Pérez',
      email: 'juan.perez@gmail.com',
      telefono: '+1 234 567 893',
      fechaRegistro: new Date('2024-01-12'),
      activo: false
    },
    {
      nombre: 'Laura Sánchez',
      email: 'l.sanchez@compania.com',
      telefono: '+1 234 567 894',
      fechaRegistro: new Date('2024-01-11'),
      activo: true
    }
  ];

  ultimasCotizaciones: Cotizacion[] = [
    {
      id: 'COT-001',
      cliente: 'María González',
      productos: 3,
      total: 1850.00,
      fecha: new Date('2024-01-15'),
      estado: 'aprobado'
    },
    {
      id: 'COT-002',
      cliente: 'Empresa XYZ',
      productos: 5,
      total: 3200.50,
      fecha: new Date('2024-01-14'),
      estado: 'pendiente'
    },
    {
      id: 'COT-003',
      cliente: 'Carlos Rodríguez',
      productos: 2,
      total: 750.00,
      fecha: new Date('2024-01-14'),
      estado: 'aprobado'
    },
    {
      id: 'COT-004',
      cliente: 'Ana Martínez',
      productos: 4,
      total: 2100.00,
      fecha: new Date('2024-01-13'),
      estado: 'rechazado'
    },
    {
      id: 'COT-005',
      cliente: 'Juan Pérez',
      productos: 1,
      total: 450.00,
      fecha: new Date('2024-01-12'),
      estado: 'pendiente'
    }
  ];
}
