"use client";
import { PageHeader2 } from "@/components/shared/headers/page-headers";
import { BaseTable } from "@/components/shared/table/table-style";
import { SearchFilter } from "@/components/shared/dashboard/search-fliter";
import { CheckCircleIcon, XCircle, MoreVertical, User } from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Button } from "@/components/ui/button";
import { Suspense } from "react";
export function AllAdminTable() {
  const adminTableData = [
    {
      name: "Steven Johnson",
      id: "012345",
      email: "cstevejohnson@gmail.com",
      dateCreated: "12-05-2025",
      company: "Oresma Logistics",
      is_verified: true, // Based on the green checkmark icon
    },
    {
      name: "Steven Johnson",
      id: "012345",
      email: "cstevejohnson@gmail.com",
      dateCreated: "12-05-2025",
      company: "Oresma Logistics",
      is_verified: true, // Based on the green checkmark icon
    },
    {
      name: "Steven Johnson",
      id: "012345",
      email: "cstevejohnson@gmail.com",
      dateCreated: "12-05-2025",
      company: "Oresma Logistics",
      is_verified: true, // Based on the green checkmark icon
    },
    {
      name: "Steven Johnson",
      id: "012345",
      email: "cstevejohnson@gmail.com",
      dateCreated: "12-05-2025",
      company: "Oresma Logistics",
      is_verified: false, // Based on the red 'X' icon
    },
    {
      name: "Steven Johnson",
      id: "012345",
      email: "cstevejohnson@gmail.com",
      dateCreated: "12-05-2025",
      company: "Oresma Logistics",
      is_verified: true, // Based on the green checkmark icon
    },
    {
      name: "Steven Johnson",
      id: "012345",
      email: "cstevejohnson@gmail.com",
      dateCreated: "12-05-2025",
      company: "Oresma Logistics",
      is_verified: true, // Based on the green checkmark icon
    },
    {
      name: "Steven Johnson",
      id: "012345",
      email: "cstevejohnson@gmail.com",
      dateCreated: "12-05-2025",
      company: "Oresma Logistics",
      is_verified: false, // Based on the red 'X' icon
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
          title="Admins"
          actions={
            <>
              <Button>Create Admin</Button>
            </>
          }
        />
        <Suspense>
          <SearchFilter
            placeholder="Search admins..."
            className="bg-[#FAFBFD] rounded-md shadow-[0px_4px_4px_0px_#00000040] px-4 py-2"
            paramName={"admin"}
          />
        </Suspense>
      </div>
      <BaseTable
        columns={[
          {
            key: "name",
            label: "Admin",
          },
          {
            key: "id",
            label: "Admin ID",
          },
          {
            key: "email",
            label: "Email",
          },
          {
            key: "dateCreated",
            label: "Date Created",
          },
          {
            key: "company",
            label: "Company",
          },
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
        data={adminTableData}
        rowActions2={RowActions}
      />
    </div>
  );
}
