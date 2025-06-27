import { fetchEmailMetadata } from '../api/AzureGraphApi';

const Show = () => {
    const email= fetchEmailMetadata();
    return (
        <div className="flex flex-col items-center justify-center h-screen bg-gray-100">
            <div>hi</div>
            <div>{ email }</div>
        </div>
    );
}

export default Show;