import React from "react";
import { 
  Heading, 
  Text, 
  Button, 
  Card, 
  Column, 
  Row, 
  Flex, 
  Badge, 
  Meta, 
  Schema 
} from "@once-ui-system/core";
import { opportunities, person, baseURL } from "@/resources";

export default function Opportunities() {
  return (
    <Column maxWidth="m" gap="xl" horizontal="center">
      <Schema
        as="webPage"
        baseURL={baseURL}
        path={opportunities.path}
        title={opportunities.title}
        description={opportunities.description}
        image={`/api/og/generate?title=${encodeURIComponent(opportunities.title)}`}
        author={{
          name: person.name,
          url: `${baseURL}/about`,
          image: `${baseURL}${person.avatar}`,
        }}
      />
      
      <Column gap="m" horizontal="center">
        <Heading wrap="balance" variant="display-strong-s">
          {opportunities.title}
        </Heading>
        <Text 
          wrap="balance" 
          onBackground="neutral-weak" 
          variant="body-default-l"
        >
          {opportunities.description}
        </Text>
      </Column>

      <Column gap="l" fillWidth>
        {opportunities.opportunities.length > 0 ? (
          <>
            <Row gap="m" wrap>
              {opportunities.opportunities.map((opportunity: any, index: number) => (
                <Card
                  key={index}
                  padding="l"
                  radius="m"
                  background="surface"
                  border="neutral-alpha-weak"
                  fillWidth
                >
                  <Column gap="m">
                    <Column gap="s">
                      <Heading variant="heading-strong-m">
                        {opportunity.title}
                      </Heading>
                      <Text 
                        variant="body-default-m" 
                        onBackground="neutral-weak"
                      >
                        {opportunity.description}
                      </Text>
                    </Column>
                    
                    <Column gap="s">
                      <Text variant="label-default-s" onBackground="neutral-strong">
                        Requirements:
                      </Text>
                      <Column gap="xs">
                        {opportunity.requirements.map((req: string, reqIndex: number) => (
                          <Text 
                            key={reqIndex}
                            variant="body-default-s"
                            onBackground="neutral-weak"
                          >
                            • {req}
                          </Text>
                        ))}
                      </Column>
                    </Column>
                    
                    <Flex gap="s" vertical="center">
                      <Badge>
                        {opportunity.timeCommitment}
                      </Badge>
                    </Flex>
                  </Column>
                </Card>
              ))}
            </Row>
            
            <Column gap="m" horizontal="center">
              <Text 
                variant="body-default-m" 
                onBackground="neutral-weak"
              >
                Ready to make an impact? Apply now to join our team!
              </Text>
              <Button 
                href={opportunities.applicationLink}
                variant="primary"
                size="l"
                suffixIcon="arrowUpRight"
              >
                Apply Now
              </Button>
            </Column>
          </>
        ) : (
          <Column gap="l" horizontal="center" vertical="center" style={{ minHeight: "40vh" }}>
            <Column gap="m" horizontal="center">
              <Heading variant="heading-strong-l" onBackground="neutral-medium">
                More Opportunities Coming Soon
              </Heading>
              <Text 
                variant="body-default-l" 
                onBackground="neutral-weak"
                align="center"
                wrap="balance"
              >
                We're working on exciting new ways for you to get involved with DFA UCLA. 
                Check back soon for opportunities to join our team and make an impact through design!
              </Text>
            </Column>
            
            <Column gap="s" horizontal="center">
              <Text 
                variant="body-default-s" 
                onBackground="neutral-weak"
              >
                Want to be notified when opportunities open up?
              </Text>
              <Button 
                href="mailto:ucla@designforamerica.com?subject=Interest in DFA UCLA Opportunities"
                variant="secondary"
                size="m"
                suffixIcon="email"
              >
                Get Notified
              </Button>
            </Column>
          </Column>
        )}
      </Column>
    </Column>
  );
}

export async function generateMetadata() {
  return Meta.generate({
    title: opportunities.title,
    description: opportunities.description,
    baseURL: baseURL,
    path: opportunities.path,
    image: `${baseURL}/api/og/generate?title=${encodeURIComponent(opportunities.title)}`,
  });
} 