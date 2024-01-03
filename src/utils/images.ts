export const convertShutterSpeed = (shutterSpeed: number) => {
  const denominator = Math.round(1 / shutterSpeed)
  return denominator > 1 ? `1/${denominator}` : `${shutterSpeed}`
}

export const convertExposureMode = (exposureMode: number) => {
  switch (exposureMode) {
    case 0:
      return 'Auto exposure'
    case 1:
      return 'Manual exposure'
    case 2:
      return 'Auto bracket'
    default:
      return 'Unknown'
  }
}

export const convertExposureProgram = (exposureProgram: number) => {
  switch (exposureProgram) {
    case 0:
      return 'Not defined'
    case 1:
      return 'Manual'
    case 2:
      return 'Normal program'
    case 3:
      return 'Aperture priority'
    case 4:
      return 'Shutter priority'
    case 5:
      return 'Creative program'
    case 6:
      return 'Action program'
    case 7:
      return 'Portrait mode'
    case 8:
      return 'Landscape mode'
    default:
      return 'Unknown'
  }
}
