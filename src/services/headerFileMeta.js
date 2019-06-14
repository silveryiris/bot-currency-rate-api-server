function getFileMetaFromHeaders(headers) {
  //console.log(headers)

  const [date] = headers["date"]
  const [fileType] = headers["content-type"]
  const [fileLength] = headers["content-length"]
  const [fileNameRaw] = headers["content-disposition"]
  const fileName = fileNameRaw.match(/"(.*?)"/)[0].replace(/['|"]/g, "")

  return {
    date,
    fileName,
    fileType,
    fileLength
  }
}

export default getFileMetaFromHeaders
