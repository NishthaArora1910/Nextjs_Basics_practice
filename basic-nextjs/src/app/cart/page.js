'use client'

import { usePathname, useSearchParams } from "next/navigation"


export default function Cart(){

    const pathName = usePathname();
    console.log(pathName);
    const searchParams = useSearchParams();
    console.log('Search Value:',searchParams.get('search'));
    console.log('Random Value:', searchParams.get('randomvalue'));


    return <div>
        <h1>This is a cart component ...</h1>
    </div>
}