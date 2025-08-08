

import "./Experience.css";


const Experience = ({json_payload}) => {


    const monthAbbr = {
        1: 'Jan',
        2: 'Feb',
        3: 'Mar',
        4: 'Apr',
        5: 'May',
        6: 'Jun',
        7: 'Jul',
        8: 'Aug',
        9: 'Sep',
        10: 'Oct',
        11: 'Nov',
        12: 'Dec'
    };


    return (
        <>
        
        <div className="row">
            <h2 className="rowLeft rowElement">{json_payload.company_name}</h2>
            
            <p className="rowRight rowElement">
                {monthAbbr[json_payload.start_date.month]}&nbsp; 
                {json_payload.start_date.year}
                &nbsp;-&nbsp;

                {
                    json_payload.end_date.year===0 
                    ? "Present" 
                    : `${monthAbbr[json_payload.end_date.month]}
                        ${json_payload.end_date.year}`
                    }
            </p>
        </div>

        <div className="row">
            <p className="rowLeft rowElement">{json_payload.position}</p>
            <p className="rowRight rowElement">{json_payload.location.city}, {json_payload.location.state}</p>
        </div>

        <ul className="bullets">
            {json_payload.job_bullets.map((bullet, index) => (
                <li className="bullet" key={index}>
                    {bullet}
                </li>
            ))}
        </ul>

        </>
    )
}

export default Experience;