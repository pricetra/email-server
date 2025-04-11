import {
  Body,
  Button,
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
import React from "react";

export const EmailVerification = () => (
  <Html>
    <Head>
      <style>{`
        @media (prefers-color-scheme: light) {
          .light {
            display: block !important;
          }
          .dark {
            display: none !important;
          }
        }
      `}</style>
    </Head>
    <Preview>Your verification code is {`{{code}}`}</Preview>
    <Body style={main}>
      <Tailwind>
        <Container className="my-10 mx-auto py-10 px-5 bg-white max-w-[450px] rounded-lg">
          <Section className="px-12">
            <Section className="flex items-center justify-center text-center">
              <Img
                src="https://res.cloudinary.com/pricetra-cdn/image/upload/v1743137791/logotype_black_color_cckqyj.png"
                width="180"
                alt="Pricetra"
                className="light"
              />
              <Img
                src="https://res.cloudinary.com/pricetra-cdn/image/upload/v1744403096/logotype_white_color_cckqyj.png"
                width="180"
                alt="Pricetra"
                className="dark"
                style={{ display: "none" }}
              />
            </Section>
            <Hr className="border-gray-200 mt-8 mb-2" />
            <Section>
              <Text className="text-2xl font-bold">Hi, {`{{name}}`}</Text>
              <Text className="text-gray-700">
                We're almost done, you just need to verify your email address
                using the code below to activate your Pricetra account.
              </Text>
              <Text className="text-2xl mt-5 text-center tracking-[20px] bg-gray-100 p-5 rounded-lg font-bold">
                {`{{code}}`}
              </Text>
            </Section>
          </Section>
        </Container>
      </Tailwind>
    </Body>
  </Html>
);

export default EmailVerification;

const main = {
  backgroundColor: "#fff",
  fontFamily:
    '-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Ubuntu,sans-serif',
};
