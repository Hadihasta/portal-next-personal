import React from 'react'
import FirstRetro from './FirstRetro'
import { Text } from '@radix-ui/themes'

const Retro = () => {
  return (
    <div className="m-4 flex-col">
      <Text size="8">Retro</Text>

      <Text
        size="2"
        weight="medium"
      >
        Reflecting on the past is a habit I value. Each year, I publish a brief update on where I stand in my career and
        personal life.
        {/* Here’s a look at the past three years. */}
      </Text>
      <Text size="8"> 2025 Journey</Text>
      <FirstRetro></FirstRetro>
    </div>
  )
}

export default Retro
