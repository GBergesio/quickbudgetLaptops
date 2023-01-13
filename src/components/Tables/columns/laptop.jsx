import { useMemo } from "react";

export default function Columns({ cot, uti }) {

  const columns = useMemo(() => [
    {
      accessorKey: "sku",
      header: "Id",
      muiTableHeadCellProps: {
        align: "center",
      },
      muiTableBodyCellProps: {
        align: "center",
      },
      size: 100,
      enableHiding: false,
      enableColumnActions: false
    },
    {
      accessorFn: (row) => row.marca + " " + row.modelo + " " + row.marcaProcesador + " " + row.modeloProcesador + " " + row.ram + " " + row.almacenamiento + " " + row.pantalla,
      header: "Notebook",
      enableHiding: false,
      muiTableHeadCellProps: {
        align: 'center',
      },
      muiTableBodyCellProps: {
        align: 'center',
      },
      size: 550,
      enableColumnActions: false,
      Cell: ({ cell }) => <strong>{cell.getValue()}</strong>,
    },
    {
      accessorKey: "precio",
      header: "Costo USD Final",
      muiTableHeadCellProps: {
        align: "center",
      },
      muiTableBodyCellProps: {
        align: "center",
      },
      size: 150,
      enableHiding: false,
      enableColumnActions: false
    },
    {
      accessorFn: (row) => Math.round(row.precio * cot[0].usd),
      header: "Costo ARS Final",
      muiTableHeadCellProps: {
        align: "center",
      },
      muiTableBodyCellProps: {
        align: "center",
      },
      size: 150,
      enableHiding: false,
      enableColumnActions: false
    },
    {
      accessorFn: (row) => `$${Math.round((row.precio * cot[0].usd) * uti[0].uti20)}`,
      header: "Precio Efectivo",
      enableHiding: false,
      muiTableHeadCellProps: {
        align: 'center',
      },
      muiTableBodyCellProps: {
        align: 'center',
      },
      size: 150,
      enableColumnActions: false,
    },
    {
      accessorFn: (row) => `$${Math.round((row.precio * cot[0].usd) * uti[0].uti25)}`,
      header: "Precio Lista",
      enableHiding: false,
      muiTableHeadCellProps: {
        align: 'center',
      },
      muiTableBodyCellProps: {
        align: 'center',
      },
      size: 150,
      enableColumnActions: false,
    },

  ]);


  return { columns };
}
