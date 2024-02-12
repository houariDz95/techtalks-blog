import ContactForm from "@/components/ContactForm"
import LottieAnimation from "@/components/LottieAnimation"

export const metadata = {
  title: "Contact Me",
  description: `Contact me through the form available on this page or email me at ${"email"}`,
};


const ContactPage = () => {
  return (
    <section className="w-full h-auto md:h-screen flex  flex-col md:flex-row items-center justify-center text-dark dark:text-light">
      <div className="inline-block w-full sm:w-4/5 md:w-2/5 h-full"><LottieAnimation /></div>
      <div className="w-full  md:w-3/5 flex flex-col items-start justify-center px-5 xs:px-10 md:px-16">
        <h2 className="font-bold mb-3 capitalize  text-2xl xs:text-3xl sm:text-4xl">Let&apos;s Connect!</h2>
        <ContactForm />
      </div>
    </section>
  )
}

export default ContactPage