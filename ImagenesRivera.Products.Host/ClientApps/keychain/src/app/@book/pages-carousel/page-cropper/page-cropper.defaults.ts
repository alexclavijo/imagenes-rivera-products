import Cropper from 'cropperjs';

export const pageCropperDefaults: Cropper.Options = {
      dragMode: 'move' as Cropper.DragMode.Move,
      minContainerWidth: 800,
      minCanvasWidth: 200,
      minContainerHeight: 400,
      minCanvasHeight: 200,
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
      cropBoxResizable: true,
      toggleDragModeOnDblclick: false,
      responsive: true,
      initialAspectRatio: 1,
      aspectRatio: 4/3
      



};
