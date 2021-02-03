import Text from '@components/common/Text'
import React from 'react'

export default function TitleTextWeight({ children, neutral, $thin, $fontSize }) {
    return <Text
        $fluid
        $weight={!$thin}
        $color={neutral && 'var(--itg-app-text-default-color-alpha-45)'}
        $style={{ marginBottom: "10px" }}
        $fontSize={$fontSize}
    >{children}</Text>
}