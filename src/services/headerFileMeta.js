function getFileMetaFromHeaders(headers) {
  return {
    date: headers["date"],
    fileName: headers["content-disposition"],
    fileType: headers["content-type"],
    fileLength: headers["content-length"]
  }
}

export default getFileMetaFromHeaders
