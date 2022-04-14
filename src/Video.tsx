import {Composition} from 'remotion';
import {MyComposition} from './Composition';
import videoConfig from './config/videoConfig';

export const RemotionVideo: React.FC = () => {
	return (
		<>
			<Composition
				id="F1-2022-Opening"
				component={MyComposition}
				durationInFrames={Math.floor(videoConfig.endTime * videoConfig.fps)}
				fps={videoConfig.fps}
				width={videoConfig.width}
				height={videoConfig.height}
			/>
		</>
	);
};
