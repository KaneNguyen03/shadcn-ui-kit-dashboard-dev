"use client";

import { ArrowLeft, Ellipsis, Phone, PhoneCall, Video, X } from "lucide-react";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";
import ChatUserDropdown from "./chat-list-item-dropdown";
import { Dialog, DialogClose, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { UserPropsTypes } from "./types";
import UserAvatar from "@/components/user-avatar";
import { generateAvatarFallback } from "@/lib/utils";
import useChatStore from "@/store/chatStore";

export default function ChatHeader({ user }: { user: UserPropsTypes }) {
  const { setSelectedChat } = useChatStore();

  return (
    <div className="flex justify-between gap-4">
      <div className="flex gap-4">
        <Button
          size="sm"
          variant="outline"
          className="flex h-10 w-10 p-0 lg:hidden"
          onClick={() => setSelectedChat(null)}>
          <ArrowLeft className="h-4 w-4" />
        </Button>
        <UserAvatar
          image={`${process.env.DASHBOARD_BASE_URL}/${user.avatar}`}
          indicator={user.online_status}
          fallback={generateAvatarFallback(user.name)}
        />
        <div className="flex flex-col">
          <span className="font-semibold">{user.name}</span>
          {user.online_status == "success" ? (
            <span className="text-sm text-green-500">Online</span>
          ) : (
            <span className="text-sm text-muted-foreground">{user.last_seen}</span>
          )}
        </div>
      </div>
      <div className="flex gap-2">
        <div className="hidden lg:flex lg:gap-2">
          <TooltipProvider>
            <Tooltip>
              <TooltipTrigger asChild>
                <div>
                  <Dialog>
                    <DialogTrigger asChild>
                      <Button variant="outline">
                        <Video className="h-4 w-4" />
                      </Button>
                    </DialogTrigger>
                    <DialogContent className="top-8 flex translate-y-0 items-center justify-between">
                      <div className="flex items-center gap-4">
                        <UserAvatar
                          className="h-20 w-20"
                          image={`${process.env.DASHBOARD_BASE_URL}/images/avatars/4.png`}
                        />
                        <div className="text-lg">Jennica calling ...</div>
                      </div>
                      <div className="flex gap-4">
                        <DialogClose asChild>
                          <Button className="h-12 w-12 rounded-full bg-red-600 p-0 hover:bg-red-700">
                            <X />
                          </Button>
                        </DialogClose>
                        <Button className="h-12 w-12 rounded-full bg-green-600 p-0 hover:bg-green-700">
                          <Phone />
                        </Button>
                      </div>
                    </DialogContent>
                  </Dialog>
                </div>
              </TooltipTrigger>
              <TooltipContent side="bottom">Start Video Chat</TooltipContent>
            </Tooltip>
            <Tooltip>
              <TooltipTrigger asChild>
                <div>
                  <Dialog>
                    <DialogTrigger asChild>
                      <Button variant="outline">
                        <PhoneCall className="h-4 w-4" />
                      </Button>
                    </DialogTrigger>
                    <DialogContent className="top-8 flex translate-y-0 items-center justify-between">
                      <div className="flex items-center gap-4">
                        <UserAvatar
                          className="h-20 w-20"
                          image={`${process.env.DASHBOARD_BASE_URL}/images/avatars/4.png`}
                        />
                        <div className="text-lg">Jennica calling ...</div>
                      </div>
                      <div className="flex gap-4">
                        <DialogClose asChild>
                          <Button className="h-12 w-12 rounded-full bg-red-600 p-0 hover:bg-red-700">
                            <X />
                          </Button>
                        </DialogClose>
                        <Button className="h-12 w-12 rounded-full bg-green-600 p-0 hover:bg-green-700">
                          <Phone />
                        </Button>
                      </div>
                    </DialogContent>
                  </Dialog>
                </div>
              </TooltipTrigger>
              <TooltipContent side="bottom">Start Call</TooltipContent>
            </Tooltip>
          </TooltipProvider>
        </div>
        <ChatUserDropdown>
          <Button size="sm" variant="ghost" className="h-10 w-10 p-0">
            <Ellipsis className="h-4 w-4" />
          </Button>
        </ChatUserDropdown>
      </div>
    </div>
  );
}
