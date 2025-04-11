"use client";
// import Image from "next/image";
import Logo from "@/app/components/logo";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { ChevronRightIcon } from "lucide-react";

import { toast } from "sonner";
// import { Toaster } from "@/components/ui/sonner"
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
//   FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { ScrollArea } from "@/components/ui/scroll-area";

// Name (الاسم)
// Age (العمر)
// Address (العنوان)
// Qualification (المؤهل الدراسي)
// Disability (الإعاقة)
// Graduation Date (تاريخ التخرج)
// Gender (النوع)
// Position Applied For (الوظيفة المتقدم لها)
// Attachments (المرفقات) (up to 3 files):
// CV (السيرة الذاتية)
// National ID (البطاقة الشخصية)
// Disability Card (بطاقة إثبات الإعاقة)
// const fields = [ "Name", "Age", "Address", "Qualification"]

const fields = [
  {
    title: "name",
    ar: "الاسم",
    en: "Name",
    type: "text",
    placeholder: "Enter your name",
  },
  { title: "age", ar: "العمر", en: "Age", type: "number", placeholder: "25" },
  {
    title: "address",
    ar: "العنوان",
    en: "Address",
    type: "text",
    placeholder: "Cairo",
  },
  {
    title: "qualification",
    ar: "المؤهل الدراسي",
    en: "Qualification",
    type: "text",
    placeholder: "Bachelor",
  },
  {
    title: "disability",
    ar: "الإعاقة",
    en: "Disability",
    type: "text",
    placeholder: "None",
  },
  {
    title: "graduationDate Date",
    ar: "تاريخ التخرج",
    en: "Graduation Date",
    type: "date",
    placeholder: "2023-01-01",
  },
  {
    title: "gender",
    ar: "النوع",
    en: "Gender",
    type: "text",
    placeholder: "Male",
  },
  {
    title: "positionAppliedFor",
    ar: "الوظيفة المتقدم لها",
    en: "Position Applied For",
    type: "text",
    placeholder: "Software Engineer",
  },
  // {title: "Attachments", ar: "المرفقات", en: "Attachments", type: "file", placeholder: "" },
];

const FormSchema = z.object({
  name: z.string().min(2, {
    message: "Name must be at least 2 characters.",
    // message: "الاسم يجب أن يكون على الأقل حرفين.",
  }),
  age: z.string().min(1, {
    message: "Age must be at least 1 character.",
    // message: "العمر يجب أن يكون على الأقل حرفين.",
  }),
  address: z.string().min(1, {
    message: "Address must be at least 1 character.",
    // message: "العنوان يجب أن يكون على الأقل حرفين.",
  }),
  qualification: z.string().min(1, {
    message: "Qualification must be at least 1 character.",
    // message: "المؤهل الدراسي يجب أن يكون على الأقل حرفين.",
  }),
  disability: z.string().min(1, {
    message: "Disability must be at least 1 character.",
    // message: "الإعاقة يجب أن يكون على الأقل حرفين.",
  }),
  graduationDate: z.string().min(1, {
    message: "Graduation Date must be at least 1 character.",
    // message: "تاريخ التخرج يجب أن يكون على الأقل حرفين.",
  }),

  gender: z.string().min(1, {
    message: "Gender Applied For must be at least 1 character.",
    // message: "الوظيفة المتقدم لها يجب أن يكون على الأقل حرفين.",
  }),
  positionAppliedFor: z.string().min(1, {
    message: "Position Applied For must be at least 1 character.",
    // message: "الوظيفة المتقدم لها يجب أن يكون على الأقل حرفين.",
  }),
  // attachments: z.string().min(1, {
  //     message: "Attachments must be at least 1 character.",
  //     // message: "المرفقات يجب أن يكون على الأقل حرفين.",
  // }),
  cv: z.string().min(1, {
    message: "CV must be at least 1 character.",
    // message: "السيرة الذاتية يجب أن يكون على الأقل حرفين.",
  }),
  nationalId: z.string().min(1, {
    message: "National ID must be at least 1 character.",
    // message: "البطاقة الشخصية يجب أن يكون على الأقل حرفين.",
  }),
  disabilityCard: z.string().min(1, {
    message: "Disability Card must be at least 1 character.",
    // message: "بطاقة إثبات الإعاقة يجب أن يكون على الأقل حرفين.",
  }),
});

export default function InputForm() {
  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
    defaultValues: {
      name: "",
    },
  });

  function onSubmit(data: z.infer<typeof FormSchema>) {
    // console.log(data);

    toast(`Welcome ${data.name}`, {
      description: (
        <div className="flex justify-center items-center">
          Account had been created successfully
        </div>
      ),
    });
  }

  return (
    <div className="w-full max-w-xl px-5 mx-auto h-screen flex justify-center items-center">
      <ScrollArea className="h-[100vh] pe-4">
        <div className="flex flex-col gap-0 sticky top-0 bg-background/50 z-10 py-0  w-full">
          <div className="flex justify-between items-center gap-4 mb-0 bg-background/100 w-full py-4 my-0   border-b px-4">
            <Logo />
            <div className="text-lg font-black uppercase">
              <h2>
                Mobility <span className="font-light">Cairo</span>{" "}
              </h2>
            </div>
          </div>
          <div className="w-full bg-gradient-to-b from-background/100 to-background/0 h-14 py-0"></div>
        </div>

        <div className="pb-[40vh]">
          <Form {...form}>
            <form
              onSubmit={form.handleSubmit(onSubmit)}
              className="w-full space-y-6"
            >
              {fields.map((field) => (
                <FormField
                  key={field.title}
                  control={form.control}
                  name={
                    field.title.toLowerCase() as
                      | "name"
                      | "age"
                      | "address"
                      | "qualification"
                      | "disability"
                      | "graduationDate"
                      | "gender"
                      | "positionAppliedFor"
                      | "cv"
                      | "nationalId"
                      | "disabilityCard"
                  }
                  render={({ field: formField }) => (
                    <FormItem>
                      <FormLabel>{field.en}</FormLabel>
                      {/* <FormDescription>{field.en}</FormDescription> */}

                      <FormControl>
                        <Input
                          placeholder={field.placeholder}
                          {...formField}
                          type={field.type}
                        />
                      </FormControl>

                      <FormMessage />
                    </FormItem>
                  )}
                />
              ))}
     
              <Button type="submit">Next <ChevronRightIcon /></Button>
            </form>
          </Form>
        </div>
      </ScrollArea>
    </div>
  );
}
