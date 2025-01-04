"use client";

import { useState } from "react";
import TournamentSection from "../../components/TournamentSection";
import { ListFilter } from "lucide-react";
import { Button } from "../../@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "../../components/ui/dropdown-menu";

const TournamentPage = () => {
  const feesOptions = [
    { value: "", label: "All" },
    { value: "free", label: "Free" },
    { value: "paid", label: "Paid" },
  ];

  const modeOptions = [
    { value: "", label: "All" },
    { value: "solo", label: "Solo" },
    { value: "duo", label: "Duo" },
    { value: "squad", label: "Squad" },
  ];

  const statusOptions = [
    { value: "", label: "All" },
    { value: "open", label: "Open" },
    { value: "live", label: "Live" },
    { value: "complete", label: "Complete" },
  ];

  const [filters, setFilters] = useState({
    entryFee: "",
    mode: "",
    status: "",
  });

  const handleOptionClick = (key, value) => {
    setFilters((prev) => ({
      ...prev,
      [key]: value,
    }));
  };

  const clearFilters = () => {
    setFilters({
      entryFee: "",
      mode: "",
      status: "",
    });
  };

  return (
    <div className="px-[5%] xl:px-[12%] min-h-[70vh] transition-all">
      {/* Tournaments */}
      <div className="mt-20 flex flex-col">
        {/* title */}
        <div className="flex justify-between items-center pb-[20px] border-b-[1px] border-tertiary">
          <h1 className="text-4xl font-semibold">Tournaments</h1>

          <div className="relative">
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="outline" className="flex gap-2">
                  Filter
                  <ListFilter className="w-4 h-4 mb-0.5" />
                </Button>
              </DropdownMenuTrigger>

              <DropdownMenuContent className="w-56 bg-black rounded-lg">
                {/* Entry Fee */}
                <div className="relative mb-4 p-2">
                  <label className="block text-sm font-semibold mb-2">
                    Entry Fee
                  </label>
                  {feesOptions.map((option) => (
                    <div
                      key={option.value}
                      className={`px-2 py-1 text-white hover:bg-gray-800 cursor-pointer ${
                        filters.entryFee === option.value ? "bg-gray-800" : ""
                      }`}
                      onClick={() =>
                        handleOptionClick("entryFee", option.value)
                      }
                    >
                      {option.label}
                    </div>
                  ))}
                </div>

                {/* Mode */}
                <div className="relative mb-4 p-2">
                  <label className="block text-sm font-semibold mb-2">
                    Mode
                  </label>
                  {modeOptions.map((option) => (
                    <div
                      key={option.value}
                      className={`px-2 py-1 text-white hover:bg-gray-800 cursor-pointer ${
                        filters.mode === option.value ? "bg-gray-800" : ""
                      }`}
                      onClick={() => handleOptionClick("mode", option.value)}
                    >
                      {option.label}
                    </div>
                  ))}
                </div>

                {/* Status */}
                <div className="relative mb-4 p-2">
                  <label className="block text-sm font-semibold mb-2">
                    Status
                  </label>
                  {statusOptions.map((option) => (
                    <div
                      key={option.value}
                      className={`px-2 py-1 text-white hover:bg-gray-800 cursor-pointer ${
                        filters.status === option.value ? "bg-gray-800" : ""
                      }`}
                      onClick={() => handleOptionClick("status", option.value)}
                    >
                      {option.label}
                    </div>
                  ))}
                </div>

                <DropdownMenuSeparator />

                <Button
                  variant="ghost"
                  onClick={clearFilters}
                  className="w-full transition-colors"
                >
                  Clear Filters
                </Button>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
        </div>

        {/* tournament cards */}
        <TournamentSection filters={filters} />
      </div>
    </div>
  );
};

export default TournamentPage;
