"use client";

import Link from "next/link";

import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle
} from "@/components/ui/sheet";
import { Dribbble, Facebook, FileText, Instagram, Linkedin, SheetIcon, X } from "lucide-react";
import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area";
import UserAvatar from "@/components/user-avatar";
import { Button } from "@/components/ui/button";
import { UserPropsTypes } from "./types";
import { generateAvatarFallback } from "@/lib/utils";
import useChatStore from "@/store/chatStore";

export default function UserDetailSheet({ user }: { user: UserPropsTypes }) {
  const { showProfileSheet, toggleProfileSheet } = useChatStore();
  return (
    <Sheet open={showProfileSheet} onOpenChange={toggleProfileSheet}>
      <SheetContent>
        <SheetHeader>
          <SheetTitle className="text-2xl">Profile</SheetTitle>
          <SheetDescription className="text-start">
            <ScrollArea className="h-[calc(100vh_-_5rem)]">
              <div className="my-4 flex flex-col items-center justify-end">
                <UserAvatar
                  image={user.avatar}
                  className="mb-4 h-32 w-32"
                  fallback={generateAvatarFallback(user.name)}
                />
                <h4 className="mb-2 text-xl font-bold">{user.name}</h4>
                <div className="text-sm">
                  Last seen:{" "}
                  {user.online_status == "success" ? (
                    <span className="text-green-500">Online</span>
                  ) : (
                    <span className="text-muted-foreground">{user.last_seen}</span>
                  )}
                </div>
              </div>
              <div className="space-y-2 divide-y">
                {user.about && (
                  <div className="space-y-3 py-4">
                    <h5 className="text-xs font-semibold uppercase">About</h5>
                    <div>{user.about}</div>
                  </div>
                )}
                {user.phone && (
                  <div className="space-y-3 py-4">
                    <h5 className="text-xs font-semibold uppercase">Phone</h5>
                    <div>{user.phone}</div>
                  </div>
                )}
                {user.country && (
                  <div className="space-y-3 py-4">
                    <h5 className="text-xs font-semibold uppercase">Country</h5>
                    <div>{user.country}</div>
                  </div>
                )}
                {user.medias?.length && (
                  <div className="space-y-3 py-4">
                    <h5 className="text-xs font-semibold uppercase">Media</h5>
                    <div>
                      <ScrollArea className="w-full">
                        <div className="flex gap-4 *:flex-shrink-0">
                          {user.medias.map((item) => (
                            <>
                              {item.type === "image" && (
                                <div>
                                  <img className="h-20 w-20 rounded-lg" src={item.path} alt="..." />
                                </div>
                              )}
                              {item.type === "pdf" && (
                                <div>
                                  <Link
                                    href={item.path ?? "#"}
                                    className="flex aspect-square w-20 items-center justify-center rounded-lg bg-green-200">
                                    <SheetIcon className="h-8 w-8 text-green-500" />
                                  </Link>
                                </div>
                              )}
                              {item.type === "file" && (
                                <div>
                                  <a
                                    href="#"
                                    className="flex aspect-square w-20 items-center justify-center rounded-lg bg-orange-200">
                                    <FileText className="h-8 w-8 text-orange-500" />
                                  </a>
                                </div>
                              )}
                              {item.type === "excel" && (
                                <div>
                                  <a
                                    href="#"
                                    className="flex aspect-square w-20 items-center justify-center rounded-lg bg-orange-200">
                                    <FileText className="h-8 w-8 text-orange-500" />
                                  </a>
                                </div>
                              )}
                            </>
                          ))}
                        </div>
                        <ScrollBar orientation="horizontal" />
                      </ScrollArea>
                    </div>
                  </div>
                )}
                {user.website && (
                  <div className="space-y-3 py-4">
                    <h5 className="text-xs font-semibold uppercase">Website</h5>
                    <div>
                      <a href={user.website} target="_blank" className="hover:underline">
                        {user.website}
                      </a>
                    </div>
                  </div>
                )}
                {user.social_links?.length && (
                  <div className="space-y-3 py-4">
                    <h5 className="text-xs font-semibold uppercase">Social Links</h5>
                    <div className="flex flex-wrap items-center gap-2 *:flex-shrink-0">
                      {user.social_links.map((item, key) => (
                        <Button
                          key={key}
                          asChild
                          variant="secondary"
                          className="h-12 w-12 items-center rounded-full p-0">
                          <Link
                            href="#"
                            target="_blank"
                            className="flex h-10 w-10 items-center justify-center rounded-full *:h-5 *:w-5">
                            {item.name === "Facebook" && <Facebook />}
                            {item.name === "X" && <X />}
                            {item.name === "Dribbble" && <Dribbble />}
                            {item.name === "Linkedin" && <Linkedin />}
                            {item.name === "Instagram" && <Instagram />}
                          </Link>
                        </Button>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            </ScrollArea>
          </SheetDescription>
        </SheetHeader>
      </SheetContent>
    </Sheet>
  );
}
