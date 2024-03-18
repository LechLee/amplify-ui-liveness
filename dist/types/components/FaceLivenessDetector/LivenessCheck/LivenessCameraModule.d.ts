import { FaceMatchState } from '../service';
import { InstructionDisplayText, ErrorDisplayText, HintDisplayText, StreamDisplayText, CameraDisplayText } from '../displayText';
import { FaceLivenessDetectorComponents } from '../shared/DefaultStartScreenComponents';
export declare const selectVideoConstraints: import("../hooks").LivenessSelectorFn<MediaTrackConstraints>;
export declare const selectVideoStream: import("../hooks").LivenessSelectorFn<MediaStream>;
export declare const selectFaceMatchPercentage: import("../hooks").LivenessSelectorFn<number>;
export declare const selectFaceMatchState: import("../hooks").LivenessSelectorFn<FaceMatchState>;
export declare const selectSelectedDeviceId: import("../hooks").LivenessSelectorFn<string>;
export declare const selectSelectableDevices: import("../hooks").LivenessSelectorFn<MediaDeviceInfo[]>;
export interface LivenessCameraModuleProps {
    isMobileScreen: boolean;
    isRecordingStopped: boolean;
    instructionDisplayText: Required<InstructionDisplayText>;
    streamDisplayText: Required<StreamDisplayText>;
    hintDisplayText: Required<HintDisplayText>;
    errorDisplayText: Required<ErrorDisplayText>;
    cameraDisplayText: Required<CameraDisplayText>;
    components?: FaceLivenessDetectorComponents;
    testId?: string;
}
export declare const LivenessCameraModule: (props: LivenessCameraModuleProps) => JSX.Element;
