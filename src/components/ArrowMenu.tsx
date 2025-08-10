import React from 'react'
import { DropdownMenu, Button } from '@radix-ui/themes'

const ArrowMenu = () => {
  return (
    <div className="sm:hidden! flex   justify-end  mx-4 pt-2 ">
      <DropdownMenu.Root>
        <DropdownMenu.Trigger>
          <Button
            color="gray"
            variant="soft"
          >
            Menu
            <DropdownMenu.TriggerIcon />
          </Button>
        </DropdownMenu.Trigger>
        <DropdownMenu.Content
          color="gray"
          variant="soft"
        >
          <DropdownMenu.Item shortcut="⌘ E">Home</DropdownMenu.Item>
          <DropdownMenu.Item shortcut="⌘ D">Goals</DropdownMenu.Item>
          <DropdownMenu.Separator />
          <DropdownMenu.Item shortcut="⌘ N">Projects</DropdownMenu.Item>
        </DropdownMenu.Content>
      </DropdownMenu.Root>
    </div>
  )
}

export default ArrowMenu
