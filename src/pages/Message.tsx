import React from 'react'
import URLS from '../api/server'
import { io } from 'socket.io-client'
import { useEffect, useState, useRef } from 'react'
import { useLocation } from 'react-router-dom'
import '../style/Message.css'
import axios from 'axios'

function Message() {
    const [currSocket, setCurrSocket] = useState(Number)
    const [userId, setUserId] = useState(String)
    const [userOne, setUserOne] = useState(String)
    const [userTwo, setUserTwo] = useState(String)
    const [userOneInfo, setUserOneInfo] = useState(Object)
    const [userTwoInfo, setUserTwoInfo] = useState(Object)
    const [connected, setConnected] = useState(false)
    const [roomId, setRoomId] = useState(String)
    const [status, setStatus] = useState(false)
    const [chatData, setChatData] = useState(Object)
    const [twoAvatar, setTwoAvatar] = useState(Object)
    const [loaded, setLoaded] = useState(false)
    const currUserId = localStorage.getItem('currentUserId') || '{}'


    const location = useLocation()
    const socket:any = io(URLS.BASE, {autoConnect: true})
    
    // console.log('id1:', id1, 'id2:', id2)

    useEffect(() => {
        // socket.auth = 'calico' 
        const roomNum = location.pathname.slice(10)
        setRoomId(roomNum)
        const id1 = roomNum.slice(0, 24)
        const id2 = roomNum.slice(25, 49)
        setUserOne(id1); 
        setUserTwo(id2);
        let user1;
        let user2:string
        if (currUserId === id1){
            user1 = id1;
            user2 = id2;
        } else {
            user1 = id2;
            user2 = id1
        }
        if (currUserId === id1 || currUserId === id2){
            socket.connect()
            socket.once('connect', () => {
                console.log('connected to da socket :D')
                socket.emit('online', { uid: currUserId, roomNum })
                setConnected(true)
            })
            socket.once('disconnect', () => {
                console.log('disconnected from da socket D:')
                setConnected(false)
            })
            socket.on('message', (msg:any) => {
                // console.log(msg)
                appendMessage(msg)
            })
            socket.on('update status', (status:Array<String>) => {
                console.log("UPDATE STATUS!!", status)
                if (Object.values(status).includes(user2)){
                    setStatus(true)
                } else {
                    setStatus(false)
                }
            })
            return () => {
                socket.off('connect')
                socket.off('disconnect')
                socket.off('message')
                socket.off('update status')
                socket.emit('offline', { uid: currUserId, roomNum })
                socket.disconnect()
            }
        } else {
            console.log("YOU SHOULDN'T BE HERE BUD!")
        }

        
    }, [])

    useEffect(() => {
        setUserId(currUserId)
        const roomNum = location.pathname.slice(10)
        setRoomId(roomNum)
        const id1 = roomNum.slice(0, 24)
        const id2 = roomNum.slice(25, 49)
        setUserOne(id1); 
        setUserTwo(id2);
        let user1;
        let user2:string
        if (currUserId === id1){
            user1 = id1;
            user2 = id2;
        } else {
            user1 = id2;
            user2 = id1
        }
        const users = { 
            u1: user1,
            u2: user2
        }
        getUserData(users)
        getChatData(roomNum)
    }, [setUserTwoInfo])

    
    const getUserData = async (users:any) => {
        await axios.get(`${URLS.BASE}/user/find/id/${users.u1}`)
            .then((res) => {
                console.log('user two info', res.data)
                setUserTwoInfo(res.data)
            })
            .catch((err) => {
                console.error(err)
            })
            await axios.get(`${URLS.BASE}/user/find/id/${users.u2}`)
            .then((res) => {
                setTwoAvatar(JSON.parse(res.data.avatar))
                console.log('user one info', res.data)
                setUserOneInfo(res.data)
            })
            .catch((err) => {
                console.error(err)
            })
    }
    const getChatData = async (room:String) => {
        await axios.get(`${URLS.BASE}/room/find/${room}`)
            .then((res) => {
                setChatData(res.data)
                console.log(res.data)
                setLoaded(true)
            })
            .catch((err) => {
                console.error(err)
            })
    }

    const sendMsg = async (ev:any) => {
        ev.preventDefault()
        // console.log('message sent!')
        const message = ev.target[0].value
        socket.emit('message', {
            message,
            roomId,
            userId
        })
        ev.target[0].value = ''
    }

    const messagesEndRef:any = useRef(null)

    const scrollToBottom = () => {
        // messagesEndRef.current?.scrollIntoView({ behavior: "smooth" })
        messagesEndRef.current?.scrollIntoView()
      }

    useEffect(scrollToBottom, [chatData])


    const renderChat = (data:any) => {
        return data?.messages.map((msg:any,idx:string) => {
            return <div className="message-item" id={idx} style={{textAlign: (msg.userId === currUserId) ? 'right' : 'left'}}>
                {msg.message} 
                <div ref={messagesEndRef} />
            </div>
        })
    }
    const appendMessage = (msg:any) => {
        // console.log("APPENDING MESSAGE: ", msg.message)
        const parent = document.getElementsByClassName("chat-box")
        // console.log(parent[0])
        // const msgNode:any = React.createElement("div", {className: "message-item"}, msg)
        const msgNode:any = document.createElement("div")
        msgNode.innerHTML = msg.message
        msgNode.classList.add("message-item")
        console.log(msg.userId, currUserId)
        // console.log(msgNode)
        if (msg.userId === currUserId){
            msgNode.style.textAlign = 'right'
        } else {
            msgNode.style.textAlign = 'left'
        }
        const latestMsg = parent[0].appendChild(msgNode)
        latestMsg.scrollIntoView({behavior: "smooth"})
    }
    
    return (
        <div className="message">
                {
                    loaded
                    ?
                    <div className="messages">
                        <div className="msg-header">
                            <svg className="nav-img" style={{backgroundColor: twoAvatar.color}} height='128px' width='128px'>
                                <image className="nav-img" href={twoAvatar.image}></image> 
                            </svg>
                            <div className="msg-util-info">

                            <div className="msg-username">@{userOneInfo.username}</div> {status ? 'online' : 'offline'}
                            </div>
                        </div>
                        <div className="chat-box">
                        <div className="msg-blankspace"></div>
                            {renderChat(chatData)}
                        </div>
                    </div>
                    :
                    <p>loading chat...</p>
                }
            <form onSubmit={sendMsg} className="msg-submit">
                <input placeholder="Aa" type="text" className="msg-input"></input>

            {/* <button>Send</button> */}
            </form>
        </div>
    )
}

export default Message