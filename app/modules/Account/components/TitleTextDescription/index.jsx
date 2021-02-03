import Text from '@components/common/Text'
import React from 'react'

export default function TitleTextDescription({ children }) {
    return <Text
        $fluid
        $fontSize="big"
    >{children}</Text>
}