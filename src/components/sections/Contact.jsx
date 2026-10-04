import { useState } from "react";
import SectionHeading from "../ui/SectionHeading";
import { links } from "../../data/links";

const FORM_URL = "https://formspree.io/f/myezrkgr";

const field =
  "w-full rounded-lg border border-slate-300 bg-white px-4 py-3 outline-none focus:border-sky-700 dark:border-slate-700 dark:bg-slate-900 dark:focus:border-sky-400";

export default function Contact() {
  const [status, setStatus] = useState("idle");

  async function handleSubmit(e) {
    e.preventDefault();
    const form = e.currentTarget;
    setStatus("sending");
    try {
      const res = await fetch(FORM_URL, {
        method: "POST",
        headers: { Accept: "application/json" },
        body: new FormData(form),
      });
      if (res.ok) {
        setStatus("sent");
        form.reset();
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  }

  return (
    <section id="contact" className="mx-auto max-w-6xl px-6 py-20">
      <SectionHeading title="Contact" />
      <div className="grid gap-12 md:grid-cols-2">
        <div className="space-y-4 text-slate-600 dark:text-slate-400">
        <p>
          I'm looking for developer roles and new opportunities. If you're hiring, or
          just want to talk about a project, send me a message.
        </p>  

          <ul className="space-y-2">
            <li>
              <a href={links.email} className="hover:text-sky-700 dark:hover:text-sky-400">
                {links.emailAddress}
              </a>
            </li>
            <li>
              <a href={links.linkedin} target="_blank" rel="noreferrer" className="hover:text-sky-700 dark:hover:text-sky-400">
                LinkedIn
              </a>
            </li>
            <li>
              <a href={links.github} target="_blank" rel="noreferrer" className="hover:text-sky-700 dark:hover:text-sky-400">
                GitHub
              </a>
            </li>
          </ul>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label htmlFor="name" className="mb-1 block text-sm">Name</label>
            <input id="name" name="name" required className={field} />
          </div>
          <div>
            <label htmlFor="email" className="mb-1 block text-sm">Email</label>
            <input id="email" name="email" type="email" required className={field} />
          </div>
          <div>
            <label htmlFor="message" className="mb-1 block text-sm">Message</label>
            <textarea id="message" name="message" rows="5" required className={field} />
          </div>
          <button
            type="submit"
            disabled={status === "sending"}
            className="rounded-lg bg-sky-700 px-6 py-3 font-bold text-white hover:bg-sky-800 disabled:opacity-60 dark:bg-sky-400 dark:text-slate-950 dark:hover:bg-sky-300"
          >
            {status === "sending" ? "Sending..." : "Send message"}
          </button>
          {status === "sent" && (
            <p className="text-sm text-green-700 dark:text-green-400">Message sent. Thanks, I'll reply soon.</p>
          )}
          {status === "error" && (
            <p className="text-sm text-red-700 dark:text-red-400">
              Something went wrong. You can email me directly instead.
            </p>
          )}
        </form>
      </div>
    </section>
  );
}