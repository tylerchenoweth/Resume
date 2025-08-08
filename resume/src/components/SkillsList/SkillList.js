import "./SkillList.css";


const SkillList = ({json_payload}) => {

    return (
        <>
        <h2 className="title">{json_payload["title"]}</h2>

        <ul className="bullets">
            {json_payload.list.map((bullet, index) => (
                <li className="bullet" key={index}>
                    {bullet}
                </li>
            ))}
        </ul>
        </>
    )
}

export default SkillList;