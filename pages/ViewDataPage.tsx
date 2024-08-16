import { useEffect, useState } from 'react';
import Nav from './Nav'; // Adjust the path to Nav component

const ViewDataPage = () => {
    const [data, setData] = useState<string[][]>([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch('/api/fetchSheetData');
                if (response.ok) {
                    const result = await response.json();
                    setData(result.data);
                } else {
                    console.error('Error fetching sheet data:', response.statusText);
                }
            } catch (error) {
                console.error('Error fetching sheet data:', error);
            }
        };

        fetchData();
    }, []);

    return (
        <>
            <Nav />
            <main className="bg-gray-100 min-h-screen">
                <div className="max-w-5xl mx-auto py-10">
                    <table className="min-w-full divide-y divide-gray-200">
                        <tbody className="bg-white divide-y divide-gray-200">
                            {data.map((row, index) => (
                                <tr key={index}>
                                    <td className="px-6 py-4 whitespace-nowrap">{row[0]}</td>
                                    <td className="px-6 py-4 whitespace-nowrap">{row[1]}</td>
                                    <td className="px-6 py-4 whitespace-nowrap">{row[2]}</td>
                                    <td className="px-6 py-4 whitespace-nowrap">{row[3]}</td>
                                    <td className="px-6 py-4 whitespace-nowrap">{row[4]}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </main>
        </>
    );
};

export default ViewDataPage;
