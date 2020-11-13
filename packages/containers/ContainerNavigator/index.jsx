import FlexWrapper from "@components/common/Wrappers/FlexWrapper"
import Icons from "@icons/Icons"
import ItemNavigator from "./Atoms/ItemNavigator"

const { default: BaseIconActivation } = require("@components/common/BaseIconActivation")

const ContainerNavigator = () => {
    return (
        <FlexWrapper>
            <ItemNavigator href="/" icon={Icons.Home} />
            <ItemNavigator href="/send" icon={Icons.Search} />
            <ItemNavigator href="/compass" icon={Icons.Compass} />
            <ItemNavigator href="/heart" icon={Icons.Heart} />
        </FlexWrapper>
    )
}

export default ContainerNavigator
