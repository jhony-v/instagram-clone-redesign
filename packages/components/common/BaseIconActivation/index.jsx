
const BaseIconActivation = ({active,icon:Icon,colorActive,...restProps}) => {
    if(active) return <Icon.Active color={colorActive} {...restProps} />
    return <Icon.Default {...restProps} />;
}

BaseIconActivation.defaultProps = {
    size : 28
}

export default BaseIconActivation;