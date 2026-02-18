import OpenAI from "openai";
import type { AssistantStream } from "openai/lib/AssistantStream";
import type { Channel, Event, MessageResponse, StreamChat } from "stream-chat"

export class OpenAIResponseHandler{
    private message_text = ""
    private chunk_counter = 0
    private run_id = ""
    private is_done = false
    private last_update_time = 0

    constructor(
        private readonly openai: OpenAI,
        private readonly openaiThread: OpenAI.Beta.Thread,
        private readonly assistanceStream: AssistantStream,
        private readonly chatClient: StreamChat,
        private readonly channel: Channel,
        private readonly message: MessageResponse,
        private readonly onDisposeL: () => void
    ){}
}