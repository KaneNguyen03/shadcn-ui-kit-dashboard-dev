"use client";

import Icon from "@/components/icon";
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/components/ui/collapsible";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger
} from "@/components/ui/dropdown-menu";
import { ScrollArea } from "@/components/ui/scroll-area";
import {
  Sidebar as SidebarContainer,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuBadge,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarMenuSub,
  SidebarMenuSubButton,
  SidebarMenuSubItem,
  useSidebar
} from "@/components/ui/sidebar";
import { page_routes } from "@/lib/routes-config";
import { ChevronRight, ChevronsUpDown, Sparkles } from "lucide-react";
import Logo from "./logo";
import { Button } from "../ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "../ui/card";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect } from "react";

export default function Sidebar() {
  const pathname = usePathname();
  const { toggleSidebar, isMobile } = useSidebar();

  useEffect(() => {
    if (isMobile) toggleSidebar();
  }, [pathname]);

  return (
    <SidebarContainer collapsible="icon">
      <SidebarHeader className="h-16 items-center justify-center">
        <SidebarMenu>
          <SidebarMenuItem>
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <SidebarMenuButton>
                  <Logo className="me-2 group-data-[collapsible=icon]:me-0" />
                  <div className="truncate font-semibold group-data-[collapsible=icon]:hidden">
                    Shadcn UI Kit
                  </div>
                  <ChevronsUpDown className="ml-auto group-data-[collapsible=icon]:hidden" />
                </SidebarMenuButton>
              </DropdownMenuTrigger>
              <DropdownMenuContent className="w-[--radix-popper-anchor-width]">
                <DropdownMenuItem>
                  <span>Ecommerce</span>
                </DropdownMenuItem>
                <DropdownMenuItem>
                  <span>CRM</span>
                </DropdownMenuItem>
                <DropdownMenuItem>
                  <span>Web Analiytics</span>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarHeader>
      <SidebarContent className="overflow-hidden">
        <ScrollArea>
          {page_routes.map((route, key) => (
            <SidebarGroup key={key}>
              <SidebarGroupLabel>{route.title}</SidebarGroupLabel>
              <SidebarGroupContent>
                <SidebarMenu>
                  {route.items.map((item, key) => (
                    <SidebarMenuItem key={key}>
                      {item.items?.length ? (
                        <Collapsible className="group/collapsible">
                          <CollapsibleTrigger asChild>
                            <SidebarMenuButton tooltip={item.title}>
                              {item.icon && <Icon name={item.icon} className="size-4" />}
                              <span>{item.title}</span>
                              <ChevronRight className="ml-auto transition-transform duration-200 group-data-[state=open]/collapsible:rotate-90" />
                            </SidebarMenuButton>
                          </CollapsibleTrigger>
                          <CollapsibleContent>
                            <SidebarMenuSub>
                              {item.items.map((subItem, key) => (
                                <SidebarMenuSubItem key={key}>
                                  <SidebarMenuSubButton
                                    isActive={pathname === subItem.href}
                                    asChild>
                                    <Link
                                      href={subItem.href}
                                      target={subItem.newTab ? "_blank" : ""}>
                                      {subItem.icon && (
                                        <Icon name={subItem.icon} className="size-4" />
                                      )}
                                      <span>{subItem.title}</span>
                                    </Link>
                                  </SidebarMenuSubButton>
                                </SidebarMenuSubItem>
                              ))}
                            </SidebarMenuSub>
                          </CollapsibleContent>
                        </Collapsible>
                      ) : (
                        <SidebarMenuButton
                          asChild
                          tooltip={item.title}
                          isActive={pathname === item.href}>
                          <Link href={item.href} target={item.newTab ? "_blank" : ""}>
                            {item.icon && <Icon name={item.icon} className="size-4" />}
                            <span>{item.title}</span>
                          </Link>
                        </SidebarMenuButton>
                      )}
                      {item.isComing ? (
                        <SidebarMenuBadge className="opacity-50">Coming</SidebarMenuBadge>
                      ) : null}
                      {item.isNew ? (
                        <SidebarMenuBadge className="text-green-500 dark:text-green-200">
                          New
                        </SidebarMenuBadge>
                      ) : null}
                    </SidebarMenuItem>
                  ))}
                </SidebarMenu>
              </SidebarGroupContent>
            </SidebarGroup>
          ))}
        </ScrollArea>
      </SidebarContent>
      <SidebarFooter>
        <Card className="group-data-[collapsible=icon]:hidden">
          <CardHeader className="p-4">
            <CardTitle>Get this Dashboard</CardTitle>
            <CardDescription>
              Use the link to get this dashboard template and access other resources.
            </CardDescription>
          </CardHeader>
          <CardContent className="p-4 pt-0">
            <Button className="w-full" asChild>
              <Link href="https://shadcnuikit.com/pricing" target="_blank">
                <Sparkles className="me-2 size-4" />
                Get Shadcn UI Kit
              </Link>
            </Button>
          </CardContent>
        </Card>
      </SidebarFooter>
    </SidebarContainer>
  );
}
