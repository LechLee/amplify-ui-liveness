import { LivenessResponseStream } from '@aws-sdk/client-rekognitionstreaming';
export declare const isServerSesssionInformationEvent: (value: unknown) => value is LivenessResponseStream.ServerSessionInformationEventMember;
export declare const isDisconnectionEvent: (value: unknown) => value is LivenessResponseStream.DisconnectionEventMember;
export declare const isValidationExceptionEvent: (value: unknown) => value is LivenessResponseStream.ValidationExceptionMember;
export declare const isInternalServerExceptionEvent: (value: unknown) => value is LivenessResponseStream.InternalServerExceptionMember;
export declare const isThrottlingExceptionEvent: (value: unknown) => value is LivenessResponseStream.ThrottlingExceptionMember;
export declare const isServiceQuotaExceededExceptionEvent: (value: unknown) => value is LivenessResponseStream.ServiceQuotaExceededExceptionMember;
export declare const isInvalidSignatureRegionException: (error: unknown) => error is Error;
