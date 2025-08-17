import React from 'react'
import { Text, Container, Box } from '@radix-ui/themes'
import { Card, CardContent } from '@/components/ui/card'
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '@/components/ui/carousel'

const FirstRetro = () => {
  const images = ['/photo/Elabram_1.jpg', '/photo/Elabram_2.jpg']

  return (
    <div className="my-2 mx-auto">
      <Box style={{ background: 'var(--gray-a2)', borderRadius: 'var(--radius-3)' }}>
        <Container size="1">
          <Carousel className="w-full max-w-xs">
            <CarouselContent>
              {images.map((src, index) => (
                <CarouselItem key={index}>
                  <div className="p-1">
                    <Card className="object-cover">
                      <CardContent className="flex aspect-[calc(4*3+1)/3] items-center justify-center ">
                        <img
                          src={src}
                          alt={`Image ${index + 1}`}
                          className="w-full h-full object-cover"
                        />
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
