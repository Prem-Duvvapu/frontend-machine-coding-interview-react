
const Interests = ({data, setData, errors }) => {
    const { interests } = data;

    const handleDataChange = (e) => {
        setData((prevState) => ({
            ...prevState,
            interests: e.target.checked ? [...prevState.interests, e.target.name] : prevState.interests.filter((i) => i !== e.target.name)
        }))
    };

    console.log(interests);

    return (
        <div>
            <div>
                <label>
                    <input
                        type="checkbox"
                        name="coding"
                        checked={interests.includes("coding")}
                        onChange={handleDataChange}
                    />
                    Coding
                </label>
            </div>
            <div>
                <label>
                    <input
                        type="checkbox"
                        name="reading books"
                        checked={interests.includes("reading books")}
                        onChange={handleDataChange}
                    />
                    Reading books
                </label>
            </div>
            <div>
                <label>
                    <input
                        type="checkbox"
                        name="listening music"
                        checked={interests.includes("listening music")}
                        onChange={handleDataChange}
                    />
                    Listening music
                </label>
            </div>
            {errors.interests && <span className="error">{errors.interests}</span>}
        </div>
    );
}

export default Interests;