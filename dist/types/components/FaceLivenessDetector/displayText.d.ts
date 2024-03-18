import { DisplayTextTemplate } from '@aws-amplify/ui';
export type HintDisplayText = {
    hintMoveFaceFrontOfCameraText?: string;
    hintTooManyFacesText?: string;
    hintFaceDetectedText?: string;
    hintCanNotIdentifyText?: string;
    hintTooCloseText?: string;
    hintTooFarText?: string;
    hintConnectingText?: string;
    hintVerifyingText?: string;
    hintCheckCompleteText?: string;
    hintIlluminationTooBrightText?: string;
    hintIlluminationTooDarkText?: string;
    hintIlluminationNormalText?: string;
    hintHoldFaceForFreshnessText?: string;
    hintCenterFaceText?: string;
    hintCenterFaceInstructionText?: string;
    hintFaceOffCenterText?: string;
    hintMatchIndicatorText?: string;
};
export type CameraDisplayText = {
    cameraMinSpecificationsHeadingText?: string;
    cameraMinSpecificationsMessageText?: string;
    cameraNotFoundHeadingText?: string;
    cameraNotFoundMessageText?: string;
    retryCameraPermissionsText?: string;
    waitingCameraPermissionText?: string;
    a11yVideoLabelText?: string;
};
export type InstructionDisplayText = {
    goodFitCaptionText?: string;
    goodFitAltText?: string;
    photosensitivityWarningBodyText?: string;
    photosensitivityWarningHeadingText?: string;
    photosensitivityWarningInfoText?: string;
    photosensitivityWarningLabelText?: string;
    startScreenBeginCheckText?: string;
    tooFarCaptionText?: string;
    tooFarAltText?: string;
    /**
     * @deprecated `photosensitivyWarningBodyText` has been replaced with `photosensitivityWarningBodyText` amd will be removed in a future major version of `@aws-amplify/ui-react-liveness`
     */
    photosensitivyWarningBodyText?: string;
    /**
     * @deprecated `photosensitivyWarningHeadingText` has been replaced with `photosensitivityWarningHeadingText` amd will be removed in a future major version of `@aws-amplify/ui-react-liveness`
     */
    photosensitivyWarningHeadingText?: string;
    /**
     * @deprecated `photosensitivyWarningInfoText` has been replaced with `photosensitivityWarningInfoText` amd will be removed in a future major version of `@aws-amplify/ui-react-liveness`
     */
    photosensitivyWarningInfoText?: string;
    /**
     * @deprecated `photosensitivyWarningLabelText` has been replaced with `photosensitivityWarningLabelText` amd will be removed in a future major version of `@aws-amplify/ui-react-liveness`
     */
    photosensitivyWarningLabelText?: string;
};
export type StreamDisplayText = {
    recordingIndicatorText?: string;
    cancelLivenessCheckText?: string;
};
export declare const defaultErrorDisplayText: {
    errorLabelText: string;
    timeoutHeaderText: string;
    timeoutMessageText: string;
    faceDistanceHeaderText: string;
    faceDistanceMessageText: string;
    multipleFacesHeaderText: string;
    multipleFacesMessageText: string;
    clientHeaderText: string;
    clientMessageText: string;
    serverHeaderText: string;
    serverMessageText: string;
    landscapeHeaderText: string;
    landscapeMessageText: string;
    portraitMessageText: string;
    tryAgainText: string;
};
export type ErrorDisplayText = Partial<typeof defaultErrorDisplayText>;
export declare const defaultLivenessDisplayText: Required<LivenessDisplayText>;
export type LivenessDisplayText = DisplayTextTemplate<HintDisplayText & CameraDisplayText & InstructionDisplayText & ErrorDisplayText & StreamDisplayText>;
