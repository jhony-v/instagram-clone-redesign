import BaseIconActivation from '@components/common/BaseIconActivation'
import FlexWrapper from '@components/common/Wrappers/FlexWrapper'
import ArchiveMarkPublication from '@containers/ContainerUserActions/ArchiveMarkPublication'
import LikePublication from '@containers/ContainerUserActions/LikePublication'
import Icons from '@icons/Icons'
import React from 'react'
import { styled, withStyleDeep } from 'styletron-react'

const ActionsWrapper = withStyleDeep(FlexWrapper, {
    alignItems: "center",
    marginBottom: "15px"
})

const WrapperIcon = styled("span", {
    marginRight: "10px",
    ":last-child" : {
        marginLeft: "auto",
        marginRight: "0"
    }
})

const PublicationActions = () => {
    return (

       <ActionsWrapper>
          <WrapperIcon>
             <LikePublication />
          </WrapperIcon>
          <WrapperIcon>
             <BaseIconActivation icon={Icons.Comment} />
          </WrapperIcon>
          <WrapperIcon>
             <BaseIconActivation icon={Icons.Send} size={30} />
          </WrapperIcon>
          <WrapperIcon>
             <ArchiveMarkPublication />
          </WrapperIcon>
       </ActionsWrapper>
    )
}


export default PublicationActions
