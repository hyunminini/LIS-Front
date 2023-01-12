import React, { useCallback, useLayoutEffect } from 'react';
import PropTypes from 'prop-types';
import Quagga from '@ericblade/quagga2';

function getMedian(arr) {
  arr.sort((a, b) => a - b);
  const half = Math.floor(arr.length / 2);
  if (arr.length % 2 === 1) {
    return arr[half];
  }
  return (arr[half - 1] + arr[half]) / 2;
}

function getMedianOfCodeErrors(decodedCodes) {
  const errors = decodedCodes.filter(x => x.error !== undefined).map(x => x.error);
  const medianOfErrors = getMedian(errors);
  return medianOfErrors;
}

const defaultConstraints = {
  width: 500,
  height: 300,
};

const defaultLocatorSettings = {
  patchSize: 'medium',
  halfSample: true,
};

const defaultDecoders = ['code_128_reader'];
// code_128_reader(default )
// ean_reader
// ean_8_reader
// code_39_reader
// code_39_vin_reader
// codabar_reader
// upc_reader
// upc_e_reader
// i2of5_reader
// 2of5_reader
// code_93_reader

const Scanner = ({
  onDetected,
  scannerRef,
  onScannerReady,
  cameraId,
  facingMode,
  constraints = defaultConstraints,
  locator = defaultLocatorSettings,
  numOfWorkers = navigator.hardwareConcurrency || 0,
  decoders = defaultDecoders,
  locate = true,
  buttonForPatientInfo
}) => {
  const errorCheck = useCallback((result) => {
    if (!onDetected) {
      return;
    }
    const err = getMedianOfCodeErrors(result.codeResult.decodedCodes);
    if (err < 0.25) {
      console.log('>>', result.codeResult.code);
      buttonForPatientInfo(result.codeResult.code);
      onDetected(result.codeResult.code);
    }
  }, [onDetected]);

  const handleProcessed = (result) => {
    const drawingCtx = Quagga.canvas.ctx.overlay;
    const drawingCanvas = Quagga.canvas.dom.overlay;
    drawingCtx.font = "24px Arial";
    drawingCtx.fillStyle = 'green';

    if (result) {
      if (result.boxes) {
        drawingCtx.clearRect(0, 0, parseInt(drawingCanvas.getAttribute('width')), parseInt(drawingCanvas.getAttribute('height')));
        result.boxes.filter((box) => box !== result.box).forEach((box) => {
          Quagga.ImageDebug.drawPath(box, { x: 0, y: 1 }, drawingCtx, { color: 'purple', lineWidth: 2 });
        });
      }
      if (result.box) {
        Quagga.ImageDebug.drawPath(result.box, { x: 0, y: 1 }, drawingCtx, { color: 'blue', lineWidth: 2 });
      }
      if (result.codeResult && result.codeResult.code) {
        drawingCtx.font = "24px Arial";
        drawingCtx.fillText(result.codeResult.code, 10, 20);
      }
    }
  };

  useLayoutEffect(() => {
    Quagga.init({
      inputStream: {
        type: 'LiveStream',
        constraints: {
          ...constraints,
          ...(cameraId && { deviceId: cameraId }),
          ...(!cameraId && { facingMode }),
        },
        target: scannerRef.current,
      },
      locator,
      numOfWorkers,
      decoder: { readers: decoders },
      locate,
    }, (err) => {
      Quagga.onProcessed(handleProcessed);

      if (err) {
        return console.log('Error starting Quagga:', err);
      }
      if (scannerRef && scannerRef.current) {
        Quagga.start();
        if (onScannerReady) {
          onScannerReady();
        }
      }
    });
    Quagga.onDetected(errorCheck);
    return () => {
      Quagga.offDetected(errorCheck);
      Quagga.offProcessed(handleProcessed);
      Quagga.stop();
    };
  }, [cameraId, onDetected, onScannerReady, scannerRef, errorCheck, constraints, locator, decoders, locate]);
  return null;
}

Scanner.propTypes = {
  onDetected: PropTypes.func.isRequired,
  scannerRef: PropTypes.object.isRequired,
  onScannerReady: PropTypes.func,
  cameraId: PropTypes.string,
  facingMode: PropTypes.string,
  constraints: PropTypes.object,
  locator: PropTypes.object,
  numOfWorkers: PropTypes.number,
  decoders: PropTypes.array,
  locate: PropTypes.bool,
};

export default Scanner;