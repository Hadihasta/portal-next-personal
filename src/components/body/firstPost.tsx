import React from 'react'
import { Inset, Box, Card, Text, Strong } from '@radix-ui/themes'
import Views from '../global/Views'

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
            <Strong>Finding Path To My Favorite Stack</Strong>
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

        <Views counter={'5.590'}/>
        </Card>
      </Box>
    </div>
  )
}

export default FirstPost
