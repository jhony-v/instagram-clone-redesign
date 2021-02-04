import Icons from "@icons/Icons";
import ItemNavigator from "./components/ItemNavigator";
import WrapperNavigator from "./components/WrapperNavigator";

const ContainerNavigator = () => {
   return (
      <WrapperNavigator>
         <ItemNavigator href="/" icon={Icons.Home} />
         <ItemNavigator href="/search/people" icon={Icons.Search} />
         <ItemNavigator href="/explore" icon={Icons.Compass} />
         <ItemNavigator href="/heart" icon={Icons.Heart} />
      </WrapperNavigator>
   );
};

export default ContainerNavigator;
