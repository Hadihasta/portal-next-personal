import React from 'react'
import { EyeOpenIcon } from '@radix-ui/react-icons'
import { Text, IconButton } from '@radix-ui/themes'

const Views =  ({ counter }: { counter: string }) => {
  return (
          <div className='flex-row items-center gap-2'>
            <IconButton
              size="1"
              aria-label="Copy value"
              color="jade"
              variant="ghost"
            >
              <EyeOpenIcon />
            </IconButton>

            <Text
              weight="light"
              size="1"
            >
          {counter} Views
            </Text>
          </div>
  )
}

export default Views