import React from 'react';
import { ErrorState } from '../service';
import { ErrorDisplayText } from '../displayText';
export interface CheckScreenComponents {
    ErrorView?: React.ComponentType<FaceLivenessErrorModalProps>;
}
export interface FaceLivenessErrorModalProps {
    children: React.ReactNode;
    displayText?: Partial<ErrorDisplayText>;
    onRetry: () => void;
}
export declare const renderErrorModal: ({ errorState, overrideErrorDisplayText, }: {
    errorState: ErrorState;
    overrideErrorDisplayText?: ErrorDisplayText;
}) => JSX.Element | null;
export declare const FaceLivenessErrorModal: React.FC<FaceLivenessErrorModalProps>;
