//
//  FontManager.swift
//  GitBar
//
//  Created by Thomas Lamars on 02/04/2024.
//

import CoreText

public let fontFilenames = [
  "Lato-Black",
  "Lato-BlackItalic",
  "Lato-Bold",
  "Lato-BoldItalic",
  "Lato-Hairline",
  "Lato-HairlineItalic",
  "Lato-Italic",
  "Lato-Light",
  "Lato-LightItalic",
  "Lato-Regular"
]

public func registerFonts(withFilenames fontFilenames: [String]) {
    for filename in fontFilenames {
        guard let fontURL = Bundle.main.url(forResource: filename, withExtension: "ttf") else {
            print("Font file \(filename) not found.")
            continue
        }
        
        guard let fontDataProvider = CGDataProvider(url: fontURL as CFURL) else {
            print("Failed to create data provider for font \(filename).")
            continue
        }
        
        guard let font = CGFont(fontDataProvider) else {
            print("Failed to create font from data provider for font \(filename).")
            continue
        }
        
        var error: Unmanaged<CFError>?
        if !CTFontManagerRegisterGraphicsFont(font, &error) {
            if let error = error?.takeRetainedValue() {
                print("Failed to register font \(filename): \(error)")
            } else {
                print("Failed to register font \(filename) for an unknown reason.")
            }
            continue
        }
        
        print("Font \(filename) registered successfully.")
    }
}
