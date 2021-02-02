import Text from '@components/common/Text'
import React from 'react'
import { styled, useStyletron, withStyleDeep } from 'styletron-react'

const Icon = withStyleDeep(Text, {
    marginRight: "15px",
    color: "inherit",
})

const TextItem = styled("span", {
    fontWeight: "bold"
})

const Wrapper = styled("div", () => ({
    display: "flex",
    alignItems: "center",
    margin: "20px auto",
    borderRadius: "10px",
    padding: "15px 10px",
    transition: ".3s",
    ":hover": {
        backgroundColor: "var(--itg-root-dark-alpha-color-10)"
    }
}))


export default function ItemFilterSiderbar({ selected, children, icon: IconComponent, onClick }) {
    const [css] = useStyletron();
    const styleSelected = css({
        color: selected ? "var(--itg-app-primary-color)" : "var(--itg-root-dark-alpha-color-70)"
    })
    return (
       <Wrapper onClick={onClick} className={styleSelected}>
          <Icon $fontSize="big">
             <IconComponent />
          </Icon>
          <TextItem>
             {children}
          </TextItem>
       </Wrapper>
    )
}
