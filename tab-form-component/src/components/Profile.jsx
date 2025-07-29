
const Profile = ({ data, setData }) => {
    const {name, email, age} = data;

    const handleDataChange = (e, item) => {
        setData(prevState => ({
            ...prevState,
            [item]: e.target.value,
        }))
    };

    return (
        <div>
            <div>
                <label>Name</label>
                <input 
                    type="text" 
                    value={name} 
                    onChange={(e) => handleDataChange(e, "name")} 
                />
            </div>
            <div>
                <label>Age</label>
                <input 
                    type="number" 
                    value={age} 
                    onChange={(e) => handleDataChange(e, "age")} 
                />
            </div>
            <div>
                <label>Email</label>
                <input 
                    type="text" 
                    value={email} 
                    onChange={(e) => handleDataChange(e, "email")} 
                />
            </div>
        </div>
    );
}

export default Profile;