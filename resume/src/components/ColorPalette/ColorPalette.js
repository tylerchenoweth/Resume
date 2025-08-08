



const ColorPalette = () => {


    // const colors = [
    //     '#F3F3F3',
    //     '#FE4A49',
    //     '#E1CA96',
    //     '#F4FEC1',
    //     '#E0E0E0',
    //     '#F0F0F0',
    //     '#00FDDC'
    // ];

const colors = [
  '#FFFFFF',
  '#F0F0F0',
  '#E0E0E0',
  '#B0C4DE',
  '#00FDDC',
  '#FFD700',
  '#90EE90',
  '#FFB6C1',
  '#ADD8E6',
  '#E6E6FA',
  '#6C8EAD',
  '#F3F3F3',
  '#FE4A49',
  '#E1CA96',
  '#F4FEC1'
];


    return (
        <>
        {colors.map((color, index) => (
            <h1 style={{color, margin:0}}>
                {color}
            </h1>
        ))}
        </>
    )


}

export default ColorPalette;