/**
 * The liveness error states
 */
export declare const LivenessErrorState: {
    readonly TIMEOUT: "TIMEOUT";
    readonly RUNTIME_ERROR: "RUNTIME_ERROR";
    readonly FRESHNESS_TIMEOUT: "FRESHNESS_TIMEOUT";
    readonly SERVER_ERROR: "SERVER_ERROR";
    readonly CAMERA_FRAMERATE_ERROR: "CAMERA_FRAMERATE_ERROR";
    readonly CAMERA_ACCESS_ERROR: "CAMERA_ACCESS_ERROR";
    readonly FACE_DISTANCE_ERROR: "FACE_DISTANCE_ERROR";
    readonly MOBILE_LANDSCAPE_ERROR: "MOBILE_LANDSCAPE_ERROR";
    readonly MULTIPLE_FACES_ERROR: "MULTIPLE_FACES_ERROR";
};
export type ErrorState = keyof typeof LivenessErrorState;
