"use client";

import { useEffect, useRef } from "react";

import ChatFooter from "./chat-footer";
import ChatHeader from "./chat-header";
import ChatBubble from "./chat-bubbles";
import { ScrollArea } from "@/components/ui/scroll-area";
import { ChatMessageProps } from "./types";
import UserDetailSheet from "./user-detail-sheet";
import useChatStore from "@/store/chatStore";

export default function ChatContent() {
  const { selectedChat } = useChatStore();
  const messagesContainerRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (messagesContainerRef.current) {
      messagesContainerRef.current.scrollIntoView(false);
    }
  }, [selectedChat]);

  if (!selectedChat) {
    return (
      <figure className="hidden h-full items-center justify-center text-center lg:flex">
        <img
          className="block max-w-sm dark:hidden"
          src={`${process.env.DASHBOARD_BASE_URL}/images/not-selected-chat.svg`}
          alt="..."
        />
        <img
          className="hidden max-w-sm dark:block"
          src={`${process.env.DASHBOARD_BASE_URL}/images/not-selected-chat-light.svg`}
          alt="..."
        />
      </figure>
    );
  }

  return (
    <div className="fixed inset-0 z-50 flex flex-col bg-background p-4 lg:relative lg:bg-transparent lg:p-0">
      <ChatHeader user={selectedChat.user} />
      <ScrollArea className="relative h-screen w-full py-4 lg:h-[calc(100vh_-_13.8rem)]">
        <div ref={messagesContainerRef}>
          <div className="flex flex-col items-start space-y-10 py-8">
            {selectedChat?.messages?.length &&
              selectedChat.messages.map((item: ChatMessageProps) => (
                <ChatBubble message={item} type={item.type} key={item.id} />
              ))}
          </div>
        </div>
      </ScrollArea>
      <ChatFooter />
      <UserDetailSheet user={selectedChat.user} />
    </div>
  );
}
