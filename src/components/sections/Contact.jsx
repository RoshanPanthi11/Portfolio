import { useRef, useState } from "react";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";

import { Mail, Phone, MapPin } from "lucide-react";
import { FaGithub, FaLinkedinIn } from "react-icons/fa";


function Contact() {

  const form = useRef();

  const [status, setStatus] = useState("");



  const sendEmail = (e) => {
  e.preventDefault();

  setStatus("Sending...");

  emailjs
    .sendForm(
      import.meta.env.VITE_EMAILJS_SERVICE_ID,
      import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
      form.current,
      {
        publicKey: import.meta.env.VITE_EMAILJS_PUBLIC_KEY,
      }
    )
    .then(() => {
      setStatus("Message sent successfully!");
      form.current.reset();
    })
    .catch(() => {
      setStatus("Failed to send message!");
    });
};


  return (

    <section
      id="contact"
      className="relative overflow-hidden bg-[#09090B] pt-16 pb-16 text-white"
    >


      {/* Grid Pattern */}

      <div className="absolute inset-0 opacity-[0.03] bg-[linear-gradient(to_right,#ffffff_1px,transparent_1px),linear-gradient(to_bottom,#ffffff_1px,transparent_1px)] bg-[size:70px_70px]" />



      <div className="relative max-w-7xl mx-auto px-6 lg:px-10">



        {/* Heading */}

        <motion.div

          initial={{
            opacity:0,
            y:60
          }}

          whileInView={{
            opacity:1,
            y:0
          }}

          viewport={{
            once:true
          }}

          transition={{
            duration:.8
          }}

          className="mb-24"

        >


          <p className="uppercase tracking-[0.35em] text-xs text-zinc-500">
            Contact
          </p>


          <h2 className="mt-5 text-5xl md:text-7xl lg:text-8xl font-black leading-none tracking-tight">

            Let's Build

            <br />

            <span className="bg-gradient-to-r from-white via-zinc-300 to-zinc-500 bg-clip-text text-transparent">
              Something Together.
            </span>


          </h2>


        </motion.div>





        <div className="grid lg:grid-cols-2 gap-20">



          {/* LEFT SIDE */}


          <motion.div

            initial={{
              opacity:0,
              x:-80
            }}

            whileInView={{
              opacity:1,
              x:0
            }}

            viewport={{
              once:true
            }}

            transition={{
              duration:.8
            }}

          >


            <p className="text-lg leading-9 text-zinc-400">

              Have a project idea, job opportunity, or want to
              collaborate? Feel free to send me a message.

            </p>




            <div className="mt-12 space-y-8">



              <div className="flex items-center gap-5">

                <div className="p-4 rounded-2xl bg-white/[0.04] border border-white/10">

                  <Mail className="text-zinc-300"/>

                </div>


                <div>

                  <p className="text-xs uppercase tracking-[0.3em] text-zinc-500">
                    Email
                  </p>

                  <p className="mt-2 text-zinc-300">
                    roshanpanthi13@gmail.com
                  </p>

                </div>

              </div>





              <div className="flex items-center gap-5">

                <div className="p-4 rounded-2xl bg-white/[0.04] border border-white/10">

                  <Phone className="text-zinc-300"/>

                </div>


                <div>

                  <p className="text-xs uppercase tracking-[0.3em] text-zinc-500">
                    Phone
                  </p>

                  <p className="mt-2 text-zinc-300">
                    +977 98XXXXXXXX
                  </p>

                </div>

              </div>






              <div className="flex items-center gap-5">

                <div className="p-4 rounded-2xl bg-white/[0.04] border border-white/10">

                  <MapPin className="text-zinc-300"/>

                </div>


                <div>

                  <p className="text-xs uppercase tracking-[0.3em] text-zinc-500">
                    Location
                  </p>

                  <p className="mt-2 text-zinc-300">
                    Kathmandu, Nepal
                  </p>

                </div>

              </div>



            </div>





            <div className="flex gap-5 mt-12">


              <a
                href="https://github.com/RoshanPanthi11"
                className="p-4 rounded-2xl border border-white/10 bg-white/[0.04] hover:bg-white/10 transition"
              >

                <FaGithub size={22}/>

              </a>



              <a
                href="#"
                className="p-4 rounded-2xl border border-white/10 bg-white/[0.04] hover:bg-white/10 transition"
              >

                <FaLinkedinIn size={22}/>

              </a>


            </div>



          </motion.div>







          {/* FORM */}



          <motion.form

            ref={form}

            onSubmit={sendEmail}


            initial={{
              opacity:0,
              x:80
            }}

            whileInView={{
              opacity:1,
              x:0
            }}

            viewport={{
              once:true
            }}

            transition={{
              duration:.8
            }}


            className="rounded-[40px] border border-white/10 bg-white/[0.04] backdrop-blur-2xl p-10 shadow-[0_0_40px_rgba(255,255,255,0.03)] space-y-6"

          >



            <input

              name="user_name"

              type="text"

              placeholder="Your Name"

              required

              className="w-full rounded-2xl border border-white/10 bg-black/20 px-5 py-4 text-white outline-none focus:border-white/30"

            />




            <input

              name="user_email"

              type="email"

              placeholder="Your Email"

              required

              className="w-full rounded-2xl border border-white/10 bg-black/20 px-5 py-4 text-white outline-none focus:border-white/30"

            />





            <input

              name="subject"

              type="text"

              placeholder="Subject"

              required

              className="w-full rounded-2xl border border-white/10 bg-black/20 px-5 py-4 text-white outline-none focus:border-white/30"

            />





            <textarea

              name="message"

              rows="5"

              placeholder="Your Message"

              required

              className="w-full rounded-2xl border border-white/10 bg-black/20 px-5 py-4 text-white outline-none focus:border-white/30"

            />





            <button

              type="submit"

              className="w-full rounded-2xl bg-white text-black py-4 font-semibold hover:bg-zinc-200 transition"

            >

              Send Message

            </button>



            {
              status && (

                <p className="text-center text-sm text-zinc-400">
                  {status}
                </p>

              )
            }



          </motion.form>




        </div>


      </div>


    </section>

  );

}


export default Contact;