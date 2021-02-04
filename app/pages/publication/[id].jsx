import React from "react"
import ContainerDrawer from "@containers/ContainerDrawer";
import SEO from "packages/common/components/SEO";
import PreviewPublicationApp from "@modules/PreviewPublication/PreviewPublicationApp";

export default function PublicationId() {
    return (
       <ContainerDrawer>
          <SEO />
          <PreviewPublicationApp/>
       </ContainerDrawer>
    )
}