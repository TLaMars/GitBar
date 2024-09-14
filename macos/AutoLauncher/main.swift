//
//  main.swift
//  AutoLauncher
//
//  Created by Thomas Lamars on 12/09/2024.
//

import Cocoa

let delegate = AutoLauncherAppDelegate()
NSApplication.shared.delegate = delegate
_ = NSApplicationMain(CommandLine.argc, CommandLine.unsafeArgv)
