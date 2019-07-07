import Cropper from 'cropperjs';

export const pageCropperDefaults: Cropper.Options = {
      dragMode: Cropper.DragMode.Move,
      viewMode: Cropper.ViewMode.Free,
      minContainerWidth: 750,
      minContainerHeight: 750,
      minCanvasHeight: 750,
      minCanvasWidth: 750,
      minCropBoxWidth: 750,
      minCropBoxHeight: 750,
      aspectRatio: 1,
      autoCrop: false,
      autoCropArea: 1,
      movable: true,
      zoomable: true,
      zoomOnTouch: true,
      zoomOnWheel: true,
      scalable: true,
      rotatable: true,
      restore: true,
      guides: false,
      center: false,
      highlight: false,
      cropBoxMovable: false,
      cropBoxResizable: false,
      toggleDragModeOnDblclick: false,
      responsive: true
};
