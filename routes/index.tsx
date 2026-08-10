// import { Head } from "fresh/runtime";
import { define } from "../utils.ts";
import { Pricing } from "@/components/Pricing.tsx";
import { TeamMembers } from "@/components/Team.tsx";
import { Testimonial } from "@/components/Testimonial.tsx";
import { Expertise } from "@/components/Expertise.tsx";
import { Services } from "@/components/Services.tsx";
import { Approach } from "@/components/Approach.tsx";
import { Contact } from "@/components/Contact.tsx";
import { Hero } from "@/components/Hero.tsx";
import { Header } from "@/components/Header.tsx";
import { Footer } from "@/components/Footer.tsx";

export default define.page(function Home(ctx) {
  return (
    <>
      <Header />
      <main id="top">
        <Hero />
        <Services />
        <Approach />
        <Expertise />
        <TeamMembers />
        <Pricing />
        {/* <Testimonial /> */}
        <Contact />
      </main>
      <Footer />
      
      <script src="app.js" />
    </>
  );
});
