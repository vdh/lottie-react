import React from "react";
import useAnimator from "../../../src/hooks/useAnimator";
import gemAnimation from "../../assets/gem.json";

const style = {
	height: 300,
};

const GemAnimation = () => {
	const options = {
		animationData: gemAnimation,
		renderer: "svg",
		loop: true,
		autoplay: true,
	};
	
	const Lottie = useAnimator(options, style);

	// TODO: methods to describe in the documentation
	// useEffect(() => {
	// 	setTimeout(() => {
	// 		// Lottie.play();
	// 		// Lottie.stop();
	// 		// Lottie.pause();
	// 		// Lottie.setSpeed(5);
	// 		// Lottie.goToAndStop(6150);
	// 		// Lottie.goToAndPlay(6000);
	// 		// Lottie.setDirection(-1);
	// 		// Lottie.playSegments([350, 500]);
	// 		// Lottie.playSegments([350, 500], true);
	// 		// Lottie.setSubframe(true);
	// 		// Lottie.destroy();
	// 		// console.log('Duration:', Lottie.getDuration());
	// 	}, 2000);
	// });
	
	return <>{Lottie.View}</>;
};

export default GemAnimation;