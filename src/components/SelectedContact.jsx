import { useState } from "react";
import { useEffect } from "react";

const API_URL = `https://fsa-jsonplaceholder-69b5c48f1259.herokuapp.com/users`


export default function SelectedContact( {selectedContactId, setSelectedContactId} ) {
    const [contact, setContact] = useState([]);

    useEffect(() => {
        async function fetchSingle() {
            try {
                const response = await fetch(API_URL + `/${selectedContactId}`);
                const result = await response.json();
                
                setContact(result);
                
            }
            catch (error) {
                console.error(error)
            }  
        }
         
        fetchSingle()        
    }, [])
    console.log(contact);   
    return (
        <>
        <div>
            <h1>{contact.name}</h1>
            <p>Email: {contact.email}</p>
            <p>Username: {contact.username}</p>
            <p>ID: {contact.id}</p>
        </div>

        <button onClick={()=> {setSelectedContactId(null)}}>Return</button>
        </>
        
            
    )
  
}