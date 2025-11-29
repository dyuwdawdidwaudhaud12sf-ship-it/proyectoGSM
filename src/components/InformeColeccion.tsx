import MaterialTable, { type Column } from "@material-table/core";
import { ExportCsv, ExportPdf } from "@material-table/exporters";
import Divider from "@mui/material/Divider";

interface itemtype {
    id?: number;
    nombre: string;
    marca: string;
    tipo: string;
    precio: number;
}


interface DatosRecibidos {
    tableData: itemtype[];
}

function Informes({ tableData }: DatosRecibidos) {

    const col: Array<Column<itemtype>> = [
        { title: "Marca", field: "marca" },
        { title: "Nombre", field: "nombre", filtering: false },
        { title: "Tipo", field: "tipo" },
        { title: "Precio", field: "precio", type: "numeric", filtering: false }
    ];

    const Total = tableData.reduce((sum, item) => sum + item.precio, 0);

    const tabla = [...tableData, { marca: "Total", nombre: "", tipo: "", precio: Total }
    ];

    return (
        <MaterialTable sx={{ width: 1920, fontSize: 35, "& .MuiTableCell-root": { fontSize: 35 }}}
            title="Coleccion"
            columns={col}
            data={tabla}
            options={{
                draggable: true, columnsButton: true, filtering: true
                ,
                exportMenu: [
                    {
                        label: "Export PDF",
                        exportFunc: (cols, datas) => ExportPdf(cols, datas, "Coleccion"),
                    },
                    {
                        label: "Export CSV",
                        exportFunc: (cols, datas) => ExportCsv(cols, datas, "Coleccion"),
                    },
                ],
            }}
        />
    );
}

export default Informes;