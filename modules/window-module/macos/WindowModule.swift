import ExpoModulesCore
import React

public class WindowModule: Module {
    
    private var windowsMap = [String: NSWindow]()
    private var bridge: RCTBridge!

    public func definition() -> ModuleDefinition {
        Name("WindowModule")
        
        OnCreate {
            // Get Bridge from RCTBridge -> is also in Appdelegate, but how do we type it
            // let appDelegate = NSApp.delegate
            bridge = RCTBridge.current()
        }
        
        AsyncFunction("openWindow") { (moduleName: String, options: [String: Any]) in
            // Check if the window for the module already exists
            if let existingWindow = windowsMap[moduleName] {
                // If the window exists, bring it to the front
                bringWindowToFront(window: existingWindow)
                return
            }
            
            // Window does not exist, create a new one
            let title = options["title"] as? String ?? moduleName
            let windowStyle = options["windowStyle"] as? [String: Any]
            let windowStyleMask: NSWindow.StyleMask = {
                if let mask = windowStyle?["mask"] as? UInt {
                    return NSWindow.StyleMask(rawValue: mask)
                } else {
                    return [.titled, .closable, .resizable]
                }
            }()
            
            let width = windowStyle?["width"] as? CGFloat ?? 400
            let height = windowStyle?["height"] as? CGFloat ?? 300
            let screenRect = NSScreen.main?.visibleFrame ?? NSRect.zero
            let originX = (screenRect.width - width) / 2.0
            let originY = (screenRect.height - height) / 2.0

            // Create and configure the new window
            let windowFrame = NSRect(x: originX, y: originY, width: width, height: height)
            let newWindow = NSWindow(contentRect: windowFrame, styleMask: windowStyleMask, backing: .buffered, defer: false)
            
            let rootView = RCTRootView(bridge: self.bridge, moduleName: moduleName, initialProperties: nil)
            newWindow.contentView = rootView
            windowsMap[moduleName] = newWindow
            
            newWindow.title = title
            updateWindowAppearance(window: newWindow, styleMask: windowStyleMask)
            
            bringWindowToFront(window: newWindow)
        }.runOnQueue(.main)
        
        AsyncFunction("closeWindow") { (moduleName: String) in
            self.closeWindow(moduleName: moduleName)
        }.runOnQueue(.main)
    }
    
    private func closeWindow(moduleName: String) {
        DispatchQueue.main.async {
            if let window = self.windowsMap[moduleName] {
                window.close()
                self.windowsMap.removeValue(forKey: moduleName)
                if self.windowsMap.isEmpty {
                    NSApp.setActivationPolicy(.accessory)
                }
            }
        }
    }
    
    private func bringWindowToFront(window: NSWindow?) {
        NSApp.activate(ignoringOtherApps: true)
        if !(window?.isKeyWindow ?? false) {
            window?.makeKeyAndOrderFront(nil)
        }
    }
    
    private func updateWindowAppearance(window: NSWindow?, styleMask: NSWindow.StyleMask) {
        if window?.styleMask != styleMask {
            window?.styleMask = styleMask
            window?.display()
        }
    }
}
