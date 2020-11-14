
const BaseIconActivation = ({active,icon:Icon,colorActive,...restProps}) => {
    if(active) return <Icon.Active color={colorActive} {...restProps} />
    return <Icon.Default {...restProps} />;
}

BaseIconActivation.defaultProps = {
    size : 25,
}

export default BaseIconActivation;