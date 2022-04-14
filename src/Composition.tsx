import {Sequence, Video, AbsoluteFill, Audio} from 'remotion';

import Opening from './assets/F1-2022-Opening.mp4';

import compositionSections, {VideoTypes} from './config/compositionSections';
import driverStandings from './config/driverStandings';
import driverVideoInfo, {ClipInfo} from './config/driverVideoInfo';
import cutaways from './config/cutaways';

export const MyComposition = () => {
	const sequences = compositionSections.reduce(
		(
			arr: {
				name: string;
				info: ClipInfo;
				sequenceInfo: {
					duration: number;
					startFrame: number;
				};
			}[],
			section,
			i
		) => {
			let info;
			let name;
			if (section.type === VideoTypes.driver) {
				const driver = driverStandings[section.num];
				name = driver;
				info = driverVideoInfo[driver];
			}
			if (section.type === VideoTypes.cut) {
				info = cutaways[section.num];
				name = `Cutaway - ${section.num}`;
			}
			if (info && name) {
				const duration = info.endFrame - info.startFrame;
				arr.push({
					info,
					name,
					sequenceInfo: {
						duration,
						startFrame:
							arr[i - 1]?.sequenceInfo.duration +
								arr[i - 1]?.sequenceInfo.startFrame || 0,
					},
				});
			}
			return arr;
		},
		[]
	);

	return (
		<>
			{sequences.map(({info, name, sequenceInfo}) => (
				<Sequence
					name={name}
					from={sequenceInfo.startFrame}
					durationInFrames={sequenceInfo.duration}
				>
					<AbsoluteFill>
						<Video
							muted
							src={Opening}
							startFrom={info.startFrame}
							endAt={info.endFrame}
						/>
					</AbsoluteFill>
				</Sequence>
			))}
			<Audio src={Opening} />
		</>
	);
};
