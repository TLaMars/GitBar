//
//  MMKVStorage.swift
//  GitBar
//
//  Created by Thomas Lamars on 12/09/2024.
//

import Foundation

private let migrationFlagKey = "GitBarMMKVDocumentsMigrationCompleted"

/// Migrates MMKV data from the v2 location (Application Support/<bundle>/mmkv)
/// to the v3 location (Documents/mmkv). v3 hardcodes Documents as the base
/// directory. Runs once, gated by a UserDefaults flag — any pre-existing files
/// at the destination (e.g. an empty default created by a prior v3 launch) are
/// overwritten so real user data wins.
func migrateMMKVToDocumentsIfNeeded() {
  let defaults = UserDefaults.standard
  if defaults.bool(forKey: migrationFlagKey) { return }

  let fileManager = FileManager.default

  guard let bundleIdentifier = Bundle.main.bundleIdentifier,
        let appSupport = NSSearchPathForDirectoriesInDomains(.applicationSupportDirectory, .userDomainMask, true).first,
        let documents = NSSearchPathForDirectoriesInDomains(.documentDirectory, .userDomainMask, true).first
  else { return }

  let oldMMKVDir = ((appSupport as NSString)
    .appendingPathComponent(bundleIdentifier) as NSString)
    .appendingPathComponent("mmkv")
  let newMMKVDir = (documents as NSString).appendingPathComponent("mmkv")

  guard fileManager.fileExists(atPath: oldMMKVDir) else {
    defaults.set(true, forKey: migrationFlagKey)
    return
  }

  guard let items = try? fileManager.contentsOfDirectory(atPath: oldMMKVDir),
        !items.isEmpty else {
    defaults.set(true, forKey: migrationFlagKey)
    return
  }

  try? fileManager.createDirectory(atPath: newMMKVDir, withIntermediateDirectories: true)

  for item in items {
    let src = (oldMMKVDir as NSString).appendingPathComponent(item)
    let dst = (newMMKVDir as NSString).appendingPathComponent(item)
    if fileManager.fileExists(atPath: dst) {
      try? fileManager.removeItem(atPath: dst)
    }
    try? fileManager.copyItem(atPath: src, toPath: dst)
  }

  defaults.set(true, forKey: migrationFlagKey)
}
