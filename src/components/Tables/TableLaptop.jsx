import React, { useState } from "react";
import { Box, IconButton } from "@mui/material";
import { MRT_Localization_ES } from "material-react-table/locales/es";
import MaterialReactTable from "material-react-table";
import RemoveRedEyeOutlinedIcon from "@mui/icons-material/RemoveRedEyeOutlined";
import DeleteOutlineOutlinedIcon from "@mui/icons-material/DeleteOutlineOutlined";
import EditOutlinedIcon from "@mui/icons-material/EditOutlined";
import FileDownloadIcon from "@mui/icons-material/FileDownload"
import { Button } from '@mui/material';

export default function TableLaptop({
  columns,
  data,
  setBody,
  setOpen,
  handleExportEfectivo
}) {

  function handleClose() {
    setOpen(false);
    setBody("");
  }

  const [rowData, setRowData] = useState({});

  // const handleExportRows = (rows) => {
  //   console.log(rows.map((row) => row.original))
  //   // csvExporter.generateCsv(rows.map((row) => row.original));
  // };


  return (
    <>
      <MaterialReactTable
        columns={columns}
        data={data}
        enableColumnOrdering={false}
        enableRowActions
        localization={MRT_Localization_ES}
        enableRowSelection
        enableColumnResizing={false}
        columnResizeMode="onChange"
        positionActionsColumn="last"
        initialState={{ pagination: { pageSize: 8 } }}
        enableDensityToggle={false}
        showGlobalFilter={false}
        muiTablePaginationProps={{
          rowsPerPageOptions: [5, 10, 20],
          showFirstLastPageButtons: true,
        }}
        displayColumnDefOptions={{
          "mrt-row-actions": {
            header: "Acciones",
            size: 160,
            muiTableHeadCellProps: { align: "right" },
            muiTableBodyCellProps: { align: "right" },
          },
        }}
        renderRowActions={({ row }) => (
          <Box>
            <IconButton
              onClick={() => {
                // setOpen(true);
                // setBody("edit");
                // setHandleSnack("edit");
                // setRowData(row.original);
              }}
            >
              <EditOutlinedIcon color="warning" />
            </IconButton>
            <IconButton
              onClick={() => {
                // deleteById(tableTitle, row.original.id, goTo, refreshData);
              }}
            >
              <DeleteOutlineOutlinedIcon color="error" />
            </IconButton>
          </Box>
        )}
        muiTableProps={{
          sx: {
            tableLayout: "fixed",
          },
        }}
        renderTopToolbarCustomActions={({ table }) => (
          <Box
            sx={{ display: 'flex', gap: '1rem', p: '0.5rem', flexWrap: 'wrap' }}
          >
            <Button
              disabled={
                !table.getIsSomeRowsSelected() && !table.getIsAllRowsSelected()
              }
              //only export selected rows
              onClick={() => handleExportEfectivo(table.getSelectedRowModel().rows)}
              startIcon={<FileDownloadIcon />}
              variant="contained"
            >
              Exportar notebooks seleccionadas
            </Button>
          </Box>
        )}
      />
    </>
  )
}
