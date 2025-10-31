"use client";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { PageHeader2 } from "@/components/shared/headers/page-headers";
import { BaseTable } from "@/components/shared/table/table-style";
import { CheckCircleIcon, XCircle, MoreVertical, User } from "lucide-react";

import { PeriodSelector } from "@/components/shared/dashboard/period-selector";
import { SearchFilter } from "@/components/shared/dashboard/search-fliter";
import { Suspense } from "react";
export function AllUsersTable() {
  const tableData = [
    {
      username: "Steven Johnson",
      user_id: "012345",
      email: "cstevejohnson@gmail.com",
      date_created: "12-05-2025",
      gender: "Male",
      is_verified: true, // Based on the green checkmark
    },
    {
      username: "Steven Johnson",
      user_id: "012345",
      email: "cstevejohnson@gmail.com",
      date_created: "12-05-2025",
      gender: "Female",
      is_verified: false, // Based on the red X
    },
    {
      username: "Steven Johnson",
      user_id: "012345",
      email: "cstevejohnson@gmail.com",
      date_created: "12-05-2025",
      gender: "Male",
      is_verified: true, // Based on the green checkmark
    },
    {
      username: "Steven Johnson",
      user_id: "012345",
      email: "cstevejohnson@gmail.com",
      date_created: "12-05-2025",
      gender: "Female",
      is_verified: true, // Based on the green checkmark
    },
    {
      username: "Steven Johnson",
      user_id: "012345",
      email: "cstevejohnson@gmail.com",
      date_created: "12-05-2025",
      gender: "Female",
      is_verified: false, // Based on the red X
    },
    // The selected row shows a specific fill value, but the underlying data seems consistent
    {
      username: "Steven Johnson",
      user_id: "012345",
      email: "cstevejohnson@gmail.com",
      date_created: "12-05-2025",
      gender: "Female",
      is_verified: false, // Based on the red X
    },
    {
      username: "Steven Johnson",
      user_id: "012345",
      email: "cstevejohnson@gmail.com",
      date_created: "12-05-2025",
      gender: "Female",
      is_verified: false, // Based on the red X
    },
    {
      username: "Steven Johnson",
      user_id: "012345",
      email: "cstevejohnson@gmail.com",
      date_created: "12-05-2025",
      gender: "Female",
      is_verified: true, // Based on the green checkmark
    },
    {
      username: "Steven Johnson",
      user_id: "012345",
      email: "cstevejohnson@gmail.com",
      date_created: "12-05-2025",
      gender: "Female",
      is_verified: false, // Based on the red X
    },
    {
      username: "Steven Johnson",
      user_id: "012345",
      email: "cstevejohnson@gmail.com",
      date_created: "12-05-2025",
      gender: "Female",
      is_verified: true, // Based on the green checkmark
    },
  ];
  const RowActions = () => {
    return (
      <DropdownMenu>
        <DropdownMenuTrigger>
          <MoreVertical className="h-5 w-5" />
        </DropdownMenuTrigger>
        <DropdownMenuContent className="px-3 py-2">
          <DropdownMenuItem>Edit User</DropdownMenuItem>
          <DropdownMenuItem>Suspend user</DropdownMenuItem>
          <DropdownMenuItem>User Profile</DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    );
  };
  return (
    <div className="space-y-6">
      <div className="space-y-3">
        <PageHeader2
          title="All Users"
          actions={
            <>
              <Suspense>
                <PeriodSelector
                  options={[
                    { label: "All Gender", value: "all" },
                    { label: "Male", value: "male" },
                    { label: "Female", value: "female" },
                  ]}
                  paramName="gender"
                  defaultValue="all"
                  icon={<User className="h-4 w-4 text-gray-500" />}
                  selectedClassName="bg-primaryT text-white"
                />
              </Suspense>
            </>
          }
        />
        <Suspense>
          <SearchFilter
            paramName="userName"
            placeholder="Search users..."
            className="bg-[#FAFBFD] rounded-md shadow-[0px_4px_4px_0px_#00000040] px-4 py-2"
          />
        </Suspense>
      </div>
      <BaseTable
        columns={[
          { key: "username", label: "User" },
          { key: "user_id", label: "User ID" },
          { key: "email", label: "Email" },
          { key: "date_created", label: "Date Created" },
          { key: "gender", label: "Gender" },
          {
            key: "is_verified",
            label: "Verified",
            render: (value) =>
              value ? (
                <CheckCircleIcon className="h-5 w-5 text-green-500" />
              ) : (
                <XCircle className="h-5 w-5 text-red-500" />
              ),
          },
        ]}
        data={tableData}
        rowActions2={RowActions}
      />
    </div>
  );
}
