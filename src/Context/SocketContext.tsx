import SocketIoClient from "socket.io-client";
import React, {createContext} from "react";

const Ws_Server = "http://localhost:5000";

const SocketContext = createContext<any | null>(null);

const socket = SocketIoClient(Ws_Server);

interface Props{

    children:React.ReactNode
}

export const SocketProvider: React.FC<Props> = ({children})=>{

    return (
          <SocketContext.Provider value={socket}>
             {children }
          </SocketContext.Provider>
    ); 
}