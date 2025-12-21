import React from "react";
import {
  Body,
  Container,
  Head,
  Hr,
  Html,
  Img,
  Link,
  Preview,
  Section,
  Tailwind,
  Text,
} from "@react-email/components";

export default function Home() {
  return (
    <Html>
      <Head />
      <Preview>Welcome to Pricetra — thanks for being an early user!</Preview>
      <Body style={main}>
        <Tailwind>
          <Container className="my-10 mx-auto py-10 px-5 bg-white max-w-[450px] rounded-lg">
            <Section className="px-0">
              <Section className="text-center">
                <Link href="https://pricetra.com">
                  <Img
                    src="https://res.cloudinary.com/pricetra-cdn/image/upload/v1744669949/My%20Brand/logo_icon_blue%40300.png"
                    width="60"
                    alt="Pricetra"
                    className="mx-auto"
                  />
                </Link>
              </Section>
              <Hr className="border-gray-200 mt-8 mb-2" />
              <Section>
                <Text className="text-2xl font-bold">Hi {`{{fullName}}`},</Text>
                <Text className="text-base font-bold text-gray-700">
                  Welcome to Pricetra, and thanks for joining us early.
                </Text>
  
                <Text className="text-black">
                  <Link href="https://pricetra.com/home">Pricetra</Link> is still evolving, with new features, <Link href="https://pricetra.com/stores">stores</Link>, <Link href="https://pricetra.com/search?sale=true">deals</Link>, and improvements rolling out regularly. Our <Link href="https://pricetra.com/mobile-app">mobile app</Link> is currently in development and testing, and store coverage continues to grow across both major chains and local retailers.
                </Text>
  
                <Section className="mt-10 text-gray-800 leading-none">
                  <Text className="my-0">
                    Thanks for being part of the journey,
                  </Text>
                  <Text className="my-0">
                    The Pricetra Team
                  </Text>
                </Section>
              </Section>
            </Section>
          </Container>
        </Tailwind>
      </Body>
    </Html>
  );
}

const main = {
  backgroundColor: "#fff",
  fontFamily:
    '-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Ubuntu,sans-serif',
};
