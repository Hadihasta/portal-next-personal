'use client'

import React from 'react'
import { Flex, Avatar, Box, Card, Text } from '@radix-ui/themes'
import { DotLottieReact } from '@lottiefiles/dotlottie-react'

const Profile = () => {
  return (
    <div>
      <Box maxWidth="240px">
        <Card>
          <Flex
            gap="3"
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
            <i className="i-tabler-arrow-narrow-right"></i>
          </Flex>
        </Card>
        <DotLottieReact
          src="https://lottie.host/b413b45c-6e2d-4c8a-a7bb-2f7bbec41b60/1yR2CHgLIg.lottie"
          loop
          autoplay
        />

     <DotLottieReact
          src="/animation/laptop.lottie"
          loop
          autoplay
        />
      </Box>

      <Flex gap="2">
        <Avatar
          src="/close_up.jpg"
          fallback=""
          size="8"
        />
        {/* <Avatar fallback="B" size="3" radius="full" /> */}
      </Flex>
    </div>
  )
}

export default Profile
