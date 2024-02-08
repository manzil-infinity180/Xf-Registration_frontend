
export function Registee({user}) {
    console.log(user);
    
    return (
        <div>
            <h2>{user.name}</h2>
            <div>
                <h4>Age : {user.age}</h4>
                <h4> email: {user.email}</h4>
                <h4> username :{user.username}</h4>
                <h4> address : {user.address}</h4>
                <h4> position : {user.position}</h4>
                <h4> TopSkil : {user.OneTopSkill}</h4>
{ user.resumeLink && 
                <>
                <h4>Resume : {user.resumeLink}</h4>
                <a href={user.resumeLink}>Resume</a>
                </> }
            </div>
        </div>
    );
}
