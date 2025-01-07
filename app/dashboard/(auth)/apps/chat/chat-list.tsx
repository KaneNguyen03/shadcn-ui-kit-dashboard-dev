"use client";

import { useState } from "react";

import { Search } from "lucide-react";
import ChatListItem from "./chat-list-item";
import { Input } from "@/components/ui/input";
import { ScrollArea } from "@/components/ui/scroll-area";
import { ChatItemProps } from "./types";
import useChatStore from "@/store/chatStore";

export default function ChatList({ chats }: { chats: ChatItemProps[] }) {
  const { selectedChat } = useChatStore();
  const [filteredChats, setFilteredChats] = useState(chats);

  const changeHandle = (e: React.ChangeEvent<HTMLInputElement>) => {
    const searchTerm = e.target.value.trim();

    const filteredItems = chats.filter((chat) =>
      chat.user.name.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setFilteredChats(filteredItems);
  };

  return (
    <>
      <div className="relative flex items-center px-6 py-3">
        <Search className="absolute start-10 h-4 w-4 text-muted-foreground" />
        <Input
          type="text"
          className="ps-10"
          placeholder="Chats search..."
          onChange={changeHandle}
        />
      </div>
      <div className="flex h-[calc(100vh_-_13rem)] lg:h-[calc(100vh_-_15.8rem)] lg:pt-4">
        <ScrollArea className="w-full min-w-0">
          <div className="block min-w-0 divide-y">
            {filteredChats.length ? (
              filteredChats.map((chat) => (
                <ChatListItem
                  chat={chat}
                  key={chat.id}
                  active={selectedChat && selectedChat.id === chat.id}
                />
              ))
            ) : (
              <div className="mt-4 text-center text-sm text-muted-foreground">No chat found</div>
            )}
          </div>
        </ScrollArea>
      </div>
    </>
  );
}
