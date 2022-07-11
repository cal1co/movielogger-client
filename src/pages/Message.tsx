import URLS from '../api/server'
import { io } from 'socket.io-client'
import { useEffect, useState } from 'react'
import '../style/Message.css'


function Message() {
    const [currSocket, setCurrSocket] = useState(Number)
    const [connected, setConnected] = useState(false)
    const socket:any = io(URLS.BASE_TEST, { autoConnect: false })
    // socket.on('connect', () => {
    //     console.log('connected to da socket! :D')
    // })
    // return () => socket.close(socket)
    
    // useEffect(() => {
    //     // setCurrSocket(socket)
    //     // return () => socket.close()
    // }, [currSocket])

    useEffect(() => {
        // socket.auth = 'calico' 
        socket.connect()
        socket.on('connect', () => {
            console.log('connected to da socket :D')
            const currUserId = localStorage.getItem('currentUserId')
            socket.emit('set user', currUserId)
            setConnected(true)
        })
        socket.on('disconnect', () => {
            console.log('disconnected from da socket D:')
            setConnected(false)
        })
        socket.on('chat message', (msg:any) => {
            console.log(msg)
        })
        return () => {
            socket.off('connect')
            socket.off('disconnect')
            socket.off('chat message')
        }
    })

    const sendMsg = async (ev:any) => {
        ev.preventDefault()
        console.log('message sent!')
        const message = ev.target[0].value
        socket.emit('chat message', message)
        ev.target[0].value = ''
    }

    
    return (
        <div className="message">
            <div className="messages">
                sent and received messages go here!!!!


            </div>
            <form onSubmit={sendMsg}>
                <input placeholder="write a message" type="text"></input>

            <button>Send</button>
            </form>
        </div>
    )
}

export default Message