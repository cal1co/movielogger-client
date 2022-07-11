import URLS from '../api/server'
import { io } from 'socket.io-client'
import { useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom'
import '../style/Message.css'
import axios from 'axios'

function Message() {
    const [currSocket, setCurrSocket] = useState(Number)
    const [userOne, setUserOne] = useState(String)
    const [userTwo, setUserTwo] = useState(String)
    const [userOneInfo, setUserOneInfo] = useState(Object)
    const [userTwoInfo, setUserTwoInfo] = useState(Object)
    const [connected, setConnected] = useState(false)
    const [roomId, setRoomId] = useState(String)
    const [status, setStatus] = useState(false)
    const location = useLocation()
    const socket:any = io(URLS.BASE_TEST, {autoConnect: false})
    
    // console.log('id1:', id1, 'id2:', id2)

    useEffect(() => {
        // socket.auth = 'calico' 
        const currUserId = localStorage.getItem('currentUserId')
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
            socket.on('disconnect', () => {
                console.log('disconnected from da socket D:')
                socket.emit('offline', { uid: currUserId, roomNum })
                setConnected(false)
            })
            socket.on('message', (msg:any) => {
                console.log(msg)
            })
            socket.on('update status', (status:Array<String>) => {
                if (user2 in status){
                    setStatus(true)
                } else {
                    setStatus(false)
                }
                console.log("UPDATE STATUS!!", status)
            })
            return () => {
                socket.off('connect')
                socket.off('disconnect')
                socket.off('message')
                socket.off('update status')
            }
        } else {
            console.log("YOU SHOULDN'T BE HERE BUD!")
        }

        
    }, [])

    useEffect(() => {
        const currUserId = localStorage.getItem('currentUserId')
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
        getUserData(user2)
    }, [])

    
    const getUserData = async (user2:string) => {
        await axios.get(`http://localhost:8888/user/find/${user2}`)
        .then((res) => {
            // console.log(res.data)
            setUserTwoInfo(res.data)
        })
        .catch((err) => {
            console.error(err)
        })
        // getUserData(user2)
    }

    const sendMsg = async (ev:any) => {
        ev.preventDefault()
        console.log('message sent!')
        const message = ev.target[0].value
        socket.emit('message', {
            message,
            roomId
        })
        ev.target[0].value = ''
    }

    
    return (
        <div className="message">
            <div className="messages">
                message {userTwoInfo.username} online: {status ? 'on' : 'off'}


            </div>
            <form onSubmit={sendMsg}>
                <input placeholder="write a message" type="text"></input>

            <button>Send</button>
            </form>
        </div>
    )
}

export default Message