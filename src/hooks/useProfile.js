import { useEffect, useState, useContext } from "react";
import RepositoryContext from "../Context/RepositoryContext";

export default function useProfile(userId) {
    const [user, setUser] = useState(null);
    const { repository } = useContext(RepositoryContext)

    useEffect(() => {
        const fetchUser = async () => {
            let userDoc = await repository.getUser(userId);
            console.log(userDoc);
            setUser(userDoc);
        }
        fetchUser();
    }, [])
    
    return {user};
}