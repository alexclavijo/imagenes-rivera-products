import Cropper from 'cropperjs';

export const pageCropperDefaults: Cropper.Options = {
      dragMode: 'move' as Cropper.DragMode.Move,
      minCanvasWidth: 400,
      minCanvasHeight: 400,
      minCropBoxWidth: 400,
      minCropBoxHeight: 400,
      background: true, 
      autoCrop: true,
      autoCropArea: 1,
      aspectRatio: 1/1,
      movable: true,
      zoomable: true,
      zoomOnTouch: false,
      zoomOnWheel: false,
      scalable: true,
      rotatable: true,
      restore: false,
      guides: false,
      center: false,
      highlight: false,
      cropBoxMovable: true,
      cropBoxResizable: false,
      toggleDragModeOnDblclick: false,
      responsive: true
};
