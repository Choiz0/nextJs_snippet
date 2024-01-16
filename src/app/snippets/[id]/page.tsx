import Link from 'next/link';
import {notFound} from 'next/navigation';
import { db } from "@/db";  
interface SnippetShowPageProps {
    params: {
        id: string;
    }
}

const SnippetShowPage = async (props: any) => {
 const snippet = await db.snippet.findFirst({
    where:{id: parseInt(props.params.id)}
 

 })
 if(!snippet){
     notFound();}
    return (
        <div>
            <div className='flex m-4 justify-between items-center'>
                <h1 className='text-xl font-bold'>{snippet.title}</h1>
                <div className='flex gap-4'>
                    <Link href={`/snippets/${snippet.id}/edit`} className='border p-2 rounded'>Edit</Link>
                    <button className='border p-2 rounded'>Delete</button>
                </div>
            </div>
            <pre className='p-3 border rounded bg-gray-200 border-gray-200' >
                <code>{snippet.code}</code>
            </pre>
        </div>
    )
}


export default SnippetShowPage;
