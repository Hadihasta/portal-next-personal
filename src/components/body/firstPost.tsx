import React from 'react'
import { Inset, Box, Card, Text, Strong, DataList, Link, Badge, Flex, Code, IconButton } from '@radix-ui/themes'
import { CopyIcon } from '@radix-ui/react-icons'
const FirstPost = () => {
  return (
    <div className="mt-4">
      <Box className="flex">
        <Card size="2">
          <Inset
            clip="padding-box"
            side="top"
            pb="current"
          >
            <div>
              <img
                src="/photo/alone.jpg"
                alt="Quote"
                style={{ display: 'block', objectFit: 'cover', width: '100%', height: 140 }}
              />
            </div>
          </Inset>

          <Text size="1">June 20, 2023 </Text>

          <Text
            as="p"
            size="3"
          >
            <Strong>Finding Path to my favorite stack</Strong>
          </Text>

          <Text
            as="p"
            size="2"
          >
            After completing the bootcamp I attended, I have always placed the technology stack I first learned in a
            special place. Although I have worked with various stacks depending on the demands of my projects, I often
            find myself returning to my primary stack, which consists of the following technologies
          </Text>

          <i className="i-tabler-brand-tailwind text-blue-600 text-3xl"></i>
          <i className="i-tabler-brand-react text-blue-600 text-3xl"></i>
          <i className="i-tabler-brand-prisma text-blue-600 text-3xl"></i>
          <DataList.Root>
            <DataList.Item align="center">
              <DataList.Label minWidth="88px">Status</DataList.Label>
              <DataList.Value>
                <Badge
                  color="jade"
                  variant="soft"
                  radius="full"
                >
                  Authorized
                </Badge>
              </DataList.Value>
            </DataList.Item>
            <DataList.Item>
              <DataList.Label minWidth="88px">ID</DataList.Label>
              <DataList.Value>
                <Flex
                  align="center"
                  gap="2"
                >
                  <Code variant="ghost">u_2J89JSA4GJ</Code>

                  <IconButton
                    size="1"
                    aria-label="Copy value"
                    color="gray"
                    variant="ghost"
                  >
                    <CopyIcon />
                  </IconButton>
                </Flex>
              </DataList.Value>
            </DataList.Item>
            <DataList.Item>
              <DataList.Label minWidth="88px">Name</DataList.Label>
              <DataList.Value>Vlad Moroz</DataList.Value>
            </DataList.Item>
            <DataList.Item>
              <DataList.Label minWidth="88px">Email</DataList.Label>
              <DataList.Value>
                <Link href="mailto:vlad@workos.com">vlad@workos.com</Link>
              </DataList.Value>
            </DataList.Item>
            <DataList.Item>
              <DataList.Label minWidth="88px">Company</DataList.Label>
              <DataList.Value>
                <Link
                  target="_blank"
                  href="https://workos.com"
                >
                  WorkOS
                </Link>
              </DataList.Value>
            </DataList.Item>
          </DataList.Root>
        </Card>
      </Box>
    </div>
  )
}

export default FirstPost
