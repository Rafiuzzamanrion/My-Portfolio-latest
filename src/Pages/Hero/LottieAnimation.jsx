import LottiePlayer from 'react-lottie-player';
import animation from '/src/Pages/styles/1.json'

const LottieAnimation = () => {
 
  return <LottiePlayer animationData={animation} loop={true} play={true} />;
};

export default LottieAnimation;