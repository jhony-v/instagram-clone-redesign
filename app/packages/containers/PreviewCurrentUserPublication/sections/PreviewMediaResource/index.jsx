import React from 'react'
import faker from "faker";
import { GridArea, neutralBorder } from '@containers/PreviewCurrentUserPublication/components/PreviewLayout'
import { styled } from 'styletron-react';

const ImageWrapper = styled("img", {
    width: "100%",
    height: "100%",
    objectFit: "cover"
});

export default function PreviewMediaResource() {
    return (
       <GridArea $area="image" $style={{ borderRight: neutralBorder, position: "relative" }}>
          <ImageWrapper src={faker.random.image()} />
       </GridArea>
    )
}
