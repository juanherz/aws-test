import React, {useMemo, useState, useEffect} from 'react';
import { useTable, usePagination, useSortBy, useFilters, useGlobalFilter, useRowSelect } from 'react-table';
import { GlobalFilter } from './GlobalFilter';
import { ColumnFilter } from './ColumnFilter';
import { Checkbox } from './Checkbox';
import { COLUMNS3 } from './columns3';
import axios from 'axios';
import { useRouter } from 'next/router';

export const CompleteTable4 = () => {


    const router = useRouter()
    
    const {cuenta} = router.query
    const [clientes, setClientes] = useState([])
    useEffect(() => {
        axios.get(`../api/clientes/${cuenta}`)
            .then(res => {
            setClientes(res.data)
            })
            .catch(err => {
            console.log(err)
            })
    }, [])

    console.log(clientes)

    const [corridas, setCorridas] = useState([])
    useEffect(() => {
        axios.get(`../api/robot/${cuenta}`)
            .then(res => {
            console.log(res)
            setCorridas(res.data)
            })
            .catch(err => {
            console.log(err)
            })
    }, [])

    console.log(corridas)



    //hook de useMemo requerido para useTable, arrow function que devuelve datos y luego arreglo de dependencias vacio
    //al usarlo nos aseguramos de que los datos no se recreen en cada render
    const columns = useMemo(() => COLUMNS3, [])
    const data = corridas

    //use table hook, le paso un objeto como argumento que tiene columnas y filas, se recomienda memoizar las filas y columnas con usememo hook
    // el hook nos regresa un table instance, en esta ocasion se destructura el table instance del hook de manera directa para ahorrarse destructurar despues
    // tambien por sintaxis en vez de poner columns: columns y eso mejor se pone solo columns

    const defaultColumn = useMemo(() => {
        return {
            Filter: ColumnFilter,
        }
    },[])



    // se usara el hook use pagination como parametro de useTable, en vez de destructurar rows usaremos page y en todos los lugares donde
    // usabamos rows usaremos page, para ir a la pagina anterior y siguiente usaremos nextPage y previousPage de useTable
    // usaremos canNextPage o canPreviousPage como funcion negada en disabled
    // usaremos pageOptions y state, de state destructuramos para conseguir pageIndex, todo lo meteremos en un span al final
    // usaremos goToPage y PageCount para la navegaci??n entre p??ginas, goToPage() recibe el indice de la p??gina iniciando en 0
    // de ser necesario puedo alterar el estado inicial para que page index sea otro poniendo despu??s de data initialState: {indice deseado}
    // para ajustar el tama??o de la pagina desplegado en vez del 20 default usamos setPageSize y del estado sacamos pageSize
    // proporcionaremos un select con tama??os de pagina predefinidos para que el usuario elija

    const { 
        getTableProps, 
        getTableBodyProps, 
        headerGroups, 
        page,
        nextPage,
        previousPage, 
        canNextPage,
        canPreviousPage,
        pageOptions,
        gotoPage,
        pageCount,
        setPageSize,
        state,
        setGlobalFilter,
        prepareRow,
        selectedFlatRows
    }= useTable({
        columns,
        data,
        defaultColumn
    },
        useFilters,
        useGlobalFilter,
        useSortBy,
        usePagination,
        useRowSelect,
        useRowSelect,
        hooks => {
            hooks.visibleColumns.push(columns => [
                {
                id: 'selection',
                Header: ({ getToggleAllRowsSelectedProps }) => (
                    <Checkbox {...getToggleAllRowsSelectedProps()} />
                ),
                Cell: ({ row }) => <Checkbox {...row.getToggleRowSelectedProps()} />
                },
                ...columns
            ])
        }
    )

    const {pageIndex,pageSize,globalFilter} = state


    //nuestra tabla necesita thead y tbody
    //getTableProps es una funcion que necesita destructurarse en table
    //getTableBodyProps es una funcion que necesita destructurarse en tbody
    //headerGroup es un array que necesita ser utilizado con map para devolver los headers, se usa en thead y dentro de cada uno se crea tr->th
    //en tr se destructura headerGroup.getHeaderGroupProps(), luego en tr se usan los headers y se mapean para accesar las columnas
    //la funcion nos debe devolver los th donde se destructuran las columnas

    //en tbody destructuro getTableBodyProps() y luego uso rows.map, lo que sigue es usar prepareRow(row) y regresar <tr>
    // en tr destructuro row.getRowProps() y dentro de ella vuelvo a crear un objeto de row.cells.map que me da acceso a la celda individual
    // la funcion me regresa cell.getCellProps() y en td creo cell.render('Cell')

    return (
        <>
            <div>
                <h1>Detalles sobre cliente con cuenta {cuenta}</h1>

                <h2>Datos generales</h2>
                <ol>
                    {
                        clientes.map(cliente => {
                            return (
                                <>
                                    <li key={cliente.id}>Nombre: {cliente.nombre}</li>
                                    <li key={cliente.id}>Cuenta: {cliente.cuenta}</li>
                                    <li key={cliente.id}>Telefono 1: {cliente.telefono1}</li>
                                    <li key={cliente.id}>Telefono 2: {cliente.telefono2}</li>
                                    <li key={cliente.id}>Telefono 3: {cliente.telefono3}</li>
                                    <li key={cliente.id}>Whatsapp: {cliente.telefonowa}</li>
                                    <li key={cliente.id}>Status: {cliente.status}</li>
                                    <li key={cliente.id}>Fecha de modificaci??n: {cliente.date_modified}</li>
                                </>
                            )
                        })
                    }
                </ol>
                        
            </div>
            <>
            <GlobalFilter filter={globalFilter} setFilter={setGlobalFilter}/>
            <div>
                <table {...getTableProps()}>
                    <thead>
                        {headerGroups.map((headerGroup) => (
                            <tr {...headerGroup.getHeaderGroupProps()}>
                                {headerGroup.headers.map((column) => (
                                    <th {...column.getHeaderProps(column.getSortByToggleProps())}>
                                        {column.render('Header')}
                                        <span>
                                            {column.isSorted ? (column.isSortedDesc ? ' ????' : ' ????') : ''}
                                            <div>{column.canFilter ? column.render('Filter') : null}</div>
                                        </span>
                                    </th>
                                ))}
                            </tr>
                        ))}
                        
                    </thead>
                    <tbody {...getTableBodyProps()}>
                        {
                            page.map((row) => {
                                prepareRow(row)
                                return (
                                    <tr {...row.getRowProps()}>
                                        {row.cells.map((cell) => {
                                            return <td {...cell.getCellProps()}>{cell.render('Cell')}</td>
                                        })}
                                    </tr>
                                )
                            })
                        }
                    </tbody>
                </table>
            </div>
            <div>
                <span>
                    Page{' '}
                    <strong>
                        {pageIndex + 1} of {pageOptions.length}
                    </strong>{' '}
                </span>
                <span>
                    | Go to page: {' '}
                    <input type='number' defaultValue={pageIndex + 1}
                    onChange={e => {
                        const pageNumber = e.target.value ? Number(e.target.value) - 1 : 0
                        gotoPage(pageNumber)
                    }}
                    style={{width:'50px'}} />
                </span>
                <select
                    value={pageSize}
                    onChange={(e) => setPageSize(Number(e.target.value))}
                >
                    {[10,25,50,100].map((pageSize) => (
                        <option key={pageSize} value={pageSize}>
                            Show {pageSize}
                        </option>
                    ))}
                </select>
                <button onClick={() => gotoPage(0)} disabled={!canPreviousPage}>{'<<'}</button>
                <button onClick={() => previousPage()} disabled={!canPreviousPage}>Previous</button>
                <button onClick={() => nextPage()} disabled={!canNextPage}>Next</button>
                <button onClick={() => gotoPage(pageCount - 1)} disabled={!canNextPage}>{'>>'}</button>
            </div>
        </>
        </>
    )

    
}

