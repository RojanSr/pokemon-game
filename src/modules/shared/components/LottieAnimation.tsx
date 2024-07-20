import Lottie from "lottie-react";

const LottieAnimation: React.FC<{ animationJSON: object }> = ({
  animationJSON,
}) => {
  return <Lottie animationData={animationJSON} />;
};

export default LottieAnimation;
