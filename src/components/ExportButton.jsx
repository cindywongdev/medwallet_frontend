import { TbDownload } from "react-icons/tb";

const ExportButton = ({exportToExcel}) => {
    return <button onClick={exportToExcel} className="hover:bg-blue-600 hover:border-blue-600 hover:text-white transition-colors">
        <div className="flex items-center gap-2">
            Export to Excel <TbDownload size={20} />
        </div>
    </button>
}

export default ExportButton