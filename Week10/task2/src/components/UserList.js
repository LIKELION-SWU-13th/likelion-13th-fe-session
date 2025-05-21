import { useState, useEffect } from "react";
import UserCard from "./UserCard";

function UserList() {
    const [users, setUsers] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    //컴포넌트가 처음 렌더링 될 때 실행
    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/users')
        .then(response => {
            if(!response.ok) throw new Error('Failed to fetch');
            return response.json();
        })        
        .then(data => {
            setUsers(data);
            setLoading(false);
        })
        .catch(err => {
            setError(err.message);
            setLoading(false);
        });
    }, []);

    if (loading) return <div className="loader">로딩중...</div>;
    if (error) return <div className="error">에러: {error}</div>;

    return (
        <div className="container">
            <h1 className="title">팀원 소개</h1>
            <div className="profiles-grid">
                {users.map(user => (
                    <UserCard key={user.id} user={user}/>
                ))}
            </div>
        </div>
    );


}

export default UserList;