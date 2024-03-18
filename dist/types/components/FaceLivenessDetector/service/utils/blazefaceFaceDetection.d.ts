import '@tensorflow/tfjs-backend-cpu';
import { FaceDetection, Face } from '../types';
type BlazeFaceModelBackend = 'wasm' | 'cpu';
export declare const BLAZEFACE_VERSION = "1.0.2";
/**
 *   WARNING: When updating these links,
 *   also make sure to update documentation and the link in the canary/e2e test "canary/e2e/features/liveness/face-detect.feature"
 */
export declare const DEFAULT_BLAZEFACE_URL = "https://cdn.liveness.rekognition.amazonaws.com/face-detection/tensorflow-models/blazeface/1.0.2/model/model.json";
export declare const DEFAULT_TFJS_WASM_URL = "https://cdn.liveness.rekognition.amazonaws.com/face-detection/tensorflow/tfjs-backend-wasm/4.11.0/";
/**
 * The BlazeFace implementation of the FaceDetection interface.
 */
export declare class BlazeFaceFaceDetection extends FaceDetection {
    modelBackend: BlazeFaceModelBackend;
    faceModelUrl: string | undefined;
    binaryPath: string;
    private _model;
    constructor(binaryPath?: string, faceModelUrl?: string);
    loadModels(): Promise<void>;
    detectFaces(videoEl: HTMLVideoElement): Promise<Face[]>;
    private _getCoordinate;
    private _loadWebAssemblyBackend;
    private _loadCPUBackend;
}
export {};
