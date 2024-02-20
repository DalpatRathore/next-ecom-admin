"use client";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { useStoreModal } from "@/hooks/useStoreModal";
import { Store } from "@prisma/client";
import {
  ActivityLogIcon,
  CaretSortIcon,
  CheckCircledIcon,
  PlusCircledIcon,
  ShadowIcon,
} from "@radix-ui/react-icons";
import { useParams, useRouter } from "next/navigation";
import { useState } from "react";
import { Button } from "./ui/button";
import { cn } from "@/lib/utils";
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
  CommandSeparator,
} from "./ui/command";

type PopoverTriggerProps = React.ComponentPropsWithoutRef<
  typeof PopoverTrigger
>;
interface StoreSwitcherProps extends PopoverTriggerProps {
  items: Store[];
}

const StoreSwitcher = ({ className, items = [] }: StoreSwitcherProps) => {
  const [open, setOpen] = useState(false);
  const storeModal = useStoreModal();

  const params = useParams();
  const router = useRouter();

  const formattedItems = items.map(item => ({
    label: item.name,
    value: item.id,
  }));

  const currentStore = formattedItems.find(
    item => item.value === params.storeId
  );

  const onStoreSelect = (store: { value: string; label: string }) => {
    setOpen(false);
    router.push(`/${store.value}`);
  };

  return (
    <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger asChild>
        <Button
          variant="outline"
          size="sm"
          role="Combobox"
          aria-expanded={open}
          aria-label="Select a store"
          className={cn("w-[200px] justify-between", className)}
        >
          <ActivityLogIcon className="mr-2 w-4 h-4"></ActivityLogIcon>
          {currentStore?.label}
          <CaretSortIcon className="ml-auto h-4 w-4 shrink-0 opacity-50"></CaretSortIcon>
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-[200px] p-0">
        <Command>
          <CommandList>
            <CommandInput placeholder="Search store..."></CommandInput>
            <CommandEmpty>No Store found.</CommandEmpty>
            <CommandGroup heading="Stores">
              {formattedItems.map(store => (
                <CommandItem
                  key={store.value}
                  onSelect={() => onStoreSelect(store)}
                  className="text-sm"
                >
                  <ShadowIcon className="mr-2 h-4 w-4"></ShadowIcon>
                  {store.label}
                  <CheckCircledIcon
                    className={
                      (cn("ml-auto h-4 w-4"),
                      currentStore?.value === store.value
                        ? "opacity-100"
                        : "opacity-0")
                    }
                  ></CheckCircledIcon>
                </CommandItem>
              ))}
            </CommandGroup>
          </CommandList>
          <CommandSeparator></CommandSeparator>
          <CommandList>
            <CommandGroup>
              <CommandItem
                onSelect={() => {
                  setOpen(false);
                  storeModal.onOpen();
                }}
              >
                <PlusCircledIcon className="mr-2 h-5 w-5"></PlusCircledIcon>
                Create Store
              </CommandItem>
            </CommandGroup>
          </CommandList>
        </Command>
      </PopoverContent>
    </Popover>
  );
};
export default StoreSwitcher;
