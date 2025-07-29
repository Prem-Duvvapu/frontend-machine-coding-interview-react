
const Interests = ({data, setData}) => {
    const { interests } = data;

    return (
        <div>
            <div>
                <label>
                    <input
                        type="checkbox"
                        name="coding"
                        checked={interests.includes("coding")}
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
                    />
                    Listening music
                </label>
            </div>
        </div>
    );
}

export default Interests;