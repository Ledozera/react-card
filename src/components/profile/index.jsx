import "./styles.modules.css"

export default function Profile(props){
    return (
        <div className="container">
            <img src={props.avatar} alt={props.name} className="avatar"/>
            <h2>{props.name}</h2>
            <div>{props.bio}</div>
            <div>{props.phone}</div>
            <div>{props.email}</div>
            <div className="links">
                <a href={props.instaUrl} target="blank" className="link">Instagram</a>
                <a href={props.linkedinUrl} target="blank" className="link">LinkedIn</a>
                <a href={props.twitterUrl} target="blank" className="link">Twitter</a>
            </div>
        </div>
    )
}