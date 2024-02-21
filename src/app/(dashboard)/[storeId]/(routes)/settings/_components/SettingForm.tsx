"use client";
import Heading from "@/components/Heading";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Separator } from "@/components/ui/separator";
import { zodResolver } from "@hookform/resolvers/zod";
import { Store } from "@prisma/client";
import { TrashIcon } from "@radix-ui/react-icons";
import { useState } from "react";
import { useForm } from "react-hook-form";
import * as z from "zod";

interface SettingsFormProps {
  initialData: Store;
}

const formSchema = z.object({
  name: z.string().trim().min(2, {
    message: "Minimum 2 characters required!",
  }),
});

type SettingFormValues = z.infer<typeof formSchema>;

const SettingForm = ({ initialData }: SettingsFormProps) => {
  const [isLoading, setIsLoading] = useState(false);
  const [open, setOpen] = useState(false);
  const form = useForm<SettingFormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: initialData,
  });
  const onSubmit = (values: SettingFormValues) => {
    console.log(values);
  };
  return (
    <>
      <div className="flex items-center justify-between">
        <Heading
          title="Settings"
          description="Manage store preferences"
        ></Heading>
        <Button
          disabled={isLoading}
          variant="destructive"
          size="icon"
          onClick={() => setOpen(true)}
        >
          <TrashIcon className="w-4 h-4"></TrashIcon>
        </Button>
      </div>
      <Separator></Separator>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
          <div className="grid grid-cols-3 gap-8">
            <FormField
              control={form.control}
              name="name"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Store Name</FormLabel>
                  <FormControl>
                    <Input
                      disabled={isLoading}
                      placeholder="Store name..."
                      {...field}
                    ></Input>
                  </FormControl>
                  <FormMessage></FormMessage>
                </FormItem>
              )}
            ></FormField>
          </div>
          <Button disabled={isLoading} type="submit">
            Save Changes
          </Button>
        </form>
      </Form>
    </>
  );
};
export default SettingForm;
