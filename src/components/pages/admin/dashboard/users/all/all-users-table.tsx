"use client";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { PageHeader2 } from "@/components/shared/headers/page-headers";
import { BaseTable } from "@/components/shared/table/table-style";
import { MoreVertical, User } from "lucide-react";

import { PeriodSelector } from "@/components/shared/dashboard/period-selector";
import { SearchFilter } from "@/components/shared/dashboard/search-fliter";
import { Suspense } from "react";
import { useQuery } from "@tanstack/react-query";
import { getallCustomer } from "@/_lib/api/admin/users/user";
import { UsersResponse } from "@/_lib/type/auth/users";
// import SkeletonCardList from "@/components/shared/skeleton/card-list-skeleton";

export function AllUsersTable() {
  const {
    data: Customers,
    isPending,
    isError,
    error: Error,
  } = useQuery<UsersResponse>({
    queryFn: getallCustomer,
    queryKey: ["AllCustomers"],
    refetchInterval: 60 * 1000, // 1 minutes
    refetchOnReconnect: true,
    refetchIntervalInBackground: false,
  });

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
      {!isPending && isError && (
        <div className="text-red-500">{Error.message} </div>
      )}
      {!isPending && Customers?.count === 0 && (
        <div className="text-red-500">No Customer User</div>
      )}
      {!isPending && !Error && Customers.count > 0 && (
        <BaseTable
          columns={[
            { key: "name", label: "Name" },
            { key: "id", label: "User ID" },
            { key: "email", label: "Email" },
            { key: "phone", label: "Phone" },
            { key: "role", label: "Role" },
            {
              key: "createdAt",
              label: "Date Created",
              render: (value) => new Date(value).toLocaleDateString(),
            },
          ]}
          data={Customers.users}
          rowActions2={RowActions}
        />
      )}
    </div>
  );
}
