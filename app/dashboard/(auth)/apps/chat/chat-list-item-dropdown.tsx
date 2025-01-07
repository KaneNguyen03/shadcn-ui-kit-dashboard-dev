"use client";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger
} from "@/components/ui/dropdown-menu";
import useChatStore from "@/store/chatStore";

export default function ChatUserDropdown({ children }: { children: React.ReactNode }) {
  const { toggleProfileSheet } = useChatStore();

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>{children}</DropdownMenuTrigger>
      <DropdownMenuContent className="w-44">
        <DropdownMenuGroup>
          <DropdownMenuItem onClick={() => toggleProfileSheet(true)}>View profile</DropdownMenuItem>
          <DropdownMenuItem>Add to archive</DropdownMenuItem>
          <DropdownMenuSeparator />
          <DropdownMenuItem>Block</DropdownMenuItem>
          <DropdownMenuItem>Delete</DropdownMenuItem>
        </DropdownMenuGroup>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
