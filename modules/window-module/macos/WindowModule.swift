import Expo
import ExpoModulesCore
import React
import React_RCTAppDelegate

public class WindowModule: Module {

    private var windowsMap = [String: NSWindow]()
    internal var moduleNameMap = [NSWindow: String]()
    private var delegateHandler: WindowDelegateHandler?

    public func definition() -> ModuleDefinition {
        Name("WindowModule")
        
        Constants([
            "STYLE_MASK_BORDERLESS": NSWindow.StyleMask.borderless.rawValue,
            "STYLE_MASK_TITLED": NSWindow.StyleMask.titled.rawValue,
            "STYLE_MASK_CLOSABLE": NSWindow.StyleMask.closable.rawValue,
            "STYLE_MASK_MINIATURIZABLE": NSWindow.StyleMask.miniaturizable.rawValue,
            "STYLE_MASK_RESIZABLE": NSWindow.StyleMask.resizable.rawValue,
            "STYLE_MASK_UNIFIED_TITLE_AND_TOOLBAR": NSWindow.StyleMask.unifiedTitleAndToolbar.rawValue,
            "STYLE_MASK_FULL_SCREEN": NSWindow.StyleMask.fullScreen.rawValue,
            "STYLE_MASK_FULL_SIZE_CONTENT_VIEW": NSWindow.StyleMask.fullSizeContentView.rawValue,
            "STYLE_MASK_UTILITY_WINDOW": NSWindow.StyleMask.utilityWindow.rawValue,
            "STYLE_MASK_DOC_MODAL_WINDOW": NSWindow.StyleMask.docModalWindow.rawValue,
            "STYLE_MASK_NONACTIVATING_PANEL": NSWindow.StyleMask.nonactivatingPanel.rawValue
        ])
        
        Events("onWindowClose")
        
        OnCreate {
            delegateHandler = WindowDelegateHandler(module: self)
        }
        
        AsyncFunction("openWindow") { (moduleName: String, options: [String: Any]) in
            // Check if the window for the module already exists
            if let existingWindow = self.windowsMap[moduleName] {
                // If the window exists, bring it to the front
                self.bringWindowToFront(window: existingWindow)
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
            let titlebarAppearsTransparent = windowStyle?["titlebarAppearsTransparent"] as? Bool ?? false
            let screenRect = NSScreen.main?.visibleFrame ?? NSRect.zero
            let originX = (screenRect.width - width) / 2.0
            let originY = (screenRect.height - height) / 2.0

            // Create and configure the new window
            let windowFrame = NSRect(x: originX, y: originY, width: width, height: height)
            let newWindow = NSWindow(contentRect: windowFrame, styleMask: windowStyleMask, backing: .buffered, defer: false)

            guard let provider = NSApp.delegate as? (any ReactNativeFactoryProvider),
                  let factory = provider.factory as? RCTReactNativeFactory,
                  let rootViewFactory = factory.rootViewFactory as? ExpoReactRootViewFactory else {
                NSLog("WindowModule: could not access RCTReactNativeFactory from app delegate")
                return
            }
            let rootView = rootViewFactory.superView(
                withModuleName: moduleName,
                initialProperties: [:],
                launchOptions: [:]
            )
            rootView.frame = NSRect(x: 0, y: 0, width: width, height: height)
            rootView.autoresizingMask = [.width, .height]
            newWindow.contentView = rootView
            self.windowsMap[moduleName] = newWindow
            self.moduleNameMap[newWindow] = moduleName
            
            // Set delegate to intercept window close
            newWindow.delegate = self.delegateHandler
            
            newWindow.titlebarAppearsTransparent = titlebarAppearsTransparent
            newWindow.title = title
            self.updateWindowAppearance(window: newWindow, styleMask: windowStyleMask)
            
            self.bringWindowToFront(window: newWindow)
        }.runOnQueue(.main)
        
        AsyncFunction("closeWindow") { (moduleName: String) in
            if let window = self.windowsMap[moduleName] {
                window.close()
                // self.windowsMap.removeValue(forKey: moduleName)
                // self.moduleNameMap.removeValue(forKey: window)
            }
        }.runOnQueue(.main)
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

// NSWindowDelegate implementation as a separate class that inherits from NSObject
class WindowDelegateHandler: NSObject, NSWindowDelegate {
    weak var module: WindowModule?
    
    init(module: WindowModule) {
        self.module = module
        super.init()
    }
    
    public func windowShouldClose(_ sender: NSWindow) -> Bool {
        // Emit event before window closes
        if let moduleName = module?.moduleNameMap[sender] {
            module?.sendEvent("onWindowClose", [
                "moduleName": moduleName
            ])
        }
        
        // Return true to allow the window to close
        return true
    }
}
