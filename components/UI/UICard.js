import Image from 'next/image'; 

export default function Card({title, text, img, alt}) {
    return (
        <div>
            <div>
                {/* <Image src={img} alt={alt}/> */}
                <h5>{title}</h5>
                <p>{text}</p>
            </div>
        </div>
    )
}