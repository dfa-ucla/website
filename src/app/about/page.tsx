import {
  Avatar,
  Button,
  Column,
  Flex,
  Heading,
  Icon,
  IconButton,
  Media,
  Tag,
  Text,
  Meta,
  Schema,
  Card,
  Row,
  Grid,
} from "@once-ui-system/core";
import { baseURL, about, person, social, team } from "@/resources";
import React from "react";

export async function generateMetadata() {
  return Meta.generate({
    title: about.title,
    description: about.description,
    baseURL: baseURL,
    image: `/api/og/generate?title=${encodeURIComponent(about.title)}`,
    path: about.path,
  });
}

export default function About() {
  return (
    <Column maxWidth="m" gap="xl" horizontal="center">
      <Schema
        as="webPage"
        baseURL={baseURL}
        title={about.title}
        description={about.description}
        path={about.path}
        image={`/api/og/generate?title=${encodeURIComponent(about.title)}`}
        author={{
          name: person.name,
          url: `${baseURL}${about.path}`,
          image: `${baseURL}${person.avatar}`,
        }}
      />
      
      {/* Hero Section */}
      <Column gap="m" horizontal="center">
        <Heading wrap="balance" variant="display-strong-s">
          {about.title}
        </Heading>
        <Text 
          wrap="balance"
          onBackground="neutral-weak" 
          variant="body-default-l"
          style={{ textAlign: 'center' }}
        >
          {about.description}
        </Text>
      </Column>

      {/* Chapter History Section */}
      <Column gap="m" fillWidth>
        <Heading as="h2" variant="display-strong-s">
          {about.intro.title}
        </Heading>
        <Column gap="l" textVariant="body-default-l">
          {about.intro.description}
          {about.intro.sections?.map((section, index) => (
            <Column key={index} gap="m">
              <Heading as="h3" variant="heading-strong-m">
                {section.title}
              </Heading>
              <Text variant="body-default-m">
                {section.content}
              </Text>
            </Column>
          ))}
        </Column>
      </Column>

      {/* Our Team Section */}
      <Column gap="l" fillWidth>
        <Heading as="h2" variant="display-strong-s">
          {team.title}
        </Heading>
        <Flex horizontal="center" fillWidth>
          <Grid
            columns="3"
            mobileColumns="1"
            tabletColumns="2"
            gap="l"
            style={{ maxWidth: 'fit-content' }}
          >
          {team.members.map((member, index) => (
            <Card
              key={index}
              padding="l"
              radius="m"
              background="surface"
              border="neutral-alpha-weak"
              fillWidth
              style={{ textAlign: 'center' }}
            >
              <Column gap="m" horizontal="center" fillWidth>
                <Avatar 
                  src={member.image} 
                  size="xl" 
                />
                <Column gap="s" horizontal="center" fillWidth>
                  <Heading variant="heading-strong-m" wrap="balance">
                    {member.name}
                  </Heading>
                  <Text 
                    variant="label-default-s" 
                    onBackground="brand-weak"
                    wrap="balance"
                  >
                    {member.role}
                  </Text>
                  <Text 
                    variant="body-default-s" 
                    onBackground="neutral-weak"
                    style={{ whiteSpace: 'nowrap' }}
                  >
                    {member.bio}
                  </Text>
                </Column>
                <Flex gap="s" horizontal="center" fillWidth>
                  <IconButton
                    href={member.linkedin}
                    icon="linkedin"
                    variant="secondary"
                    size="s"
                  />
                  <IconButton
                    href={`mailto:${member.email}`}
                    icon="email"
                    variant="secondary"
                    size="s"
                  />
                </Flex>
              </Column>
            </Card>
          ))}
          </Grid>
        </Flex>
      </Column>

      {/* Contact Section */}
      <Column gap="m" horizontal="center">
        <Heading as="h2" variant="display-strong-s">
          {about.contact.title}
        </Heading>
        <Text 
          variant="body-default-m" 
          onBackground="neutral-weak"
          style={{ textAlign: 'center' }}
        >
          {about.contact.description}
        </Text>
        <Flex gap="m" horizontal="center">
          {social.map(
            (item) =>
              item.link && (
                <Button
                  key={item.name}
                  href={item.link}
                  prefixIcon={item.icon}
                  label={item.name}
                  size="m"
                  variant="secondary"
                />
              ),
          )}
        </Flex>
      </Column>
    </Column>
  );
}
