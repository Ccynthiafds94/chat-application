import { StreamChat } from "stream-chat";

export const apikey = process.env.STREAM_API_KEY as string;
export const apiSecret = process.env.SREAM_API_SECRET as string;

if(!apikey || !apiSecret){
    throw new Error("Missing required environment variables for STREAM_API_KEY and STREM_API_SCRET");
}

export const serverClient = new StreamChat(apikey, apiSecret)
