"use client"

import { useState } from "react"
import { ChevronLeft, ChevronRight } from "lucide-react"
import { Button } from "@/components/ui/button"

interface ListPaginationProps {
  totalItems: number
  itemsPerPage: number
  currentPage: number
}

export default function ListPagination({ totalItems, itemsPerPage, currentPage: initialPage }: ListPaginationProps) {
  const [currentPage, setCurrentPage] = useState(initialPage)
  const totalPages = totalItems > 0 ? Math.ceil(totalItems / itemsPerPage) : 1

  const getVisiblePages = () => {
    const pages = []

    // Always show first page
    pages.push(1)

    if (currentPage > 3) {
      pages.push("...")
    }

    // Show pages around current page
    for (let i = Math.max(2, currentPage - 1); i <= Math.min(totalPages - 1, currentPage + 1); i++) {
      if (!pages.includes(i)) {
        pages.push(i)
      }
    }

    if (currentPage < totalPages - 2) {
      pages.push("...")
    }

    // Always show last page if there are more than 1 page
    if (totalPages > 1 && !pages.includes(totalPages)) {
      pages.push(totalPages)
    }

    return pages
  }

  const handlePageChange = (page: number) => {
    if (page >= 1 && page <= totalPages) {
      setCurrentPage(page)
    }
  }

  const visiblePages = getVisiblePages()

  return (
    <div className="flex justify-between w-full pb-8">
      <div className="flex items-center justify-between space-x-2 w-full">

        <div className="hidden md:flex justify-between items-center space-x-2 w-full">
          {/* Previous Button */}
          <Button
            variant="outline"
            size="sm"
            onClick={() => handlePageChange(currentPage - 1)}
            disabled={currentPage === 1}
            className="flex items-center space-x-2 px-3 py-2 text-gray-600 border-gray-300 hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed"
          >
            <ChevronLeft className="h-4 w-4" />
            <span>Previous</span>
          </Button>

          {/* Page Numbers */}
          <div className="flex items-center space-x-1">
            {visiblePages.map((page, index) => (
              <div key={index}>
                {page === "..." ? (
                  <span className="px-3 py-2 text-gray-500">...</span>
                ) : (
                  <Button
                    variant={currentPage === page ? "default" : "outline"}
                    size="sm"
                    onClick={() => handlePageChange(page as number)}
                    className={`px-3 py-2 min-w-[40px] ${
                      currentPage === page
                        ? "bg-[#E5EAEF] text-black"
                        : "text-gray-600 border-gray-300 hover:bg-gray-50"
                    }`}
                  >
                    {page}
                  </Button>
                )}
              </div>
            ))}
          </div>

          {/* Next Button */}
          <Button
            variant="outline"
            size="sm"
            onClick={() => handlePageChange(currentPage + 1)}
            disabled={currentPage === totalPages}
            className="flex items-center space-x-2 px-3 py-2 text-gray-600 border-gray-300 hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed"
          >
            <span>Next</span>
            <ChevronRight className="h-4 w-4" />
          </Button>
        </div>

      </div>
    </div>
  )
}
