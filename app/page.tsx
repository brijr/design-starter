import { Section, Container, Prose } from "@/components/ds";

export default function Home() {
  return (
    <>
      <Hero />
      <About />
    </>
  );
}

const Hero = () => {
  return (
    <Section>
      <Container>
        <Prose isSpaced>
          <h1>Welcome to the Design Starter by Bridger Tower</h1>
          <p>
            This is a paragraph. Lorem ipsum dolor sit amet consectetur
            adipisicing elit. Quisquam, quod.
          </p>
        </Prose>
      </Container>
    </Section>
  );
};

const About = () => {
  return (
    <Section className="border-t">
      <Container>
        <Prose isSpaced>
          <h2>About</h2>
          <p>
            This is a paragraph. Lorem ipsum dolor sit amet consectetur
            adipisicing elit. Quisquam, quod.
          </p>
        </Prose>
      </Container>
    </Section>
  );
};
