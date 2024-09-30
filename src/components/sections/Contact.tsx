import { ContactDetail } from "../contactdetail";
const Contact = () => {
  return (
    <section id="contact" className="min-h-auto bg-black-100 p-8">
      <main
        className={`max-w-4xl w-full mx-auto py-5 md:py-20 px-4 md:px-10 border-4  border-blue-100 rounded-3xl`}
      >
        <div className="flex flex-row items-center justify-center mb-5">
          <span className="text-5xl">✉️ </span>
          <div className="text-3xl md:text-3xl lg:text-5xl text-white-100 font-semibold bg-clip-text text-transparent bg-gradient-to-r from-primary to-secondary">
            {" "}
            Contact Me
          </div>
        </div>
        <p className="text-sm lg:text-lg  text-white items-center justify-center font-normal text-secondary mb-5">
          Reach out to me over email or fill up this contact form. I will get
          back to you ASAP - I promise.{" "}
        </p>
        <ContactDetail />
      </main>
    </section>
  );
};

export default Contact;
