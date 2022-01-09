import { useEffect, useState, useContext } from "react";
import RepositoryContext from "../Context/RepositoryContext";

export default function useProfile(userId) {
    const [user, setUser] = useState(null);
    const [profileTweets, setprofileTweets] = useState([]);
    const { repository } = useContext(RepositoryContext)

    useEffect(() => {
        const fetchUser = async () => {
            let userDoc = await repository.getUser(userId);
            let getTweets  = await repository.fetchProfileTweets(userId); 
            console.log(userDoc);
            setUser(userDoc);
            setprofileTweets(getTweets.docs.map((doc) => doc.data()))
        }
        fetchUser();
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])
    
    return {user, profileTweets};
}
