import Icons from "@icons/Icons";
import BaseIconActivation from "@components/common/BaseIconActivation";
import FloatingActionButton from "@components/common/FloatingActionButton";

const FloatingButtonCreateNewPost = () => {
    return (
       <FloatingActionButton>
          <BaseIconActivation icon={Icons.Camera} />
       </FloatingActionButton>
    );
};

export default FloatingButtonCreateNewPost;