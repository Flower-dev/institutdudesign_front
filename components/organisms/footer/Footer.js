export default function Footer({text}) {
    const footer =  {
        display: 'flex',
        flex: 1,
        padding: '2rem 0',
        borderTop: '1px solid #eaeaea',
        justifyContent: 'center',
        alignItems: 'center',
    }
    return (
        <footer style={footer}>
            <p>{text}</p>
        </footer>
    )
}