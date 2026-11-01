// Makes a web copy of a photo: applies the camera rotation, scales the long side
// down (1800px by default) and writes a JPEG with no metadata (no GPS, camera or time).
// Usage: swift tools/web-photo.swift <input.heic|jpg> <output.jpg> [max-size]
import Foundation
import ImageIO
import UniformTypeIdentifiers

let args = CommandLine.arguments
guard args.count == 3 || args.count == 4,
      let source = CGImageSourceCreateWithURL(URL(fileURLWithPath: args[1]) as CFURL, nil) else {
  fputs("usage: web-photo.swift <input> <output.jpg> [max-size]\n", stderr); exit(1)
}
let maxSize = args.count == 4 ? Int(args[3]) ?? 1800 : 1800
let options: [CFString: Any] = [
  kCGImageSourceCreateThumbnailFromImageAlways: true,
  kCGImageSourceCreateThumbnailWithTransform: true,
  kCGImageSourceThumbnailMaxPixelSize: maxSize,
]
guard let image = CGImageSourceCreateThumbnailAtIndex(source, 0, options as CFDictionary),
      let dest = CGImageDestinationCreateWithURL(URL(fileURLWithPath: args[2]) as CFURL,
                                                 UTType.jpeg.identifier as CFString, 1, nil) else {
  fputs("could not read \(args[1])\n", stderr); exit(1)
}
CGImageDestinationAddImage(dest, image, [kCGImageDestinationLossyCompressionQuality: 0.78] as CFDictionary)
guard CGImageDestinationFinalize(dest) else { fputs("could not write \(args[2])\n", stderr); exit(1) }
