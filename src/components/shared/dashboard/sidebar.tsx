// "use client";

// import { useState } from "react";
// import Link from "next/link";
// import { usePathname } from "next/navigation";
// import { cn } from "@/_lib/utils";
// import {
//   LayoutDashboard,
//   User,
//   Bike,
//   Calendar,
//   Bookmark,
//   Navigation,
//   Car,
//   Search,
//   List,
//   Wrench,
//   HelpCircle,
// } from "lucide-react";

// const menuItems = [
//   { icon: LayoutDashboard, label: "Dashboard", href: "/" },
//   { icon: User, label: "Profile", href: "/profile" },
//   { icon: Bike, label: "Riders", href: "/riders" },
//   { icon: Calendar, label: "Calendar", href: "/calendar" },
//   { icon: Bookmark, label: "Saved", href: "/saved" },
//   { icon: Navigation, label: "Active Ride", href: "/active-ride" },
//   { icon: Car, label: "Vehicle Details", href: "/vehicle-details" },
//   { icon: Search, label: "Search", href: "/search" },
//   { icon: List, label: "Listings", href: "/listings" },
//   { icon: Wrench, label: "Book services", href: "/book-services" },
//   { icon: HelpCircle, label: "Help Centre", href: "/help-centre" },
// ];

// interface SidebarProps {
//   isCollapsed?: boolean;
//   onCollapsedChange?: (collapsed: boolean) => void;
// }

// export function Sidebar({
//   isCollapsed: controlledCollapsed,
//   onCollapsedChange,
// }: SidebarProps = {}) {
//   // const [internalCollapsed, setInternalCollapsed] = useState(false);
//   const pathname = usePathname();

//   // const isCollapsed = controlledCollapsed ?? internalCollapsed;
//   // const setIsCollapsed = onCollapsedChange ?? setInternalCollapsed;

//   return (
//     <aside
//       className={cn(
//         "fixed left-0 top-0 z-40 h-screen border-r border-border bg-background transition-all duration-300",
//         isCollapsed ? "w-20" : "w-64"
//       )}
//     >
//       <div className="flex h-full flex-col">
//         {/* Logo */}
//         <div className="flex h-16 items-center border-b border-border px-6">
//           <div
//             className={cn(
//               "flex items-center gap-2",
//               isCollapsed && "justify-center w-full"
//             )}
//           >
//             <div className="flex h-8 w-8 items-center justify-center rounded-full bg-orange-500 shrink-0">
//               <span className="text-sm font-bold text-white">O</span>
//             </div>
//             {!isCollapsed && (
//               <span className="text-lg font-semibold">Oresma Logistics</span>
//             )}
//           </div>
//         </div>

//         {/* Navigation */}
//         <nav className="flex-1 space-y-1 overflow-y-auto px-3 py-4">
//           {menuItems.map((item) => {
//             const Icon = item.icon;
//             const isActive = pathname === item.href;
//             return (
//               <Link
//                 key={item.href}
//                 href={item.href}
//                 className={cn(
//                   "flex items-center gap-3 rounded-lg px-3 py-2.5 text-sm font-medium transition-colors",
//                   isActive
//                     ? "bg-orange-500 text-white"
//                     : "text-muted-foreground hover:bg-accent hover:text-accent-foreground",
//                   isCollapsed && "justify-center"
//                 )}
//                 title={isCollapsed ? item.label : undefined}
//               >
//                 <Icon className="h-5 w-5 shrink-0" />
//                 {!isCollapsed && item.label}
//               </Link>
//             );
//           })}
//         </nav>
//       </div>
//     </aside>
//   );
// }
