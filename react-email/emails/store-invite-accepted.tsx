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

export default function StoreInviteAccepted() {
  return (
    <Html>
      <Head />
      <Preview>{`{{inviter}}`} has joined {`{{store}}`} as {`{{role}}`}</Preview>
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
                    <Text className="text-[2em]" />
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
                <Text className="text-base font-bold text-black">
                  Hi {`{{inviter}}`},
                </Text>
  
                <Text className="text-black">
                  {`{{invitee}}`} accepted your invite to <Link href="https://pricetra.com/stores/{{storeSlug}}">{`{{store}}`}</Link> as {`{{role}}`}.
                </Text>
  
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
