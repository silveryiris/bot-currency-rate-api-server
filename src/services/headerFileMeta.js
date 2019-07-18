function getFileMetaFromHeaders(headers) {
  const [date] = headers["date"]
  const [fileNameRaw] = headers["content-disposition"]
  const fileName = fileNameRaw.match(/"(.*?)"/)[0].replace(/['|"]/g, "")

  return {
    date,
    fileName
  }
}

export default getFileMetaFromHeaders
