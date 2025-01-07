import { Mic, Paperclip, PlusCircleIcon, SmileIcon } from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger
} from "@/components/ui/dropdown-menu";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";

export default function ChatFooter() {
  return (
    <>
      <Card>
        <CardContent className="relative flex items-center p-2 lg:p-4">
          <Input
            type="text"
            className="border-transparent pe-32 !text-base !shadow-transparent !ring-transparent lg:pe-56"
            placeholder="Enter message..."
          />
          <div className="absolute end-4 flex items-center">
            <div className="block lg:hidden">
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button variant="ghost" className="h-11 w-11 rounded-full p-0">
                    <PlusCircleIcon className="h-4 w-4" />
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent>
                  <DropdownMenuSeparator />
                  <DropdownMenuItem>Emoji</DropdownMenuItem>
                  <DropdownMenuItem>Add File</DropdownMenuItem>
                  <DropdownMenuItem>Send Voice</DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            </div>
            <div className="hidden lg:block">
              <TooltipProvider>
                <Tooltip>
                  <TooltipTrigger asChild>
                    <Button variant="ghost" className="h-11 w-11 rounded-full p-0">
                      <SmileIcon className="h-4 w-4" />
                    </Button>
                  </TooltipTrigger>
                  <TooltipContent side="top">Emoji</TooltipContent>
                </Tooltip>
                <Tooltip>
                  <TooltipTrigger asChild>
                    <Button variant="ghost" className="h-11 w-11 rounded-full p-0">
                      <Paperclip className="h-4 w-4" />
                    </Button>
                  </TooltipTrigger>
                  <TooltipContent side="top">Select File</TooltipContent>
                </Tooltip>
                <Tooltip>
                  <TooltipTrigger asChild>
                    <Button variant="ghost" className="h-11 w-11 rounded-full p-0">
                      <Mic className="h-4 w-4" />
                    </Button>
                  </TooltipTrigger>
                  <TooltipContent side="top">Send Voice</TooltipContent>
                </Tooltip>
              </TooltipProvider>
            </div>
            <Button variant="outline" className="ms-3">
              Send
            </Button>
          </div>
        </CardContent>
      </Card>
    </>
  );
}
