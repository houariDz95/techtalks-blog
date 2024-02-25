"use client"
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { z } from "zod"
import { Input } from "./ui/input"
import { Form, FormControl, FormField, FormItem, FormMessage } from "./ui/form"
import { Textarea } from "./ui/textarea"
import { useState } from "react"
import emailjs from "@emailjs/browser";

const formSchema = z.object({
  name: z.string().min(2),
  email: z.string().min(2),
  descreption: z.string().min(2).max(400),
})



const ContactForm = () => {

  const [loading, setLoading] = useState(false);

    const form = useForm({
        resolver: zodResolver(formSchema),
        defaultValues: {
          name: "",
          email: "",
          descreption: "",
        },
      })
    
      function onSubmit(values) {
        setLoading(true);
        emailjs
        .send(
          "service_gl8fl6f",
          "template_sk29j9p",
          {
            from_name: values.name,
            to_name: "Blogging Group",
            from_email: values.email,
            to_email: "blogginggroup54@gmail.com",
            message: values.descreption,
          },
          "EYu1M4KYvU9C4pdvi"
        )
        .then(
          () => {
            setLoading(false);
            alert("Thank you. I will get back to you as soon as possible.");
          },
          (error) => {
            setLoading(false);
            console.error(error);
  
            alert("Ahh, something went wrong. Please try again.");
          }
        );
      }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8 py-5 pr-5 w-full">
        <FormField
          control={form.control}
          name="name"
          render={({ field }) => (
            <FormItem>
              <FormControl>
                <Input placeholder="Your Name" {...field} disabled={loading}  />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem>
              <FormControl>
                <Input placeholder="Email Address" {...field} disabled={loading}  />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control} 
          name="descreption"
          render={({ field }) => (
            <FormItem>
              <FormControl>
                <Textarea placeholder="Message" {...field} cols="6" disabled={loading} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <button disabled={loading} type="submit" className="disabled:cursor-not-allowed disabled:opacity-50 mt-8 font-medium inline-block capitalize text-lg sm:text-xl py-2 sm:py-3 px-6 sm:px-8 border-2 border-solid border-dark dark:border-light rounded cursor-pointer">
          {loading ? "Sending..." : "send request"}
        </button>
      </form>
    </Form>
  )
}

export default ContactForm