import * as React from 'react';
import { InstructionDisplayText, HintDisplayText, CameraDisplayText, StreamDisplayText, ErrorDisplayText } from '../displayText';
import { FaceLivenessDetectorComponents } from '../shared/DefaultStartScreenComponents';
export declare const selectIsRecordingStopped: import("../hooks").LivenessSelectorFn<boolean>;
interface LivenessCheckProps {
    instructionDisplayText: Required<InstructionDisplayText>;
    hintDisplayText: Required<HintDisplayText>;
    cameraDisplayText: Required<CameraDisplayText>;
    streamDisplayText: Required<StreamDisplayText>;
    errorDisplayText: Required<ErrorDisplayText>;
    components?: FaceLivenessDetectorComponents;
}
export declare const LivenessCheck: React.FC<LivenessCheckProps>;
export {};
