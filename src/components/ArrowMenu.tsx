'use client'
import React from 'react'
import { DropdownMenu, Button } from '@radix-ui/themes'
import { motion } from 'framer-motion'

const ArrowMenu = () => {
  return (
    <>
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
          <DropdownMenu.Content >
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 1, ease: 'easeInOut' }}
            >
              <div className="rounded-lg bg-greySurface ">
                <DropdownMenu.Item>Home</DropdownMenu.Item>
                <DropdownMenu.Separator />
                <DropdownMenu.Item>Goals</DropdownMenu.Item>
                <DropdownMenu.Item>Projects</DropdownMenu.Item>
              </div>
            </motion.div>
          </DropdownMenu.Content>
        </DropdownMenu.Root>
      </div>

      <style>{`
        // .rt-DropdownMenuViewport {
        //  width: 10px !important;
        // }
       
      `}</style>
    </>
  )
}

export default ArrowMenu
