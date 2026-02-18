import OpenAI from "openai";
import type { AssistantStream } from "openai/lib/AssistantStream";
import type { Channel, Event, MessageResponse, StreamChat } from "stream-chat"

export class OpenAIResponseHandler{
    private message_text = ""
    private chunk_counter = 0
    private run_id = ""
    private is_done = false
}