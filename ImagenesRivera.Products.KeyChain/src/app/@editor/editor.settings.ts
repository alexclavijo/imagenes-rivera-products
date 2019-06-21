export interface IImageEditorSettings{
    selector?: string;
    image?: string|HTMLImageElement;
    crossOrigin?: boolean;
    blankCanvasSize?: {width: number; height: number};
    watermarkText?: string;
    textureSize?: number;
    baseUrl?: string;
    ui?: {
        visible?: boolean;
        theme?: any,
        mode?: any,
        allowEditorClose?: boolean,
        width?: string,
        height?: string,
        compact?: boolean,
        allowZoom?: boolean,
        showExportPanel?: boolean,
        colorPresets?: {
            items?: string[],
            replaceDefault: boolean,
        },
        nav?: {
            position?: any,
            replaceDefault?: boolean,
            items?: any[],
        },
        openImageDialog?: {
            show?: boolean,
            sampleImages?: any[],
        },
        toolbar?: {
            hide?: boolean,
            hideOpenButton?: boolean,
            hideCloseButton?: boolean,
            hideSaveButton?: boolean,
            openButtonAction?: Function,
        },
    };
    languages?: {
        custom?: {[key: string]: {[key: string]: string}},
        active?: string,
    };
    saveUrl?: string;
    onSave?: Function;
    onLoad?: Function;
    onClose?: Function;
    onOpen?: Function;
    onFileOpen?: Function;
    onMainImageLoaded?: Function;
    googleFontsApiKey?: string;
    tools?: {
        filter?: {
            replaceDefault?: boolean,
            items: string[],
        },
        crop?: {
            replaceDefault?: boolean,
            hideCustomControls?: boolean,
            defaultRatio?: string,
            cropZone?: {
                selectable: false,
                lockMovementX: true,
                lockMovementY: true,
                lockScalingX: true,
                lockScalingY: true,
                lockUniScaling: true,
                hasControls: false,
                hasBorders: false,
            },
            items: string[],
        },
        draw: {
            replaceDefault?: boolean,
            brushSizes: number[],
            brushTypes: string[],
        }
        text?: {
            defaultText?: string,
            replaceDefault?: boolean,
            defaultCategory?: string,
            items?: any[],
        }
        frame?: {
            replaceDefault?: boolean,
            items?: any[],
        },
        shapes?: {
            replaceDefault?: boolean,
            items?: any[],
        },
        stickers?: {
            replaceDefault?: boolean,
            items?: any[],
        },
        import?: {
            validExtensions?: string[],
            maxFileSize?: number; // in bytes
        },
        export?: {
            defaultFormat: 'png'|'jpeg'|'json',
            defaultQuality: number,
            defaultName: string,
        },
    };
    objectDefaults?: {
        transparentCorners: boolean,
        borderOpacityWhenMoving: number,
        cornerStyle: 'circle'|'rect'
        cornerColor: string,
        cornerStrokeColor: string,
        cornerSize: number,
        stroke: string, // outline color
        strokeWidth: number, // outline width
        lockUniScaling: boolean,
        fill: string,
        opacity: number
    };
}


//https://support.vebto.com/help-center/articles/10/45/54/default-settings
// export const defaultSettings  = {
//   selector: 'pixie-editor',
//   textureSize: 4096,
//   ui: {
//       visible: true,
//       mode: 'inline',
//       theme: 'light',
//       allowEditorClose: true,
//       allowZoom: true,
//       toolbar: {
//           hideOpenButton: false,
//           hideCloseButton: true,
//       },
//       nav: {
//           position: 'top',
//           replaceDefault: false,
//           items: [
//               {name: 'filter', icon: 'filter-custom', action: 'filter'},
//               {type: 'separator'},
//               {name: 'resize', icon: 'resize-custom', action: 'resize'},
//               {name: 'crop', icon: 'crop-custom', action: 'crop'},
//               {name: 'transform', icon: 'transform-custom', action: 'transform'},
//               {type: 'separator'},
//               {name: 'draw', icon: 'pencil-custom', action: 'draw'},
//               {name: 'text', icon: 'text-box-custom', action: 'text'},
//               {name: 'shapes', icon: 'polygon-custom', action: 'shapes'},
//               {name: 'stickers', icon: 'sticker-custom', action: 'stickers'},
//               {name: 'frame', icon: 'frame-custom', action: 'frame'},
//               {type: 'separator'},
//               {name: 'corners', icon: 'rounded-corner-custom', action: 'corners'},
//               {name: 'background', icon: 'background-custom', action: 'background'},
//               {name: 'merge', icon: 'merge-custom', action: 'merge'},
//           ]
//       },
//       openImageDialog: {
//           show: true,
//           sampleImages: [
//               {
//                   url: 'images/samples/sample1.jpg',
//                   thumbnail: 'images/samples/sample1_thumbnail.jpg',
//               },
//               {
//                   url: 'images/samples/sample2.jpg',
//                   thumbnail: 'images/samples/sample2_thumbnail.jpg',
//               },
//               {
//                   url: 'images/samples/sample3.jpg',
//                   thumbnail: 'images/samples/sample3_thumbnail.jpg',
//               },
//           ]
//       },
//       colorPresets: {
//           replaceDefault: false,
//           items: [
//               'rgb(0,0,0)',
//               'rgb(255, 255, 255)',
//               'rgb(242, 38, 19)',
//               'rgb(249, 105, 14)',
//               'rgb(253, 227, 167)',
//               'rgb(4, 147, 114)',
//               'rgb(30, 139, 195)',
//               'rgb(142, 68, 173)',
//           ],
//       }
//   },
//   languages: {
//       active: 'default',
//   },
//   googleFontsApiKey: 'AIzaSyDOrI6VJiMbR6XLvlp3CdCPZj1T2PzVkKs',
//   objectDefaults: {
//       transparentCorners: false,
//       borderOpacityWhenMoving: 1,
//       cornerStyle: 'circle',
//       cornerColor: '#ccc',
//       cornerStrokeColor: '#fff',
//       cornerSize: 16,
//       lockUniScaling: true,
//       fill: 'rgb(30, 139, 195)',
//       opacity: 1,
//       backgroundColor: null,
//       strokeWidth: 0.05,
//       stroke: '#000',
//       shadow: {
//          color: '#000',
//          blur: 3,
//          offsetX: -1,
//          offsetY: 0,
//       },
//       textAlign: 'initial',
//       underline: false,
//       linethrough: false,
//       fontStyle: 'normal',
//       fontFamily: 'Times New Roman',
//       fontWeight: 400,
//   },
//   tools: {
//       filter: {
//           replaceDefault: false,
//           items: [
//               'grayscale',
//               'blackWhite',
//               'sharpen',
//               'invert',
//               'vintage',
//               'polaroid',
//               'kodachrome',
//               'technicolor',
//               'brownie',
//               'sepia',
//               'removeColor',
//               'brightness',
//               'gamma',
//               'noise',
//               'pixelate',
//               'blur',
//               'emboss',
//               'blendColor',
//           ]
//       },
//       crop: {
//           replaceDefault: false,
//           hideCustomControls: false,
//           defaultRatio: '16:9',
//           items: ['3:2', '5:3', '4:3', '5:4', '6:4', '7:5', '10:8', '16:9']
//       },
//       text: {
//           defaultCategory: 'handwriting',
//           defaultText: 'Double click to edit',
//       },
//       draw: {
//           replaceDefault: false,
//          // brushSizes: BrushSizes,
//         //brushTypes: BrushTypes,
//       },
//       shapes: {
//           replaceDefault: false,
//           //items: defaultShapes.slice(),
//       },
//       stickers: {
//           replaceDefault: false,
//           //items: defaultStickers,
//       },
//       import: {
//           validExtensions: ['png', 'jpg', 'jpeg', 'svg', 'json', 'gif'],
//       },
//       export: {
//           defaultFormat: 'png',
//           defaultQuality: 0.8,
//           defaultName: 'image',
//       },
//       frame: {
//           replaceDefault: false,
//           items: [
//               {
//                   name: 'basic',
//                   mode: 'basic',
//                   size: {
//                       min: 1,
//                       max: 35,
//                       default: 10,
//                   }
//               },
//               {
//                   name: 'pine',
//                   mode: 'stretch',
//                   size: {
//                       min: 1,
//                       max: 35,
//                       default: 15,
//                   }
//               },
//               {
//                   name: 'oak',
//                   mode: 'stretch',
//                   size: {
//                       min: 1,
//                       max: 35,
//                       default: 15,
//                   }
//               },
//               {
//                   name: 'rainbow',
//                   mode: 'stretch',
//                   size: {
//                       min: 1,
//                       max: 35,
//                       default: 15,
//                   }
//               },
//               {
//                   name: 'grunge1',
//                   display_name: 'grunge #1',
//                   mode: 'stretch',
//                   size: {
//                       min: 1,
//                       max: 35,
//                       default: 15,
//                   }
//               },
//               {
//                   name: 'grunge2',
//                   display_name: 'grunge #2',
//                   mode: 'stretch',
//                   size: {
//                       min: 1,
//                       max: 35,
//                       default: 20,
//                   }
//               },
//               {
//                   name: 'ebony',
//                   mode: 'stretch',
//                   size: {
//                       min: 1,
//                       max: 35,
//                       default: 15,
//                   }
//               },
//               {
//                   name: 'art1',
//                   display_name: 'Art #1',
//                   mode: 'repeat',
//                   size: {
//                       min: 10,
//                       max: 70,
//                       default: 55,
//                   },
//               },
//               {
//                   name: 'art2',
//                   display_name: 'Art #2',
//                   mode: 'repeat',
//                   size: {
//                       min: 10,
//                       max: 70,
//                       default: 55,
//                   },
//               }
//           ]
//       }
//   }
// };



