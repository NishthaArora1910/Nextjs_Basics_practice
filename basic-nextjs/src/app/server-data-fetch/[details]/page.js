

async function fetchUserDetails(currentUserId){
    try{
        const apiResponse = await fetch(`https://fakestoreapi.com/users/${currentUserId}`);
        const result = await apiResponse.json();
        
        return result

    }catch(e){
        throw new Error(e)

    }

}

export default async function UserDetails({params}){
    console.log(params);
    const UserDetails = await fetchUserDetails(params.details);

    return <div>
        <h1>This is users details page </h1>
        <p>{UserDetails?.id} </p>
        <p>{UserDetails?.username}</p>
        <p>{UserDetails?.email}</p>
    </div>
}