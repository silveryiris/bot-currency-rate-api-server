function uft8BomRemover(str) {
  if (str.charCodeAt(0) === 0xfeff || str.charCodeAt(0) === 65279) {
    return str.substring(1)
  }
}

export default uft8BomRemover
