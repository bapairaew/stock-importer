module.exports = excelDate => new Date((excelDate - (25567 + 1))*86400*1000 - (19 * 60 * 60 * 1000))
