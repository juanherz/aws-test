import { format } from 'date-fns';

export const COLUMNS2 = [
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
        Header: 'Nombre',
        accessor: 'nombre',
    },
    {
        Header: 'Teléfono 1',
        accessor: 'telefono1',
        disableFilters: true,
    },
    {
        Header: 'Teléfono 2',
        accessor: 'telefono2',
        disableFilters: true,
    },
    {
        Header: 'Teléfono 3',
        accessor: 'telefono3',
        disableFilters: true,
    },
    {
        Header: 'Whatsapp',
        accessor: 'telefonowa',
        disableFilters: true,
    },
    {
        Header: 'Status',
        accessor: 'status',
    },
    {
        Header: 'Date',
        accessor: 'date_modified',
        Cell: ({ value }) => { return format(new Date(value), 'dd/MM/yyyy')},
        disableFilters: true,
    }
]