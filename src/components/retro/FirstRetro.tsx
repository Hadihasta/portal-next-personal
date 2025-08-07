import React from 'react'
import { Text, Container, Box } from '@radix-ui/themes'
import { Card, CardContent } from '@/components/ui/card'
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '@/components/ui/carousel'

const FirstRetro = () => {
  return (
    <div className="my-2">
      <Box style={{ background: 'var(--gray-a2)', borderRadius: 'var(--radius-3)' }}>
        <Container size="1">
          <Text
            size="4"
            weight="bold"
          >
            2024 Journey
          </Text>

          <Carousel className="w-full max-w-xs">
            <CarouselContent>
              {Array.from({ length: 5 }).map((_, index) => (
                <CarouselItem key={index}>
                  <div className="p-1">
                    <Card>
                      <CardContent className="flex aspect-square items-center justify-center p-6">
                        <span className="text-4xl font-semibold">{index + 1}</span>
                      </CardContent>
                    </Card>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious />
            <CarouselNext />
          </Carousel>
        </Container>
      </Box>
    </div>
  )
}

export default FirstRetro
