import Cropper from 'cropperjs';

export const pageCropperDefaults: Cropper.Options = {
      dragMode: 'move' as Cropper.DragMode.Move,
      minContainerWidth: 800,
      minCanvasWidth: 800,
      minCropBoxWidth: 800,
      minContainerHeight: 400,
      minCanvasHeight: 400,
      minCropBoxHeight: 400,
      background: false, 
      autoCrop: false,
      autoCropArea: 1,
      movable: true,
      zoomable: true,
      zoomOnTouch: false,
      zoomOnWheel: false,
      scalable: true,
      rotatable: true,
      restore: true,
      guides: false,
      center: true,
      highlight: false,
      cropBoxMovable: false,
      cropBoxResizable: false,
      toggleDragModeOnDblclick: false,
      responsive: true,
      initialAspectRatio: 1



};
