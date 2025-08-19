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
    <Head />
    <Preview>Your verification code is {`{{code}}`}</Preview>
    <Body style={main}>
      <Tailwind>
        <Container className="my-10 mx-auto py-10 px-5 bg-white max-w-[450px] rounded-lg">
          <Section className="px-12">
            <Section className="text-center">
              <Img
                src="https://res.cloudinary.com/pricetra-cdn/image/upload/v1744669949/My%20Brand/logo_icon_blue%40300.png"
                width="60"
                alt="Pricetra"
                className="mx-auto"
              />
            </Section>
            <Hr className="border-gray-200 mt-8 mb-2" />
            <Section>
              <Text className="text-2xl font-bold">Hi, {`{{name}}`}</Text>
              <Text className="text-gray-700">
                We're almost done, you just need to verify your email address
                using the code below to activate your Pricetra account.
              </Text>
              <Text className="text-2xl mt-5 text-center indent-[20px] tracking-[20px] bg-gray-100 p-5 rounded-lg font-bold">
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
