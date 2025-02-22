import React from "react";
import Layout from "../components/layout";
import HeroSection from "../components/hero-section";
import AboutSection from "../components/about-section";
import DonationSection from "../components/donation-section";
import ContactSection from "../components/contact-section";
import Navbar from "../components/navbar";

const HomePage = () => {
  return (
    <Layout>
      <Navbar/>
      <HeroSection />
      <AboutSection />
      <DonationSection />
      <ContactSection />
    </Layout>
  );
};

export default HomePage;