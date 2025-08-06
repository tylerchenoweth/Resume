

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

    console.log(json_payload.job_bullets)

    return (
        <>
        
        <div className="row">
            <p className="row_left">{json_payload.company_name}</p>
            <p className="row_right">
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
            <div className="row_left">
                <p>{json_payload.position}</p>
            </div>
            <div className="row_right">
                <p>{json_payload.location.city}, {json_payload.location.state}</p>
            </div>
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