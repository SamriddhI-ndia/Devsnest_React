const Message=()=>{
    return (
        <div className="container">
            <div className="row">
                <div className="col flex" style={{color:"grey"}}>
                   
                <i className="bi bi-chat-dots" style={{color:"black",fontSize:"5rem"}}></i>
                    <h1>Your Message</h1>
                    <h4>Send private chats and messages to a friend or group.</h4>
                   <button className="msg-btn" onClick={()=>alert('Not functional yet!')}>Send message</button>
                </div>
            </div>
        </div>
    )
}
export default Message;