import React, { Children, cloneElement, useState } from 'react'

export default function MenuButtonGroupTheme({ children,defaultValue }) {
    const [selected, setSelected] = useState(defaultValue);
    return Children.map(children, ((item) => (
        cloneElement(item, {
            onClick : () => {
                setSelected(item.props.variant)
            },
            checked:selected === item.props.variant
        })
    )));
}
