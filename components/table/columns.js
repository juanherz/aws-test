import { format } from 'date-fns';

export const COLUMNS = [
    {
        Header: 'Id',
        accessor: 'id',
        disableFilters: true,
    },
    {
        Header: 'Account',
        accessor: 'account',
    },
    {
        Header: 'Name',
        accessor: 'name',
    },
    {
        Header: 'Telephone1',
        accessor: 'telephone1',
        disableFilters: true,
    },
    {
        Header: 'Telephone2',
        accessor: 'telephone2',
        disableFilters: true,
    },
    {
        Header: 'Telephone3',
        accessor: 'telephone3',
        disableFilters: true,
    },
    {
        Header: 'Whatsapp',
        accessor: 'whatsapp',
        disableFilters: true,
    },
    {
        Header: 'Date',
        accessor: 'date',
        Cell: ({ value }) => { return format(new Date(value), 'dd/MM/yyyy')},
        disableFilters: true,
    }
]