import Link from "next/link";
// fetch

async function fetchListOfUsers(){
    try{
        const apiResponse = await fetch('https://fakestoreapi.com/users');
        const result = await apiResponse.json();

        return result;

    }catch(error){
        throw new Error(error)
    }
} 

export default async function ServerSideDataFetching(){

    const ListOfUsers = await fetchListOfUsers()
    console.log(ListOfUsers);

    return( <div className="p-10">
    <h1>   Server Side Data Fetching : User List Page ....</h1>
    <ul>
        {
            ListOfUsers && ListOfUsers.length > 0 ?
            ListOfUsers.map(user => <li className="mt-5 cursor-pointer"><Link href={`/server-data-fetch/${user.id}`}>{user.username}</Link></li>)
            : null
        }
    </ul>
    </div>
    );
}