export * from '../src/Three';


export type GlobalData = {
	registerCanvas: ( canvasId: string, canvas: any )=> any
	unregisterCanvas: ( canvasId: string )=> void
}

export declare const global: GlobalData;
