import "./App.css";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Section from "./components/Section";
import GlobalStyles from "./styles/Global";
import { ThemeProvider } from "styled-components";
import { theme } from "./styles/Theme";
import CardSection from "./components/CardSection";
import ServiceSection from "./components/ServiceSection";
import TabSection from "./components/TabSection";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <ThemeProvider theme={theme}>
        <GlobalStyles />
        <Header />
        <Hero />
        <Section
          name="CardSection"
          headlineContent="WHAT WE DO"
          subheadlineContent="THIS IS SOME TEXT INSIDE OF A DIV BLOCK."
        >
          <CardSection />
        </Section>

        <Section
          name="ServiceSection"
          headlineContent="SERVICES"
          subheadlineContent="THIS IS SOME TEXT INSIDE OF A DIV BLOCK."
        >
          <ServiceSection />
        </Section>

        <Section
          name="TabSection"
          headlineContent="TAB SECTION"
          subheadlineContent="THIS IS SOME TEXT INSIDE OF A DIV BLOCK."
        >
          <TabSection/>
        </Section>
        <Footer name= "Footer"/>
      </ThemeProvider>
    </>
  );
}

export default App;
