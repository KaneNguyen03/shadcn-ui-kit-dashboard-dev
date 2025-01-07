import { useContext } from "react";
import { cn, generateAvatarFallback } from "@/lib/utils";

import ChatUserDropdown from "./chat-list-item-dropdown";
import { Ellipsis } from "lucide-react";
import { Button } from "@/components/ui/button";
import { ChatItemProps } from "./types";
import UserAvatar from "@/components/user-avatar";
import MessageStatusIcon from "./message-status-icon";
import useChatStore from "@/store/chatStore";

export default function ChatListItem({
  chat,
  active
}: {
  chat: ChatItemProps;
  active: boolean | null;
}) {
  const { setSelectedChat } = useChatStore();

  const handleClick = (chat: ChatItemProps) => {
    setSelectedChat(chat);
  };

  const unreadMessageCount = chat?.messages?.filter((item) => !item.read) ?? [];

  return (
    <div
      onClick={() => handleClick(chat)}
      className={cn(
        "group relative flex min-w-0 cursor-pointer items-center gap-4 px-6 py-4 hover:bg-muted",
        { "!bg-gray-200 dark:!bg-muted": active }
      )}>
      <UserAvatar
        image={`${process.env.DASHBOARD_BASE_URL}/${chat.user?.avatar}`}
        indicator={chat.user?.online_status}
        fallback={generateAvatarFallback(chat.user?.name)}
      />
      <div className="min-w-0 flex-grow">
        <div className="flex justify-between">
          <span className="font-semibold">{chat.user?.name}</span>
          <span className="text-sm text-muted-foreground">{chat.date}</span>
        </div>
        <div className="flex items-center gap-2">
          <MessageStatusIcon status={chat.status} />
          <span className="truncate text-start text-muted-foreground">{chat.last_message}</span>
          {unreadMessageCount.length > 0 && (
            <div className="ms-auto flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full bg-green-500 text-sm text-white">
              {unreadMessageCount.length}
            </div>
          )}
        </div>
      </div>
      <div
        className={cn(
          "absolute bottom-0 end-0 top-0 flex items-center bg-gradient-to-l from-50% px-4 opacity-0 group-hover:opacity-100",
          { "from-muted": !active },
          { "from-gray-200 dark:from-muted": active }
        )}>
        <ChatUserDropdown>
          <Button size="sm" variant="outline" className="h-10 w-10 rounded-full p-0">
            <Ellipsis className="h-4 w-4" />
          </Button>
        </ChatUserDropdown>
      </div>
    </div>
  );
}
