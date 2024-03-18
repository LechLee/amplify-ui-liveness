import { LivenessContext, LivenessEvent } from '../types';
export declare const MIN_FACE_MATCH_TIME = 1000;
export declare const livenessMachine: import("xstate").StateMachine<LivenessContext, any, LivenessEvent, {
    value: any;
    context: LivenessContext;
}, import("xstate").BaseActionObject, import("xstate").ServiceMap, import("xstate").ResolveTypegenMeta<import("xstate").TypegenDisabled, LivenessEvent, import("xstate").BaseActionObject, import("xstate").ServiceMap>>;
