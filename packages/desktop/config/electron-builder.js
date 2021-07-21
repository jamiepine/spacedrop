module.exports = {
  appId: 'co.spacedrop.desktop',
  productName: 'SpaceDrop',
  files: ['build/**/*', "!node_modules", "node_modules/glasstron/**/*"],
  directories: {
    buildResources: 'electron/resources'
  },
  mac: {
    category: 'Productivity',
    extendInfo: {
      LSUIElement: 1,
      LSBackgroundOnly: 1
    }
  },
  asar: false
};
