
export default function Card({title, text, img, alt}) {

    const cardStyle = {
        display: 'flex',
        flexDirection: 'column',
        with: '100px',
        border: '1px solid',
        borderRadius: '15px',
    };
    
    const cardTitle = {
        letterSpacing: '3px',
        textTransform: 'uppercase',
        textAlign: 'center'
    };

    const cardText = {
        textAlign: 'center',
        fontSize: '12px',
    }

    return (
        <div style={cardStyle}>
            <div>
                <img src={img} alt={alt}/>
            </div>
            <div>
                <h5 style={cardTitle}>{title}</h5>
            </div>
            <div>
                <p style={cardText}>{text}</p>
            </div>
        </div>
    )
}