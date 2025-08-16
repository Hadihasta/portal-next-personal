import React from 'react'
import { IdCardIcon } from '@radix-ui/react-icons'
import { Text, IconButton } from '@radix-ui/themes'

const ReadTime = ({ minute }: { minute: string }) => {
  return (
    <div className="flex-row items-center gap-2">
      <IconButton
        size="1"
        aria-label="Copy value"
        color="jade"
        variant="ghost"
      >
        <IdCardIcon />
      </IconButton>

      <Text
        weight="light"
        size="1"
      >
        {minute} minute read
      </Text>
    </div>
  )
}

export default ReadTime
