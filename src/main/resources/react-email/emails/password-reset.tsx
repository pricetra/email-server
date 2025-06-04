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

export const PasswordReset = () => (
  <Html>
    <Head />
    <Preview>Your password reset code is {`{{code}}`}</Preview>
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
            <Text className="text-2xl font-bold mt-8">
              Hi, {`{{fullName}}`}
            </Text>
            <Hr className="border-gray-200 my-5" />
            <Section>
              <Text className="text-xl font-bold">
                Password Reset Code
              </Text>
              <Text className="text-gray-700">
                You requested a password reset on your Pricetra account. Please
                use the code below to reset your password:
              </Text>
              <Text className="text-2xl mt-5 text-center indent-[20px] tracking-[20px] bg-gray-100 p-5 rounded-lg font-bold">
                {`{{code}}`}
              </Text>

              <br />

              <Text className="text-gray-500">
                If this action was not performed by you, please disregard this
                email. Thank you.
              </Text>
            </Section>
          </Section>
        </Container>
      </Tailwind>
    </Body>
  </Html>
);

export default PasswordReset;

const main = {
  backgroundColor: "#fff",
  fontFamily:
    '-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Ubuntu,sans-serif',
};
