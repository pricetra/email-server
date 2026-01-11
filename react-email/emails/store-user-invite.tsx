import React from "react";
import {
  Body,
  Button,
  Column,
  Container,
  Head,
  Hr,
  Html,
  Img,
  Link,
  Preview,
  Row,
  Section,
  Tailwind,
  Text,
} from "@react-email/components";

export default function Home() {
  return (
    <Html>
      <Head />
      <Preview>You have been invited to join {`{{store}}`} as {`{{role}}`} by {`{{inviter}}`}</Preview>
      <Body style={main}>
        <Tailwind>
          <Container className="my-10 mx-auto py-10 px-5 bg-white max-w-[450px] rounded-lg">
            <Section className="px-0">
              <Section className="text-center">

                <Row cellSpacing={8}>
                  <Column align="center" className="w-[60px]">
                    <Link href="https://pricetra.com">
                      <Img
                        src="https://res.cloudinary.com/pricetra-cdn/image/upload/v1744669949/My%20Brand/logo_icon_blue%40300.png"
                        width="60"
                        alt="Pricetra"
                        className="mx-auto"
                      />
                    </Link>
                  </Column>

                  <Column align="center" className="w-[10%]">
                    <Text className="text-[2em]">+</Text>
                  </Column>

                  <Column align="center" className="w-[60px]">
                    <Link href="https://pricetra.com/stores/{{storeSlug}}">
                      <Img
                        src="https://res.cloudinary.com/pricetra-cdn/image/upload/w_100/{{storeLogo}}"
                        width="60"
                        alt="{{store}}"
                        className="mx-auto rounded-xl"
                      />
                    </Link>
                  </Column>
                </Row>
              </Section>
              <Hr className="border-gray-200 mt-8 mb-2" />
              <Section>
                <Text className="text-2xl font-bold">Hi {`{{invitee}}`},</Text>
                <Text className="text-base font-bold text-black">
                  You have been invited to join <Link href="https://pricetra.com/stores/{{storeSlug}}">{`{{store}}`}</Link> as {`{{role}}`} by {`{{inviter}}`}
                </Text>
  
                <Text className="text-black">
                  You are receiving this email because you have either signed up to add your store <Link href="https://pricetra.com/stores/{{storeSlug}}">{`{{store}}`}</Link> to Pricetra, or you were added by another user to join their store.
                </Text>

                <Row>
                  <td align="center" className="w-1/2 pr-[16px]" colSpan={1}>
                    <Button
                      className="box-border w-full rounded-[8px] bg-[#396a12] px-[20px] py-[12px] text-center font-semibold text-white"
                      href="https://pricetra.com/auth/store-invite/accept?data={{accept}}"
                    >
                      Accept and Join
                    </Button>
                  </td>
                  <td align="center" className="w-1/2 pl-[16px]" colSpan={1}>
                    <Button
                      className="box-border w-full rounded-[8px] border border-gray-200 border-solid bg-white px-[20px] py-[12px] text-center font-semibold text-gray-900"
                      href="https://pricetra.com/auth/store-invite/decline?data={{decline}}"
                    >
                      Decline
                    </Button>
                  </td>
                </Row>

                <br />
                <br />

                <Text className="text-gray-700">
                  If you're sure this wasn't you, please press decline or simply disregard this email. If you have any questions feel free to ask our support team at: <Link href="mailto:support@pricetra.com" className="text-blue-500">support@pricetra.com</Link>.
                </Text>

                <Text>Thank you.</Text>
  
                <Section className="mt-10 text-gray-800 leading-none">
                  <Text className="my-0">
                    Sincerely,
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
