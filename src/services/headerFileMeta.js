function getFileMetaFromHeaders(headers) {
  const [date] = headers["date"]
  const [fileType] = headers["content-type"]
  const [fileNameRaw] = headers["content-disposition"]
  const fileName = fileNameRaw.match(/"(.*?)"/)[0].replace(/['|"]/g, "")

  return {
    date,
    fileName,
    fileType
  }
}

export default getFileMetaFromHeaders
