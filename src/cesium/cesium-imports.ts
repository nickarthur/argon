export { default as binarySearch } from 'cesium/Source/Core/binarySearch'
export { default as CallbackProperty } from 'cesium/Source/DataSources/CallbackProperty'
export { default as CameraEventAggregator } from 'cesium/Source/Scene/CameraEventAggregator'
export { default as CameraEventType } from 'cesium/Source/Scene/CameraEventType'
export { default as Cartesian2 } from 'cesium/Source/Core/Cartesian2'
export { default as Cartesian3 } from 'cesium/Source/Core/Cartesian3'
export { default as Cartesian4 } from 'cesium/Source/Core/Cartesian4'
export { default as Cartographic } from 'cesium/Source/Core/Cartographic'
export { default as Clock } from 'cesium/Source/Core/Clock'
export { default as ClockStep } from 'cesium/Source/Core/ClockStep'
// export {default as Color} from 'cesium/Source/Core/Color'
export { default as CompositeEntityCollection } from 'cesium/Source/DataSources/CompositeEntityCollection'
export { default as ConstantPositionProperty } from 'cesium/Source/DataSources/ConstantPositionProperty'
export { default as ConstantProperty } from 'cesium/Source/DataSources/ConstantProperty'
// export {default as CzmlDataSource} from 'cesium/Source/DataSources/CzmlDataSource'
export { default as defaultValue } from 'cesium/Source/Core/defaultValue'
export { default as defined } from 'cesium/Source/Core/defined'
// export {default as DataSource} from 'cesium/Source/DataSources/DataSource'
export { default as DeveloperError } from 'cesium/Source/Core/DeveloperError'
export { default as Ellipsoid } from 'cesium/Source/Core/Ellipsoid'
export { default as Entity } from 'cesium/Source/DataSources/Entity'
export { default as EntityCollection } from 'cesium/Source/DataSources/EntityCollection'
export { default as Event } from 'cesium/Source/Core/Event'
export { default as ExtrapolationType } from 'cesium/Source/Core/ExtrapolationType'
export { default as FeatureDetection } from 'cesium/Source/Core/FeatureDetection'
export { default as GeographicProjection } from 'cesium/Source/Core/GeographicProjection'
export { default as HeadingPitchRoll } from 'cesium/Source/Core/HeadingPitchRoll'
export { default as HermitePolynomialApproximation } from 'cesium/Source/Core/HermitePolynomialApproximation'
export { default as JulianDate } from 'cesium/Source/Core/JulianDate'
export { default as CesiumMath } from 'cesium/Source/Core/Math'
export { default as Matrix3 } from 'cesium/Source/Core/Matrix3'
export { default as Matrix4 } from 'cesium/Source/Core/Matrix4'
export { default as OrientationProperty } from 'cesium/Source/DataSources/OrientationProperty'
export { default as PerspectiveFrustum } from 'cesium/Source/Scene/PerspectiveFrustum'
export { default as PerspectiveOffCenterFrustum } from 'cesium/Source/Scene/PerspectiveOffCenterFrustum'
export { default as PositionProperty } from 'cesium/Source/DataSources/PositionProperty'
export { default as Property } from 'cesium/Source/DataSources/Property'
export { default as Quaternion } from 'cesium/Source/Core/Quaternion'
export { default as ReferenceEntity } from 'cesium/Source/DataSources/ReferenceEntity'
export { default as ReferenceFrame } from 'cesium/Source/Core/ReferenceFrame'
export { default as ReferenceProperty } from 'cesium/Source/DataSources/ReferenceProperty'
export { default as SampledPositionProperty } from 'cesium/Source/DataSources/SampledPositionProperty'
export { default as SampledProperty } from 'cesium/Source/DataSources/SampledProperty'
export { default as ScreenSpaceEventHandler } from 'cesium/Source/Core/ScreenSpaceEventHandler'
export { default as ScreenSpaceEventType } from 'cesium/Source/Core/ScreenSpaceEventType'
export { default as Transforms } from 'cesium/Source/Core/Transforms'

export { default as Simon1994PlanetaryPositions } from 'cesium/Source/Core/Simon1994PlanetaryPositions'
export { default as PolylinePipeline } from 'cesium/Source/Core/PolylinePipeline'

//Terrain Tiles
export { default as TerrainProvider } from 'cesium/Source/Core/TerrainProvider'
export { default as throttleRequestByServer } from 'cesium/Source/Core/throttleRequestByServer'
export { default as loadImage } from 'cesium/Source/Core/loadImage'

export { default as WebMercatorTilingScheme } from 'cesium/Source/Core/WebMercatorTilingScheme'
export { default as getImagePixels } from 'cesium/Source/Core/getImagePixels'
export { default as HeightmapTerrainData } from 'cesium/Source/Core/HeightmapTerrainData'
export { default as Credit } from 'cesium/Source/Core/Credit'
export { default as sampleTerrain } from 'cesium/Source/Core/sampleTerrain'


const lut:string[] = []; for (var i=0; i<256; i++) { lut[i] = (i<16?'0':'')+(i).toString(16); }

export function createGuid() { // from http://www.chengxuyuans.com/qa/javascript/88231.html
  var d0 = Math.random()*0xffffffff|0;
  var d1 = Math.random()*0xffffffff|0;
  var d2 = Math.random()*0xffffffff|0;
  var d3 = Math.random()*0xffffffff|0;
  return lut[d0&0xff]+lut[d0>>8&0xff]+lut[d0>>16&0xff]+lut[d0>>24&0xff]+'-'+
    lut[d1&0xff]+lut[d1>>8&0xff]+'-'+lut[d1>>16&0x0f|0x40]+lut[d1>>24&0xff]+'-'+
    lut[d2&0x3f|0x80]+lut[d2>>8&0xff]+'-'+lut[d2>>16&0xff]+lut[d2>>24&0xff]+
    lut[d3&0xff]+lut[d3>>8&0xff]+lut[d3>>16&0xff]+lut[d3>>24&0xff];
}

import './cesium-extensions'
