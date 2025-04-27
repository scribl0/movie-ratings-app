'use client'

import { Home, Star, User, SquarePlus } from "lucide-react"
import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  useSidebar,
} from "@/components/ui/sidebar"
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";

const items = [
  {
    title: "Dashboard",
    url: "/dashboard",
    icon: Home,
  },
  {
    title: "Ratings",
    url: "/ratings",
    icon: Star,
  },
  {
    title: "Profile",
    url: "/profile",
    icon: User,
  },
]

export function AppSidebar() {
  const { open } = useSidebar()

  return (
    <Sidebar collapsible="icon">
      <SidebarHeader className="border-b border-muted py-2 px-1">
        <Link href='/ratings/new' className="hover:bg-white/8 rounded-lg">
        <div className="flex items-center gap-2 justify-start overflow-hidden">
          <motion.div
            className="bg-blue-500 p-2 rounded-md"
            animate={{ scale: open ? 0.9 : 0.8 }}
            transition={{ duration: 0.3 }}
          >
            <SquarePlus className="h-6 w-6" />
          </motion.div>

          <AnimatePresence>
            {open && (
              <motion.span
                className="font-semibold text-sm whitespace-nowrap"
                initial={{ opacity: 0, width: 0 }}
                animate={{ opacity: 1, width: "auto" }}
                exit={{ opacity: 0, width: 0 }}
                transition={{ duration: 0.2 }}
              >
                Rate a Movie
              </motion.span>
            )}
          </AnimatePresence>
        </div>
        </Link>
      </SidebarHeader>
      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupLabel>Navigation</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {items.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton asChild>
                    <Link href={item.url}>
                      <item.icon />
                      <span>{item.title}</span>
                    </Link>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
    </Sidebar>
  )
}
