import { format } from 'date-fns';

export const COLUMNS3 = [
    {
        Header: 'Id',
        accessor: 'id',
        disableFilters: true,
    },
    {
        Header: 'Cuenta',
        accessor: 'cuenta',
    },
    
    {
        Header: 'Monto Instalación',
        accessor: 'monto_instalacion',
        disableFilters: true,
    },
    {
        Header: 'Monto PL',
        accessor: 'monto_pl',
        disableFilters: true,
    },
    
    {
        Header: 'Monto PP',
        accessor: 'monto_pp',
        disableFilters: true,
    },
    
    {
        Header: 'Último Saldo',
        accessor: 'ultimo_saldo',
        disableFilters: true,
    },
    {
        Header: 'Fecha de modificación',
        accessor: 'date_modified',
        Cell: ({ value }) => { return format(new Date(value), 'dd/MM/yyyy')},
        disableFilters: true,
    }
]

// {
//     Header: 'Fecha de Pago Instalación',
//     accessor: 'fecha_pago_instalacion',
//     Cell: ({ value }) => { return format(new Date(value), 'dd/MM/yyyy')},
//     disableFilters: true,
// },
// {
//     Header: 'Fecha PL',
//     accessor: 'fecha_pl',
//     Cell: ({ value }) => { return format(new Date(value), 'dd/MM/yyyy')},
//     disableFilters: true,
// },
// {
//     Header: 'Fecha PP',
//     accessor: 'fecha_pp',
//     Cell: ({ value }) => { return format(new Date(value), 'dd/MM/yyyy')},
//     disableFilters: true,
// },