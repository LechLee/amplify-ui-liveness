import React from 'react';
import { CheckScreenComponents } from './FaceLivenessErrorModal';
export type FaceLivenessDetectorComponents = StartScreenComponents & CheckScreenComponents;
export interface StartScreenComponents {
    PhotosensitiveWarning?: React.ComponentType;
}
interface DefaultPhotosensitiveWarningProps {
    bodyText: string;
    headingText: string;
    infoText: string;
    labelText: string;
}
export declare const DefaultPhotosensitiveWarning: ({ bodyText, headingText, infoText, labelText, }: DefaultPhotosensitiveWarningProps) => JSX.Element;
interface DefaultRecordingIconProps {
    recordingIndicatorText: string;
}
export declare const DefaultRecordingIcon: ({ recordingIndicatorText, }: DefaultRecordingIconProps) => JSX.Element;
interface CancelButtonProps {
    cancelLivenessCheckText: string;
}
export declare const DefaultCancelButton: ({ cancelLivenessCheckText, }: CancelButtonProps) => JSX.Element;
export {};
