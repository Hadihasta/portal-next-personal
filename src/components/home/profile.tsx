'use client'

import React from 'react'
import { Flex, Avatar, Box, Card, Text } from '@radix-ui/themes'

const Profile = () => {
  return (
    <>
      <Box maxWidth="240px">
        <Card>
          <Flex
            gap="4"
            align="center"
          >
            <Avatar
              size="3"
              src="/close_up.jpg"
              radius="full"
              fallback="T"
            />
            <Box>
              <Text
                as="div"
                size="2"
                weight="bold"
              >
                Hijri Hadi
              </Text>
              <Text
                as="div"
                size="2"
                color="gray"
              >
                Web Developer
              </Text>
            </Box>
            <div className='animate-bounce-x flex size-10  items-center justify-center rounded-full bg-white p-2 ring-1 ring-gray-900/5 dark:bg-white/5 dark:ring-white/20'>

            <i className="i-tabler-arrow-narrow-right font- cursor-pointer text-3xl "></i>
            </div>
          </Flex>
        </Card>
      </Box>
{/* 
      <Flex gap="2">
        <Avatar
          src="/close_up.jpg"
          fallback=""
          size="8"
        />
        <Avatar fallback="B" size="3" radius="full" />
      </Flex> */}
    </>
  )
}

export default Profile
