import FlexWrapper from "@components/common/Wrappers/FlexWrapper"
import Icons from "@icons/Icons"
import ItemNavigator from "./Atoms/ItemNavigator"

const ContainerNavigator = () => {
    return (
        <FlexWrapper>
            <ItemNavigator href="/" icon={Icons.Home} />
            <ItemNavigator href="/direct" icon={Icons.Search} />
            <ItemNavigator href="/explore" icon={Icons.Compass} />
            <ItemNavigator href="/heart" icon={Icons.Heart} />
        </FlexWrapper>
    )
}

export default ContainerNavigator
