import { TbDownload } from "react-icons/tb";
import { utils, write } from "xlsx";
import { saveAs } from "file-saver";

const ExportButton = ({searchResults}) => {
    const EXCEL_TYPE = 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet;charset=UTF-8';
    const EXCEL_EXTENSION = '.xlsx';

    const exportToExcel = () => {
        const worksheet = utils.json_to_sheet(searchResults)
        const workbook = {
            Sheets: {
                'data': worksheet
            },
            SheetNames: ['data']
        }

        const excelBuffer = write(workbook, {bookType: 'xlsx', type: 'array'})
        saveAsExcel(excelBuffer, 'searchResults')
    }

    const saveAsExcel = (buffer, filename) => {
        const data = new Blob([buffer], { type: EXCEL_TYPE })
        saveAs(data, filename + '_export' + new Date().getTime() + EXCEL_EXTENSION)
    }

    return <button data-test="export-button" onClick={exportToExcel} className="hover:bg-blue-600 hover:border-blue-600 hover:text-white transition-colors">
        <div className="flex items-center gap-2">
            Export to Excel <TbDownload size={20} />
        </div>
    </button>
}

export default ExportButton