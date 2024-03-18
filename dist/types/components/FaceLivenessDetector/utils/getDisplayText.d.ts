import { LivenessDisplayText, HintDisplayText, CameraDisplayText, InstructionDisplayText, StreamDisplayText, ErrorDisplayText } from '../displayText';
interface LivenessDisplayTextInterface {
    hintDisplayText: Required<HintDisplayText>;
    cameraDisplayText: Required<CameraDisplayText>;
    instructionDisplayText: Required<InstructionDisplayText>;
    streamDisplayText: Required<StreamDisplayText>;
    errorDisplayText: Required<ErrorDisplayText>;
}
/**
 * Merges optional displayText prop with
 * defaultLivenessDisplayText and returns more bite size portions to pass
 * down to child components of FaceLivenessDetector.
 * @param overrideDisplayText
 * @returns hintDisplayText, cameraDisplayText, instructionDisplayText, cancelLivenessCheckText
 */
export declare function getDisplayText(overrideDisplayText: LivenessDisplayText | undefined): LivenessDisplayTextInterface;
export {};
