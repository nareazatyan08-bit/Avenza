import { useLocation } from 'react-router-dom';
function CurrentPage() {
    const location = useLocation();
    return(
        <div className="rounded-xl bg-blue-50 p-4">
            <p className="font-semibold text-blue-900">Current page</p>
            <p className="mt-2 text-blue-700">{location.pathname}</p>
        </div>
    )
}

export default CurrentPage;