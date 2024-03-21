import { TbDownload } from "react-icons/tb";

const ExportButton = (props) => {
    return <button className="hover:bg-blue-600 hover:text-white transition-colors">
        <div className="flex items-center gap-2">
            Export to Excel <TbDownload size={20} />
        </div>
    </button>
}

export default ExportButton